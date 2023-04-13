import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Technologies from './pages/Technologies';
import Languages from './pages/Languages';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar/>}>
              <Route index element={<Home/>}/>
              <Route path='technologies' element={<Technologies/>}/>
              <Route path='languages' element={<Languages/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
