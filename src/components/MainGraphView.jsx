import React, { useEffect, useState } from "react";
import RoomCapacityChart from "./RoomCapacityChart";
import { getDatapoints, fetchRawData } from "../utils/dataFetching";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import RoomSelect from "./RoomSelect";

import { marinoRooms, marinoRoomsEnum } from "../PlaceholderData";
import { ConstructionOutlined } from "@mui/icons-material";



function MainGraphView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedRoom, setSelectedRoom] = useState(marinoRoomsEnum.cardio.dbCountColName);
  const [rawDayData, setRawDayData] = useState([]);

  useEffect(() => {
    getDayData(selectedDate)
  }, []);

  function getDayData(dateString) {
    // Fetching for timezone is automatically managed here 
    // since dateString includes the user's timezone
    console.log("Requested date for: " + dateString)
    const rd = fetchRawData(dateString)
    rd.then(setRawDayData)
  }

  function handleDateChange(newDate) {
    setSelectedDate(newDate)
    // make request to API and update graphData
    getDayData(newDate)
  }

  return (
    <>
      <div className="flex flex-col justify-start justify-items-center">
        {/* Date picker on change method needs function (String -> ___) */}
        <DatePicker
          className="border border-slate-800 rounded-md"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-mm-dd"
        />
        <RoomSelect
          selected={selectedRoom}
          handleSelect={setSelectedRoom}
        />

        <div className="h-80">
          <RoomCapacityChart data={getDatapoints(rawDayData, selectedRoom)} />
        </div>
      </div>
    </>
  );
}

export default MainGraphView;
