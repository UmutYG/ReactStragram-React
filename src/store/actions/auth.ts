import { Dispatch } from 'react';

import { loadingActions } from '../reducers/LoadingReducer';

interface LoginParams {
    email: string;
    password: string;
}

export const login =
    (email: string, password: string) => async (dispatch: any) => {
        dispatch(loadingActions.setIsLoggingIn(true));
        const params: LoginParams = {
            email: email,
            password: password
        };
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        const data = await response.json();

        console.log(data);

        dispatch(loadingActions.setIsLoggingIn(false));
    };

interface SignupParams {
    username: string;
    name: string;
    email: string;
    password: string;
}

export const signup =
    (username: string, name: string, email: string, password: string) =>
    async (dispatch: any) => {
        dispatch(loadingActions.setIsSigningUp(true));
        const params: SignupParams = {
            username,
            name,
            email,
            password
        };
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        const data = response.json();

        dispatch(loadingActions.setIsSigningUp(false))
    };
