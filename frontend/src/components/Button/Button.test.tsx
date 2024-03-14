import { describe, it, expect } from 'vitest';
import Button from './Button';
import { render, screen } from '@testing-library/react';

describe('Button component', () => {
  it("Should render a button with text if 'label' prop is passed", () => {
    render(<Button label="Test" handleClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/test/i);
  });

  it("Should render a button with an image if 'icon' prop is passed", () => {
    render(
      <Button icon={{ path: 'test.jpg', alt: 'Test' }} handleClick={() => {}} />
    );
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
  });
});
