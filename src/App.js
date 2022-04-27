import "./style/style.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Footer from "./component/Footer";
import LandingPage from "./pages/LandingPage";
import ConnectionPage from "./pages/ConnectionPage";
import AdminPage from "./pages/AdminPage";
import { useState } from "react";

function App() {
  const state = useState(state => state)

  console.log(window.location.pathname);

  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/accueil" element={<HomePage />}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/nous-contacter" element={<LandingPage />}/>
          <Route path="/connection" element={<ConnectionPage />}/>
          {/* <Route path="/admin" element={state.isLogin? <AdminPage /> : <NotFound />}/> */}
          <Route path="/admin" element={<AdminPage />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
        <Footer />  
      </BrowserRouter>
    </div>
  );
}

export default App;
