import styles from "../constants/style";

import Hero from './Hero';
import Stats from './Stats';
import Business from './Business';
import Billing from './Billing';
import CardDeal from './CardDeal';
import Testimonials from './Testimonials';
import Clients from './Clients';
import CTA from './CTA';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
    <div className={`${styles.boxWidth}`} >
    <Navbar />

    </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`} >
      <Hero />
      </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`} >
      <Stats />
      <Business />
      <Billing /> 
      <CardDeal /> 
      <Testimonials /> 
      <Clients /> 
      <CTA /> 
      <Footer /> 
      </div>
      </div>


  </div>
);

export default Home;