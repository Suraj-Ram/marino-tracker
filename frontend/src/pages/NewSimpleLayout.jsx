import { PrimaryHeading, SecondaryHeading } from "../components/TypoUtils"
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