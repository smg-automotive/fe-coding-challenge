import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from 'pages';

describe('DummyComponent', () => {
  it('renders the dummy component', () => {
    render(<Home />);

    expect(
      screen.getByText('👋 SMG Automotive frontend coding challenge')
    ).toBeInTheDocument();
  });
});
