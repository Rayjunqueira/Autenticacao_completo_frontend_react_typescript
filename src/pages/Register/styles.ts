import styled from "styled-components";

export const RegisterContainer = styled.div `
    align-items: center;
    text-align: center;        
`;

export const Form = styled.form`
    input {
        outline: none;
        font-size: 20px;
        height: 25px;
    
        @media (max-width: 300px ) {
            font-size: 13px;
        }    
    }

    #error {
        color: red;
        font-size: 14px;
    }
`;

export const Square = styled.fieldset `
    background-color: #FFF;
    border-radius: 6px;
    padding: 7 30px;
    position:absolute;
    top: 5%;
    left: 40%;
    width: 20px;

    @media (max-width: 300px ) {
        width: 30px;
        top: 5%;
        left: 0%;
        width: 0px;
        margin: 8px;    
    }    
`

export const Container = styled.div `
    align-items: center;
    text-align: center;
    margin-top: 55px;
`;

export const LogoContainer = styled.div `
    img {
        height: 110px;

        @media (max-width: 300px ) {
            height: 70px;
        }    
    }
`;

export const Title = styled.p `
    letter-spacing: 0.1rem;
`
export const ButtonContainer = styled.div `
    margin: 13px;
`;

export const RegisterLink = styled.a `
    cursor: pointer;
    margin: 4px;
`;

