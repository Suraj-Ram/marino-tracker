import { Grid } from "@mui/material";
import React from "react";
import CountDisplay from "../components/CountDisplay";
import RoomCapacityChartWrapper from "../components/RoomCapacityChartWrapper";
import { liveCounts } from "../PlaceholderData";

function MarinoToday() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item>
          <Grid container spacing={2}>
            {liveCounts.map((itemProps) => (
              <Grid item xs={12} md={4} lg={3} s>
                <CountDisplay {...itemProps} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
            <RoomCapacityChartWrapper/>
        </Grid>
      </Grid>
    </>
  );
}

export default MarinoToday;
