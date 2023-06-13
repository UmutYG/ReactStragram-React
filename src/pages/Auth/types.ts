export interface LoginReqForm {
    email: string;
    password: string;
}

export interface SignupReqForm {
    username: string;
    name: string;
    email: string;
    password: string;
}

export type AuthReqForm = LoginReqForm | SignupReqForm;

export interface SubmitPropsAuth {
    onSubmit: (formData: LoginReqForm | SignupReqForm) => void;
}
