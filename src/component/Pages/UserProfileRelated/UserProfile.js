import React from 'react';
import InstagramFeed from '../../Middle/ContentView/ContentView';
import EditProfile from './EditProfile';

const UserProfile = () => {
    return (

        <div className="flex bg-gray-100 px-8">
            <div className="w-1/6 bg-gray-700 p-4 overflow-y-auto rounded-xl">
                
            </div>
            <div className="w-3/6 bg-gray-500 p-4 overflow-y-auto rounded-xl">
                <InstagramFeed/>
            </div>
            <div className="w-3/6 bg-gray-700 p-4 sticky top-0 rounded-xl">
               <EditProfile/>
            </div>
        </div>

    );
};

export default UserProfile;