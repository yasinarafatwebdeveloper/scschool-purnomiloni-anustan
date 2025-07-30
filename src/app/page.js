import Image from "next/image";
import Header from "./banner/page";
import Countdown from "./countDown/page";
import EventSchedule from "./eventSchedule/page";
import Organizers from "./organizers/page";
// import Organizers from "./organizers/page";

export default function Home() {
  return (
  <div>
    {/* <h1>helllo</h1> */}
   
    <Countdown></Countdown>
     <Header></Header>
     <EventSchedule></EventSchedule>
   <Organizers></Organizers>
  </div>
  );
}
