import { Link } from 'react-router-dom';

export default function Home({ image }) {
  return (
    <div>
      <div className='picture pic1'>
        <h1>Ranch Community Garden</h1>
      </div>
      <div className='text'>
        <div>
          <p>
            We will begin taking 2025 plot requests from returning gardeners on March 1st. 
          </p>
          <p>
            New gardeners can begin signing up for plots on April 1st.
          </p>
          <h2 className='hidden'>The garden is now OPEN to all subscribers for the 2024 season</h2>
          <p className='hidden
          '>
            Please sign up for{' '}
            <Link
              className=''
              to='https://docs.google.com/forms/d/e/1FAIpQLSe08KfiU-qEYFEOcOGO6WfUzLOzLQNLyTrZZoOKeyBE56OOqQ/viewform?embedded=true&formkey=dFZYV2d2MWVrbUZpWW1ZaVUzWWxGTHc6MQ'
              target='_blank'
            >
              <span>New Garden Plots</span>
            </Link>{' '}
            or{' '}
            <Link
              to='https://docs.google.com/forms/d/e/1FAIpQLSeVwCDTwc1SWgEgBwQvB6OlqKhfzTkOQmp3Rdk9v7jn3Q5Osg/viewform?formkey=dFFNZDRWN1E3dk00aUc2NkZVUTRkS1E6MA#gid=0'
              target='_blank'
            >
              {' '}
              <span>Renew Your Plot</span>
            </Link>{' '}
            from last year. We welcome new gardeners to join us this year to
            build a vibrant community!
          </p>
          {/* <h3>The garden is now OPEN to all subscribers for the 2024 season</h3> */}
          <br />
          <br />
          <div className='link-box hidden'>
            <Link
              to='https://docs.google.com/forms/d/e/1FAIpQLSe08KfiU-qEYFEOcOGO6WfUzLOzLQNLyTrZZoOKeyBE56OOqQ/viewform?embedded=true&formkey=dFZYV2d2MWVrbUZpWW1ZaVUzWWxGTHc6MQ'
              target='_blank'
            >
              <div className='new-plot-link'>New Plot Application</div>
            </Link>
          </div>
        </div>
        <div className='hidden'>
          <h2>The garden is currently full for the 2023 season</h2>
          <h3>
            Sorry if you could not garden with us this year. We will be taking
            new members in 2024.
          </h3>
        </div>
        <h3 className='hidden'>Annual cost is $25 per plot (4ft x 8ft)</h3>
        <p>
          Ranch Community Garden is one of the few community gardens in Colorado
          Springs to include a drip water system for all plots. This system
          keeps the water usage lower, and you do not have to visit your garden
          plot as much to water.
        </p>
        <p>4625 Ranch Drive, Colorado Springs, CO 80918</p>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
