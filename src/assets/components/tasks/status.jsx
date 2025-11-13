import React from 'react';
import Resolve from './resolve';
import { ToastContainer, toast } from 'react-toastify';

const Status = ({taskStatus,taskResolved,setTaskResolved,inProgress,setInProgress,removeProgress}) => {


    const handleRemoveProgress =(task)=>{
        removeProgress(task)
    }
   
    return (
        
        <div className='text-black text-center'>
            <h1 className='text-2xl text-[#8996a1] text-left font-bold'>Task Status</h1>
            {taskStatus.map((task)=>(<div className='p-4 m-2 bg-white'><h1 className='text-lg font-bold'>{task}</h1><button onClick={()=>{setTaskResolved([...taskResolved,task]);toast(task);setInProgress(inProgress-1);handleRemoveProgress(task)}} className='btn w-full bg-[#02a53b] border-0'>complete</button></div>))}

            
        </div>
        
        
    );
};

export default Status;