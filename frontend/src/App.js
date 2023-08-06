import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import RegistrationForm from './pages/RegistrationForm';
import './style/tailwind.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Registration" element={<RegistrationForm/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
