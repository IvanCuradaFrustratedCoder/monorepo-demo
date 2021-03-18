import * as React from 'react';
import PropTypes from 'prop-types';

interface IContainerProps {
    children: React.ReactNode;
}

const Container: React.FunctionComponent<IContainerProps> = (props) => {
    return <div className="w-11/12 h-auto mx-auto p-8 pt-48 mb-20">{props.children}</div>;
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;
