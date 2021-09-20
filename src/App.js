import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import People from './components/People/People';

import leftShape from './svg/left_shape.svg';
import lineShape from './svg/line.svg';
import rightShape from './svg/right_shape.svg';
import waveShape from './svg/wave.svg';
import circleShape from './svg/circle.svg';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Logo />
      <Header />
      <People />
      <img src={leftShape} className="left-shape" alt="shape" />
      <img src={waveShape} className="wave-shape" alt="shape" />
      <img src={lineShape} className="line-shape" alt="shape" />
      <img src={rightShape} className="right-shape" alt="shape" />
      <img src={circleShape} className="circle-shape" alt="shape" />
    </div>
  );
}

export default App;
