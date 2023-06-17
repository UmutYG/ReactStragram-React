import { useSelector } from 'react-redux';

import { LoadingReducerState } from '../store/reducers/LoadingReducer';
import { RootState } from '../store/reducers';

interface ButtonAsyncProps {
    text: string;
}

const checkAsyncProcess = (loadingSlice: LoadingReducerState) => {
    return loadingSlice.isLoggingIn || loadingSlice.isSigningUp;
};

const ButtonAsync: React.FC<ButtonAsyncProps> = (props) => {
    const loadingSlice = useSelector((state: RootState) => state.loading);

    const isLoading = checkAsyncProcess(loadingSlice);
    return (
        <button
            type="submit"
            className="btn btn--full btn--primary margin-top-sm margin-bottom-md"
        >
            {isLoading && (
                <img src="/src/assets/gif/loading.gif" alt="react icon spin gif" />
            )}
            {!isLoading && props.text}
        </button>
    );
};

export default ButtonAsync;
