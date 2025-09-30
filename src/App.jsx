import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => (
  <div className="h-[100vh] flex-center">
    <h1 className="text-3xl text-indigo-200">Hello, GSAP!</h1>
  </div>
);

export default App;
