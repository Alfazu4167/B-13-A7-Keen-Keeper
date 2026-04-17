import React, { useEffect, useState } from 'react';

const useFriends = () => {
    const [loading, setLoading] = useState(true)
    const [friends, setFriends] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("friends.json")
            const data = await res.json();
            setTimeout(() => {

                setFriends(data)
                setLoading(false)
            }, 2500);
        }
        fetchData()
    }, [])


    return { friends, loading }
};

export default useFriends;