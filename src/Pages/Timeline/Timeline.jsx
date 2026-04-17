import React, { useContext, useState } from 'react';
import { TimelineContext } from '../../Context/TImelineContext';
import TimelineCard from '../../Ui/TimelineCard';
import { IoMdArrowDropdown } from 'react-icons/io';

const Timeline = () => {

    const [filteredType, setFilteredType] = useState("all");
    const { timelines } = useContext(TimelineContext);

    const filteredList = timelines.filter((item) => {
        if (filteredType === "all") {
            return true
        }
        if (item.type.toLowerCase() === filteredType.toLocaleLowerCase()) {
            return true;
        } else {
            return false
        }
    });


    return (
        <div className='md:container mx-auto my-15 space-y-5'>
            <h2 className='text-4xl font-bold '>Timeline</h2>
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn m-1 flex gap-2">Filter timeline <IoMdArrowDropdown></IoMdArrowDropdown> </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => setFilteredType("call")}><a>Filter by Call</a></li>
                    <li onClick={() => setFilteredType("text")}><a>Filter by Text</a></li>
                    <li onClick={() => setFilteredType("video")}><a>Filter by Video</a></li>

                </ul>
            </div>
            <div className='space-y-5'>
                {
                    timelines.length === 0 ? <div className='bg-base-300 min-h-[50vh] flex justify-center items-center rounded-md shadow'>
                        <h2 className='text-3xl font-bold text-center text-slate-400'>Timeline history is empty</h2>
                    </div> :

                        filteredList.map((timeline, ind) => <TimelineCard key={ind} timeline={timeline}></TimelineCard>)
                }
            </div>

        </div>
    );
};

export default Timeline;