import '../index.css';

import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const navigate = useNavigate();
    const loginHandler = () => {
        navigate('/');
    };
    return (
        <form action="#" className="auth-form">
            <input
                className="auth-input"
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
            />
            <input
                className="auth-input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
            />

            <button
                onClick={loginHandler}
                className="btn btn--full margin-top-sm"
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
                        <a href="main-page.html">Kaydol</a>
                    </strong>
                </p>
            </div>
        </form>
    );
};

export default AuthForm;
