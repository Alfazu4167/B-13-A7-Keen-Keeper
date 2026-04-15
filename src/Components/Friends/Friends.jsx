import React from 'react';
import useFriends from '../../Hook/useFriends';
import Card from '../../Ui/Card';

const Friends = () => {

    const { friends, loading } = useFriends();
    console.log(friends);
    return (
        <div className='container mx-auto my-20'>
            <h2 className='text-2xl '>Your Friends</h2>
            <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10'>
                {
                    loading ? <h2>Loading.....</h2> :
                        friends.map(friend => <Card key={friend.id} friend={friend}></Card>)
                }
            </div>
        </div>
    );
};

export default Friends;