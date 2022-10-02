import BannerSection from "../../components/BannerSection/BannerSection";
import FaqSection from "../../components/FaqSection/FaqSection";
import Footer from "../../components/Footer/Footer";
import Intro from "../../components/Intro/Intro";
import OurServices from "../../components/OurServices/OurServices";
import Testimonials from "../../components/Testimonials/Testimonials";
import Topbar from "../../components/Topbar/Topbar";
import WhyUs from "../../components/WhyUs/WhyUs";
import "./home.scss";

const Home = () => {
  return (
    <div className="home" id="home">
      <Topbar />
      <Intro />
      <OurServices />
      <WhyUs />
      <Testimonials />
      <BannerSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
