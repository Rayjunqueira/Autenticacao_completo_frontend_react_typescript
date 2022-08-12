import styled from 'styled-components';

export const Container = styled.div `
    align-items: center;
    text-align: center;
    margin-top: 55px;
`;

export const Square = styled.fieldset `
    background-color: #FFF;
    border-radius: 6px;
    padding: 7 30px;
    position:absolute;
    top: 10%;
    left: 40%;
    width: 20px;

    @media (max-width: 300px ) {
        width: 30px;
        top: 16%;
        left: 0%;
        width: 0px;    
    }   
    
    input {
        outline: none;
        font-size: 20px;
        height: 25px;

        @media (max-width: 300px ) {
            font-size: 13px;
        }     
    }
`;

export const Form = styled.form `
    textarea {
        outline: none;
        font-size: 20px;
        height: 50px;
        width: 247px;

        @media (max-width: 300px ) {
            font-size: 13px;
            width: 170px;
        }     
    }

    #error {
        color: red;
        font-size: 14px;
    }
`;

export const LogoContainer = styled.div `
    img {
        height: 100px;
        @media (max-width: 300px ) {
            height: 60px;
        }    
    }
`;

export const Title = styled.p `
    letter-spacing: 0.1rem;
    margin-bottom: 15px;
`
export const ButtonContainer = styled.div `
    margin: 13px;
`;

export const RegisterLink = styled.a `
    cursor: pointer;
    margin: 4px;
`;

