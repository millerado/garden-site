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
        <Link
          to='https://docs.google.com/forms/d/e/1FAIpQLSe08KfiU-qEYFEOcOGO6WfUzLOzLQNLyTrZZoOKeyBE56OOqQ/viewform?embedded=true&formkey=dFZYV2d2MWVrbUZpWW1ZaVUzWWxGTHc6MQ'
          target='_blank'
        >
          <div>New Plot Application</div>
        </Link>
        <Link
          to='https://docs.google.com/forms/d/e/1FAIpQLSe08KfiU-qEYFEOcOGO6WfUzLOzLQNLyTrZZoOKeyBE56OOqQ/viewform?embedded=true&formkey=dFZYV2d2MWVrbUZpWW1ZaVUzWWxGTHc6MQ'
          target='_blank'
        >
          <div>Returning Plot Reneweal</div>
        </Link>
      </nav>
    </header>
  );
}
