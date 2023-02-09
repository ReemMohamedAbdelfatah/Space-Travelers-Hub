import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Profile = () => (
  <div>
    <h1>MyProfile</h1>
  </div>
);

describe('MyProfile', () => {
  test('render React component', () => {
    render(<Profile />);
    expect(screen.getByText('MyProfile')).toBeInTheDocument();
  });
});