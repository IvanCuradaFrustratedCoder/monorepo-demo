import React from 'react';
import { render } from '@testing-library/react';

import ProfilePicture from './profile-picture';

describe('ProfilePicture', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfilePicture />);
    expect(baseElement).toBeTruthy();
  });
});
