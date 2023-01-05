import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const API_BASE_URL =
  "http://localhost:5001/tracker-231c8/us-central1/test1-myFunc";

export default function MyLine() {
  const [data, setData] = useState([]);

  useEffect(() => { 
    const getData = async () => {
        // const url = API_BASE_URL + "?date=2022-10-28";
        const url = API_BASE_URL + "?date=2022-10-10T04:00:00"
        const f = await fetch(url) 
        const r = await f.json()
        console.table(r)
        setData(r)
    }

    getData()
  }, []);

  return (
    <div>
      hi
      
        
        <LineChart width={700} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time_eastern" hide />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="marino_3rd_floor_weight_count"
            stroke="#000"
          />
        </LineChart>
      
    </div>
  );
}
