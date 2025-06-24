import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [greeting, setGreeting] = useState("");

  // Dynamic greeting based on current time
  useEffect(() => {
    const currentHour = new Date().getHours();
    let greet = "Hello!";

    if (currentHour < 12) {
      greet = "Good Morning 🌅";
    } else if (currentHour < 18) {
      greet = "Good Afternoon ☀️";
    } else {
      greet = "Good Evening 🌙";
    }

    setGreeting(greet);
  }, []);

  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center space-y-6">
      {/* Time Greeting */}
      <div className="text-xl md:text-2xl text-gray-400 font-light animate-pulse">
        {greeting}
      </div>

      {/* Typewriter */}
      <div className="text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Loading Bar */}
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-green-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
