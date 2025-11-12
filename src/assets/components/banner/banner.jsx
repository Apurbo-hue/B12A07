import React from 'react';
import '../../../App.css'
const Banner = () => {
    return (
        <div className='text-black grid grid-cols-2 gap-4 px-10 py-16'>
            <div className="banner1">
               
                <h1>In-Progress</h1>
                <p>0</p>
            </div>
            
            <div className='banner2'>
                <h1>Resolved</h1>
                <p>0</p>
            </div>
        </div>
    );
};

export default Banner;