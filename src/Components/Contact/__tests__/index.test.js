import {render, cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact/>);
    });

    it('matches snapshot', () => {
        const {asFragment} = render(<Contact/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Contact component elements are rendered correctly', () => {
    it('renders name, email, message and submit button', () => {
        render(<Contact/>);
        expect(screen.getByTestId('nameLabel')).toHaveTextContent('Name:');
        expect(screen.getByTestId('nameInput')).toBeInTheDocument();
        expect(screen.getByTestId('emailLabel')).toHaveTextContent('Email:');
        expect(screen.getByTestId('emailInput')).toBeInTheDocument();
        expect(screen.getByTestId('messageLabel')).toHaveTextContent('Message:');
        expect(screen.getByTestId('messageTextArea')).toBeInTheDocument();
    });
})