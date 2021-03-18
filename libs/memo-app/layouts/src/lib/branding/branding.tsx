import React from 'react';

import './branding.module.css';

/* eslint-disable-next-line */
export interface BrandingProps {
  logo: string;
  alt: string;
};

const logoStyles: React.CSSProperties = {
  width: '115px',
};

export function Branding(props: BrandingProps) {
  return (
    <div className="my-4 mx-6">
        <img src={props.logo} style={logoStyles} alt="Memo App" />
    </div>
  );
}

export default Branding;
