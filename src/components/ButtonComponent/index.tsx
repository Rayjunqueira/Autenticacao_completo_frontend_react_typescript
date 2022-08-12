import React, { ChangeEvent } from 'react';
import * as C from './styles';

type ButtonComponentType = {
    text: string;
    type?: "button" | "submit" | "reset" | undefined
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonComponent = ({ text, type, onClick }: ButtonComponentType) => {
  return (
    <C.ButtonContainer type={type} onClick={onClick}>
        {text}
    </C.ButtonContainer>
  )
}

export default ButtonComponent