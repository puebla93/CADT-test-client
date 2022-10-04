import styled from 'styled-components';


const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 48px 0;
`;


const Button = styled.button`
    background-color: ${({disabled}) => (disabled ? '#6b6b6b' : '#00a8b5')};
    border-radius: 24px;
    height: 48px;
    line-height: 24px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: normal;
    padding: 12px 24px;
    border: none;
    text-align: center;
    min-width: 80px;
    cursor: ${({disabled}) => (disabled ? 'initial' : 'pointer')};
    margin-left: 24px;
    
`;


interface InputButtonProps {
    children: React.ReactNode;
    type: string;
    accept: string;
    onChange?: (event: any) => void;
}


const LabelButton = styled.label`
    background-color: #00a8b5;
    border-radius: 24px;
    height: 48px;
    line-height: 24px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: normal;
    padding: 12px 24px;
    margin-right: 24px;
    border: none;
    text-align: center;
    min-width: 80px;
    cursor: pointer;

    > input{display: none !important;}
`;


const InputButton = (props: InputButtonProps): JSX.Element => {
    const {
        type,
        accept,
        children,
        onChange,
    } = props;

    return (
        <LabelButton>
            <input type={type} onChange={onChange} accept={accept} />
            {children}
        </LabelButton>
    );
};


export { ButtonsContainer, Button, InputButton };
