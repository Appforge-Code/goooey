import React from 'react';

/**
 * This component renders the main wavy background shape.
 * It's a single SVG path that creates the sand-colored area,
 * with a top wave and a bottom wave.
 */
const SandShape = () => (
  <svg
    className="absolute inset-0 w-full"
    viewBox="0 0 1440 900"
    preserveAspectRatio="xMidYMid slice"
  >
    <path
      
      d="M-10,250 C 200,150 350,350 550,250 S 900,150 1100,250 S 1450,350 1650,250 L 1650 650 Q 720 800 0 650 L -10 650 Z"
      fill="#FDD67E" // Sand color
    />
  </svg>
);


const TextRibbon = () => (
  <svg
    className=" absolute inset-0 w-full h-full"
    viewBox="0 0 1440 900"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
  >
    {/* 1. Define the path for the text to follow. */}
    {/* This path 'd' attribute is IDENTICAL to the top edge of the SandShape path. */}
    <path
      id="text-path"
      d="M-10,250 C 200,150 350,350 550,250 S 900,150 1100,250 S 1450,350 1650,250"
    />

    {/* 2. Create the black ribbon background by stroking the path. */}
    <use href="#text-path" stroke="#000000" strokeWidth="30" />

    {/* 3. Add the text using textPath. */}
    <text
      fill="#FFFFFF"
      fontWeight="800"
      fontSize="14"
      letterSpacing="2"
      className="uppercase" // Ensures text is uppercase as in the image
    >
      <textPath href="#text-path" startOffset="0">
        {/* Repeat the text multiple times to create a seamless, infinite look */}
        {/* This ensures it fills the screen on all device widths */}
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <tspan  key={i}>WHERE TASTE COMES ALIVE • </tspan>
          ))}
      </textPath>
    </text>
  </svg>
);


export default function SendShape() {
  return (
   
    <div className="">
      
      {/* <SandShape /> */}

      <TextRibbon />
    </div>
  );
}