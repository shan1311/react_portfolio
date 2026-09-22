import { useEffect, useState } from "react";

export default function RotatingText({ words, typingSpeed = 55, deletingSpeed = 28, pause = 1400 }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => setSubIndex(subIndex + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="rotating-text">
      {words[wordIndex].substring(0, subIndex)}
      <span className="rotating-cursor">|</span>
    </span>
  );
}