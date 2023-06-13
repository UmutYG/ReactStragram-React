import '../index.css';

import { NavLink } from 'react-router-dom';
import { useRef } from 'react';

import Input from '../../../components/Input';
import { SubmitPropsAuth } from '../types';

const SignUpForm: React.FC<SubmitPropsAuth> = (props) => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            usernameRef.current &&
            nameRef.current &&
            emailRef.current &&
            passwordRef.current
        ) {
            props.onSubmit({
                username: usernameRef.current.value,
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            });
        }
    };

    return (
        <form onSubmit={submitHandler} className="auth-form">
            <Input
                ref={usernameRef}
                name="username"
                placeholder="Your username"
            />
            <Input ref={nameRef} name="name" placeholder="Your name" />
            <Input ref={emailRef} name={'email'} placeholder="Your email" />
            <Input
                ref={passwordRef}
                name="password"
                type="password"
                placeholder="Password"
            />
            <button
                type="submit"
                className="btn btn--full btn--primary margin-top-sm margin-bottom-md"
            >
                Kaydol
            </button>

            <div className="signup-cta">
                <div className="line"></div>
                <div className="or">YA DA</div>
                <div className="line"></div>
            </div>

            <div className="signup-direct">
                <p className="signup-text">
                    Bir hesaba sahip misin?
                    <strong className="signup-cta-text">
                        <NavLink to="/login">Giriş Yap</NavLink>
                    </strong>
                </p>
            </div>
        </form>
    );
};

export default SignUpForm;
