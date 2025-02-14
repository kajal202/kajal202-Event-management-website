import React from 'react';
import { Outlet ,useLocation} from 'react-router-dom';
import { LoginProvider } from './context/LoginContext';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {


  return (

    <LoginProvider>
      <div className="App bg-slate-200">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </LoginProvider>
  );
}


export default App;
