import { Dispatch } from 'react';

import { LoginReqForm, SignupReqForm } from '../../pages/Auth/types';
import { loadingActions } from '../reducers/LoadingReducer';

export const login =
    (formData: LoginReqForm) => async (dispatch: any) => {
        dispatch(loadingActions.setIsLoggingIn(true));
       
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        console.log(data);

        dispatch(loadingActions.setIsLoggingIn(false));
    };



export const signup = (formData: SignupReqForm) => async (dispatch: any) => {
    dispatch(loadingActions.setIsSigningUp(true));
    
    const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const data = response.json();

    dispatch(loadingActions.setIsSigningUp(false));
};
