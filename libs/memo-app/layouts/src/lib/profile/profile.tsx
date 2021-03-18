import React from 'react';
import ProfileInitials from '../profile-initials/profile-initials';
import ProfilePicture from '../profile-picture/profile-picture';
import Text from '../text/text';

import './profile.module.css';

/* eslint-disable-next-line */
export interface ProfileProps {
    user: any;
    theme?: string;
}

export function Profile(props: ProfileProps) {
	const { displayName, photoURL } = props.user;
    switch (props.theme) {
        case 'admin':
            return (
                <div className="flex flex-row items-center">
                    <div className="p-2 hidden md:flex flex-row">
                        <div className="dropdown">
                            <button className="flex text-white flex-row items-center">
                                <Text color="white">{displayName}</Text>
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
        default:
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
}

export default Profile;
