import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import { Header } from './components/Header.tsx'
import Header from './components/Header/Header2.tsx'
import './global.css'
import Footer from './components/Footer.tsx'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'; 

function AppWithHeaderControl() {
  const location = useLocation();

  const hideHeaderRoutes = ['/events'];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <App />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router> 
      <AppWithHeaderControl />
    </Router>
  </React.StrictMode>,
)
