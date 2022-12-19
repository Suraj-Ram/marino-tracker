import { useEffect, useState } from "react";
import { marinoRoomsEnum } from "../PlaceholderData";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import RoomCapacityChart from "./RoomCapacityChart";
import { Paper } from "@mui/material";

// Returns an array of objects that represent
// Time in HH:MM -> Count as Integer, per room
function getDatapoints(rawDatData) {
  let ret = []; // has time and count fields in each element
  rawDatData.forEach((data) => {
    let cleanDataPoint = {};
    cleanDataPoint["time"] =
      data.time_utc.split(":")[0] + ":" + data.time_utc.split(":")[1];
    cleanDataPoint["amount"] = data.marino_gym_count;
    ret.push(cleanDataPoint);
  });
  return ret;
}

function RoomSelector({ selectedRoom, handleChange }) {

  return (
    <FormControl>
      <InputLabel>Room</InputLabel>
      <Select
        value={selectedRoom}
        label="Room"
        onChange={handleChange}
      >
        <MenuItem value={marinoRoomsEnum.secondFloor}>
          {" "}
          {marinoRoomsEnum.secondFloor}
        </MenuItem>
        <MenuItem value={marinoRoomsEnum.gym}> {marinoRoomsEnum.gym}</MenuItem>
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
  );
}

function RoomCapacityChartWrapper() {
  const [selectedRoom, setSelectedRoom] = useState(marinoRoomsEnum.weightRoom);
  const [rawData, setRawData] = useState()
  
//   useEffect(async () => {
//     const d = await getCountsData("2022-11-07")
//     const dps = getDatapoints(d)
//     setRawData(dps)

//   }, [])

    const fetchCountsData = () => {
        fetch("http://localhost:5001/tracker-231c8/us-central1/get-getByDate?date=2022-11-10")
            .then(response => {
                return response.json()
            })
              .then(data => {
                const dps = getDatapoints(data)
                console.log(dps)
                setRawData(dps)
            })
    }

    useEffect(() => fetchCountsData, [])



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
        <RoomSelector
          selectedRoom={selectedRoom}
          handleChange={(event) => setSelectedRoom(event.target.value)}
        />

        <RoomCapacityChart data={rawData} />
      </Paper>
    </>
  );
}

export default RoomCapacityChartWrapper;
