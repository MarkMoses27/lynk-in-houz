import './BookingProcess.css'; 

const BookingProcess = () => {
  return (
    <div className="booking-process">
      <h1>How It Works</h1>
      <div className="step">
        <h2>Step 1: Schedule Online</h2>
        <p>It takes you 3 minutes to select spa services and your preferred time slot (1-60 days in advance), enter your contact information and address, pay 10%, and receive SMS and email confirmation.</p>
      </div>
      <div className="step">
        <h2>Step 2: We Come To You</h2>
        <p>We bring all materials and equipment and set up the spa in a comfortable location of your choice. Some services require access to electricity, contact, and water.</p>
      </div>
      <div className="step">
        <h2>Step 3: Your Experience</h2>
        <p>We customize your session to your personality and needs.</p>
      </div>
    </div>
  );
};

export default BookingProcess;
