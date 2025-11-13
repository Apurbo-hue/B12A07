import React, { Suspense, useState } from "react";
import './App.css'
import Footer from './assets/components/footer/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './assets/components/navbar/navbar'
import Banner from "./assets/components/banner/banner";
import Tickets from "./assets/components/tickets/tickets";
import Status from "./assets/components/tasks/status";
import Resolve from "./assets/components/tasks/resolve";
import { ToastContainer} from 'react-toastify';


const ticketPromise = fetch('./../public/ticket.json').then(res => res.json())

function App() {
  const [inProgress, setInProgress] = useState(0)
  const [taskStatus, setTaskStatus] = useState([])
  const [taskResolved, setTaskResolved]=useState([])

  return (
    <>

      <Navbar></Navbar>

      <Banner taskResolved={taskResolved} inProgress={inProgress}></Banner>

      <div className="max-full px-10 grid sm:grid-cols-5">
        <div className="col-span-4 w-full">
          <Suspense>
            <Tickets taskStatus={taskStatus} setTaskStatus={setTaskStatus} inProgress={inProgress} setInProgress={setInProgress} ticketPromise={ticketPromise}></Tickets>
          </Suspense>
        </div>
        <div className="col-span-1 text-center border">
          <Status taskResolved={taskResolved} setTaskResolved={setTaskResolved} taskStatus={taskStatus}></Status>
          <Resolve taskResolved={taskResolved}></Resolve>
        </div>
      </div>

      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
