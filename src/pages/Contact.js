import map from '../images/garden-location.png';

export default function Contact() {
  return (
    <div>
      <div className='picture pic3'>
        <h1>Contact</h1>
      </div>
      <div className='text'>
        <h2>RCG Board Contact Information</h2>
        <p>Bryan Miller cbryanmiller@yahoo.com</p>
        <p>Jeanette Martin jnette@jmseating.com</p>
        <p>Shane Stutzman coloradogardens@gmail.com</p>
        <p>Terry Webb tjhw63@gmail.com</p>
        <h2>Location</h2>
        <p>4265 Ranch Drive, next to Union just south of Academy Blvd.</p>
        <img src={map} alt='Garden Location' className='loc-pic'></img>
      </div>
    </div>
  );
}
