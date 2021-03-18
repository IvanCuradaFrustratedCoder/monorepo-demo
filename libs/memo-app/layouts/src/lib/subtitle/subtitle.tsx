import * as React from 'react';
import PropTypes from 'prop-types';

interface ISubtitleProps {
	type?: string;
	children: React.ReactNode;
}

const Subtitle: React.FunctionComponent<ISubtitleProps> = (props) => {
	const { type } = props;
	switch (type) {
		case 'secondary':
			return <h1 className="font-regular text-gray-1 w-auto text-base">{props.children}</h1>;

		default:
			return <h1 className="font-regular text-normal w-auto text-base">{props.children}</h1>;
	}
};

Subtitle.propTypes = {
	type: PropTypes.string,
	children: PropTypes.node,
};

export default Subtitle;
