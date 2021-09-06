import Navbar from "./components/Navbar";
import CallToAction from "./components/CallToAction";
import HowItWorks from "./components/HowItWorks";
import Arguments from "./components/Arguments";
import { CarouselData } from "./components/carousel/carouselData";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <CallToAction />
      <div className="spacer layer1"></div>
      <Arguments carousel={CarouselData} />
      <HowItWorks />
      <Pricing />
      <div className="spacer layer2"></div>
    </div>
  );
};

export default App;
