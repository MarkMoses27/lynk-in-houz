import Faq from "../faq/FAQ";
import BookingProcess from "./BookingProcess";
import DiscoverExperiences from "./DiscoverExperiences";
import Home from "./Home";
import Package from "./package/Package";
import ServiceCoverage from "./ServiceCoverage/ServiceCoverage";
import Team from "./team/Team";
import Testimonial from "./testimonial/Testimonial";



export default function HomeSkeleton() {
  return (
    <div className="container">
        <Home/>
        <BookingProcess />
        <DiscoverExperiences />
        <ServiceCoverage />
        <Team/>
        <Package />
        <Faq />
        <Testimonial />
      
    </div>
  )
}
