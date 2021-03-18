import React from 'react';

import './app-header.module.css';

/* eslint-disable-next-line */
export interface AppHeaderProps {
  theme?: string;
}

export const appHeaderStyles: React.CSSProperties = {
    height: '80px',
    boxShadow: '0px 3px 16px #0000003C',
};

export function AppHeader(props: AppHeaderProps) {
  switch (props.theme) {
    case 'admin': 
      return (
        <div>
          <h1>Welcome to app-header!</h1>
        </div>
      );
    default:
      return (
        <div className="bg-white items-center px-4 flex justify-between" style={appHeaderStyles}>
          <h1>Welcome to app-header!</h1>
        </div>
      ); 
  };
}

export default AppHeader;
