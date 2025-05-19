import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useSmoothScroll = () => {
  const scrollRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.2, // Ajuste la vitesse du scroll
      lerp: 0.1, // Rend le mouvement plus fluide
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return scrollRef;
};

export default useSmoothScroll;
