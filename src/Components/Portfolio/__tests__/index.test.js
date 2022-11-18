import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom';
import Portfolio from '..';

afterEach(cleanup);

describe('Portfolio component', () => {
    it('renders', () => {
        render(<Portfolio />);
    });

    it('matches snapshot', () => {
        const {asFragment} = render(<Portfolio/>);
        expect(asFragment()).toMatchSnapshot();
    });
});