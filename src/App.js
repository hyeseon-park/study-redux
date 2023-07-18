import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./shared/global/globalStyles";
import MainPage from "./pages/MainPage";
import AddressPage from "./pages/AddressPage";
import SlidePage from "./pages/SlidePage";
import NumberPage from "./pages/NumberPage";

const Layout = () => {
  return (
    <>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </>
  );
};

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="address" element={<AddressPage />} />
            <Route path="slide" element={<SlidePage />} />
            <Route path="number">
              <Route path=":numberId" element={<NumberPage />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
