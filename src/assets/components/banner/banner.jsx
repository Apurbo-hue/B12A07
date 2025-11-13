import React from 'react';
import '../../../App.css'
const Banner = ({inProgress,taskResolved}) => {
    return (
        <div className='text-black grid sm:grid-cols-2 gap-4 px-10 py-16'>
            <div className="banner1 rounded-md">
               
                <h1>In-Progress</h1>
                <p>{inProgress}</p>
            </div>

            <div className='banner2 rounded-md'>
                <h1>Resolved</h1>
                <p>{taskResolved.length}</p>
            </div>
        </div>
    );
};

export default Banner;