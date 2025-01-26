import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App(){
  return (
     <BrowserRouter>
     <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/" element={<Home/>}/>
        </Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;