import Navbar from './components/Header/Navbar';
import IntroSection from './components/IntroductionSection/IntroSection';
import About from './components/About/About';

function App() {
  return (
    <div className="App Portfolio">
      <div className='relative'>
        <Navbar/>
        <IntroSection/>
        <About/>
      </div>
    </div>
  );
}

export default App;
