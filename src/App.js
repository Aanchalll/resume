import "./App.css";
import Mainpage from "./pages/Mainpage";
// import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import PortFolio from "./pages/PortFolio";
import Website from "./pages/Website";
import AnimatedCursor from "react-animated-cursor";
import WebsiteHeader from "./components/website/WebsiteHeader";

function App() {
  return (
    <div className="App">
        <AnimatedCursor
        innerSize={6}
        outerSize={30}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode
        outerStyle={{
          border: "2px solid #007dfe4a",
          zIndex:'99999'
        }}
        innerStyle={{
          zIndex:'99999',
          backgroundColor: "#000",
        }}
        // sx={{z-index}}
        clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      />
      {/* <Mainpage /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebsiteHeader />}>
            <Route index element={<Mainpage />} />
            <Route path="portfolio" element={<PortFolio />} />
            <Route path="about-us" element={<Website />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}

export default App;
