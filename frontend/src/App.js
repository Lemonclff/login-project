import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import './style/tailwind.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
