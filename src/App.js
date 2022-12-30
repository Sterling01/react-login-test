import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
