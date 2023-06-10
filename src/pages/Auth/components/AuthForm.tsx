import '../index.css';

import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

import { AppDispatch } from '../../../store';
import { LoadingReducerState } from '../../../store/reducers/LoadingReducer';
import { RootState } from '../../../store/reducers';
import { login, signup } from '../../../store/actions/auth';

interface AuthFormProps {
    mode: 'login' | 'signup';
}

const AuthForm: React.FC<AuthFormProps> = (props) => {
    console.log(props.mode);

    const usernameRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch<AppDispatch>();
    const isLogginIn = useSelector(
        (state: RootState) => state.loading.isLoggingIn
    );
    const isSigningUp = useSelector(
        (state: RootState) => state.loading.isSigningUp
    );

    const navigate = useNavigate();

    const submitHandler = async () => {
        if (props.mode === 'login') {
            dispatch(
                login(emailRef.current!.value, passwordRef.current!.value)
            );
        } else if (props.mode === 'signup') {
            dispatch(
                signup(
                    usernameRef.current!.value,
                    nameRef.current!.value,
                    emailRef.current!.value,
                    passwordRef.current!.value
                )
            );
        }

        // navigate('/');
    };

    return (
        <form action="#" className="auth-form">
            {props.mode === 'signup' && (
                <>
                    <input
                        ref={usernameRef}
                        className="auth-input"
                        type="username"
                        name="username"
                        id="username"
                        placeholder="Your username"
                    />
                    <input
                        ref={nameRef}
                        className="auth-input"
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Your name"
                    />
                </>
            )}
            <input
                ref={emailRef}
                className="auth-input"
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
            />
            <input
                ref={passwordRef}
                className="auth-input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
            />

            <button
                onClick={submitHandler}
                className="btn btn--full btn--primary margin-top-sm margin-bottom-md"
            >
                {isLogginIn || isSigningUp ? (
                    <img
                        className="loading-gif"
                        src="/src/assets/gif/loading.gif"
                        alt="Loading Gif"
                    />
                ) : props.mode === 'login' ? (
                    'Giriş Yap'
                ) : (
                    'Kaydol'
                )}
            </button>

            <div className="signup-cta">
                <div className="line"></div>
                <div className="or">YA DA</div>
                <div className="line"></div>
            </div>

            <div className="signup-direct">
                <p className="signup-text">
                    {props.mode === 'login'
                        ? ' Hesabın yok mu?'
                        : 'Bir hesaba sahip misin?'}
                    <strong className="signup-cta-text">
                        {props.mode === 'login' ? (
                            <NavLink to="/signup">Kaydol</NavLink>
                        ) : (
                            <NavLink to="/login">Giriş Yap</NavLink>
                        )}
                    </strong>
                </p>
            </div>
        </form>
    );
};

export default AuthForm;
