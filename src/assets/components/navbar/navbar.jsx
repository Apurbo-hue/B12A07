import React from 'react';

const Navbar = () => {
    return (
        <>

            <div className="navbar flex flex-col sm:flex-row  bg-white shadow-sm text-black px-10">
                <div className="sm:navbar-start">
                    <p className='font-bold py-4 sm:p-0'>CS-Ticket System</p>
                </div>

                <div className="navbar-end sm:flex sm:flex-row flex-col  gap-6">
                    <h1>Home</h1>
                    <h1>FAQ</h1>
                    <h1>Changelog</h1>
                    <h1>Blog</h1>
                    <h1>Download</h1>
                    <h1>Contact</h1>
                    <a className="btn border-0 bg-linear-to-r from-[#713ae7] to-[#9e61f2]">+ New Ticket</a>
                </div>
            </div>

        </>
    );
};

export default Navbar;