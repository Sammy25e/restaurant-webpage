import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Services from "./components/Services";
import About from "./components/About";

import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Appstore from "./components/Appstore";

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Services />
      <About />
      <Appstore />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
