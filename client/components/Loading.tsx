import { useEffect, useState } from "react";
import Logo from "/Images/Logo.png";

interface LoadingProps {
  onComplete?: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 50;
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete?.();
          }, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-goooey-blue flex flex-col items-center justify-center z-[9999]">
      <div className="flex flex-col items-center gap-12 animate-in fade-in duration-500">
        <img
          src={Logo}
          alt="Goooey Logo"
          className="w-32 md:w-40 h-auto"
        />

        <div className="relative w-[min(700px,80vw)]">
          <div className="h-3.5 rounded-full bg-white shadow-[0_2px_0_0_#000] overflow-hidden">
            <div
              className="h-full rounded-full bg-goooey-yellow border border-black transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}