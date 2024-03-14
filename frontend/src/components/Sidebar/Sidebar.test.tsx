import { describe, it, expect } from 'vitest';
import Sidebar from './Sidebar';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Sidebar component', () => {
  it('Should render the Flow logo', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const logoText = screen.getByText(/flo/i);
    const logoImg = screen.getByAltText(/flow thumbnail logo/i);
    expect(logoText).toBeInTheDocument();
    expect(logoImg).toBeInTheDocument();
  });

  it("Should render an 'All' link item", () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const sidebarItem = screen.getByText(/all/i);
    expect(sidebarItem).toBeInTheDocument();
  });
});
