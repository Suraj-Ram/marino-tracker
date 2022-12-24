import React, { useEffect, useState } from "react";
import RoomCapacityChart from "./RoomCapacityChart";
import { getDatapoints, fetchRawData } from "../utils/dataFetching";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import RoomSelect from "./RoomSelect";

import { marinoRooms, marinoRoomsEnum } from "../PlaceholderData";



function MainGraphView() {
  // A Moment.js object that stores the selected date
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [graphData, setGraphData] = useState([]);
  const [rawDayData, setRawDayData] = useState([]);

  useEffect(() => {
    getDayData("2022-10-1")
  }, []);

  function getDayData(dateString) {
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
        <DatePicker
          className="border border-slate-800 rounded-md"
          selected={selectedDate}
          onChange={handleDateChange}
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
