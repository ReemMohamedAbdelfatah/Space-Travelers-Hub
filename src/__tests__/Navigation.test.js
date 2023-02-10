import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';

it('The Navigation should render correctly!', () => {
  const navigation = render(
    <Router>
      <Navigation />
    </Router>,
  );
  expect(navigation).toMatchSnapshot();
});
