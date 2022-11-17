import {render, cleanup, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Nav from '..';

// Mocks of props passed to the Nav component
const mockNavLinks = [
    {
        name:'About Me'
    },
    {
        name:'Portfolio',
    },
    {
        name:'Contact'
    },
    {
        name:'Resume'
    }
];
const mockCurrentNavLink = jest.fn();
const mockSetCurrentNavLink = jest.fn();

// Cleaning up the memory after each test
afterEach(cleanup);

// Test
describe('Nav component', () => {
    it('renders', () => {
        render(
            <Nav navLinks={mockNavLinks} currentNavLink={mockCurrentNavLink} setCurrentNavLink={mockSetCurrentNavLink}></Nav>
        );
    });

    it('matches the snapshot', () => {
        const {asFragment} = render(
            <Nav navLinks={mockNavLinks} currentNavLink={mockCurrentNavLink} setCurrentNavLink={mockSetCurrentNavLink}></Nav>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('contains the nav bar brand header', () => {
        render(
            <Nav navLinks={mockNavLinks} currentNavLink={mockCurrentNavLink} setCurrentNavLink={mockSetCurrentNavLink}></Nav>
        );
        expect(screen.getByTestId('navBarHeader')).toHaveTextContent('Shantanu Mazumder');
    });

    it('contains About Me, Portfolio, Contact and Resume nav links', () => {
        render(
            <Nav navLinks={mockNavLinks} currentNavLink={mockCurrentNavLink} setCurrentNavLink={mockSetCurrentNavLink}></Nav>
        );
        expect(screen.getByTestId('navLink-0')).toHaveTextContent('About Me');
        expect(screen.getByTestId('navLink-1')).toHaveTextContent('Portfolio');
        expect(screen.getByTestId('navLink-2')).toHaveTextContent('Contact');
        expect(screen.getByTestId('navLink-3')).toHaveTextContent('Resume');
    })
})