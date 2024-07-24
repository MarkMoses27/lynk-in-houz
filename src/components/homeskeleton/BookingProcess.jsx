import './BookingProcess.css';
import NAIL from '../../assets/gallery9.jpg';
import NAIL1 from '../../assets/gallery2.jpg';
import NAIL2 from '../../assets/nail-art.jpg';

export default function BookingProcess() {
  return (
    <div className='booking-process'>
      <h2 className='booking-process__subtitle'>3 EASY STEPS</h2>
      <h1 className='booking-process__title'>How it Works?</h1>
      <div className='steps'>
        <div className='step'>
          <div className='step__image'>
            <img src={NAIL2} alt='Schedule Online' />
            <div className='step__number'>01</div>
          </div>
          <h3 className='step__title'>Schedule Online</h3>
          <p className='step__description'>
            It takes you 3 minutes to select spa services and your best time slot (1-60 days in advance), enter your contacts & address, pay 10%, and receive SMS & email confirmation.
          </p>
        </div>
        <div className='step'>
          <div className='step__image'>
            <img src={NAIL1} alt='We Come To Your Home or Hotel' />
            <div className='step__number'>02</div>
          </div>
          <h3 className='step__title'>We Come To Your Home or Hotel</h3>
          <p className='step__description'>
            We bring all materials & equipment and set up the spa in a comfortable place of your choice. Some services require access to electricity and water.
          </p>
        </div>
        <div className='step'>
          <div className='step__image'>
            <img src={NAIL} alt='You Experience' />
            <div className='step__number'>03</div>
          </div>
          <h3 className='step__title'>You Experience</h3>
          <p className='step__description'>
            We customize your session to your personality & needs.
          </p>
        </div>
      </div>
    </div>
  );
}
