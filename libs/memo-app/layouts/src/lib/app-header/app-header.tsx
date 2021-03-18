import React from 'react';
import Branding from '../branding/branding';
import Profile from '../profile/profile';

import './app-header.module.css';

/* eslint-disable-next-line */
export interface AppHeaderProps {
	theme?: string;
	logo: string;
	logoAlt: string;
	user: any;
	children?: React.ReactNode;
}

export const appHeaderStyles: React.CSSProperties = {
    height: '80px',
    boxShadow: '0px 3px 16px #0000003C',
};

export function AppHeader(props: AppHeaderProps) {
  switch (props.theme) {
    case 'admin': 
		return (
			<div className="bg-blue-adminDark text-white items-center px-4 flex justify-between" style={appHeaderStyles}>
				<Branding logo={props.logo} alt={props.logoAlt}/>
				<Profile theme={props.theme} user={props.user} />
			</div>
		);
    default:
		return (
			<div className="bg-white items-center px-4 flex justify-between" style={appHeaderStyles}>
				<Branding logo={props.logo} alt={props.logoAlt}/>
				<Profile user={props.user} />
			</div>
		); 
  };
}

export default AppHeader;
