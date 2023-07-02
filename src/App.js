import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Bio } from './Components/Bio';
import Navbar from './Components/Navbar';
import { Feed } from './Components/Feed';
import Codes from './Components/Codes';
import { useEffect, useState } from 'react';
import HashLoader from "react-spinners/HashLoader";
import { useSpring, animated } from "react-spring"
import AOS from 'aos';
import 'aos/dist/aos.css'
function App() {
  const [loading, setloading] = useState(false);
  const propsFadeOut = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    delay: 2500,
  })
  const propsFadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 3000,
  })
  useEffect(() => {
    setloading(true)
    AOS.init({
    })
    AOS.refresh();
    setTimeout(() => {
      setloading(false)
    }, 3000);
  }, []);

  return (
    <>
      {
        loading ?
          <div className='text-center flex items-center w-full h-[100vh] justify-center'>
            <div className=''>
              <animated.div style={propsFadeOut} >
                <HashLoader
                  className='mx-auto'
                  color={"#3BF6BE"}
                  loading={loading}

                  size={100}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </animated.div>
            </div>
          </div>
          :
          <animated.div style={propsFadeIn}>
            <div className='container mx-auto sm:w-[85%] w-full'>

              <Navbar />
              <div className='px-3 mb-[300px]'>
                <Bio />
                <Feed />
                <Codes />
              </div>
            </div>
          </animated.div>
      }

    </>
  );
}

export default App;
