"use client";

import { useEffect, useState } from "react";

export default function AnimatedGreeting({
  greeting,
  name,
}: {
  greeting: string;
  name: string;
}) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const fullText = `${greeting} ${name}`;

  useEffect(() => {
    const characters = Array.from(fullText);
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionPreference.matches) {
      const timer = window.setTimeout(() => setVisibleCharacters(characters.length), 0);
      return () => window.clearTimeout(timer);
    }

    let count = 0;
    const timer = window.setInterval(() => {
      count += 1;
      setVisibleCharacters(count);
      if (count >= characters.length) window.clearInterval(timer);
    }, 90);

    return () => window.clearInterval(timer);
  }, [fullText]);

  const visibleText = Array.from(fullText).slice(0, visibleCharacters);
  const greetingCharacters = Array.from(greeting).length;

  return (
    <h1
      aria-label={fullText}
      className="font-[family-name:var(--font-heading)] font-extrabold tracking-tight"
    >
      <span aria-hidden="true" className="mb-1 block whitespace-pre text-4xl text-foreground sm:text-5xl lg:text-6xl">
        {visibleText.slice(0, greetingCharacters).map((character, index) => (
          <span key={index} className="animate-type-character inline-block">
            {character === " " ? "\u00a0" : character}
          </span>
        ))}
      </span>
      <span
        aria-hidden="true"
        className="block whitespace-nowrap text-[clamp(1.75rem,5.5vw,4.5rem)] text-primary"
      >
        {visibleText.slice(greetingCharacters + 1).map((character, index) => (
          <span key={index} className="animate-type-character inline-block">
            {character === " " ? "\u00a0" : character}
          </span>
        ))}
      </span>
    </h1>
  );
}
