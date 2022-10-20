import Navbar from './components/Header/Navbar';
import IntroSection from './components/IntroductionSection/IntroSection';
import About from './components/About/About';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App Portfolio">
      <div className='relative'>
        <Navbar/>
        <IntroSection/>
        <About/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
