// import Home from './task2/Home';
// import About from './task2/About';
// import Contact from './task2/Contact';
// import CalculateScore from './task3/CalculateScore';
// import Posts from './task4/Posts';
// import CohortDetails from './task5/CohortDetails';
import { BrowserRouter,Route,Routes,Link,Navigate } from "react-router-dom";
import Home from "./task6/Home";
import TrainerDetails from "./task6/TrainerDetails";
import TrainersList from "./task6/TrainersList";
import OnlineShopping from "./task7/OnlineShopping";
import CountPeople from "./task8/CountPeople";
import ListofPlayers from "./task9/ListofPlayers";
import IndianPlayers from "./task9/IndianPlayers";
import OfficeSpace from "./task10/OfficeSpace";
import EventExamples from "./task11/EventExamples";
import CurrencyConvertor from "./task11/CurrencyConvertor";
import TicketBooking from "./task12/TicketBooking";
import Blogger from "./task13/Blogger";
import EmployeeManagement from "./task14/EmployeeManagement";

function App() {
  // let flag = false;
  // if(flag){
  //   return(
  //     <div>
  //       <ListofPlayers/>
  //     </div>
  //   )
  // }
  // else{
  //   return(
  //     <div>
  //       <IndianPlayers/>
  //     </div>
  //   )
  // }
  // return (
  //   <BrowserRouter>
  //   <div className='container'>
  //       <Home/>
  //       <About/>
  //       <Contact/>
  //       <CalculateScore name={"Manu"} school={"CVR"} total={300} goal={3} />
  //       <Posts/>
  //       <CohortDetails cohort={{
  //         currentStatus: "Ongoing",
  //         cohortCode: 1021,
  //         technology: "tech",
  //         startDate: "01-10-2026",
  //         coachName: "Manu",
  //         trainerName: "Akki"
  //       }}/>
        
  //       <nav>
  //         <h1>Cognizant Academy</h1>
  //         <Link to='/'>
  //           Home
  //         </Link> {'|'}
  //         <Link to='trainers'>
  //           Trainers
  //         </Link>
  //       </nav>
  //         <hr/>

  //         <Routes>
  //           <Route path="/" element={<Home/>}/>
  //           <Route path="/trainers" element={<TrainersList/>}/>
  //           <Route path="/trainers/:id" element={<TrainerDetails />}/>
  //         </Routes>

  //         <OnlineShopping/>

  //         <CountPeople/>
  //   </div>
  //   </BrowserRouter>


  // );
  return(
    <div>
      {/* <OfficeSpace/>
      <EventExamples/>
      <hr/>
      <CurrencyConvertor/>
      <TicketBooking/>
      <Blogger/> */}
      <EmployeeManagement/>
    </div>
  )
}

export default App;
