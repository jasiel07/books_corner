import {  Routes,  Route,BrowserRouter,Link } from 'react-router-dom';
import LoginPage from './loginPage.js';
import HomePage from './home.js';
import StorePage from './storePage.js';
import AboutPage from './AboutPage.js';

import './App.css'

function App() {
  return (
    <BrowserRouter>

    <br></br>
<br></br>
<br></br>
<Link to='/login'>LOGIN</Link><br></br>
<Link to='/'>HOME</Link><br></br>
<Link to='/store'>STORE</Link><br></br>
<Link to='/about'>ABOUT</Link>



    <Routes>
      
        <Route path="/login" element={<LoginPage />}>
          
        </Route>
      
        <Route path="/store" element={   <StorePage />}>
       
        </Route>
        <Route path="/about" element={  <AboutPage />}>
        
        </Route>
        <Route path="/" element={<HomePage />}>
          
        </Route>
     
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;