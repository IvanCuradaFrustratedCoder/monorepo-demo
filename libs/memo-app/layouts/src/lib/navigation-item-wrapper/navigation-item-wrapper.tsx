import React from 'react';
import { Link, LinkGetProps } from '@reach/router';

import './navigation-item-wrapper.module.css';
import NavigationActiveItem from '../navigation-active-item/navigation-active-item';
import NavigationInactiveItem from '../navigation-inactive-item/navigation-inactive-item';

/* eslint-disable-next-line */
export interface NavigationItemWrapperProps {
    label: string;
    link: string;
    theme?: string;
}

export function NavigationItemWrapper(props: NavigationItemWrapperProps) {

    const { label, link } = props;
    const [isActive, setIsActive] = React.useState(false);

    const isCurrent = (linkProps: LinkGetProps) => {
        const { isCurrent } = linkProps;
        setIsActive(isCurrent);
        return {};
    };

    switch (props.theme) {
        case 'admin':
            return (
                <Link to={link} getProps={isCurrent} className="w-1/5 h-full flex items-center justify-center">
                    <li className="h-full w-full">
                        {isActive ? <NavigationActiveItem theme={props.theme} label={label} /> : <NavigationInactiveItem label={label} />}
                    </li>
                </Link>
            );
        default:
            return (
                <Link to={link} getProps={isCurrent} className="w-1/5 h-full flex items-center justify-center">
                    <li className="h-full w-full">
                        {isActive ? <NavigationActiveItem label={label} /> : <NavigationInactiveItem label={label} />}
                    </li>
                </Link>
            );
    }
}

export default NavigationItemWrapper;
