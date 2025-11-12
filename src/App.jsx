import React, { Suspense, useState } from "react";
import './App.css'
import Footer from './assets/components/footer/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './assets/components/navbar/navbar'
import Banner from "./assets/components/banner/banner";
import Tickets from "./assets/components/tickets/tickets";
import Main from "./assets/components/main/main";
import Status from "./assets/components/tasks/status";
import Resolve from "./assets/components/tasks/resolve";


const ticketPromise = fetch('./../public/ticket.json').then(res => res.json())

function App() {
  const [inProgress, setInProgress] = useState(0)

  return (
    <>

      <Navbar></Navbar>

      <Banner inProgress={inProgress}></Banner>

      <div className="max-full px-10 grid sm:grid-cols-4">
        <div className="col-span-3 w-full">
          <Suspense>
            <Tickets inProgress={inProgress} setInProgress={setInProgress} ticketPromise={ticketPromise}></Tickets>
          </Suspense>
        </div>
        <div className="col-span-1 text-center border">
          <Status></Status>
          <Resolve></Resolve>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
