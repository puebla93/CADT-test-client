import { render } from '@testing-library/react'
import GlobalConatiner from '../../components/global_container'

describe('GlobalConatiner component tests', () => {
    test('GlobalConatiner matches snapshot', async () => {
        const {container} = render(
            <GlobalConatiner></GlobalConatiner>
        );
        expect(container).toMatchSnapshot();
    });
})
