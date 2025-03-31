import { useState, useEffect } from "react";

const messages = [
  "The server took a nap... Waking it up now! 😴",
  "Fetching the best homes... Patience is key! 🔑",
  "Bringing properties to life... Just a moment! 🏡✨",
];

export default function Loader() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-200px)] gap-4">
      {/* Bouncing dots animation */}
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce [animation-delay:-.5s]"></div>
      </div>

      <div
        className={`text-lg font-medium text-gray-600 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {messages[messageIndex]}
      </div>
    </div>
  );
}
