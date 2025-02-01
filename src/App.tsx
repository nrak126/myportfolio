import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { License } from "./components/License";
import { Hobbies } from "./components/Hobbies";
import "./components/styles/styles.css";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <License />
      <Hobbies />
      <Footer />
    </>
  );
}

export default App;
