import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Resources from "./components/Resources";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigationType,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
function App() {
  const [Brand, setBrand] = useState("Allsave.in");
  const [title, settitle] = useState("Online Video Downloader.");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar brand={Brand}/> <Footer brand={Brand}/></>}>
            <Route index  element={<><Main title={title} settitle={settitle} /> <Resources/> </>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
