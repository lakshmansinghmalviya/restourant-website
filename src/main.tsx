import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import { Header } from './components/Header.tsx'
import Header from './components/header/Header.tsx'
import HeaderMobile from './components/header/HeaderMobile.tsx'
import './global.css'
import Footer from './components/Footer.tsx'
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

function AppWithHeaderControl() {
  const location = useLocation();

  const hideHeaderRoutes = ['/events'];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen"> 
        <HeaderMobile />
        {/* <Header /> */} 
      <div className='mt-[100px]'>
      <App />
      <Footer /> 
      </div> 
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppWithHeaderControl />
    </Router>
  </React.StrictMode>,
)
