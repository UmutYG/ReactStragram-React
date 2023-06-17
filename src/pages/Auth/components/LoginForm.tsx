import '../index.css';

import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';

import ButtonAsync from '../../../components/ButtonAsync';
import Input from '../../../components/Input';
import { LoginValidate } from '../../../util/validation';
import { SubmitPropsAuth } from '../types';

const LoginForm: React.FC<SubmitPropsAuth> = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: LoginValidate,
        onSubmit: (values) => {
            props.onSubmit(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className="auth-form">
            <Input
                name="email"
                placeholder="Your email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <Input
                name="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}

            <ButtonAsync text="Giriş Yap" />

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
