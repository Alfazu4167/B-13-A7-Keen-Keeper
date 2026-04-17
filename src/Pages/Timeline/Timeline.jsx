import React, { useContext } from 'react';
import { TimelineContext } from '../../Context/TImelineContext';
import TimelineCard from '../../Ui/TimelineCard';
import { IoMdArrowDropdown } from 'react-icons/io';

const Timeline = () => {
    const { timelines } = useContext(TimelineContext)
    // console.log(timeline.);
    return (
        <div className='md:container mx-auto my-15 space-y-5'>
            <h2 className='text-4xl font-bold '>Timeline</h2>
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn m-1 flex gap-2">Filter timeline <IoMdArrowDropdown></IoMdArrowDropdown> </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Sort by Date</a></li>
                    <li><a>Sort by Name</a></li>

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