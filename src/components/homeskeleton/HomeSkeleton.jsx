import BookingProcess from "./BookingProcess";
import DiscoverExperiences from "./DiscoverExperiences";
import Home from "./Home";
import ServiceCoverage from "./ServiceCoverage/ServiceCoverage";



export default function HomeSkeleton() {
  return (
    <div className="container">
        <Home/>
        <BookingProcess />
        <DiscoverExperiences />
        <ServiceCoverage />
      
    </div>
  )
}
