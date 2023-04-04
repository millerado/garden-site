import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';

export default function Main() {
  return (
    <div className='main-content'>
      <h1>Main Content</h1>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}
