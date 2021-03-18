import React from 'react';

import './profile-picture.module.css';

/* eslint-disable-next-line */
export interface ProfilePictureProps {
    photoURL: string;
}

export const dpContainerStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    position: 'relative',
    overflow: 'hidden',
};

export const dpStyle: React.CSSProperties = {
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    translate: 'translate(-50%, -50%)',
};

export function ProfilePicture(props: ProfilePictureProps) {
    const { photoURL } = props;
    return (
        <div className="m-4 cursor-pointer" style={dpContainerStyle}>
            <img style={dpStyle} src={photoURL} alt="Your profile picture" />
        </div>
    );
}

export default ProfilePicture;
