import React from 'react';

const Card = ({ title, text }) => {
  return (
    <div className="bg-white shadow-md w-[80%] max-sm:w-[100%] rounded-lg p-6 mb-4">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
};

export default Card;
