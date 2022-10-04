import { render } from '@testing-library/react'
import Select from '../../components/select'

describe('Select component tests', () => {
    test('Select matches snapshot', async () => {
        const {container} = render(
            <Select></Select>
        );
        expect(container).toMatchSnapshot();
    });
})
