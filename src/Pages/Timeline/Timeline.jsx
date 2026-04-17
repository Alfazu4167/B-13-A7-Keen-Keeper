import React, { useContext, useEffect, useState } from 'react';
import { TimelineContext } from '../../Context/TImelineContext';
import TimelineCard from '../../Ui/TimelineCard';
import { IoMdArrowDropdown } from 'react-icons/io';

const Timeline = () => {

    const [shortingType, setSortingType] = useState("")
    const { timelines, setTimelines } = useContext(TimelineContext)


    useEffect((shortingType) => {
        if (shortingType) {
            if (shortingType === "time") {
                const sortList = [...timelines].sort((a, b) => b.time.toLocaleDateString() - a.time.toLocaleDateString())
                setTimelines(sortList)
            } else if (shortingType === "date") {
                const sortList = [...timelines].sort((a, b) => a.time.toLocaleTimeString() - b.time.toLocaleTimeString())
                setTimelines(sortList)
            }
        }
    }, [setTimelines, timelines]    )


    return (
        <div className='md:container mx-auto my-15 space-y-5'>
            <h2 className='text-4xl font-bold '>Timeline</h2>
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn m-1 flex gap-2">Filter timeline <IoMdArrowDropdown></IoMdArrowDropdown> </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => setSortingType("time")}><a>Sort by Time</a></li>
                    <li onClick={() => setSortingType("date")}><a>Sort by Date</a></li>

                </ul>
            </div>
            <div className='space-y-5'>
                {
                    timelines.map((timeline, ind) => <TimelineCard key={ind} timeline={timeline}></TimelineCard>)
                }
            </div>

        </div>
    );
};

export default Timeline;