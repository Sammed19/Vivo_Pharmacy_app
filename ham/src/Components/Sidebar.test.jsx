import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

// Mock assets (as they might not be imported in the test environment)
jest.mock('../assets/hamburgermenu/search.svg', () => 'search.svg');
jest.mock('../assets/hamburgermenu/VivoHealthlogo.png', () => 'VivoHealthlogo.png');
jest.mock('../assets/hamburgermenu/Me.svg', () => 'Me.svg');
jest.mock('../assets/hamburgermenu/Home.png', () => 'Home.png');
jest.mock('../assets/hamburgermenu/Rx.png', () => 'Rx.png');
jest.mock('../assets/hamburgermenu/Pharmacy.svg', () => 'Pharmacy.svg');
jest.mock('../assets/hamburgermenu/Mybenefits.png', () => 'Mybenefits.png');
jest.mock('../assets/hamburgermenu/Pharmacylocation.png', () => 'Pharmacylocation.png');
jest.mock('../assets/hamburgermenu/Aboutapp.png', () => 'Aboutapp.png');
jest.mock('../assets/hamburgermenu/Accountsettings.png', () => 'Accountsettings.png');
jest.mock('../assets/hamburgermenu/Communicationpreferances.png', () => 'Communicationpreferances.png');
jest.mock('../assets/hamburgermenu/Helpsupport.svg', () => 'Helpsupport.svg');
jest.mock('../assets/hamburgermenu/downarrow.svg', () => 'downarrow.svg');

describe('Sidebar Component', () => {
  it('renders the sidebar with primary links', () => {
    render(<Sidebar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Rx')).toBeInTheDocument();
    expect(screen.getByText('Find Care')).toBeInTheDocument();
    expect(screen.getByText('Me')).toBeInTheDocument();
    expect(screen.getByText('Pharmacy')).toBeInTheDocument();
  });

  it('renders the sidebar with secondary links', () => {
    render(<Sidebar />);
    expect(screen.getByText('My Benefits')).toBeInTheDocument();
    expect(screen.getByText('Pharmacy Location')).toBeInTheDocument();
    expect(screen.getByText('Communication Preferences')).toBeInTheDocument();
  });

  it('toggles the "Account Settings" dropdown correctly', () => {
    render(<Sidebar />);

    // Dropdown before toggle
    const dropdown = screen.getByText('Account Settings');
    expect(screen.queryByText('Patient Account')).not.toBeInTheDocument();

    // Click to open dropdown
    fireEvent.click(dropdown);
    expect(screen.getByText('Patient Account')).toBeInTheDocument();
    expect(screen.getByText('Language change')).toBeInTheDocument();

    // Click to close dropdown
    fireEvent.click(dropdown);
    expect(screen.queryByText('Patient Account')).not.toBeInTheDocument();
  });

  it('toggles the "Help and Support" dropdown correctly', () => {
    render(<Sidebar />);

    // Dropdown before toggle
    const dropdown = screen.getByText('Help and Support');
    expect(screen.queryByText('Contact Us')).not.toBeInTheDocument();

    // Click to open dropdown
    fireEvent.click(dropdown);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('More help')).toBeInTheDocument();

    // Click to close dropdown
    fireEvent.click(dropdown);
    expect(screen.queryByText('Contact Us')).not.toBeInTheDocument();
  });

  it('renders the Vivo Health logo', () => {
    render(<Sidebar />);
    const logo = screen.getByAltText('Vivo Health Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'VivoHealthlogo.png');
  });

  it('renders all icons for the sidebar items', () => {
    render(<Sidebar />);

    // Check if specific icons are rendered
    const homeIcon = screen.getByAltText('Home');
    const pharmacyIcon = screen.getByAltText('Pharmacy');
    expect(homeIcon).toHaveAttribute('src', 'Home.png');
    expect(pharmacyIcon).toHaveAttribute('src', 'Pharmacy.svg');
  });
});
