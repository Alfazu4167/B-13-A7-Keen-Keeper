import React, { useState } from 'react';
import { TimelineContext } from './TImelineContext';

const TimelineProvider = ({ children }) => {
    const [timelines, setTimelines] = useState([]);
    const [calls, setCalls] = useState([]);
    const [texts, setTexts] = useState([]);
    const [videos, setVideos] = useState([]);


    
    
    const data = {

        timelines,
        calls,
        texts,
        videos,
        setTimelines,
        setCalls,
        setTexts,
        setVideos,
    }

    return <TimelineContext.Provider value={data}>
        {children}
    </TimelineContext.Provider>
};

export default TimelineProvider;