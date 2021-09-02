import First from "./components/First";
import Second from "./components/Second";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <First />
      <div className="spacer layer1"></div>
      <Second />
      <div className="spacer layer2"></div>
    </div>
  );
}

export default App;
