import React, { useState } from 'react';

const SlipLids = ({ defaultText, buttonTexts, buttonStyles }) => {
  const [activeButton, setActiveButton] = useState(0);
  const [displayText, setDisplayText] = useState(defaultText);

  const handleSlipLidsBtnClick = (buttonIndex, text) => {
    console.log("Button clicked:", buttonIndex, text);
    setActiveButton(buttonIndex);
    setDisplayText(text);
  };

  // Ensure buttonStyles has the same length as buttonTexts or provide default styles
  const styles = buttonStyles ? buttonStyles : Array(buttonTexts.length).fill({});

  return (
    <div>
      <div className="min-h-[30vh] flex flex-col justify-center rounded-2xl items-center gap-5 bg-[#f1feff]">
  <div className="border-black border-[2px] text-[#222222] font-semibold w-[85%] p-2 cursor-pointer rounded-2xl text-center">
    {displayText}
  </div>

  <div className="flex gap-[1%] text-[0.8rem] w-[100%] justify-center text-center">
    {buttonTexts.map((text, index) => (
      <div 
        key={index}
        className={`border-black border-[2px] w-[42%] p-2 cursor-pointer rounded-2xl text-center ${activeButton === index ? 'bg-black  text-white' : ''}`}
        onClick={() => handleSlipLidsBtnClick(index, text)}
        style={styles[index]} // Use styles array instead of buttonStyles directly
      >
        {text}
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default SlipLids;
