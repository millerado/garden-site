import DisplayImage from '../components/DisplayImage';

export default function Home({ image }) {
  return (
    <div>
      {/* <DisplayImage image={image} text='Ranch Community Garden' /> */}
      <div className='picture pic1'>
        <h1>Ranch Community Garden</h1>
      </div>
      <div className='text'>
        <h2>Sign-up for 2023 plot renewals is OPEN (March 1 - April 9th)</h2>
        <h2>
          Returning gardeners from 2022 can now register in the "Plot Renewal"
          form
        </h2>
        <h3>New gardener plot request will begin on April 10th, 2023</h3>
        <h3>Annual cost is $25 per plot (4ft x 8ft)</h3>
        <p>
          Ranch Community Garden is one of the few community gardens in Colorado
          Springs to include a drip water system for the entire community
          garden. This helps keep the water usage low and you do not have to
          visit your garden plot as much to water.
        </p>
        <p>4625 Ranch Drive, Colorado Springs, CO 80918</p>
      </div>
    </div>
  );
}
