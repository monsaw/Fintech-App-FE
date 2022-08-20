import Signup from './pages/Signup/Signup';
import Login from "./pages/login/Login";
import LocalTransfer from "./pages/localtransfer/LocalTransfer";
import BankTransfer from './pages/otherbanktransfer/bankTransfer';
import LandingPage from './pages/landing page/LandingPage';

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
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/bank-transfer" element={<BankTransfer />} />
        <Route path="/local-transfer" element={<LocalTransfer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
