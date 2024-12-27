// src/App.js
import React, { useState } from 'react';
import TaskManager from './components/TaskManager';
import LoginForm from './components/LoginForm';
import LogoContainer from './components/LogoContainer';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {/* Renderizar LogoContainer */}
      <LogoContainer />
      
      {/* Si el usuario está logueado, muestra TaskManager, de lo contrario, muestra LoginForm */}
      {isLoggedIn ? <TaskManager /> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
}

export default App;
