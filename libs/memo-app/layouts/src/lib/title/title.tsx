import * as React from 'react';

interface ITitleProps {
    type?: string;
    color?: string;
    children: React.ReactNode;
}

export const Title = (props: ITitleProps) =>  {
    const { type, color } = props;
    const getTextColor = (color: string | undefined) => {
        switch (color) {
            case 'secondary':
                return 'text-gray-1';
            default:
                return 'text-display';
        }
    };
    switch (type) {
        case 'h1':
            return <h1 className={`font-bold ${getTextColor(color)} w-auto text-3xl`}>{props.children}</h1>;
        case 'h2':
            return <h1 className={`font-bold ${getTextColor(color)} w-auto text-2xl`}>{props.children}</h1>;
        case 'h3':
            return <h1 className={`font-bold ${getTextColor(color)} w-auto text-xl`}>{props.children}</h1>;
        case 'h4':
            return <h1 className={`font-bold ${getTextColor(color)} w-auto text-lg`}>{props.children}</h1>;
        default:
            return <h1 className={`font-bold ${getTextColor(color)} w-auto text-4xl`}>{props.children}</h1>;
    }
};

export default Title;
