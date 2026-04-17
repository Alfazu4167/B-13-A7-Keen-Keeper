import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContext } from '../../Context/TImelineContext';


const Stats = () => {
    const { calls, texts, videos } = useContext(TimelineContext)
    

    const data = [
        { name: "Calls", value: calls.length, fill: '#244d3f' },
        { name: "Texts", value: texts.length, fill: '#7f37f5' },
        { name: "Video", value: videos.length, fill: '#37a163' },

    ];
    return (
        <div className='max-w-11/12 mx-auto my-5'>
            <h2 className='text-3xl font-semibold'>Friendship Analytics</h2>
            <div className=' shadow p-10 rounded-md border border-slate-300 my-15 max-w-11/12 mx-auto'>
                <h2 className='text-xl font-semibold text-[#244d3f]'>By Interaction Type</h2>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, margin: "auto" }} responsive>
//       <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend></Legend>
                    <Tooltip></Tooltip>
                    <toolbar></toolbar>
                </PieChart>
            </div>
        </div>
    );
};

export default Stats;



