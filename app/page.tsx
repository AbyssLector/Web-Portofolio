'use client'

import AboutMe from "@/components/pages/main/AboutMe";
import { Bio } from "@/components/pages/main/Bio";
import { Feed } from "@/components/pages/main/Feed";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
// const Animator = dynamic(
//   import("react-scroll-motion").then((it) => it.Animator),
//   { ssr: false }
// );
const Page = () => {
  const handleClick = (url: string) => {
    window.open(url, '_blank');
  }
  // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  // const FadeUp = batch(Fade(), Move(), Sticky());
  useEffect(()=>{
    document.title = 'Ihsanul Portofolio' 
  },[])
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <>
    {isTabletOrMobile ?
      <div className="pb-60 px-3 flex flex-col gap-12"> 
        <Bio/>
        <AboutMe />
        <Feed handleClick={handleClick} />
      </div>
    : 
    <ScrollContainer snap="proximity" className="px-3 pb-[300px]">
    <ScrollPage>
        <Bio />
      {/* <Animator animation={ZoomInScrollOut}>
      </Animator> */}
    </ScrollPage>
    <ScrollPage>
        <AboutMe />
      {/* <Animator animation={ZoomInScrollOut}>
      </Animator> */}
    </ScrollPage>
    <ScrollPage>
        <Feed handleClick={handleClick} />
      {/* <Animator animation={ZoomInScrollOut}>
      </Animator> */}
    </ScrollPage>
  </ScrollContainer>}
      

    </>
  );
}
export default Page