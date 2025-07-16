import Contact from "./Component/Contact";
import { Footer } from "./Component/Footer";
import Header from "./Component/Header";
import { Section1 } from "./Component/Section1";
import Section2 from "./Component/Section2";
import Skills from "./Component/Skills";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <Section1 />
      <Section2/>
      <Contact/>
      <Skills/>
      <Footer/>



      
    </div>
  );
}

export default App;

