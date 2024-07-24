import { useState } from "react";
import Image from "next/image";

const ProductImage = ({ imagePath, selected, onClick }) => (
  <div
    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
      selected && "border-[2px] border-black"
    }`}
    onClick={onClick}
  >
    <Image src={imagePath} alt="openbed" layout="fill" objectFit="contain" />
    {selected && (
      <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    )}
  </div>
);

const Products = () => {
  const [selectedImagePath, setSelectedImagePath] = useState("/single.png");

  const handleImageClick = (path) => {
    setSelectedImagePath(path);
  };

  const productData = [
    { imagePath: "/single.png", text: "Size - Small Single 2ft6", amount: "£200.00" },
    { imagePath: "/single2.png", text: "Size - Single 3ft", amount: "£200.00" },
    { imagePath: "/Double-small.png", text: "Size - Small Double 4ft", amount: "£245.00" },
    { imagePath: "/Double-small2.png", text: "Size - Double 4ft6", amount: "£245.00" },
    { imagePath: "/Double-small3.png", text: "Size - King 5ft", amount: "£300.00" },
    { imagePath: "/Double-small4.png", text: "Size - Superking 6ft", amount: "£350.00" },
  ];

  const selectedProduct = productData.find(product => product.imagePath === selectedImagePath);

  return (
    <div className="my-10 w-[100%] px-5 max-sm:px-1">
      <div className="flex w-full max-md:flex-col max-lg:flex-wrap justify-evenly gap-10 max-lg:justify-center">
        <div className="w-full flex justify-center">
          <div className="flex flex-col w-full max-xl:w-full max-lg:w-[70%] max-md:w-[90%] max-sm:w-full">
            <div className="max-sm:w-full w-[100%] h-[70vh] relative max-md:h-[60vh] max-sm:h-[50vh]">
              <Image
                src="/OttomanEndLiftBaseclosedBg.jpg"
                alt="openbed"
                layout="fill"
                objectFit="cover"
              />
              {selectedImagePath === "/OttomanEndLiftBaseclosedBg.jpg" && (
                <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#00acbb]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex gap-5 w-[100%] h-[6.25rem] max-sm:h-[4rem] max-sm:w-full relative top-2">
              {productData.map(product => (
                <ProductImage
                  key={product.imagePath}
                  imagePath={product.imagePath}
                  selected={selectedImagePath === product.imagePath}
                  onClick={() => handleImageClick(product.imagePath)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-lg:mt-10 w-full max-lg:text-center">
          <div>
            <p className="text-[1.2rem]">{selectedProduct.text}</p>
            <span className="text-[#00acbb] font-semibold text-[1.2rem]">{selectedProduct.amount}</span>
          </div>

          <div className="border-black border-[2px] w-[85%] my-0 mx-auto p-3 cursor-pointer rounded-2xl text-center">
            {selectedProduct.text}
          </div>

          <div className="grid bg-[#f1feff] h-[40vh] rounded-2xl justify-center py-10 grid-cols-6 max-xl:grid-cols-3 max-md:mt-20 max-sm:grid-cols-2 gap-8 max-sm:items-center px-5 my-5 max-lg:justify max-sm:justify-between">
            {/* Additional content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
