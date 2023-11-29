"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Nav from "@/components/Nav";
import Offer from '@/components/offer'
import Mainsec from '@/components/mainsec'
import Productcat from '@/components/productscat'
import Contact from '@/components/contact'
import Nav2 from '@/components/nav2'



export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      {/* <Nav></Nav> */}
      <Mainsec></Mainsec>
      <Offer></Offer>
      <Productcat></Productcat>
      <Contact></Contact>
    </>
  );
}
