import '../index.css';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import { AppDispatch } from '../../../store';
import { RootState } from '../../../store/reducers';
import { login } from '../../../store/actions/auth';

const AuthForm = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const isLogginIn = useSelector(
        (state: RootState) => state.loading.isLoggingIn
    );

    const dispatch = useDispatch<AppDispatch>();

    const navigate = useNavigate();
    const loginHandler = async () => {
        dispatch(login(emailRef.current!.value, passwordRef.current!.value));
        // navigate('/');
    };
    return (
        <form action="#" className="auth-form">
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
                onClick={loginHandler}
                className="btn btn--full btn--primary margin-top-sm"
            >
                {!isLogginIn ? 'Giriş Yap' : '...'}
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
                        <a href="main-page.html">Kaydol</a>
                    </strong>
                </p>
            </div>
        </form>
    );
};

export default AuthForm;
