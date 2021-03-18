import React from 'react';
import NavigationItemWrapper from '../navigation-item-wrapper/navigation-item-wrapper';

import './navigation.module.css';

/* eslint-disable-next-line */
export interface NavItem {
    label: string;
    link: string;
}
export interface NavigationProps {
    items: NavItem[]
}

export const NavigationStyles: React.CSSProperties = {
    height: '80px',
};

export function Navigation(props: NavigationProps) {
    return (
        <div className="flex flex-col md:flex-row items-center invisible md:visible w-11/12 h-auto mx-auto px-8" style={NavigationStyles}>
            <div className="w-5/6 h-full">
                <ol className="w-full h-full flex flex-row">
                    {props.items.map((item, index) => {
                        return <NavigationItemWrapper key={index} label={item.label} link={item.link} />;
                    })}
                </ol>
            </div>
        </div>
    );
}

export default Navigation;
