import { render } from '@testing-library/react'
import ImageContainer from '../../components/image_container'

describe('ImageContainer component tests', () => {
    test('ImageContainer matches snapshot', async () => {
        const {container} = render(
            <ImageContainer></ImageContainer>
        );
        expect(container).toMatchSnapshot();
    });
})
