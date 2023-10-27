
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ForbiddenArea from './pages/ForbiddenArea/ForbiddenArea';
import ForbiddenDashboard from './pages/ForbiddenDashboard/ForbiddenDashboard';
import InsertProject from './pages/InsertProject/InsertProject';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/forbidden-area" element={<ForbiddenArea/>} />
          <Route path="/forbidden-dashboard" element={<ForbiddenDashboard/>} />
          <Route path="/insert-project" element={<InsertProject/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
