import React from 'react';
import { render } from '@testing-library/react';

import ProfileInitials from './profile-initials';

describe('ProfileInitials', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileInitials />);
    expect(baseElement).toBeTruthy();
  });
});
