import React from 'react';

const Resolve = ({taskResolved}) => {

    console.log(taskResolved)
    return (
        <div className='text-black'>
            <h1 className='text-2xl text-[#8996a1] text-left font-bold'>Resolved Tasks</h1>
            
                 {
            taskResolved.map((tasks)=>(<div className='bg-[#e0e7ff] p-4 m-2'><h1>{tasks}</h1></div>))
           }
     
            
        </div>
    );
};

export default Resolve;

// 