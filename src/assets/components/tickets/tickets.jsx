import React, { use } from 'react';
import Ticket from './ticket';
import Status from 'daisyui/components/status';
import Resolve from '../tasks/resolve';

const Tickets = ({ ticketPromise, inProgress, setInProgress }) => {

    const tickets = use(ticketPromise)

    return (
        <>
            <div>
                <h1 className='text-black'>Customer Tickets</h1>
                <div className='grid sm:grid-cols-2 gap-8 max-w-7xl mx-auto shadow-base-200-2xl '>
                    {tickets.map((ticket) => <Ticket key={ticket.id} ticket={ticket} inProgress={inProgress} setInProgress={setInProgress}></Ticket>)}
                </div>

            </div>
        </>
    );
};

export default Tickets;