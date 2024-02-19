import { Link } from 'react-router-dom';

export default function Home({ image }) {
  return (
    <div>
      <div className='picture pic1'>
        <h1>Ranch Community Garden</h1>
      </div>
      <div className='text'>
        <div>
          <h2>
            The 2024 season plot renewal period will be from March 1st - April
            7th
          </h2>
          <p>
            Please sign up at{' '}
            <Link
              className=''
              to='https://docs.google.com/forms/d/e/1FAIpQLSeVwCDTwc1SWgEgBwQvB6OlqKhfzTkOQmp3Rdk9v7jn3Q5Osg/viewform?formkey=dFFNZDRWN1E3dk00aUc2NkZVUTRkS1E6MA#gid=0'
              target='_blank'
            >
              <span>Renew Your Plot</span>
            </Link>{' '}
            during that time
          </p>
          <h3>New gardener sign-ups will begin on April 8th</h3>
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
