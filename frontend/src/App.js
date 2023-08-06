import { HashRouter , Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import RegistrationForm from './pages/RegistrationForm';
import './style/tailwind.css';

function App() {
  return (
    <div className="App">
      <HashRouter >
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Registration" element={<RegistrationForm/>} />
      </Routes>
      </HashRouter >
    </div>
  );
}

export default App;
