import React from 'react';
import { dpContainerStyle, dpStyle } from '../profile-picture/profile-picture';

import './profile-initials.module.css';

/* eslint-disable-next-line */
export interface ProfileInitialsProps {
	initials: string;
}

export function ProfileInitials(props: ProfileInitialsProps) {
	return (
		<div className="m-4 cursor-pointer" style={dpContainerStyle}>
            <div className="bg-blue-dark flex items-center justify-center" style={dpStyle}>
                <p className="font-bold text-white text-md">{props.initials}</p>
            </div>
        </div>
	);
}

export default ProfileInitials;
