import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import useFriends from '../../Hook/useFriends';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { IoArchiveOutline, IoCallOutline, IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineMessage } from 'react-icons/md';


const FriendDetails = () => {

    const { id } = useParams();
    const friends = useLoaderData();
    console.log(friends);
    // console.log(id);
    // const {friends,loading} = useFriends();
    // console.log(friends);
    // if (loading) {
    //     return <h2>Loading...........</h2>
    // }
    const expectedFriend = friends.find(friend => friend.id == id)
    const { tags, status, days_since_contact, picture, name, bio, email, goal, next_due_date } = expectedFriend
    console.log(expectedFriend);
    return (
        <div className='grid grid-cols-12 gap-5 my-20 container mx-auto '>
            <div className='col-span-4 space-y-5'>
                <div className='p-5 shadow-md text-center space-y-3 rounded-md'>
                    <div className='rounded-full'>
                        <img src={picture} alt={name} className='mx-auto rounded-full p-4 w-auto h-auto ' />
                    </div>
                    <h2 className='text-3xl'>{name}</h2>

                    <h3 className="" >{status}</h3>
                    <div className='flex gap-1 justify-center items-center'>
                        {
                            tags.map((tag, index) =>
                                <h2 key={index} className='badge bg-[#cbfadb] text-[#244d3f] mr-2 rounded-[100px] font-bold'>{tag}</h2>
                            )
                        }
                    </div>
                    <p className='text-xl italic text-[#64748B]'>"{bio}"</p>
                    <p className='text-[#64748B]'>Preferred: {email}</p>
                </div>


                <div className='btn w-full'>

                    <p className='text-center flex gap-2 items-center justify-center font-semibold'><RiNotificationSnoozeLine></RiNotificationSnoozeLine> Snooze 2 weeks</p>
                </div>
                <div className='btn w-full'>

                    <p className='text-center flex gap-2 items-center justify-center font-semibold'><IoArchiveOutline />Archive</p>
                </div >
                <div className='btn w-full '>

                    <p className='text-center flex gap-2 items-center justify-center text-red-500 font-semibold'><RiDeleteBinLine></RiDeleteBinLine>Delete</p>
                </div>
            </div>
            <div className='row-auto col-span-8'>
                <div className='grid grid-cols-3 gap-9'>
                    <div className='shadow-md py-10 px-5 text-center'>
                        <h3 className='text-2xl '>{days_since_contact}</h3>
                        <p>Days Since Contact</p>
                    </div>
                    <div className='shadow-md py-10 px-5 text-center'>
                        <h3 className='text-2xl '>{goal}</h3>
                        <p>Goal (Days)</p>
                    </div>
                    <div className='shadow-md py-10 px-5 text-center'>
                        <h3 className='text-2xl '>{next_due_date}</h3>
                        <p>Next Due</p>
                    </div>

                </div>
                <div className='flex justify-between shadow-md py-10 px-5 '>
                    <div className='text-center'>
                        <h3 className='text-2xl '>Relationship Goal</h3>
                        <p><span>Connect every</span> 30 days</p>
                    </div>
                    <button className='btn'>Edit</button>
                </div>
                <div className='grid grid-cols-3 gap-9'>
                    <div className='shadow-md py-10 px-5 text-center'>
                        <IoCallOutline className='mx-auto text-3xl'></IoCallOutline>
                        <p>Next Due</p>
                    </div>
                    <div className='shadow-md py-10 px-5 text-center'>
                         <MdOutlineMessage className='mx-auto text-3xl'></MdOutlineMessage> 
                        <p>Next Due</p>
                    </div>
                    <div className='shadow-md py-10 px-5 text-center'>
                       <IoVideocamOutline className='mx-auto text-3xl'></IoVideocamOutline>
                        <p>Next Due</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;