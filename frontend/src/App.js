import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login'
import Register from './components/auth/Register';
import Header from './components/headers/Header';
import Footer from './components/footers/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      < Footer />
    </BrowserRouter>
  );
}
export default App;
