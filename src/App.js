import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Technologies from './pages/Technologies';
import Languages from './pages/Languages';
import Error404 from './pages/Error404';
import AboutMe from './pages/AboutMe';

function App() {
  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <div style={{height: windowSize[0] >= 768 && "calc(100vh - 46px)"}}>
      <BrowserRouter>
        <Header/>
        <div className="container-fluid h-100">
          <div className='row h-100'>
            <Navbar/>
            <main className='col-lg-10 ps-4 pt-5 pb-4'>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about-me' element={<AboutMe/>}/>
                <Route path='technologies' element={<Technologies/>}/>
                <Route path='languages' element={<Languages/>}/>
                <Route path='*' element={<Error404/>}/>
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
