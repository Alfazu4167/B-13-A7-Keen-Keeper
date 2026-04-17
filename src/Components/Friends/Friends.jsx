import React from 'react';
import useFriends from '../../Hook/useFriends';
import Card from '../../Ui/Card';
import { PropagateLoader } from 'react-spinners';

const Friends = () => {

    const { friends, loading } = useFriends();

    return (
        <div className='container mx-auto my-20'>
            <h2 className='text-2xl mb-5'>Your Friends</h2>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 '>
                {
                    loading ? <PropagateLoader color='#244d3f' className='flex justify-center items-center' />
                        :
                        friends.map(friend => <Card key={friend.id} friend={friend}></Card>)
                }
            </div>
        </div>
    );
};

export default Friends;