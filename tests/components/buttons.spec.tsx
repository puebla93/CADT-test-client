import { fireEvent, render } from '@testing-library/react'
import { ButtonsContainer, Button, InputButton } from '../../components/buttons'

describe('Button component tests', () => {
    const buttonText = 'Here goes some text';

    test('Button matches snapshot', async () => {
        const {container} = render(
            <Button>{buttonText}</Button>
        );
        expect(container).toMatchSnapshot();
    });

    test('Button respects onClick', async () => {
        const mockOnClick = jest.fn();
        const {container} = render(
            <Button onClick={mockOnClick}>{buttonText}</Button>
        );
        fireEvent.click(container.firstElementChild);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
    
    test('InputButton matches snapshot', async () => {
        const {container} = render(
            <InputButton type='file' accept='image/png'>{buttonText}</InputButton>
        );
        expect(container).toMatchSnapshot();
    });

    test('ButtonsContainer matches snapshot', async () => {
        const {container} = render(
            <ButtonsContainer></ButtonsContainer>
        );
        expect(container).toMatchSnapshot();
    });
})
