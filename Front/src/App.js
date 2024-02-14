import React from 'react';
import  './assets/style/Font.css';
import DinosaurImage from './components/DinosaurImage';
import LoginForm from './components/LoginForm';

const App = () => {
    return (
        <div className="container">
            <DinosaurImage />
            <LoginForm />
        </div>
    );
}

export default App;
