import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Home from './index';

describe('Home', () => {
  beforeEach(() => render(<Home />));

  const homeComponent = render(<Home />);

  it('should be renderized', () => {
    expect(homeComponent).toBeTruthy();
  });

  it('should display pokedex on the screen', () => {
    const pokedex = homeComponent.getByTestId('pokedex');
    expect(pokedex).toBeInTheDocument();
  });

  it('should display on the screen the pokemon details', () => {
    const screenToShowDetails = homeComponent.getByTestId('screen');
    expect(screenToShowDetails).toBeInTheDocument();
  });
});
