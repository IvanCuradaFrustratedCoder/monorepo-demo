import React from 'react';

import './text.module.css';

/* eslint-disable-next-line */
export interface TextProps {
	type?: string;
	color?: string;
	children: React.ReactNode;
}

export function Text(props: TextProps) {
	const { type, color } = props;
	
	const getTextColor = (color: string | undefined) => {
        switch (color) {
            case 'secondary':
                return 'text-gray-1';
            case 'white': 
                return 'text-white';
            default:
                return 'text-normal';
        }
    };

	switch (type) {
        case 'bold':
            return <h1 className={`font-bold ${getTextColor(color)} w-auto text-sm`}>{props.children}</h1>;
        case 'italic':
            return <h1 className={`font-regular ${getTextColor(color)} italic w-auto text-sm`}>{props.children}</h1>;
        case 'bold-italic':
            return <h1 className={`font-bold ${getTextColor(color)} italic w-auto text-sm`}>{props.children}</h1>;
        case 'innerHTML':
            return (
                <h1
                    className={`font-regular ${getTextColor(color)} w-auto text-sm`}
                    dangerouslySetInnerHTML={{ __html: String(props.children) }}
                ></h1>
            );
        default:
            return <h1 className={`font-regular ${getTextColor(color)} w-auto text-sm`}>{props.children}</h1>;
    }
}

export default Text;
