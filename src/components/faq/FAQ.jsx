import { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'What does a basic mani-pedi include?',
    answer: 'Basic nail care includes filing and shaping the free edge of nails, pushing and clipping cuticles, soaking hands/feet, scrubbing and scraping dead skin, and ends with a hand/foot massage. Depending on the specific treatment, the natural or enhanced (i.e acrylic) nails are polished with regular or gel varnish.'
  },
  {
    question: 'What are acrylic nails?',
    answer: 'Acrylic nails are the result of a mix of liquid monomer and gel/powder to form a hardened substance which is then shaped onto your natural nail bed.'
  },
  {
    question: 'Gel or acrylic nails; which is better?',
    answer: (
      <ul>
        <li>If you want a natural look, then gel nails tend to be the better option.</li>
        <li>Acrylics are more flexible in finding the perfect length and shape.</li>
        <li>Acrylics tend to be harder to remove than gel.</li>
        <li>Acrylic is more expensive but more durable than gel.</li>
      </ul>
    )
  },
  {
    question: 'How long do acrylic nails last?',
    answer: 'Six to eight weeks. Depending on your natural nails’ growth rate, how you take care of your nails, and the activities you will be doing you might need a refill every two to three weeks.'
  },
  {
    question: 'Does applying acrylics hurt?',
    answer: 'The application process is painless but may cause minor discomfort due to the smell or when your nails are filed down. Afterward, some feel that the nails (especially if you are new) are heavy but you soon get used to it.'
  },
  {
    question: 'How are acrylic nails removed?',
    answer: 'The nail technician clips the acrylic tips off and then files the surface down with an electric file before soaking the nails in acetone for about 20 minutes to loosen up and scrape off any remaining acrylic.'
  },
  {
    question: 'What are gel nails?',
    answer: 'A gel-based polish is applied to your nails. The polish is then cured with a UV or LED light.'
  },
  {
    question: 'How long does a gel manicure last?',
    answer: 'Depending on your lifestyle, gel nails can remain unchipped for up to two weeks.'
  },
  {
    question: 'Sculpting or gluing of tips; which is best?',
    answer: 'Sculpted tips are usually thicker. The choice really depends on the expertise and confidence of the nail tech.'
  },
  {
    question: 'Short or long acrylic nails; which is better?',
    answer: (
      <ul>
        <li>Short nails are very strong and not prone to breakage but are limited in nail art.</li>
        <li>The long shape may not be the most practical, but it is trendy and will elongate your fingers.</li>
      </ul>
    )
  },
  {
    question: 'Is acrylic bad for your nails?',
    answer: 'Incorrect application and removal of acrylics are bad for the nails.'
  },
  {
    question: 'How long does the regular polish last?',
    answer: 'Depending on your lifestyle, the regular polish lasts about a week.'
  },
  {
    question: 'How are gel nails removed?',
    answer: 'By soaking in acetone for at the very least 10 minutes then wipe off the polish.'
  },
  {
    question: 'How long does a stick-on manicure last?',
    answer: 'Depending on your lifestyle, the glue/adhesive stays on for about five to seven days.'
  },
  {
    question: 'How soon can I have an appointment?',
    answer: 'We work with advance bookings; 1-60 days from today. All available slots will be shown to you on the calendar on our booking page. You have more slots 1-2 weeks ahead if you combine services from different professionals in one appointment.'
  },
  {
    question: 'Can I book for someone else?',
    answer: 'Yes. Indicate on the notes for whom the appointment is if not for yourself.'
  },
  {
    question: 'How often should I schedule a pedicure treatment?',
    answer: 'To maintain healthy & happy feet, a schedule of between 4 & 6 weeks usually works well.'
  },
  {
    question: 'Which areas do you reach?',
    answer: 'We visit residents throughout Nairobi county (except suburbs in the east). Our reach extends to nearby towns on the borders of Kiambu, and Kajiado counties e.g. Juja, Kiambu, Ruiru, Kikuyu, Tatu City, Ruaka, Rongai, Ngong, etc.'
  },
  {
    question: 'Do you attend to men?',
    answer: 'Yes, but only when the wife/girlfriend/daughter makes the appointment on behalf of their man/father, etc.'
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h2>{item.question}</h2>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
