"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/app/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.9
}) => {
  const [scope, animate] = useAnimate();
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  let wordsArray = words.split(" ");

  // Scroll listener to update scrollY
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!hasAnimated && scrollY >= 1355) {
      // Trigger animation when scrollY is >= 1355 and hasn't animated yet
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
      setHasAnimated(true); // Mark as animated to prevent retrigger
    }
  }, [scrollY, hasAnimated, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${className} opacity-0`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className={`dark:text-white ${className} text-2xl leading-snug tracking-wide`}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
