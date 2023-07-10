import "./App.css";
import Address from "./components/Address";
import GlobalStyles from "./shared/global/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Address />
      </div>
    </>
  );
}

export default App;
