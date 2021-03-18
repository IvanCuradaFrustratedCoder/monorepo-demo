import React from 'react';

import './navigation-active-item.module.css';

/* eslint-disable-next-line */
export interface NavigationActiveItemProps {
    label: string;
}

export const ActiveButton: React.CSSProperties = {
    height: '92px',
};

export const Triangle: React.CSSProperties = {
    position: 'relative',
    top: '0px',
    borderStyle: 'solid',
    borderWidth: '12px 12px 0px 12px',
    borderColor: '#5492C6 transparent transparent transparent',
};


export function NavigationActiveItem(props: NavigationActiveItemProps) {
    return (
        <div className="h-full w-full flex flex-col items-center" style={ActiveButton}>
            <div className="w-full h-full px-4 py-2 cursor-pointer flex justify-center items-center text-sm font-bold text-white bg-blue">
                {props.label}
            </div>
            <div className="" style={Triangle}></div>
        </div>
    );
}

export default NavigationActiveItem;
