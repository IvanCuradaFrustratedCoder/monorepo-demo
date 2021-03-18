import React from 'react';
import { render } from '@testing-library/react';

import NavigationInactiveItem from './navigation-inactive-item';

describe('NavigationInactiveItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationInactiveItem />);
    expect(baseElement).toBeTruthy();
  });
});
