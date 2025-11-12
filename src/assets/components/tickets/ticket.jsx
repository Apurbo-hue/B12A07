import React from 'react';

const Ticket = ({ticket,inProgress,setInProgress}) => {

    console.log(ticket)


    return (
        <div onClick={()=>setInProgress(inProgress+1)} className='text-black p-4 rounded-sm shadow-md'>
           <div className='flex justify-between'>
             <h1 className='font-bold'>{ticket.title}</h1>
            <p className={`${ticket.status==='Open'?'text-green-700 bg-green-400':'text-yellow-800 bg-amber-200'} rounded p-1`}>{ticket.status}</p>
           </div>
            <p>{ticket.description}</p>

            <div className='flex justify-between'>
                <div className='flex sm:flex-row flex-col  justify-between gap-4'>
                    <h1 className='text-[#8996a1]'>#00{ticket.id}</h1>
                    <h1 className={ticket.priority==='High'?'text-red-700':ticket.priority==='Medium'?'text-amber-300':ticket.priority==='Low'?'text-green-500':''}>{ticket.priority}</h1>
                </div>
                <div className='flex sm:flex-row flex-col  justify-between gap-4'>
                    <h1 className='text-[#8996a1]'>{ticket.customer}</h1>
                    <h1 className='text-[#8996a1]'>{ticket.createdAt}</h1>
                </div>
            </div>
            
           </div>
    );
};

export default Ticket;