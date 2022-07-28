
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from "../src/pages/Home.jsx";
function App() {
  return (
    <Router>
       <Routes>
    
       <Route path="/" element={<Home />}></Route>
        </Routes>
    </Router>
  );

}


export default App;
