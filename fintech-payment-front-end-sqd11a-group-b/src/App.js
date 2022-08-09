import Signup from './Signup';
import Login from "./pages/login/Login";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Dashboard from './pages/dashboard';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation()
  
  return (
    <div className="App">
        {location.pathname !== '/' && location.pathname !== '/signup' && (
            <Navbar/>
          )}
      

      
        <Routes>
            
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route exact path="/dashboard" element={<Dashboard/>}>
            {/* <Route path="" element={<Example/>} /> */}
          </Route>
        </Routes>

    </div>
  );
}

export default App;
