import React, { useState, useEffect } from "react";

// Components
import LineChart from "../../components/TrendChart";

const TrendStats = () => {
  const [data, setData] = useState();

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      const data = await response.json();
      setData(data);
    })();
  }, []);

  if(!data){
      return null;
  }

  return (
    <div>
      <p>Following is the trend of number of infection of covid</p>
      <LineChart data={data}/>
    </div>
  );
};

export default TrendStats;

