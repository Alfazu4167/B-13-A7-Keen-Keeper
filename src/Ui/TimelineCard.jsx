import React from 'react';
import callIcon from "../assets/call.png"
import textIcon from "../assets/text.png"
import videoIcon from "../assets/video.png"

const TimelineCard = ({ timeline }) => {
    const { name, time, type } = timeline;
    const date = time.toLocaleDateString();
    const localTime = time.toLocaleTimeString()

    return (
        <div className=' shadow-md p-2 space-y-1 rounded-md flex items-center gap-2' >

            {type === "Call" && <img src={callIcon} alt="" />}
            {type === "Text" && <img src={textIcon} alt="" />}
            {type === "Video" && <img src={videoIcon} alt="" />}



            <div>
                <h2><span className=' font-semibold'>{type}</span> <span className='text-[#64748b]'>with {name}</span></h2>
                <p>{date} at {localTime}</p>
            </div>
        </div>
    );
};

export default TimelineCard;
