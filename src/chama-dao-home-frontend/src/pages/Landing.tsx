import About from "../components/About";
import { Advantages } from "../components/Advantages";
import { ProblemsSolved } from "../components/AppFeatures";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Team from "../components/Team";
import Token from "../components/Token";

function Landing() {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      {/* <ProblemsSolved /> */}
      <Token />
      <Advantages />
      <Team />
    </div>
  );
}

export default Landing;
