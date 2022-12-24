import React, { useEffect, useState } from "react";
import RoomCapacityChart from "./RoomCapacityChart";
import { getDatapoints, fetchRawData } from "../utils/dataFetching";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import RoomSelect from "./RoomSelect";

import { marinoRooms } from "../PlaceholderData";

function MainGraphView() {
  // A Moment.js object that stores the selected date
  const [selectedDate, setSelectedDate] = useState(null);
  const [graphData, setGraphData] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(marinoRooms[0]);

  useEffect(() => {
    // do things!!
    const rd = fetchRawData("2022-11-06");
    rd.then((r) => {
      setGraphData(getDatapoints(r, "squash_4th_floor_count"));
    });

    // rd.then(r => console.log(r))
    // console.log(rd)

    // const dPts = getDatapoints(rd, "squash_4th_floor_count")
    // setGraphData(dPts)
  }, []);

  return (
    <>
      <div className="flex flex-col justify-start justify-items-center">
        <DatePicker
          className="border border-slate-800 rounded-md"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
        <RoomSelect
          options={marinoRooms}
          selected={selectedRoom}
          handleSelect={setSelectedRoom}
        />

        <div className="h-80">
          <RoomCapacityChart data={graphData} />
        </div>
      </div>
    </>
  );
}

export default MainGraphView;
