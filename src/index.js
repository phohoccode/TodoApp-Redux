import React from 'react';
import ReactDOM from 'react-dom/client'; // Cập nhật import cho React 18
import './index.css';
import App from './App';
import store from './components/redux/store';
import { Provider } from 'react-redux'

// Tạo root cho ứng dụng
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render ứng dụng
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
