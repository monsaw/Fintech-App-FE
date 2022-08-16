import Signup from './Signup';
import Login from "./pages/login/Login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import UserProfile from './pages/User_profile/UserProfile';
import EmailVerification from './pages/emailverification/EmailVerification';

function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/email-verification" element={<EmailVerification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
