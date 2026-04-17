import React from 'react';
import useFriends from '../../Hook/useFriends';
import Card from '../../Ui/Card';
import { PropagateLoader } from 'react-spinners';

const Friends = () => {

    const { friends, loading } = useFriends();

    return (
        <div className='container mx-auto my-20'>
            <h2 className='text-2xl mb-5'>Your Friends</h2>
            <div >
                {
                    loading ? <div className='bg-base-300 min-h-[50vh] flex justify-center items-center rounded-md shadow'><PropagateLoader color='#244d3f' /></div>
                        :
                        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 '>
                            {
                            friends.map(friend => <Card key={friend.id} friend={friend}></Card>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Friends;