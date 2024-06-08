import './BookingProcess.css';
import NAIL from '../../assets/Nail.png';
export default function BookingProcess() {
  return (
    <div className='booking__process'>
      <h2>3 EASY STEPS</h2>
      <h1>How it Works?</h1>
      <div className='steps'>
        <div className='step'>
          <div className='step__image'>
            <img src={NAIL} alt='Meeting' />
            <div className='step__number'>01</div>
          </div>
          <h3>Schedule Online</h3>
          <p> takes you 3 mins to select spa services & your best time slot (1-60 days in advance), enter your contacts & address, pay 10%, receive SMS & email confirmation..</p>
        </div>
        <div className='step'>
          <div className='step__image'>
            <img src={NAIL} alt='Treatment' />
            <div className='step__number'>02</div>
          </div>
          <h3>We Come To Your Home or Hotel.</h3>
          <p>We bring all materials & equipment & set up the spa in a comfortable place of your choice. Some services require access to electricity contact & water..</p>
        </div>
        <div className='step'>
          <div className='step__image'>
            <img src={NAIL} alt='Finalizing' />
            <div className='step__number'>03</div>
          </div>
          <h3>You Experience.</h3>
          <p>We customize your session to your personality & needs.</p>
        </div>
      </div>
    </div>
  );
}
