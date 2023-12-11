import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolia from "./components/Portfolia";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
   <div>
     <Navbar />
     <Home />
     <SocialLinks />
     <About />
     <Portfolia />
     <Experience />
     <Contact />
   </div>
  );
}

export default App;
