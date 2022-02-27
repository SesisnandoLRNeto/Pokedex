import { render } from '@testing-library/react';
import Home from '../../pages/index';

describe('Home', () => {
  const homeComponent = render(<Home />);
  it('should be renderized', () => {
    expect(homeComponent).toBeTruthy();
  });

  it('should have a list of pokemon', () => {
    const ul = homeComponent.findByTestId('pokemon-list');
    expect(ul).toBeDefined();
  });
});
