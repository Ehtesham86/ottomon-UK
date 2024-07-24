// "use client";
// import { useState, useEffect } from "react";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "animate.css/animate.min.css";
// import Image from "next/image";
// import SlipLids from "@/components/cards/SlipLids";
// import ColorPalette from "@/components/cards/ColorPalette";
// import "../../css/styles.css";
// import ProductbaseDropdown from "@/components/ProductbaseDropdown";
// import BedSizeTable from "@/components/BedSizeTable";
// import Faq from "@/components/Faq";
// import BaseProducts from "@/components/BaseProducts";

// const Products = () => {
//   const buttonStyles = [{ padding: "0.25rem" }, { padding: "0.25rem" }];

//   const [selectedImagePath, setSelectedImagePath] = useState("/single.png");
//   const [selectedImagePathType, setSelectedImagePathType] = useState(
//     "/Divan-Base-Only-b.png"
//   );
//   const [selectedImagePathDepth, setSelectedImagePathDepth] =
//     useState("/Deep-Base.png");
//   const [amount, setAmount] = useState("£200.00"); // Initial amount value

//   const [showBedDephthOptions, setShowBedDephthOptions] = useState(false);

//   const displayDepthOptions = () => {
//     setShowBedDephthOptions(true);
//   };
//   const removeDepthOptions = () => {
//     setShowBedDephthOptions(false);
//   };
//   // Handler function to update selected image path
//   const handleImageClick = (path) => {
//     setSelectedImagePath(path);
//   };
//   const handleImageClickType = (path) => {
//     setSelectedImagePathType(path);
//   };
//   const handleImageClickDepth = (path) => {
//     setSelectedImagePathDepth(path);
//   };

//   const updateBedSizeAmount = () => {
//     const bedSizeAmount = getTextForImageBedSize().amount;

//     setAmount(bedSizeAmount);
//   };
//   const updateBedTypeAmount = () => {
//     const bedTypeAmount = getTextForImageBedType().amount;

//     setAmount(bedTypeAmount);
//   };
//   const updateBedDepthAmount = () => {
//     const bedDepthAmount = getTextForImageBedDepth().amount;

//     setAmount(bedDepthAmount);
//   };

//   // slip lids

//   /// Function to get text and amount based on selected image
//   const getTextForImageBedSize = () => {
//     switch (selectedImagePath) {
//       case "/single.png":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Size</span> - Small Single 2ft6
//             </p>
//           ),
//           amount: "£490.00",
//         };
//       case "/single2.png":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Size</span> - Single 3ft
//             </p>
//           ),
//           amount: "£490.00",
//         };
//       case "/Double-small.png":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Size</span> - Small Double 4ft
//             </p>
//           ),
//           amount: "£310.00",
//         };
//       case "/Double-small2.png":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Size</span> - Double 4ft6
//             </p>
//           ),
//           amount: "£310.00",
//         };
//       case "/Double-small3.png":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Size</span> - King 5ft
//             </p>
//           ),
//           amount: "£365.00",
//         };
//       case "/Double-small4.png":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Size</span> - Superking 6ft
//             </p>
//           ),
//           amount: "£415.00",
//         };
//       default:
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Size</span> - Small Single 2ft6
//             </p>
//           ),
//           amount: "£490",
//         };
//     }
//   };

//   const getTextForImageBedType = () => {
//     switch (selectedImagePathType) {
//       case "/Divan-Base-Only-b.png.png":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Type</span> - Base Only +£0
//             </p>
//           ),
//           amount: "£225.00",
//         };
//       case "/2-Continentel-Drawer-same-side-b.png":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Type</span> - 2 Drawer Same Side
//               +£40
//             </p>
//           ),
//           amount: "£265.00",
//         };
//       case "/2-Draw-Same-Side-b.png":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Type</span> - 2 Drawer Continental
//               +£40
//             </p>
//           ),
//           amount: "£265.00",
//         };
//       case "/Side-Opening-Ottoman-b.jpg":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Type</span> - End Lift Ottoman Bed
//               +£60
//             </p>
//           ),
//           amount: "£490.00",
//         };
//       case "/End-Foot-Opening.png":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Type</span> - Side Lift Ottoman
//               Bed +£60
//             </p>
//           ),
//           amount: "£490.00",
//         };
//       default:
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Type</span> - Side Lift Ottoman
//               Bed +£60
//             </p>
//           ),
//           amount: "£225",
//         };
//     }
//   };

//   const getTextForImageBedDepth = () => {
//     switch (selectedImagePathDepth) {
//       case "/Deep-Base.png":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Type</span> - Base Only +£0
//             </p>
//           ),
//           amount: "£285.00",
//         };
//       case "/Standard-Base.png":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Type</span> - 2 Drawer Same Side
//               +£40
//             </p>
//           ),
//           amount: "£465.00",
//         };
//       case "/Super-Deep-Base.png":
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Type</span> - 2 Drawer Continental
//               +£40
//             </p>
//           ),
//           amount: "£735.00",
//         };
//       default:
//         return {
//           text: (
//             <p>
//               <span className="font-semibold">Type</span> - Side Lift Ottoman
//               Bed +£60
//             </p>
//           ),
//           amount: "£285",
//         };
//     }
//   };

//   useEffect(() => {
//     updateBedSizeAmount();
//   }, [selectedImagePath]);

//   useEffect(() => {
//     updateBedTypeAmount();
//   }, [selectedImagePathType]);

//   useEffect(() => {
//     updateBedDepthAmount();
//   }, [selectedImagePathDepth]);

//   const [shake, setShake] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShake(true);
//       setTimeout(() => {
//         setShake(false);
//       }, 1000); // Duration of the shake animation
//     }, 5000); // Interval between each shake animation

//     return () => clearInterval(interval);
//   }, []);

//   const [BtnAmount, setBtnAmount] = useState(1); // Initial amount
//   const [counter, setCounter] = useState(1); // Initial counter

//   const handleIncrease = () => {
//     setCounter(counter + 1); // Increment counter
//     setAmount(BtnAmount + BtnAmount); // Double the amount
//   };

//   const handleDecrease = () => {
//     if (counter > 1) {
//       setCounter(counter - 1); // Decrement counter
//       setBtnAmount(amount - amount / 2); // Halve the amount
//     }
//   };

//   const [isHidden, setIsHidden] = useState(false);

//   useEffect(() => {
//     let lastScrollTop = 0;
//     const handleScroll = () => {
//       const currentScrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;
//       if (currentScrollTop > lastScrollTop) {
//         // Scrolling down
//         setIsHidden(true);
//       } else {
//         // Scrolling up
//         setIsHidden(false);
//       }
//       lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const [dimensionsOpen, setDimensionsOpen] = useState(false);
//   const [faqOpen, setFaqOpen] = useState(false);
//   const [descriptionOpen, setDescriptionOpen] = useState(false);
//   const [reviewOpen, setReviewOpen] = useState(false);

//   const dimensionsDropdown = () => {
//     setDimensionsOpen(!dimensionsOpen);
//     setFaqOpen(false);
//     setDescriptionOpen(false);
//     setReviewOpen(false);
//   };

//   const faqDropdown = () => {
//     setFaqOpen(!faqOpen);
//     setDimensionsOpen(false);
//     setDescriptionOpen(false);
//     setReviewOpen(false);
//   };
//   const descriptionDropdown = () => {
//     setDescriptionOpen(!descriptionOpen);
//     setFaqOpen(false);
//     setDimensionsOpen(false);
//     setReviewOpen(false);
//   };


//   const reviewDropdown = () => {
//     setReviewOpen(!reviewOpen);
//     setFaqOpen(false);
//     setDimensionsOpen(false);
//     setDescriptionOpen(false);
//   };

//   return (
//     <div>
//       <div className="my-10 w-[100%] px-5 max-sm:px-1">
//         <div className="flex  w-full max-md:flex-col max-lg:flex-wrap justify-evenly gap-10 max-lg:justify-center">
//           {/* <ProductSidebar /> */}

//           <div className="w-full  flex justify-center">
//             <div className="flex flex-col w-full max-xl:w-full max-lg:w-[70%] max-md:w-[90%] max-sm:w-full">
//               <div className="max-sm:w-full w-[100%] min-h-[60vh] relative max-md:min-h-[50vh] max-sm:min-h-[40vh]">
//                 <Image
//                   src="/OttomanEndLiftBaseclosedBg.jpg"
//                   alt="openbed"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//                 {selectedImagePath === "/OttomanEndLiftBaseclosedBg.jpg" && (
//                   <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-[#00acbb]"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                   </div>
//                 )}
//               </div>

//               <div className="flex gap-1 w-[100%] h-[6.25rem] max-sm:h-[4rem] max-sm:w-full relative top-2">
//                 <div className="w-1/4  max-sm:w-1/4  max-sm:h-[full] relative">
//                   <Image
//                     src="/Ottoman_Bed_side_opening-small.jpg"
//                     alt="openbed"
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                   {selectedImagePath ===
//                     "/Ottoman_Bed_side_opening-small.jpg" && (
//                     <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4 text-[#00acbb]"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </div>
//                   )}
//                 </div>

//                 <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
//                   <Image
//                     src="/Ottoman-Side.jpeg"
//                     alt="openbed"
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                   {selectedImagePath === "/Ottoman-Side.jpeg" && (
//                     <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4 text-[#00acbb]"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </div>
//                   )}
//                 </div>

//                 <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
//                   <Image
//                     src="/Ottoman_Bed_side_opening.jpg"
//                     alt="openbed"
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                   {selectedImagePath === "/Ottoman_Bed_side_opening.jpg" && (
//                     <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4 text-[#00acbb]"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </div>
//                   )}
//                 </div>

//                 <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
//                   <Image
//                     src="/Ottoman_Bed_side_opening-small.jpg"
//                     alt="openbed"
//                     objectFit="cover"
//                     layout="fill"
//                     className="-scale-x-100"
//                   />
//                   {selectedImagePath ===
//                     "/Ottoman_Bed_side_opening-small.jpg" && (
//                     <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4 text-[#00acbb]"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bed Size section */}
//           <div className="max-lg:mt-10  w-full max-lg:text-center">
//             <div>
//               <p className="text-[1.2rem]">Ottoman Bed Without Headboard</p>
//               <span className="text-[#00acbb] font-semibold text-[1.2rem]">
//                 {amount}
//               </span>
//             </div>

//             <div className="  py-10 ">
//               <div className="bg-[#f1feff] min-h-[40vh] flex flex-col justify-center rounded-xl">
//                 <div className="border-black border-[2px] w-[85%] mt-10 mx-auto p-3 cursor-pointer rounded-2xl text-center">
//                   {getTextForImageBedSize().text}
//                 </div>
//                 <div className="grid text-sm gap-y-20 rounded-2xl justify-items-center py-10 grid-cols-5 max-xl:grid-cols-3 max-md:mt-20 max-sm:grid-cols-2 gap-8 max-sm:items-center px-5 my-5 max-lg:justify- max-sm:justify-between">
//                   <div
//                     className={`h-[6.25rem]  w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
//                       selectedImagePath === "/single.png" &&
//                       " border-[2px] border-black"
//                     }`}
//                     onClick={() => handleImageClick("/single.png")}
//                   >
//                     <Image
//                       // add single image later
//                       src="/Double-small.png"
//                       alt="openbed"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                     {selectedImagePath === "/single.png" && (
//                       <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="absolute top-full mb-10 w-full left-0 text-center">
//                       Small Single 2ft6
//                     </div>
//                   </div>

//                   <div
//                     className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
//                       selectedImagePath === "/single2.png" &&
//                       "border-[2px] border-black"
//                     }`}
//                     onClick={() => handleImageClick("/single2.png")}
//                   >
//                     <Image
//                       // add single image later
//                       src="/Double-small.png"
//                       alt="openbed"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                     {selectedImagePath === "/single2.png" && (
//                       <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="absolute top-full mb-10 w-full left-0 text-center">
//                       Single 3ft
//                     </div>
//                   </div>

//                   <div
//                     className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
//                       selectedImagePath === "/Double-small.png" &&
//                       "border-[2px] border-black"
//                     }`}
//                     onClick={() => handleImageClick("/Double-small.png")}
//                   >
//                     <Image
//                       src="/Double-small.png"
//                       alt="openbed"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                     {selectedImagePath === "/Double-small.png" && (
//                       <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="absolute top-full mb-10 w-full left-0 text-center">
//                       Small Double 4ft
//                     </div>
//                   </div>

//                   <div
//                     className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
//                       selectedImagePath === "/Double-small2.png" &&
//                       "border-[2px] border-black"
//                     }`}
//                     onClick={() => handleImageClick("/Double-small2.png")}
//                   >
//                     <Image
//                       src="/Double-small.png"
//                       alt="openbed"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                     {selectedImagePath === "/Double-small2.png" && (
//                       <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="absolute top-full mb-10 w-full left-0 text-center">
//                       Double 4ft6
//                     </div>
//                   </div>

//                   <div
//                     className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem]  px-10 rounded-lg relative cursor-pointer ${
//                       selectedImagePath === "/Double-small3.png" &&
//                       "border-[2px] border-black"
//                     }`}
//                     onClick={() => handleImageClick("/Double-small3.png")}
//                   >
//                     <Image
//                       src="/Double-small.png"
//                       alt="openbed"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                     {selectedImagePath === "/Double-small3.png" && (
//                       <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2 rounded-full">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="absolute top-full mb-10 w-full left-0 text-center">
//                       King 5ft
//                     </div>
//                   </div>
//                   <div
//                     className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem]  px-10 rounded-lg relative cursor-pointer ${
//                       selectedImagePath === "/Double-small4.png" &&
//                       "border-[2px] border-black"
//                     }`}
//                     onClick={() => handleImageClick("/Double-small4.png")}
//                   >
//                     <Image
//                       src="/Double-small.png"
//                       alt="openbed"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                     {selectedImagePath === "/Double-small4.png" && (
//                       <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2 rounded-full">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="absolute top-full mb-10 w-full left-0 text-center">
//                       Super King 6ft
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Bed types section*/}
//               <div className="bg-[#f1feff] min-h-[60vh] max-sm:h-[90vh] mt-10 flex flex-col rounded-xl ">
//                 <div className="border-black border-[2px] w-[85%] mt-10 mx-auto p-3 cursor-pointer rounded-2xl text-center">
//                   {getTextForImageBedType().text}
//                 </div>
//                 <div className="grid text-sm justify-items-center rounded-2xl  py-10 grid-cols-6 max-xl:grid-cols-3 max-md:mt-20 max-lg:grid-cols-2 gap-8 max-sm:items-center px-5 my-5 max-xl:gap-20 max-md:gap-28  max-sm:justify-between">
//                   <div
//                     className={`h-[6.25rem]  w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
//                       selectedImagePathType === "/Divan-Base-Only-b.png" &&
//                       " border-[2px] border-black"
//                     }`}
//                     onClick={() => {
//                       handleImageClickType("/Divan-Base-Only-b.png");
//                       removeDepthOptions();
//                     }}
//                   >
//                     <Image
//                       src="/Divan-Base-Only-b.png"
//                       alt="openbed"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                     {selectedImagePathType === "/Divan-Base-Only-b.png" && (
//                       <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="absolute top-full mb-10 w-full  left-0 text-center">
//                       Base Only +£0
//                     </div>
//                   </div>

//                   <div
//                     className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
//                       selectedImagePathType ===
//                         "/2-Continentel-Drawer-same-side-b.png" &&
//                       "border-[2px] border-black"
//                     }`}
//                     onClick={() => {
//                       handleImageClickType(
//                         "/2-Continentel-Drawer-same-side-b.png"
//                       );
//                       removeDepthOptions();
//                     }}
//                   >
//                     <Image
//                       src="/2-Continentel-Drawer-same-side-b.png"
//                       alt="openbed"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                     {selectedImagePathType ===
//                       "/2-Continentel-Drawer-same-side-b.png" && (
//                       <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="absolute top-full mb-10 w-full left-0 text-center">
//                       2 Drawer same side +£40
//                     </div>
//                   </div>

//                   <div
//                     className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
//                       selectedImagePathType === "/2-Draw-Same-Side-b.png" &&
//                       "border-[2px] border-black"
//                     }`}
//                     onClick={() => {
//                       handleImageClickType("/2-Draw-Same-Side-b.png");
//                       removeDepthOptions();
//                     }}
//                   >
//                     <Image
//                       src="/2-Draw-Same-Side-b.png"
//                       alt="openbed"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                     {selectedImagePathType === "/2-Draw-Same-Side-b.png" && (
//                       <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="absolute top-full mb-10 w-full left-0 text-center">
//                       2 Drawer Continental +£40
//                     </div>
//                   </div>

//                   <div
//                     className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
//                       selectedImagePathType === "/Side-Opening-Ottoman-b.jpg" &&
//                       "border-[2px] border-black"
//                     }`}
//                     onClick={() => {
//                       handleImageClickType("/Side-Opening-Ottoman-b.jpg");
//                       displayDepthOptions();
//                     }}
//                   >
//                     <Image
//                       src="/Side-Opening-Ottoman-b.jpg"
//                       alt="openbed"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                     {selectedImagePathType ===
//                       "/Side-Opening-Ottoman-b.jpg" && (
//                       <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="absolute top-full mb-10 w-full left-0 text-center">
//                       End lift Ottoman Bed +£60
//                     </div>
//                   </div>

//                   <div
//                     className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
//                       selectedImagePathType === "/End-Foot-Opening.png" &&
//                       "border-[2px] border-black"
//                     }`}
//                     onClick={() => {
//                       handleImageClickType("/End-Foot-Opening.png");
//                       displayDepthOptions();
//                     }}
//                   >
//                     <Image
//                       src="/End-Foot-Opening.png"
//                       alt="openbed"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                     {selectedImagePathType === "/End-Foot-Opening.png" && (
//                       <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="absolute top-full mb-10 w-full left-0 text-center">
//                       Side Lift Ottoman Bed +£60
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* <div><ProductsPage/></div> */}
//               {/* Bed Depth section : */}

//               {showBedDephthOptions && (
//                 <div className="bg-[#f1feff] min-h-[60vh] mt-10 max-sm:min-h-[70vh]  flex flex-col rounded-xl animate__animated  animate__fadeInDown">
//                   <div className="border-black border-[2px] w-[85%] mt-10 mx-auto p-3 cursor-pointer rounded-2xl text-center">
//                     {getTextForImageBedDepth().text}
//                   </div>
//                   <div className="grid  items-center  justify-items-center my-5 max-sm:my-20 text-sm rounded-2xl  grid-cols-4 max-sm:grid-cols-2 max-sm:gap-x-20 max-sm:gap-y-36">
//                     <div
//                       className={`h-[6.25rem]  w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
//                         selectedImagePathDepth === "/Deep-Base.png" &&
//                         " border-[2px] border-black"
//                       }`}
//                       onClick={() => handleImageClickDepth("/Deep-Base.png")}
//                     >
//                       <Image
//                         src="/Deep-Base.png"
//                         alt="deepbase"
//                         layout="fill"
//                         objectFit="contain"
//                       />
//                       {selectedImagePathDepth === "/Deep-Base.png" && (
//                         <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-white"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         </div>
//                       )}

//                       <div className="absolute top-full mb-10 mt-2 w-full left-0 text-center">
//                         Standard Depth 23cm ( Base Height 37cm ) +£0
//                       </div>
//                     </div>

//                     <div
//                       className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
//                         selectedImagePathDepth === "/Standard-Base.png" &&
//                         "border-[2px] border-black"
//                       }`}
//                       onClick={() =>
//                         handleImageClickDepth("/Standard-Base.png")
//                       }
//                     >
//                       <Image
//                         src="/Standard-Base.png"
//                         alt="openbed"
//                         layout="fill"
//                         objectFit="contain"
//                       />
//                       {selectedImagePathDepth === "/Standard-Base.png" && (
//                         <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-white"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         </div>
//                       )}
//                       <div className="absolute top-full mb-10 mt-2 w-full left-0 text-center">
//                         Deep Base Depth 30.5cm (Base Height 44cm) +£180
//                       </div>
//                     </div>

//                     <div
//                       className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
//                         selectedImagePathDepth === "/Super-Deep-Base.png" &&
//                         "border-[2px] border-black"
//                       }`}
//                       onClick={() =>
//                         handleImageClickDepth("/Super-Deep-Base.png")
//                       }
//                     >
//                       <Image
//                         src="/Super-Deep-Base.png"
//                         alt="openbed"
//                         layout="fill"
//                         objectFit="contain"
//                       />
//                       {selectedImagePathDepth === "/Super-Deep-Base.png" && (
//                         <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-white"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         </div>
//                       )}

//                       <div className="absolute top-full mt-2 mb-10 w-full left-0 text-center">
//                         Super Deep Depth 37cm (Base Height 50cm) +£450
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {showBedDephthOptions && (
//                 <div className="flex flex-col gap-4 mt-4">
//                   <SlipLids
//                     defaultText="Anti-Slip Lids -"
//                     buttonTexts={[
//                       "Anti-Slip Lids - Standard Top (Bed Side Supported By Wall) +£0",
//                       "Foam Padded Bed Base +£125",
//                     ]}
//                   />

//                   <SlipLids
//                     defaultText="Base Padding -"
//                     buttonTexts={[
//                       "No Base Padding +£0",
//                       "Foam Padded Bed Base +£125",
//                     ]}
//                     // buttonStyles={buttonStyles}
//                   />

//                   <SlipLids
//                     defaultText="Re-enforcement - "
//                     buttonTexts={[
//                       "Standard Market Build +£0",
//                       "Re-Inforced Storage Area & Lids +£80",
//                     ]}
//                     // buttonStyles={buttonStyles}
//                   />

//                   <SlipLids
//                     defaultText="Gas Pistons - 600N Gas Pistons (Upto 55kg Mattress) (Included)"
//                     buttonTexts={[
//                       "600N Gas Pistons (Upto 55kg Mattress) (Included)",
//                       "800N Gas Pistons (55-75kg Mattress) +£25",
//                       // Add more button texts as needed
//                     ]}
//                     // buttonStyles={buttonStyles}
//                   />
//                 </div>
//               )}

//               <div>
//                 <ColorPalette />
//               </div>

//               <div className=" flex flex-col gap-4 mt-4">
//                 <SlipLids
//                   defaultText="Gas Pistons - 600N Gas Pistons (Upto 55kg Mattress) (Included)"
//                   buttonTexts={[
//                     "600N Gas Pistons (Upto 55kg Mattress) (Included)",
//                     "800N Gas Pistons (55-75kg Mattress) +£25",
//                     // Add more button texts as needed
//                   ]}
//                   // buttonStyles={buttonStyles}
//                 />

//                 <SlipLids
//                   defaultText="Would You like to add a Mattress? - No"
//                   buttonTexts={[
//                     "No",
//                     "Yes",
//                     // Add more button texts as needed
//                   ]}
//                   buttonStyles={buttonStyles}
//                 />
//                 <SlipLids
//                   defaultText="Assembly Service - No"
//                   buttonTexts={[
//                     "No",
//                     "Yes",
//                     // Add more button texts as needed
//                   ]}
//                   buttonStyles={buttonStyles}
//                 />
//                 <SlipLids
//                   defaultText="Deliver To Room Service - No"
//                   buttonTexts={[
//                     "No",
//                     "Yes",
//                     // Add more button texts as needed
//                   ]}
//                   buttonStyles={buttonStyles}
//                 />
//                 <SlipLids
//                   defaultText="Furniture Removal Service - No"
//                   buttonTexts={[
//                     "No",
//                     "Yes",
//                     // Add more button texts as needed
//                   ]}
//                   buttonStyles={buttonStyles}
//                 />
//               </div>

//               <div className="mt-12">
//                 <div>
//                   {/* <p className="text-[#00acbb] font-semibold text-[1.2rem] mb-3">{amount}</p> */}

//                   <div className="flex gap-5 max-md:justify-center my-14  items-center">
//                     <div className="flex border-black border-[1px] justify-between items-center rounded-2xl py-[0.6rem] px-3 w-[25%] text-sm max-sm:py-[0.3rem]">
//                       <svg
//                         focusable="false"
//                         className="icon icon--minus w-3 h-3 cursor-pointer"
//                         viewBox="0 0 10 2"
//                         role="presentation"
//                         onClick={handleDecrease}
//                       >
//                         <path d="M10 0v2H0V0z" fill="currentColor"></path>
//                       </svg>

//                       <span>{counter}</span>

//                       <svg
//                         focusable="false"
//                         className="icon icon--plus w-3 h-3 cursor-pointer"
//                         viewBox="0 0 10 10"
//                         role="presentation"
//                         onClick={handleIncrease}
//                       >
//                         <path
//                           d="M6 4h4v2H6v4H4V6H0V4h4V0h2v4z"
//                           fill="currentColor"
//                           fillRule="evenodd"
//                         ></path>
//                       </svg>
//                     </div>

//                     <button
//                       className={`bg-[#00acbb] w-[30%] hover:bg-[#00666e] text-sm text-white font-bold py-[0.6rem] px-8 rounded-2xl max-sm:py-[0.3rem] ${
//                         shake ? "animate__animated animate__shakeX" : ""
//                       }`}
//                       onClick={() => console.log("Add to cart clicked")}
//                     >
//                       Add to Cart
//                     </button>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       width="24"
//                       height="24"
//                     >
//                       <path fill="#ffffff" d="M0 0h24v24H0z" />
//                       <path
//                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
//                         stroke="#000"
//                         stroke-width="2"
//                       />
//                     </svg>

//                     <button className="rounded-2xl py-[0.6rem] border-[1px]  border-black px-3 w-[20%] text-sm max-sm:py-[0.3rem]">
//                       Order Swatch
//                     </button>
//                   </div>

//                   <div className="flex my-5 gap-5">
//                     <div className="relative h-16 w-16">
//                       <Image
//                         src="/Gpay.svg"
//                         alt="openbed"
//                         layout="fill"
//                         objectFit="contain"
//                       />
//                     </div>
//                     <div className="relative h-16 w-16">
//                       <Image
//                         src="/Applepay.svg"
//                         alt="openbed"
//                         layout="fill"
//                         objectFit="contain"
//                       />
//                     </div>
//                     <div className="relative h-16 w-16">
//                       <Image
//                         src="/Visapay.svg"
//                         alt="openbed"
//                         layout="fill"
//                         objectFit="contain"
//                       />
//                     </div>
//                     <div className="relative h-16 w-16">
//                       <Image
//                         src="/Masterpay.svg"
//                         alt="openbed"
//                         layout="fill"
//                         objectFit="contain"
//                       />
//                     </div>
//                     <div className="relative h-16 w-16">
//                       <Image
//                         src="/Masterpay2.svg"
//                         alt="openbed"
//                         layout="fill"
//                         objectFit="contain"
//                       />
//                     </div>

//                     <div className="relative h-16 w-16">
//                       <Image
//                         src="/shopifypay.svg"
//                         alt="openbed"
//                         layout="fill"
//                         objectFit="contain"
//                       />
//                     </div>
//                     <div className="relative h-16 w-16">
//                       <Image
//                         src="/Klarnapay.svg"
//                         alt="openbed"
//                         layout="fill"
//                         objectFit="contain"
//                       />
//                       <div className="relative h-16 w-16">
//                         <Image
//                           src="/Palpay.svg"
//                           alt="openbed"
//                           layout="fill"
//                           objectFit="contain"
//                         />
//                       </div>
//                     </div>
//                     <div className="relative h-16 w-16">
//                       <Image
//                         src="/Xpresspay.svg"
//                         alt="openbed"
//                         layout="fill"
//                         objectFit="contain"
//                       />
//                     </div>
//                   </div>

//                   <div className="leading-7">
//                     <p className="font-semibold mb-5">Ask a Question</p>
//                     <p>Availability : In Stock</p>
//                     <p>
//                       Categories: all Bed Beds Beds & Bed Frames Divan Bed
//                       Double Bed Double Bed Frame Double Bed Size Double Beds
//                       Heavy Duty Ottoman End or Side Lift Ottoman bed Home page
//                       king size bed Ottoman Base Without Headboard Ottoman Bed
//                       Reinforced Divan Bed Bases Single Beds Storage Bed Super
//                       King Size Bed
//                     </p>
//                     <p>Tags: without headboard</p>
//                   </div>

//                   <div
//                     className={`flex w-[100%] justify-around my-10 items-center shadow-xl rounded-2xl py-2 min-h-[20vh] ${
//                       isHidden ? "animate__animated animate__backOutDown" : ""
//                     }`}
//                   >
//                     <div className="flex  w-[30%] items-center gap-2 justify-center">
//                       <div className="relative h-16 w-16">
//                         <Image
//                           src="/OttomanEndLiftBaseclosedBg.jpg"
//                           alt="openbed"
//                           layout="fill"
//                           objectFit="cover"
//                           className="rounded-[100%]"
//                         />
//                       </div>
//                       <div className="text-center w-[50%] text-sm">
//                         Ottoman Bed Without Headboard £200.00
//                       </div>
//                     </div>

//                     <div className="flex items-center w-[70%] gap-5 justify-center">
//                       <div className="flex border-black border-[1px] justify-between items-center rounded-2xl py-[0.6rem] px-3 w-[25%] text-sm max-sm:py-[0.3rem]">
//                         <svg
//                           focusable="false"
//                           className="icon icon--minus w-3 h-3 cursor-pointer"
//                           viewBox="0 0 10 2"
//                           role="presentation"
//                           onClick={handleDecrease}
//                         >
//                           <path d="M10 0v2H0V0z" fill="currentColor"></path>
//                         </svg>

//                         <span>{counter}</span>

//                         <svg
//                           focusable="false"
//                           className="icon icon--plus w-3 h-3 cursor-pointer"
//                           viewBox="0 0 10 10"
//                           role="presentation"
//                           onClick={handleIncrease}
//                         >
//                           <path
//                             d="M6 4h4v2H6v4H4V6H0V4h4V0h2v4z"
//                             fill="currentColor"
//                             fillRule="evenodd"
//                           ></path>
//                         </svg>
//                       </div>
//                       <button
//                         className={`bg-[#00acbb] w-[30%] hover:bg-[#00666e] text-sm text-white font-bold py-[0.5rem] px-5 rounded-2xl max-sm:py-[0.3rem] ${
//                           shake ? "animate__animated animate__shakeX" : ""
//                         }`}
//                         onClick={() => console.log("Add to cart clicked")}
//                       >
//                         Add to Cart
//                       </button>

//                       <div className="relative">
//                         <div className="bg-black absolute text-white p-[8px] rounded-[50%] right-0 top-0">
//                           <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm">
//                             0
//                           </span>
//                         </div>
//                         <i
//                           className="fa border-[1px] p-2 rounded-[50%] fa-cart-arrow-down text-[2rem] cursor-pointer"
//                           aria-hidden="true"
//                         ></i>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <ProductbaseDropdown />
        
//       </div>

      




//       {/* bg-[#EEEEEE] */}

//       <div className=" p-6 hidden  mb-20 max-lg:block text-[#383f48] shadow-xl border-t-2 border-black-800">
//         <div className="flex  justify-between max-lg:flex-col-reverse">
//           <div className="flex justify-between w-[40%] px-10 max-2xl:w-[50%] max-xl:px-0 max-xl:w-[60%] gap-3 flex-col max-lg:w-[100%] max-xl:justify-around max-md:flex-col max-md:my-3">
//             <ul className="p-0 m-0  max-lg:items-center leading-7 text-[0.9rem] max-xl:text-[0.85rem]">
//               <div className="flex justify-between items-center bg-[#EEEEEE] h-[6.5vh] w-[100%] pl-3">
//                 <li className="font-semibold text-[1rem]">Dimensions</li>{" "}
//                 <button
//                   className="hidden max-lg:inline w-12 h-[100%] text-[1.5rem] bg-[#1c2c39] text-white focus:outline-none transition-transform duration-300 transform "
//                   onClick={dimensionsDropdown}
//                 >
//                   {dimensionsOpen ? "--" : "+"}
//                 </button>
//               </div>
//               <div className="hidden max-lg:block">
//                 {dimensionsOpen && (
//                   <div>
//                     <BedSizeTable />
//                     <BaseProducts />
//                   </div>
//                 )}
//               </div>
//             </ul>

//             <ul className="p-0 m-0 max-lg:items-center leading-7 text-[0.9rem] max-xl:text-[0.85rem]">
//               <div className="flex justify-between items-center bg-[#EEEEEE] h-[6.5vh] w-[100%] pl-3">
//                 <li className="font-semibold text-[1rem]">
//                   Frequently Asked Questions
//                 </li>{" "}
//                 <button
//                   className="hidden max-lg:inline  text-[1.5rem] w-12 h-[100%] bg-[#1c2c39] text-white focus:outline-none transition-transform duration-300 transform "
//                   onClick={faqDropdown}
//                 >
//                   {faqOpen ? "--" : "+"}
//                 </button>
//               </div>

//               <div className="hidden max-lg:block">
//                 {faqOpen && <div>
                  
//                   <Faq/>
//                   <BaseProducts />
//                   </div>}
//               </div>
//             </ul>

//             <ul className="p-0 m-0 max-lg:items-center leading-7 text-[0.9rem] max-xl:text-[0.85rem]">
//             <div className="flex justify-between items-center bg-[#EEEEEE] h-[6.5vh] w-[100%] pl-3">
//                 <li className="font-semibold text-[1rem]">Description</li>{" "}
//                 <button
//                   className="hidden max-lg:inline text-[1.5rem] w-12 h-[100%] bg-[#1c2c39] text-white focus:outline-none transition-transform duration-300 transform "
//                   onClick={descriptionDropdown}
//                 >
//                   {descriptionOpen ? "--" : "+"}
//                 </button>
//               </div>
//               <div className="hidden max-lg:block">{descriptionOpen && <BaseProducts />}</div> 
//             </ul>

//             <ul className="p-0 m-0 max-lg:items-center leading-7 text-[0.9rem] max-xl:text-[0.85rem]">
//               <div className="flex justify-between items-center bg-[#EEEEEE] h-[6.5vh] w-[100%] pl-3">
//                 <li className="font-semibold text-[1rem]">Reviews</li>{" "}
//                 <button
//                   className="hidden max-lg:inline w-12 text-[1.5rem] h-[100%] bg-[#1c2c39] text-white focus:outline-none transition-transform duration-300 transform "
//                   onClick={reviewDropdown}
//                 >
//                   {reviewOpen ? "--" : "+"}
//                 </button>
//               </div>
//               <div className="hidden max-lg:block">{reviewOpen && <BaseProducts />}</div> 
//             </ul>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default Products;
const Products = () => {
    return (
      <><div className="bg-gray-300">
      <h1>Products Dpage</h1>
      
    </div></>
    );
  };
  
  export default Products;
  
