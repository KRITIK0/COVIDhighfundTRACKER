import React, { useState, useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import _capitalize from "lodash/capitalize";

// Components
import TrendChart from "../../components/TrendChart";
import BarChart from "../../components/BarChart";
import Footer from "../../components/Footer"

// Constants
import { labelMapping } from "./constants";

// Utils
import { formatNumber } from "../../utils/common";
import { getTotalStats, getTodayStats, getTrendsData, getStatsByCountriesData } from "./utils";

// Services
import { getStatistics, getStatsByCountries, getTrends } from "../../services/covid";

const Stats = () => {
  const [data, setData] = useState();

  useEffect(() => {
    (async function fetchData() {
      const [stats, trends, statsByCountries] = await Promise.all([getStatistics(), getTrends(), getStatsByCountries()]);
      setData({ stats, trends, statsByCountries });
    })();
  }, []);

  if (!data) {
    return null;
  }

  const totalStats = getTotalStats(data.stats);
  const todayStats = getTodayStats(data.stats);

  const trendsData = getTrendsData(data.trends);
  const statsByCountries = getStatsByCountriesData(data.statsByCountries);

  return (
    <Box>
      <Box textAlign="center">
        <Text fontWeight="500" fontSize="18px">
          Total Statistics
        </Text>
      </Box>
      <Box
        display="flex"
        gap="0.5rem"
        flexWrap="wrap"
        justifyContent="space-around"
        marginTop="1rem"
        fontWeight="400"
        p="1rem"
      >
        {Object.keys(totalStats).map((key) => (
          <Box
            key={key}
            padding="1rem"
            backgroundColor="brand.tertiary"
            borderRadius="4px"
            minWidth="200px"
            color="brand.primary"
            textAlign="center"
          >
            <Text fontWeight="500">{_capitalize(key)}</Text>
            <Text>{formatNumber(data.stats[key])}</Text>
          </Box>
        ))}
      </Box>
      <Box textAlign="center" marginTop="1rem">
        <Text fontWeight="600" fontSize="18px">
          Today Statistics
        </Text>
      </Box>
      <Box
        display="flex"
        gap="0.5rem"
        flexWrap="wrap"
        justifyContent="space-around"
        marginTop="1rem"
        fontWeight="400"
        p="1rem"
      >
        {Object.keys(todayStats).map((key) => (
          <Box
            key={key}
            padding="1rem"
            backgroundColor="brand.tertiary"
            borderRadius="4px"
            minWidth="200px"
            color="brand.primary"
            textAlign="center"
          >
            <Text fontWeight="500">{labelMapping[key]}</Text>
            <Text>{formatNumber(data.stats[key])}</Text>
          </Box>
        ))}
      </Box>
      <Box textAlign="center" marginTop="2rem">
        <Text fontWeight="600" fontSize="18px">
          Overall Trends
        </Text>
      </Box>
      <Flex marginTop="2rem" p="1rem" justifyContent="center" width="100%" height="500px">
        <TrendChart data={trendsData} />
      </Flex>
      <Box textAlign="center" marginTop="2rem">
        <Text fontWeight="600" fontSize="18px">
          Cases by Countries (Top 20)
        </Text>
      </Box>
      <Flex marginTop="2rem" p="1rem" justifyContent="center" width="100%" height="500px">
        <BarChart data={statsByCountries} />
      </Flex>
      <Footer/>
    </Box>
  );
};

export default Stats;
