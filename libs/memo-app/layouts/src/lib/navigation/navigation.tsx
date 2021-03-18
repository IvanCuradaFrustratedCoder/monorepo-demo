import React from 'react';
import NavigationItemWrapper from '../navigation-item-wrapper/navigation-item-wrapper';

import './navigation.module.css';

/* eslint-disable-next-line */
export interface NavItem {
    label: string;
    link: string;
}
export interface NavigationProps {
    items: NavItem[],
    theme?: string;
}

export const NavigationStyles: React.CSSProperties = {
    height: '80px',
};

export function Navigation(props: NavigationProps) {
    switch (props.theme) {
        case 'admin':
            return (
                <div className="w-full bg-blue-adminLight">
                    <div className="flex flex-col md:flex-row items-center md:visible w-11/12 h-auto mx-auto px-8" style={NavigationStyles}>
                        <div className="w-5/6 h-full">
                            <ol className="w-full h-full flex flex-row">
                                {props.items.map((item, index) => {
                                    return <NavigationItemWrapper theme={props.theme} key={index} label={item.label} link={item.link} />;
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
            );
        default:
            return (
                <div className="w-full bg-blue-dark">
                    <div className="flex flex-col md:flex-row items-center md:visible w-11/12 h-auto mx-auto px-8" style={NavigationStyles}>
                        <div className="w-5/6 h-full">
                            <ol className="w-full h-full flex flex-row">
                                {props.items.map((item, index) => {
                                    return <NavigationItemWrapper key={index} label={item.label} link={item.link} />;
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
            );
    }
}

export default Navigation;
