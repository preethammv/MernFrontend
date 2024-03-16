import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import ForgotPassword from './Components/ForgotPassword';
import DeleteAccount from './Components/DeleteAccount';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route index element={<LogIn />} />
      <Route path="/home" element={<Home />} />
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/deleteaccount' element={<DeleteAccount/>}/>
    </Routes>
    </Router>
  );
}

export default App;
