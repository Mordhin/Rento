import Blob from "./components/Blob";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="premier">
        <Blob />
        <div className="call">
          <div>Avec Rento, conduisez autrement !</div>
          <button>J'essaie !</button>
        </div>
      </div>
      <div className="spacer layer1"></div>
      <div className="deuxieme"></div>
    </div>
  );
}

export default App;
