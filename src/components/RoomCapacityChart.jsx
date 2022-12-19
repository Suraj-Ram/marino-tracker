import { useTheme } from '@mui/material/styles';
import Title from "./Title"
import { LineChart, Line, Area, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, AreaChart } from 'recharts';
import { rawDatData } from '../rawDayData';

// Generate Sales Data
function createData(time, amount) {
    return { time: time, amount: (amount * Math.random()) };
  }
  
//   const data = [
//     createData('00:00', 0),
//     createData('03:00', 300),
//     createData('06:00', 600),
//     createData('09:00', 800),
//     createData('12:00', 1500),
//     createData('15:00', 2000),
//     createData('18:00', 2400),
//     createData('21:00', 2400),
//     createData('24:00', undefined),
//   ];


  

// Returns an array of objects that represent
// Time in HH:MM -> Count as Integer, per room
function getData() {
    let ret = [] // has time and count fields in each element
    rawDatData.forEach(data => {
        let cleanDataPoint = {}
        cleanDataPoint["time"] = data.time_utc.split(":")[0] + ":" + data.time_utc.split(":")[1]
        cleanDataPoint["amount"] = data.marino_gym_count
        ret.push(cleanDataPoint)
    })
    return ret
}


function RoomCapacityChart() {
    const theme = useTheme()
    const data = getData()
    console.log(data)

  return (
    <>
    <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 16,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
            interval={8}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
            // dataKey="count"
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Count
            </Label>
          </YAxis>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <Area
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            // dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default RoomCapacityChart