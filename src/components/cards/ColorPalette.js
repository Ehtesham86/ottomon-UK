import { useState } from 'react';

const ColorPalette = () => {
  const colors = [
    '/chenille-light-grey.jpeg',
    '/Chenille-Black.jpg',
    '/ch-cream.jpg',
    '/ch-teal.jpg',
    '/Chenille-Black.jpg',
    '/Linen-Wheat.jpg',
    '/Linen-Sage.jpg',
    '/Linen-Copper.jpg',
    '/Linen-Teal2.jpg',
    '/Linen-Cream.jpg',
    '/Linen-Barley-Swatch.jpg',
    '/Ascott-Weave-Turquoise.jpg',
    '/Ascot-Weave-Silver-Grey.jpg',
    '/Ascot-Biege.jpg',
    '/Ascott-Weave-Denim.jpg',
    '/Ascot-Weave-Charcoal.jpg',
    '/Ascott-Beige-ottoman-beds.jpg',
    '/Coniston-Armour.jpeg',
    '/Coniston-Velvet-Pink.jpeg',
    '/Coniston-Velvet-Mustard.jpeg',
    '/Coniston-Velvet-Mink.jpg',
    '/Coniston-Velvet-Ivory.jpeg',  
    '/Wool-Teal.jpeg',
    '/Wool-Jade.jpeg',
    '/Wool-Steel.jpeg',
    '/Wool-Chrome.jpeg',
    '/Wool-Truffle.jpeg', 
    '/Plush-Velvet-Ivory.jpeg',
    '/Plush-Velvet-Grey.jpeg',
    '/Plush-Velvet-Sky-Blue.jpeg',
    '/Plush-Velvet-Mustard.jpeg',
    '/Plush-Velvet-Beige.jpeg',    
    '/plush-velvet-silver.jpg',    
    '/Plush-Velvet-black.jpg',    
    '/Plush-Velvet-royal-blue.jpg',    
    '/Plush-Velvet-black.jpg',    
    '/plush-velvet-duck-egg-skyblue.jpg',    
    '/PLUSH-VELVET-LILAC.jpg',    
    '/Plush-Velvet-Ivory.jpeg',  
    '/Plush-Velvet-Bottle-Green.jpg', 
    '/Rustique-Velvet-chocolate.jpeg',    
    '/Rustique-Velvet-Gold.jpeg',    
    '/Rustique-Velvet-slate.jpeg',    
    '/Rustique-Velvet-stone-blue.jpg',    
    '/Rustique-Velvet-turqoise.jpeg',  
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (colorPath) => {
    const colorName = getColorName(colorPath);
    setSelectedColor(colorName);
  };

  const getPrice = () => {
    // Placeholder function for getting price
    return '£25';
  };

  const getColorName = (colorPath) => {
    const fileName = colorPath.substring(colorPath.lastIndexOf('/') + 1);
    const colorName = fileName.split('.')[0].replace(/-/g, ' ');
    return colorName.charAt(0).toUpperCase() + colorName.slice(1);
  };

  const renderColorRow = (rowColors, label) => {
    return (
      <>
        {label && (
          <div className="flex justify-center mt-2 mb-4 w-full">
            <div className="h-[1px] rounded-md bg-black flex items-center justify-center w-full">
              <p className="font-bold text-md bg-white px-3">{label}</p>
            </div>
          </div>
        )}
        <div className="grid xl:grid-cols-6 xl:gap-8 grid-cols-3  sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-3  gap-2">
          {rowColors.map((color, index) => (
            <div key={index} className="flex flex-col gap-2  items-center">
              <div
                className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-[1px] rounded-md cursor-pointer transition duration-300 ease-in-out"
                onClick={() => handleColorClick(color)}
              >
                <img
                  src={color} 
                  alt={label} 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="text-center text-sm font-semibold my-2">{getColorName(color)} {getPrice()}</p>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-wrap gap-2 p-4 w-full">
      <div className="w-full mt-4 text-center">
        <div className="text-lg font-semibold w-full border-black border-[2px] mt-10 mx-auto p-3 cursor-pointer rounded-2xl text-center">
          {selectedColor ? selectedColor : 'Select a color'}
        </div>
      </div>
      {renderColorRow(colors.slice(0, 5), 'Chenille')}
      {renderColorRow(colors.slice(5, 11), 'Linen')}
      {renderColorRow(colors.slice(11, 17), 'Ascot')}
      {renderColorRow(colors.slice(17, 22), 'Coniston Velvet')}
      {renderColorRow(colors.slice(22, 27), 'Wool')}
      {renderColorRow(colors.slice(27, 33), 'Plush velvet')}
      {renderColorRow(colors.slice(33, 38))}
      {renderColorRow(colors.slice(38, 39))}
      {renderColorRow(colors.slice(39, 44), 'Rustique Velvet')}
    </div>
  );
};

export default ColorPalette;
