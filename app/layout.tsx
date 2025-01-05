'use client'
import "./globals.css";
import { animated, useSpring } from '@react-spring/web'
import { HashLoader } from "react-spinners";
import { Suspense, useEffect } from "react";
import Navbar from "@/components/pages/layout/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const propsFadeOut = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    delay: 2500,
  })
  // const propsFadeIn = useSpring({
  //   to: { opacity: 1 },
  //   from: { opacity: 0 },
  //   delay: 3000,
  // })
  useEffect(() => {

  }, [])
  const Loading = () => (<div className='text-center flex items-center w-full h-[100vh] justify-center'>
    <div className=''>
      <animated.div style={propsFadeOut} >
        <HashLoader
          className='mx-auto'
          color={"#3BF6BE"}
          loading={true}

          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </animated.div>
    </div>
  </div>)
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className="bg-custom relative min-h-screen ">

          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-transparent pointer-events-none"></div>
          <Suspense fallback={<Loading />}>
            <div className='container mx-auto sm:w-[85%] w-full relative'>
              <Navbar />
              {children}
              <div className='hidden md:block fixed w-[75px] h-[75px] bg-[#FAFAF9] bottom-[5%] right-[5%] rounded-full hover:cursor-pointer z-10'>
                <div className='flex-none mx-auto sm:mx-0 z-10' onClick={() => window.open('/CV.pdf', '_blank')}>
                  <div className='p-2'>
                    <img src='/icons/cv.png' className='rounded-full' />
                  </div>
                </div>
              </div>
            </div>

          </Suspense>
        </div>
      </body>
    </html>
  );
}
