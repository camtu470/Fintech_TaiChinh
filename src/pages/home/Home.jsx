import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import BrandInfo from "../../components/BrandInfo/BrandInfo";
import SubscriptionPlans from "../../components/SubscriptionPlans/SubscriptionPlans";
import Services from "../../components/Services/Services";
import TrendingList from "../../components/TrendingList/TrendingList.jsx";
import CardSlider from "../../components/CardSlider/CardSlider.jsx";
const Home = () => {
  return (
    <div>

      <Navbar />
      <Header/>
      <FeaturedProducts/>
      <CardSlider/>
      <Services/>
      <TrendingList/>
      <BrandInfo/>
      <SubscriptionPlans/>
      <div className="homeContainer">
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
