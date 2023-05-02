import pdf from '../images/RCG-Rules.pdf';

export default function Info() {
  return (
    <div>
      <div className='picture pic2'>
        <h1>Garden Infomation</h1>
      </div>
      <div className='text'>
        <h2>Garden Organization</h2>
        <div className='text-left'>
          <p>
            The Ranch Community Garden is an all-volunteer community endeavor,
            and we rely on the help of all our members to keep the garden in
            good shape. We have a Board which consists of 4 to 6 volunteers to
            organize, communicate, and work with members to follow our
            guidelines.
          </p>
          <p>
            Each garden member is asked to volunteer 10 hours of time to
            community activities each year. This may consist of; weeding and
            harvesting Food Bank plots, helping with infrastructure building,
            spreading mulch, weeding walkways, or even helping new gardeners
            figure out the craft. If you have any questions please email a
            member of the RCG Board.
          </p>
        </div>
        <h2>Garden Plot Information</h2>
        <div className='text-left'>
          <p>
            Each Garden plot is 4ft x 8ft (32sqft). The annual garden fee is $25
            per plot, and you can request multiple plots (up to four) each year.
            Depending on availability you will be assigned additional plots.
          </p>
          <p>
            After you submit a plot request online you will receive a notice via
            email that your garden application has been accepted. Payment will
            be required by the last May Season Kick-off Meeting. Each year the
            dates of the those meetings will be published to all subscribers.
            You can also drop off, or mail, your payment to Beth-El Mennonite
            Church 4625 Ranch Drive, Colorado Springs, CO 80918. Please make
            check payable to Ranch Community Garden.
          </p>
        </div>
        <h2>
          <a href={pdf} target='_blank' rel='noreferrer'>
            Garden Rules
          </a>
        </h2>
      </div>
    </div>
  );
}
