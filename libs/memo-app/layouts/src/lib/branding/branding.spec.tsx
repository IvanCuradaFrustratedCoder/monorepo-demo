import React from 'react';
import { render } from '@testing-library/react';

import Branding from './branding';

describe('Branding', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Branding />);
    expect(baseElement).toBeTruthy();
  });
});
