import RoomCapacityChart from "../components/RoomCapacityChart"
import { TypographyUtils } from "@mui/material/styles/createTypography"
import { PrimaryHeading, SecondaryHeading } from "../components/TypoUtils"
import CountDisplay from "../components/CountDisplay"
import MyDatePicker from "../components/MyDatePicker"
import MainGraphView from "../components/MainGraphView"

function NewSimpleLayout() {



  return (
    <div className="container mx-auto">
    <PrimaryHeading text="Recreation Tracker 👟"/>
    <SecondaryHeading text="🔢 Live Counts"/>
    Add live counts here
    <SecondaryHeading text="📊 Day Trend"/>

    <MainGraphView/>

    </div>
  )
}

export default NewSimpleLayout