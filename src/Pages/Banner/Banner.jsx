import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto text-center space-y-6 my-10'>
            <h2 className='text-5xl'>
                Friends to keep close in your life
            </h2>
            <p className='text-[#64748b]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <button className='btn bg-[#244d3f] text-white'>+ Add A Friend</button>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-10 mt-4'>
                <div className='shadow-md py-10 px-5'>
                    <h3 className='text-2xl '>10</h3>
                    <p>Total Friends</p>
                </div>
                <div className='shadow-md py-10 px-5'>
                    <h3 className='text-2xl '>3</h3>
                    <p>On track</p>
                </div>
                <div className='shadow-md py-10 px-5'>
                    <h3 className='text-2xl '>6</h3>
                    <p>Need Attention</p>
                </div>
                <div className='shadow-md py-10 px-5'>
                    <h3 className='text-2xl '>12</h3>
                    <p>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;