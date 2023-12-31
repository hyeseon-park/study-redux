import {
  Routes,
  Route,
  Outlet,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "./App.css";
import GlobalStyles from "./shared/global/globalStyles";
import MainPage from "./pages/MainPage";
import AddressPage from "./pages/AddressPage";
import SlidePage from "./pages/SlidePage";
import NumberPage from "./pages/NumberPage";
import PostPage from "./pages/PostPage";
import Post3Page from "./pages/Post3Page";
import CounterPage from "./pages/CounterPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Posts2 from "./components/Posts2";
import Posts3 from "./components/Posts3";
import Test from "./components/Test";
import CommentContextProvider from "./store/CommentContext";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        header
        <Link to="/posts3">페이지 이동</Link>
      </header>
      <Outlet />
      <footer>
        <Link to="/address">페이지 이동</Link>
        <div onClick={() => navigate("/slide")}>페이지 이동</div>
      </footer>
    </>
  );
};

const TypeParamRoutes = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("genre") !== "hybrid") {
      const newSearchParams = new URLSearchParams({ type: "nuclear" });
      setSearchParams(newSearchParams);
    }
  }, []);

  return <Outlet />;
};

// const queryClient = new QueryClient();

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <QueryClientProvider client={queryClient}> */}
      <CommentContextProvider>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="address" element={<AddressPage />} />
            <Route path="slide" element={<SlidePage />} />
            <Route path="posts" element={<PostPage />} />
            <Route path="posts2" element={<Posts2 />} />

            <Route path="posts3" element={<Post3Page />} />

            <Route path="counter" element={<CounterPage />} />

            <Route element={<TypeParamRoutes />}>
              <Route path="test" element={<Test />} />
            </Route>
            <Route path="number">
              <Route path=":numberId" element={<NumberPage />} />
            </Route>
          </Route>
        </Routes>
      </CommentContextProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
