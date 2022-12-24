import { LineChart, Line, Area, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, AreaChart } from 'recharts';
import { rawDatData } from '../rawDayData';

function RoomCapacityChart({ data }) {

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
            // stroke={theme.palette.text.secondary}
            // style={theme.typography.body2}
            interval={8}
          >
            <Label position="insideBottom"
            offset={-6}>Time</Label>
            </XAxis>
          <YAxis
            // stroke={theme.palette.text.secondary}
            // style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                // fill: theme.palette.text.primary,
                // ...theme.typography.body1,
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
            // stroke={theme.palette.primary.main}
            // dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default RoomCapacityChart