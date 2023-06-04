import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AuthPage from './pages/Auth';
import HomePage from './pages/Home';

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },

    { path: '/auth', element: <AuthPage /> }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
