import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AuthPage from './pages/Auth';
import HomePage from './pages/Home';
import store from './store';

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },

    { path: '/auth', element: <AuthPage /> }
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />;
        </Provider>
    );
}

export default App;
