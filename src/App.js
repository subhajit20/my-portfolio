import Navbar from './components/Header/Navbar';
import IntroSection from './components/IntroductionSection/IntroSection';
import About from './components/About/About';
import { Footer } from './components/Footer/Footer';
import ProjectTemplate from './components/ProjecT Component/ProjectTemplate';
import Contact from './components/ContactComponent/Contact'

function App() {
  return (
    <div className="App Portfolio">
      <div className='relative'>
        <Navbar/>
        <IntroSection/>
        <About/>
        <ProjectTemplate/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
