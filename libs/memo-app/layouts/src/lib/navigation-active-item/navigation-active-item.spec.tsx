import React from 'react';
import { render } from '@testing-library/react';

import NavigationActiveItem from './navigation-active-item';

describe('NavigationActiveItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationActiveItem />);
    expect(baseElement).toBeTruthy();
  });
});
