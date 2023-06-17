export const LoginValidate = (values: any) => {
    const errors: any = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters or more';
    }

    return errors;
};

export const SignupValidate = (values: any) => {
    const errors: any = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length < 5) {
        errors.username = 'Must be 5 characters or more';
    }

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length < 2) {
        errors.name = 'Must be 2 characters or more';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters or more';
    }

    return errors;
};
