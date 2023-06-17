import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AuthPage from './pages/Auth';
import HomePage from './pages/Home';
import store from './store';
import { loader as PostsLoader } from './pages/Home/components/Posts';

const router = createBrowserRouter([
    { path: '/', element: <HomePage />, loader: PostsLoader },

    { path: '/login', element: <AuthPage mode="login" /> },
    { path: '/signup', element: <AuthPage mode="signup" /> }
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />;
        </Provider>
    );
}

export default App;
