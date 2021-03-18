import React from 'react';

import './navigation-inactive-item.module.css';

/* eslint-disable-next-line */
export interface NavigationInactiveItemProps {
    label: string;
}

export function NavigationInactiveItem(props: NavigationInactiveItemProps) {
    return (
        <div className=" h-full w-full px-4 py-2 cursor-pointer flex flex-row justify-center items-center text-sm text-white font-regular">
            {props.label}
        </div>
    );
}

export default NavigationInactiveItem;
