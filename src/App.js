import './App.css';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
 