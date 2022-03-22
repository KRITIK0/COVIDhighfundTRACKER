import _pick from 'lodash/pick'
import _keys from 'lodash/keys'

import { totalFilters, todayFilters, monthNames } from "./constants";

export const getTotalStats = (data) => _pick(data, totalFilters);

export const getTodayStats = (data) => _pick(data, todayFilters);

export const getTrendsData = (data) => {
    const {cases, deaths, recovered} = data;
    const allKeys = _keys(cases);

    const tempMap = new Map();

    allKeys.forEach(key => {
        const date = new Date(key);
        const name = `${monthNames[date.getMonth()]} ${date.getFullYear().toString().slice(2)}`;
        const c = cases[key];
        const d = deaths[key];
        const r = recovered[key];
        
        if(name in tempMap){
            const oldData = tempMap.get(name);
            const newData = {
                cases : oldData.cases + c,
                deaths : oldData.deaths + d,
                recovered : oldData.recovered + r,
            }
            
            tempMap.set(name, newData);
        } else {
            const data = {
                cases :  c,
                deaths :  d,
                recovered :  r,
            }
            tempMap.set(name, data);
        }
    });

    const allLabels = Array.from(tempMap.keys())

    return allLabels.reduce((acc, curr) => {
        const data = tempMap.get(curr);
        return [...acc, {name: curr, ...data}]
    }, [])
}