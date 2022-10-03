import styled from 'styled-components';

const ImageConatiner = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 48px;
    > img {
        max-width: 45%;
        flex: 1;
    }
`;

export default ImageConatiner;
