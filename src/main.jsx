import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './services/state/store.js';
import UserProvider from './providers/UserProvider';

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename='/my-app'>
        <Provider store={store}>
            <UserProvider>
                <App />
            </UserProvider>
        </Provider>
    </BrowserRouter>
)
