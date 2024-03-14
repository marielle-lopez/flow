import { describe, it, expect } from 'vitest';
import Checkbox from './Checkbox';
import { render, screen } from '@testing-library/react';

describe('Checkbox component', () => {
  it('Should be checked if isChecked prop is true', () => {
    render(<Checkbox handleChange={() => {}} isChecked={true} />);
    const checkbox = screen.getByRole('checkbox', { checked: true });
    expect(checkbox).toBeInTheDocument();
  });

  it('Should be unchecked if isChecked prop is false', () => {
    render(<Checkbox handleChange={() => {}} isChecked={false} />);
    const checkbox = screen.getByRole('checkbox', { checked: false });
    expect(checkbox).toBeInTheDocument();
  });
});
