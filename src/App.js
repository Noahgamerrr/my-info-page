import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Technologies from './pages/Technologies';
import Languages from './pages/Languages';
import Error404 from './pages/Error404';

function App() {
  return (
    <div style={{height: "100vh"}}>
      <BrowserRouter>
        <Header/>
        <div className="container-fluid h-100">
          <div className='row h-100'>
            <Navbar/>
            <main className='col-md-10'>
              <Routes>
                <Route path='/' element={<Home/>}/>
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
