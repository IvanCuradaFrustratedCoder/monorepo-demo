import * as React from 'react';

interface ISubtitleProps {
	type?: string;
	children: React.ReactNode;
}

export const Subtitle = (props: ISubtitleProps) => {
	const { type } = props;
	switch (type) {
		case 'secondary':
			return <h1 className="font-regular text-gray-1 w-auto text-base">{props.children}</h1>;

		default:
			return <h1 className="font-regular text-normal w-auto text-base">{props.children}</h1>;
	}
};


export default Subtitle;
