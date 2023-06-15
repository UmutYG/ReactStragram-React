import React, { RefObject } from 'react';

interface InputProps {
    class?: string;
    ref?: RefObject<HTMLInputElement>;
    type?: string;
    name: string;
    placeholder?: string;
    onChange?: any;
    onBlur?: any;
    value?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <input
        
        className="auth-input"
        ref={ref}
        type={props.type || 'text'}
        name={props.name}
        placeholder={props.placeholder}
        id={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
    />
));

export default Input;
