import './App.css';
import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Technologies from './pages/Technologies';
import Languages from './pages/Languages';
import Projects from './pages/Projects';
import Error404 from './pages/Error404';

function App() {
  return (
    <div className='h-lg-100 position-relative minh-100'>
      <HashRouter>
        <Header/>
        <div className="container-fluid">
          <div className='row h-lg-100'>
            <Navbar/>
            <main className='col-lg-10 ps-lg-4 pt-3 pt-lg-5 pb-4 mb-5 mb-lg-0'>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='technologies' element={<Technologies/>}/>
                <Route path='languages' element={<Languages/>}/>
                <Route path='projects' element={<Projects/>}/>
                <Route path='*' element={<Error404/>}/>
              </Routes>
            </main>
          </div>
        </div>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
