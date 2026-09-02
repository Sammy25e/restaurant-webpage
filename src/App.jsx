import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Services from "./components/Services";
import About from "./components/About";
// import Appstore from "./components/Appstore";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Store from "./components/Store";

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Services />
      <About />
      <Store />
      {/* <Appstore /> */}
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
