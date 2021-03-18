import * as React from 'react';

interface IContainerProps {
    children: React.ReactNode;
}

export const Container = (props: IContainerProps) => {
    return <div className="w-11/12 h-auto mx-auto p-8 mb-20 relative">{props.children}</div>;
};

export default Container;
