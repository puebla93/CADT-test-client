import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home page test', () => {
    test('Home matches snapshot', async () => {
        const { container } = render(<Home />)
        expect(container).toMatchSnapshot()
    });

    test('Home page have images components', () => {
        render(<Home />)

        const images = screen.getAllByRole('img');

        expect(images).toHaveLength(2);
        expect(images[0]).toHaveAttribute('src', '/placeholder.png');
        expect(images[0]).toHaveAttribute('alt', '');
        expect(images[1]).toHaveAttribute('src', '/placeholder.png');
        expect(images[1]).toHaveAttribute('alt', '');
    });

    test('Home page have buttons components', () => {
        render(<Home />)

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
        expect(button).toHaveAttribute('type', 'submit');
    });

    test('Home page have select components', () => {
        render(<Home />)

        const optionEmboss = screen.getByText('Emboss');
        expect(optionEmboss).toBeInTheDocument();
        expect(optionEmboss).toHaveAttribute('value', 'emboss');

        const optionGaussianBlur = screen.getByText('Gaussian Blur');
        expect(optionGaussianBlur).toBeInTheDocument();
        expect(optionGaussianBlur).toHaveAttribute('value', 'gaussianBlur');

        const optionCannyEdge = screen.getByText('Canny Edge');
        expect(optionCannyEdge).toBeInTheDocument();
        expect(optionCannyEdge).toHaveAttribute('value', 'cannyEdge');

        const optionGrayScale = screen.getByText('Gray Scale');
        expect(optionGrayScale).toBeInTheDocument();
        expect(optionGrayScale).toHaveAttribute('value', 'grayScale');
        
        const optionSepia = screen.getByText('Sepia');
        expect(optionSepia).toBeInTheDocument();
        expect(optionSepia).toHaveAttribute('value', 'sepia');
    });
})
