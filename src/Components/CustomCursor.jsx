import  { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: (e.clientX - 10), y: (e.clientY - 10) });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  
  return (
    <div
      className='custom-cursor sm:hidden'
      style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
    />
  );
};

export default CustomCursor;