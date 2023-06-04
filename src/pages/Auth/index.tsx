import './index.css';

import AuthForm from './components/AuthForm.jsx';

const AuthPage: React.FC = () => {
    return (
        <main className="main">
            <section className="section-auth">
                <div className="container auth-container">
                    <img
                        className="auth-img"
                        src="src/assets/img/auth.jpg"
                        alt="ReactJS code on the screen"
                    />
                    <div className="auth-column-right">
                        <img
                            className="logo"
                            src="img/logo.png"
                            alt="ReactStagram logo"
                        />
                        <AuthForm />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AuthPage;
