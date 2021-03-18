import React from 'react';
import ProfileInitials from '../profile-initials/profile-initials';
import ProfilePicture from '../profile-picture/profile-picture';
import Text from '../text/text';

import './profile.module.css';

/* eslint-disable-next-line */
export interface ProfileProps {
	user: any;
}

export function Profile(props: ProfileProps) {
	const { displayName, photoURL } = props.user;

	return (
		<div className="flex flex-row items-center">
            <div className="p-2 hidden md:flex flex-row">
                <div className="dropdown">
                    <button className="flex flex-row items-center">
                        <Text>{displayName}</Text>
                        {photoURL ? (
                            <ProfilePicture photoURL={photoURL} />
                        ) : (
                            <ProfileInitials initials={displayName[0]} />
                        )}
                    </button>
                </div>
            </div>
        </div>
	);
}

export default Profile;
