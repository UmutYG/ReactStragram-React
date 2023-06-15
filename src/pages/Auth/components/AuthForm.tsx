import '../index.css';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';
import { AppDispatch } from '../../../store';
import { AuthReqForm } from '../types';
import { login, signup } from '../../../store/actions/auth';

interface AuthFormProps {
    mode: 'login' | 'signup';
}

const AuthForm: React.FC<AuthFormProps> = (props) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const submitHandler = async (formData: AuthReqForm) => {
        if ('username' in formData) {
            await dispatch(signup(formData));
        } else {
            await dispatch(login(formData));
        }
        // do login or signup depends on formData
        navigate('/');
    };

    return (
        <>
            {props.mode === 'signup' && <SignUpForm onSubmit={submitHandler} />}
            {props.mode === 'login' && <LoginForm onSubmit={submitHandler} />}
        </>
    );
};

export default AuthForm;
