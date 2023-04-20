import display from '../images/IMG_0842.JPG';

export default function DisplayImage({ image, text }) {
  return (
    <div className='picture' style={{ backgroundImage: display }}>
      {text}
    </div>
  );
}
