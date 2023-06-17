import { LoginReqForm, SignupReqForm } from '../../pages/Auth/types';
import { ResponseModal } from '../../models/types';
import { loadingActions } from '../reducers/LoadingReducer';
import { setToken } from '../reducers/AuthReducer';

export const login =
    (formData: LoginReqForm) => async (dispatch: any) => {
        dispatch(loadingActions.setIsLoggingIn(true));
       
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if(!response.ok) {
            console.log(response);
            return;
        }

        const responseJson = await response.json() as ResponseModal;


        console.log(responseJson);
        dispatch(setToken(responseJson.data));
        dispatch(loadingActions.setIsLoggingIn(false));
    };



export const signup = (formData: SignupReqForm) => async (dispatch: any) => {
    dispatch(loadingActions.setIsSigningUp(true));
    
    const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    
    

    const data = await response.json();

    console.log(data);
    

    dispatch(loadingActions.setIsSigningUp(false));
};
