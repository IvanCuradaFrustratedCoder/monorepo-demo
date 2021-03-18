import React from 'react';
import { render } from '@testing-library/react';

import NavigationItemWrapper from './navigation-item-wrapper';

describe('NavigationItemWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationItemWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
