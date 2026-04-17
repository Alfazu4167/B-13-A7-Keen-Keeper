import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import callIcon from "../../assets/call.png"
import textIcon from "../../assets/text.png"
import videoIcon from "../../assets/video.png"
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { IoArchiveOutline, IoCallOutline, IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineMessage } from 'react-icons/md';
import { TimelineContext } from '../../Context/TImelineContext';
import { Bounce, toast } from 'react-toastify';


const FriendDetails = () => {

    const { id } = useParams();
    const friends = useLoaderData();
    const { timelines,
        setTimelines,
        calls,
        texts,
        videos,
        setCalls,
        setTexts,
        setVideos } = useContext(TimelineContext)
    // console.log(timelines);
    // console.log(calls, videos);


    const expectedFriend = friends.find(friend => friend.id == id)
    const { tags, status, days_since_contact, picture, name, bio, email, goal, next_due_date } = expectedFriend
    // console.log(expectedFriend);

    const handleTimeline = (type) => {
        if (type === "Call") {
            setCalls([...calls, type])
            toast.success(`${type} with ${name}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else if (type === "Text") {
            setTexts([...texts, type])
            toast.success(`${type} with ${name}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else if (type === "Video") {
            setVideos([...videos, type])
            toast.success(`${type} with ${name}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        const timelineData = { type: type, time: new Date(), name: name }

        setTimelines([...timelines, timelineData])
        console.log(timelines);
    }
    return (
        <div className='grid md:grid-cols-12 gap-10 my-20 container mx-auto items-center justify-center'>
            <div className='md:col-span-4 space-y-5'>
                <div className='p-5 shadow-md text-center space-y-3 rounded-md'>
                    <div className='rounded-full'>
                        <img src={picture} alt={name} className='mx-auto rounded-full p-4 w-auto h-auto ' />
                    </div>
                    <h2 className='text-3xl'>{name}</h2>

                    <h3 className={` badge ${status === "Overdue" ? "bg-red-500" : ""} ${status === "Almost Due" ? "bg-orange-500" : ""} ${status === "On-Track" ? "bg-[#244d3f]" : ""}`}>{status}</h3>
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
            <div className='row-auto md:col-span-8 space-y-5'>
                <div className='grid grid-cols-3 gap-9'>
                    <div className='shadow-md py-10 px-5 text-center'>
                        <h3 className='text-3xl text-[#244d3f]'>{days_since_contact}</h3>
                        <p className='text-[#64748b] '>Days Since Contact</p>
                    </div>
                    <div className='shadow-md py-10 px-5 text-center'>
                        <h3 className='text-3xl text-[#244d3f]'>{goal}</h3>
                        <p className='text-[#64748b] '>Goal (Days)</p>
                    </div>
                    <div className='shadow-md py-10 px-5 text-center'>
                        <h3 className='text-3xl text-[#244d3f]'>{next_due_date}</h3>
                        <p className='text-[#64748b] '>Next Due</p>
                    </div>

                </div>
                <div className='flex justify-between shadow-md py-10 px-5 grow'>
                    <div className='space-y-3'>
                        <h3 className='text-2xl text-[#244d3f] '>Relationship Goal</h3>
                        <p><span className='text-[#64748b] '>Connect every</span> {goal}</p>
                    </div>
                    <button className='btn'>Edit</button>
                </div>
                <div>
                    <h2 className='text-2xl text-[#244d3f] my-5'>Quick Check-In</h2>
                    <div className='grid grid-cols-3 gap-9'>
                        <div className='btn flex-col py-15 px-5 text-center' role="button" onClick={() => handleTimeline("Call")}>
                            <img src={callIcon} className='w-10' alt="" />
                            <p>Call</p>
                        </div>
                        <div className='btn flex-col py-15 px-5 text-center' onClick={() => handleTimeline("Text")}>
                            <img src={textIcon} className='mx-auto w-12' alt="" />
                            <p>Text</p>
                        </div>
                        <div className='btn flex-col py-15 px-5 text-center' onClick={() => handleTimeline("Video")}>
                            <img src={videoIcon} className='w-12' alt="" />
                            <p>Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;