import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Routes} from './routes/index'
import {Header} from './pages/Header/index'

// criando um componente funcional - FC
const App: React.FC = () => {

  return (
   <>
    <BrowserRouter>
      <Header/>
      <Routes/>
    </BrowserRouter>        
    </>
    
  );
}

export default App;
