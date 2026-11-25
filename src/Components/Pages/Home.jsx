// import React from "react";
// import Hero from "../Hero";
// import Category from "../Categories";
// import Brands from "../Brands";
// import WhyChooseSagar from "../WhyChooseSagar";
// import VisitStore from "../Visitstore";
// import Testimonials from "../Testimonials";
// import FinalCTA from "../FinalCTA";
// import Contact from "../Contact";
// import Footer from "../Footer";
// import Gallery from "../Gallery";


// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <Category/>
//       <Brands/>
//       <WhyChooseSagar/>
//       <Gallery/>
//       <VisitStore/>
//       <Testimonials/>
//       <FinalCTA/>
//       <Contact/>
//       <Footer/>

//       {/* Other homepage sections */}
//       <section id="our-range">
//         {/* Our Range component */}
//       </section>

//       <section id="brands">
//         {/* Brands component */}
//       </section>

//       <section id="our-story">
//         {/* Our Story component */}
//       </section>

//       <section id="visit-store">
//         {/* Visit Store component */}
//       </section>
//     </>
//   );
// };

// export default Home;

import React from "react";

import Hero from "../Hero";
import Category from "../Categories";
import Brands from "../Brands";
import WhyChooseSagar from "../WhyChooseSagar";
import Gallery from "../Gallery";
import VisitStore from "../Visitstore";
import Testimonials from "../Testimonials";
import FinalCTA from "../FinalCTA";
import Contact from "../Contact";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Product Categories */}
      <section id="our-range">
        <Category />
      </section>

      {/* Trusted Brands */}
      <section id="brands">
        <Brands />
      </section>

      {/* Our Story / Why Choose Sagar */}
      <section id="our-story">
        <WhyChooseSagar />
      </section>

      {/* Showroom Gallery */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Visit Our Store */}
      <section id="visit-store">
        <VisitStore />
      </section>

      {/* Customer Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Final Call To Action */}
      <FinalCTA />

      {/* Contact Section */}
 <section id="contact">
  <Contact />
</section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
