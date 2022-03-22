import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import _capitalize from "lodash/capitalize";

// Components
import TrendChart from "../../components/TrendChart";

// Constants
import { labelMapping } from "./constants";

// Utils
import { formatNumber } from "../../utils/common";
import { getTotalStats, getTodayStats, getTrendsData } from "./utils";

// Services
import { getStatistics, getTrends } from "../../services/covid";

// Hooks
import useWindowDimensions from "../../hooks/useDimensions";

const Stats = () => {
  const windowDimensions = useWindowDimensions();
  const [data, setData] = useState();

  useEffect(() => {
    (async function fetchData() {
      const [stats, trends] = await Promise.all([getStatistics(), getTrends()]);
      setData({ stats, trends });
    })();
  }, []);

  if (!data) {
    return null;
  }

  const totalStats = getTotalStats(data.stats);
  const todayStats = getTodayStats(data.stats);

  const trendsData = getTrendsData(data.trends);

  return (
    <Box padding="1rem">
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
      <Box display="flex" justifyContent="center" marginTop="2rem">
        <TrendChart data={trendsData} width={windowDimensions.width} />
      </Box>
    </Box>
  );
};

export default Stats;
