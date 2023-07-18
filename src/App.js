import "./App.css";
import Attachment from "./components/Attachment";
import GlobalStyles from "./shared/global/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Attachment />
      </div>
    </>
  );
}

export default App;
