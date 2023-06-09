import { loadingActions } from '../reducers/LoadingReducer';

export const login =
    (email: string, password: string) => async (dispatch: any) => {
        dispatch(loadingActions.setIsLoggedIn(true));
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        console.log(data);
        

        dispatch(loadingActions.setIsLoggedIn(true));
    };
