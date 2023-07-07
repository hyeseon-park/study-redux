import "./App.css";
import Slide from "./components/Slide";
import GlobalStyles from "./shared/global/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Slide />
      </div>
    </>
  );
}

export default App;
