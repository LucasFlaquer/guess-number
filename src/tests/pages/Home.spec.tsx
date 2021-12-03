import { render, screen, fireEvent } from '@testing-library/react';

import Home from '../../pages';

describe('Home', () => {
  it('renders correctly', () => {
    render(<Home value={10} error="" />);
    expect(screen.getByText('Qual é o Número?')).toBeInTheDocument();
  });

  it('renders error', () => {
    const { container } = render(<Home value={502} error="Error" />);
    expect(screen.getByText('ERRO')).toBeInTheDocument();
    expect(container.querySelectorAll('svg')).toHaveLength(3);
  });

  it('make a try', () => {
    const { container } = render(<Home value={100} error="" />);
    const input = container.querySelector('input');
    const button = screen.getByText('Enviar');
    if (!input) throw new Error('Input not found');
    fireEvent.change(input, { target: { value: '50' } });
    fireEvent.click(button);
    expect(container.querySelectorAll('svg')).toHaveLength(2);
  });
});
