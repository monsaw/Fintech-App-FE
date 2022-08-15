import Signup from './Signup';
import Login from "./pages/login/Login";
import LocalTransfer from "./pages/localtransfer/LocalTransfer";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import UserProfile from './pages/User_profile/UserProfile';

function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/transfer" element={<LocalTransfer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
