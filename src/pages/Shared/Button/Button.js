import React from 'react';

const Button = ({ children }) => {
    return (
        <button className="btn btn-primary capitalize text-white px-10">{children}</button>
    );
};

export default Button;