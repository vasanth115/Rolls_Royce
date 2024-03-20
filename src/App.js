import './App.css';
import { useEffect, useState } from 'react';
import { Background } from './Components/Background/Background';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';

function App() {
  const data = [
    { text1: "Dive Into", text2: "What You Love" },
    { text1: "Indulge", text2: "Your passions" },
    { text1: "Give in to", text2: "your passions" },
    { text1: "To fuel up", text2: "Your Wanderlust" },
    { text1: "Live Freely", text2: "Drive Defensively" },
    { text1: "Normal Speed", text2: "Metts every needs" }
  ];

  const [count, setCount] = useState(0);
  const [playstatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => (prevCount === 5 ? 0 : prevCount + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Background playstatus={playstatus} herocount={count} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        herodata={data[count]}
        herocount={count}
        setCount={setCount}
        playstatus={playstatus}
      />
    </div>
  );
}

export default App;
