import { Link } from 'react-router-dom';
import DisplayImage from '../components/DisplayImage';

export default function Home({ image }) {
  return (
    <div>
      {/* <DisplayImage image={image} text='Ranch Community Garden' /> */}
      <div className='picture pic1'>
        <h1>Ranch Community Garden</h1>
      </div>
      <div className='text'>
        <h2>Sign-up for is now open for the 2023 season</h2>
        <div className='link-box'>
          <Link
            to='https://docs.google.com/forms/d/e/1FAIpQLSe08KfiU-qEYFEOcOGO6WfUzLOzLQNLyTrZZoOKeyBE56OOqQ/viewform?embedded=true&formkey=dFZYV2d2MWVrbUZpWW1ZaVUzWWxGTHc6MQ'
            target='_blank'
          >
            <div className='new-plot-link'>New Plot Application</div>
          </Link>
        </div>
        <h3>Annual cost is $25 per plot (4ft x 8ft)</h3>
        <p>
          Ranch Community Garden is one of the few community gardens in Colorado
          Springs to include a drip water system for all plots. This system
          keeps the water usage lower, and you do not have to visit your garden
          plot as much to water.
        </p>
        <p>4625 Ranch Drive, Colorado Springs, CO 80918</p>
      </div>
    </div>
  );
}
