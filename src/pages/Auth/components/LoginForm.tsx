import '../index.css';

import { NavLink } from 'react-router-dom';
import { useRef } from 'react';

import Input from '../../../components/Input';
import { SubmitPropsAuth } from '../types';

const LoginForm: React.FC<SubmitPropsAuth> = (props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (emailRef.current && passwordRef.current) {
            props.onSubmit({
                email: emailRef.current.value,
                password: passwordRef.current.value
            });
        }
    };

    return (
        <form onSubmit={submitHandler} className="auth-form">
            <Input ref={emailRef} name={'email'} placeholder="Your email" />
            <Input
                ref={passwordRef}
                name='password'
                type="password"
                placeholder="Password"
            />

            <button
                type="submit"
                className="btn btn--full btn--primary margin-top-sm margin-bottom-md"
            >
                Giriş Yap
            </button>

            <div className="signup-cta">
                <div className="line"></div>
                <div className="or">YA DA</div>
                <div className="line"></div>
            </div>

            <div className="signup-direct">
                <p className="signup-text">
                    Hesabın yok mu?
                    <strong className="signup-cta-text">
                        <NavLink to="/signup">Kaydol</NavLink>
                    </strong>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;
