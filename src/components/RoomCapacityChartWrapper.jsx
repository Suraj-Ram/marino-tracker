import { useState } from "react";
import { marinoRooms } from "../PlaceholderData";
import { marinoRoomsEnum } from "../PlaceholderData";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import RoomCapacityChart from "./RoomCapacityChart";
import { Paper } from "@mui/material";

function RoomCapacityChartWrapper() {
  const [selectedRoom, setSelectedRoom] = useState(marinoRoomsEnum.weightRoom);

  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 400,
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Room</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedRoom}
            label="Room"
            onChange={(event) => setSelectedRoom(event.target.value)}
          >
            <MenuItem value={marinoRoomsEnum.secondFloor}>
              {" "}
              {marinoRoomsEnum.secondFloor}
            </MenuItem>
            <MenuItem value={marinoRoomsEnum.gym}>
              {" "}
              {marinoRoomsEnum.gym}
            </MenuItem>
            <MenuItem value={marinoRoomsEnum.weightRoom}>
              {" "}
              {marinoRoomsEnum.weightRoom}
            </MenuItem>
            <MenuItem value={marinoRoomsEnum.cardio}>
              {" "}
              {marinoRoomsEnum.cardio}
            </MenuItem>
            <MenuItem value={marinoRoomsEnum.track}>
              {" "}
              {marinoRoomsEnum.track}
            </MenuItem>
          </Select>
        </FormControl>
        <RoomCapacityChart />
      </Paper>
    </>
  );
}

export default RoomCapacityChartWrapper;
