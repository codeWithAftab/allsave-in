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
            <Route path="/instagram-downloader" element={<><Main title={"Instagram video Dowloader"} /> <Resources/> </>} />
            <Route path="/facebook-downloader" element={<><Main title={"Facebook video Dowloader"} /> <Resources/> </>} />
            <Route path="/youtube-downloader" element={<><Main title={"Youtube video Dowloader"} /> <Resources/> </>} />
            <Route path="/twitter-downloader" element={<><Main title={"Twitter video Dowloader"} /> <Resources/> </>} />
            </Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar brand={Brand}/>
      <Main title={title} settitle={settitle} /> 
      <Resources/> 
      <Footer brand={Brand}/> */}
    </>
  );
}

export default App;
