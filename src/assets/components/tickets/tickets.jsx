import React, { use } from 'react';
import Ticket from './ticket';
import Status from 'daisyui/components/status';
import Resolve from '../tasks/resolve';

const Tickets = ({ ticketPromise, inProgress, setInProgress,taskStatus,setTaskStatus }) => {

    const tickets = use(ticketPromise)

    return (
        <>
            <div>
                <h1 className='text-[#8996a1] text-2xl font-black mb-2 sm:pl-12'>CUSTOMER TICKETS</h1>
                <div className='grid sm:grid-cols-2 gap-4 max-w-7xl mx-auto shadow-base-200-2xl '>
                    {tickets.map((ticket) => <Ticket key={ticket.id} taskStatus={taskStatus} setTaskStatus={setTaskStatus} ticket={ticket} inProgress={inProgress} setInProgress={setInProgress}></Ticket>)}
                </div>

            </div>
        </>
    );
};

export default Tickets;