import React, { useEffect, useState } from 'react';

const useFriends = () => {
    const [loading, setLoading] = useState(true)
    const [friends, setFriends] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("friends.json")
            const data = await res.json();
            setFriends(data)
            setLoading(false)
        }
        fetchData()
    }, [])
   

    return { friends, loading }
};

export default useFriends;