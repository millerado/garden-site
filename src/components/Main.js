import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Info from '../pages/Info';
import Contact from '../pages/Contact';
import image1 from '../images/IMG_0842.JPG';
import image2 from '../images/maple_hill.jpg';

export default function Main() {
  return (
    <div className='main-content'>
      <Routes>
        <Route path='/' element={<Home image={image1} />} />
        <Route path='/info' element={<Info />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}
