import styled from "styled-components";

export const ButtonContainer = styled.button `
    font-size: 20px;
    outline: none;
    cursor: pointer;
    letter-spacing: 0.1rem;
    width: 260px;
    margin: 5px;
    background-color: #066a75;
    border: none;
    color: #FFF;
    height: 30px;

    @media (max-width: 280px ) {
        width: 160px;
    }
`;