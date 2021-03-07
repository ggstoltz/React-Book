/* eslint-disable react/jsx-no-undef */
import React from 'react';

function Button({ onClick, children}) {

    return (

        <button onClick={onClick} className='btn-primary'>{children}</button>
    );
}

export default Button