import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Info from '../pages/Info';
import Contact from '../pages/Contact';

export default function Main() {
  return (
    <div className='main-content'>
      <h1>Main Content</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}
