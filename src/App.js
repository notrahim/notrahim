import "./style/style.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
