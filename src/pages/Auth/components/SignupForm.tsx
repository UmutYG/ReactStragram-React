import '../index.css';

import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';

import Input from '../../../components/Input';
import { SignupValidate } from '../../../util/validation';
import { SubmitPropsAuth } from '../types';

const SignUpForm: React.FC<SubmitPropsAuth> = (props) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            name: '',
            email: '',
            password: ''
        },
        validate: SignupValidate,
        onSubmit: (values) => {
            props.onSubmit(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className="auth-form">
            <Input
                name="username"
                placeholder="Your username"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
            ) : null}
            <Input
                name="name"
                placeholder="Your name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
            ) : null}
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
