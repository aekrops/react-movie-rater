import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const TokenContext = createContext(null);

function Router() {
  const TOKEN = "9a82d088aecd26f01d11e52cdfea36a28156a753";

  return (
    <React.StrictMode>
      <TokenContext.Provider value={TOKEN}>
        <App />
      </TokenContext.Provider>
    </React.StrictMode>
  )
}


ReactDOM.render(<Router /> ,document.getElementById('root'));