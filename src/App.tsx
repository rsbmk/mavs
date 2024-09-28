import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PATHS } from "./constants";
import CharacterDetail from "./pages/character-detail";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.LOGIN} element={<Login />} />
          <Route path={PATHS.SIGNUP} element={<Signup />} />
          <Route path={`${PATHS.CHARACTER_DETAIL}:id`} element={<CharacterDetail />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
