import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import Resume from '..';

afterEach(cleanup);

describe('Resume component', () => {
    it('renders', () => {
        render(<Resume/>);
    });

    it('matches snapshot', () => {
        const {asFragment} = render(<Resume/>);
        expect(asFragment()).toMatchSnapshot();
    });
});