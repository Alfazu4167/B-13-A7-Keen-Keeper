import React from 'react';
import { Link } from 'react-router';

const Card = ({ friend }) => {
    const { id, tags, status, days_since_contact, picture, name } = friend;

    const handleStatusColor= (stats)=>{
        if (status=== "Overdue") {
        background: "red"
        }
    }

    return (
        <Link to={`/friends/${id}`} className='p-10 shadow text-center space-y-3'>
            <div className='rounded-full'>
                <img src={picture} alt={name} className='mx-auto rounded-full p-4 w-auto h-auto ' />
            </div>
            <h2 className='text-3xl'>{name}</h2>
            <p className='text-[#64748b]'>{days_since_contact} day ago</p>
            <div className='flex gap-1 justify-center items-center'>
                {
                    tags.map((tag, index) =>
                        <h2 key={index} className='badge bg-[#cbfadb] text-[#244d3f] mr-2 rounded-[100px] font-bold'>{tag}</h2>
                    )
                }
            </div>
            <h3 className="" >{status}</h3>
        </Link>
    );
};

export default Card;