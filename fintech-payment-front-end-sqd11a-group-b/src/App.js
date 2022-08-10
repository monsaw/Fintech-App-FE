import Signup from './Signup';
import Login from "./pages/login/Login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './pages/dashboard/Navbar/Navbar';
import UserProfile from './pages/User_profile/UserProfile';

function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Navbar />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
