import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h2>Ranch Community Garden</h2>
      <nav>
        <Link to='/'>
          <div>Home</div>
        </Link>
        <Link to='/info'>
          <div>Garden Information</div>
        </Link>
        <Link to='/contact'>
          <div>Contact</div>
        </Link>
      </nav>
    </header>
  );
}
