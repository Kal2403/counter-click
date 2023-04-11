import React from "react";
import '../styles/Button.css'

function Button({ text, isButtonClick, handlerClick }) {
    return (
        <button
            className={ isButtonClick ? 'button-click' : 'button-reset' }
            onClick={ handlerClick } >
            {text}
        </button>
    );
}

export default Button;