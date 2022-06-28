import "./App.css";
import Mainpage from "./pages/Mainpage";
import AnimatedCursor from "react-animated-cursor";
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
        }}
        innerStyle={{
          backgroundColor: "#000",
        }}
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
      <Mainpage />
    </div>
  );
}

export default App;
