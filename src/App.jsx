import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Cocktails } from "./components/Cocktails";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
}
