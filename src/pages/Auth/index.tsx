import './index.css';

import AuthForm from './components/AuthForm.jsx';

interface AuthPageProps {
    mode: 'login' | 'signup'
}
const AuthPage: React.FC<AuthPageProps> = (props) => {
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
                            src="/src/assets/img/logo.png"
                            alt="ReactStagram logo"
                        />
                        <AuthForm mode={props.mode}/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AuthPage;
