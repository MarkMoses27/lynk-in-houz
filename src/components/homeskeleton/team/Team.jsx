import Slider from 'react-slick';
import './Team.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CEO from '../../../assets/gallery3.jpg';
import BEAUTICIAN from '../../../assets/beautician.png';
import BEAUTICIAN1 from '../../../assets/beautician1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import TEAM from '../../../assets/gallery.jpg';

const socialIcons = [
  { name: 'Facebook', icon: faFacebook },
  { name: 'Instagram', icon: faInstagram },
  { name: 'Whatsapp', icon: faWhatsapp },
  { name: 'Tiktok', icon: faTiktok },
];

const teamMembers = [
  { name: 'Ken Ngugi', title: 'Founder & CEO', imgSrc: BEAUTICIAN, socialIcons: socialIcons },
  { name: 'Mery Wairimu', title: 'Beautician', imgSrc: BEAUTICIAN1, socialIcons: socialIcons },
  { name: 'Mark Moses', title: 'Specialist', imgSrc: TEAM, socialIcons: socialIcons },
  { name: 'Mr.Rooney', title: 'Tailor', imgSrc: CEO, socialIcons: socialIcons },
];

export default function Team() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='team'>
      <div className='team__container'>
        <div className='team__image'>
          <img src={TEAM} alt='team-service' />
        </div>
        <div className='team__header'>
          <h2>Expert Team</h2>  
          <h1>Our Experienced Specialists</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className='team__carousel'>
        <Slider className='team__carousel' {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className='team__member'>
              <img className='card__image' src={member.imgSrc} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <div className='social-icons'>
                {member.socialIcons.map((icon, idx) => (
                  <FontAwesomeIcon key={idx} className='icon' icon={icon.icon} title={icon.name} />
                ))}
              </div>
              <div className='plus-icon'>+</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
