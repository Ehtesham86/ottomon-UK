"use client";
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "animate.css/animate.min.css";
import Image from "next/image";
import { HiMapPin } from "react-icons/hi2";
import SlipLids from "../../../components/cards/SlipLids";
import ColorPalette from "../../../components/cards/ColorPalette";
import "../../../css/styles.css";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBagCheckFill } from "react-icons/bs";
import RightSidebar from '../../../components/RightSidebar/RightSidebar';
import { useRouter } from 'next/navigation';
import ProductbaseDropdown from "../../../components/ProductbaseDropdown";
// import DetailsMobile from "../../../components/cards/_components/details_mobile";
import { Check, Minus, Plus } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import Accessories, { Vertical } from "../../accessories/page";
import axios from "axios";
import { addToCart, Removecart } from "./../../../app/Redux/Action/actions";
import { useDispatch, useSelector } from "react-redux";
 import './style.css'
const Products = ({ params }) => {
  const buttonStyles = [{ padding: "0.25rem" }, { padding: "0.25rem" }];
  const router = useRouter();
  console.log(params.slug, '_________1');

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("hlo toggle sidebar are u there ")
    setIsSidebarOpen(!isSidebarOpen);
  };



  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [shake, setShake] = useState(false);
  const [BtnAmount, setBtnAmount] = useState(1); // Initial amount
  const [counter, setCounter] = useState(1); // Initial counter
  const [mattresses, setMattresses] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
  const [showArrows, onChange] = useState(true);
  const [selectedImagePath, setSelectedImagePath] = useState("/single.png");
  const [selectedImagePathType, setSelectedImagePathType] = useState(
    "/Divan-Base-Only-b.png"
  );
  const [selectedImagePathDepth, setSelectedImagePathDepth] =
    useState("/Deep-Base.png");
  const [amount, setAmount] = useState("200.00"); // Initial amount value
  const [showBedDephthOptions, setShowBedDephthOptions] = useState(false);
  const [name, setname] = useState(""); // Initial amount value
  const [description, setdescription] = useState(""); // Initial amount value
  const dispatch = useDispatch();

  const [inStock, setinStock] = useState(""); // Initial amount value
  const [PId, setPId] = useState(""); // Initial amount value
  const [PId1, setPId1] = useState(""); // Initial amount value

  const [imageUrl, setimageUrl] = useState(""); // Initial amount value

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    return `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const displayDepthOptions = () => {
    setShowBedDephthOptions(true);
  };
  const removeDepthOptions = () => {
    setShowBedDephthOptions(false);
  };
  const handleImageClick = (path) => {
    setSelectedImagePath(path);
  };
  const handleImageClickType = (path) => {
    setSelectedImagePathType(path);
  };
  const handleImageClickDepth = (path) => {
    setSelectedImagePathDepth(path);
  };
  const updateBedSizeAmount = () => {
    const bedSizeAmount = getTextForImageBedSize().amount;

    setAmount(bedSizeAmount);
  };
  const updateBedTypeAmount = () => {
    const bedTypeAmount = getTextForImageBedType().amount;

    setAmount(bedTypeAmount);
  };
  const updateBedDepthAmount = () => {
    const bedDepthAmount = getTextForImageBedDepth().amount;

    setAmount(bedDepthAmount);
  };
  const getTextForImageBedSize = () => {
    switch (selectedImagePath) {
      case "/single.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Small Single 2ft6
            </p>
          ),
          amount: "£490.00",
        };
      case "/single2.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Single 3ft
            </p>
          ),
          amount: "£490.00",
        };
      case "/Double-small.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Small Double 4ft
            </p>
          ),
          amount: "£310.00",
        };
      case "/Double-small2.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Double 4ft6
            </p>
          ),
          amount: "£310.00",
        };
      case "/Double-small3.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - King 5ft
            </p>
          ),
          amount: "£365.00",
        };
      case "/Double-small4.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Superking 6ft
            </p>
          ),
          amount: "£415.00",
        };
      default:
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Small Single 2ft6
            </p>
          ),
          amount: "£490",
        };
    }
  };
  const getTextForImageBedType = () => {
    switch (selectedImagePathType) {
      case "/Divan-Base-Only-b.png.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Base Only +£0
            </p>
          ),
          amount: "£225.00",
        };
      case "/2-Continentel-Drawer-same-side-b.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Same Side
              +£40
            </p>
          ),
          amount: "£265.00",
        };
      case "/2-Draw-Same-Side-b.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Continental
              +£40
            </p>
          ),
          amount: "£265.00",
        };
      case "/Side-Opening-Ottoman-b.jpg":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - End Lift Ottoman Bed
              +£60
            </p>
          ),
          amount: "£490.00",
        };
      case "/End-Foot-Opening.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Side Lift Ottoman
              Bed +£60
            </p>
          ),
          amount: "£490.00",
        };
      default:
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Side Lift Ottoman
              Bed +£60
            </p>
          ),
          amount: "£225",
        };
    }
  };
  const getTextForImageBedDepth = () => {
    switch (selectedImagePathDepth) {
      case "/Deep-Base.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Base Only +£0
            </p>
          ),
          amount: amount,
        };
      case "/Standard-Base.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Same Side
              +£40
            </p>
          ),
          amount: amount,
        };
      case "/Super-Deep-Base.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Continental
              +£40
            </p>
          ),
          amount: amount,
        };
      default:
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Side Lift Ottoman
              Bed +£60
            </p>
          ),
          amount: "£285",
        };
    }
  };
  const [Loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    label: 'Size: Small single 2ft6',
    // imagePath: '/single2.png',
  });
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    {
      label: 'Single 3ft',
      imagePath: '/Double-small.png',
    },
    {
      label: 'Double 4ft',
      imagePath: '/Double-small.png',
    },
  ];

  useEffect(() => {
    updateBedSizeAmount();
  }, [selectedImagePath]);
  useEffect(() => {
    updateBedTypeAmount();
  }, [selectedImagePathType]);
  useEffect(() => {
    updateBedDepthAmount();
  }, [selectedImagePathDepth]);
  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 1000); // Duration of the shake animation
    }, 5000); // Interval between each shake animation

    return () => clearInterval(interval);
  }, []);
  const handleIncrease = () => {
    setCounter(counter + 1); // Increment counter
    setAmount(BtnAmount + BtnAmount); // Double the amount
  };
  const handleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1); // Decrement counter
      setBtnAmount(amount - amount / 2); // Halve the amount
    }
  };
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setDropdownVisible(!dropdownVisible);
  };
  const onClickItem = (index) => {
    onChange(index);
  };

  useEffect(() => {

    const fetchMattresses = async () => {
      try {
        console.log('Fetching data for mattress with id:', params.slug);
        const parts = params.slug.split('D')
        console.log(parts, 'parts')
        setPId(parts[1])
        const response = await axios.get(`https://ottomonukbackup1.vercel.app/mattresses/${parts[1]}`);
        console.log('Fetched data:', response.data.mattresses.price);
        setMattresses(response.data.mattresses); // Ensure you set the correct response data
        setAmount(`$${response.data.mattresses.price}`); // Set the fetched price
        setname(response.data.mattresses.name); // Set the fetched price
        setdescription(response.data.mattresses.description); // Set the fetched price
        setinStock(response.data.mattresses.countInStock); // Set the fetched price
        setimageUrl(response.data.mattresses.imageUrl); // Set the fetched price
        setPId1(response.data.mattresses)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMattresses();

  }, [params.slug]);
  // useEffect(() => {
  //   setLoading(true);
  //   const fetchMattresses = async () => {
  //     try {
  //       const response = await axios.get("https://ottomonukbackup1.vercel.app/mattresses/id");
  //       setLoading(false);
  //       setMattresses(res.data.mattressesData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchMattresses();
  // }, [CallingFrom]);


  return (
    <div>
  <div className="my-10 w-[100%] px-5 max-sm:px-1">
    <div className="flex w-full max-md:flex-col max-lg:flex-wrap justify-evenly gap-10 max-lg:justify-center">
      <div className="w-full flex justify-center">
        <div className="flex flex-col w-full max-xl:w-full max-lg:w-[70%] max-md:w-[90%] max-sm:w-full">
          <div className="max-sm:w-full w-[100%] min-h-[60vh] relative max-md:min-h-[50vh] max-sm:min-h-[40vh]">
            <Image
              src={imageUrl}
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

          <div className="flex gap-1 w-[100%] h-[6.25rem] max-sm:h-[4rem] max-sm:w-full relative top-2">
            <div className="w-1/4 max-sm:w-1/4 max-sm:h-[full] relative">
              <Image
                src="/Ottoman_Bed_side_opening-small.jpg"
                alt="openbed"
                layout="fill"
                objectFit="cover"
              />
              {selectedImagePath ===
                "/Ottoman_Bed_side_opening-small.jpg" && (
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

            <div className="w-1/4 max-sm:w-1/4 max-sm:h-[full] relative">
              <Image
                src="/Ottoman-Side.jpeg"
                alt="openbed"
                layout="fill"
                objectFit="cover"
              />
              {selectedImagePath === "/Ottoman-Side.jpeg" && (
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

            <div className="w-1/4 max-sm:w-1/4 max-sm:h-[full] relative">
              <Image
                src="/Ottoman_Bed_side_opening.jpg"
                alt="openbed"
                layout="fill"
                objectFit="cover"
              />
              {selectedImagePath === "/Ottoman_Bed_side_opening.jpg" && (
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

            <div className="w-1/4 max-sm:w-1/4 max-sm:h-[full] relative">
              <Image
                src="/Ottoman_Bed_side_opening-small.jpg"
                alt="openbed"
                objectFit="cover"
                layout="fill"
                className="-scale-x-100"
              />
              {selectedImagePath ===
                "/Ottoman_Bed_side_opening-small.jpg" && (
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
          </div>

          <Accessories />
        </div>
      </div>

      <div className="max-lg:mt-10 w-full max-lg:text-center">
        <div>
          <p className="text-[1.1rem] font-bold">Cool Gel 5000 Pocket Sprung Mattress</p>
        </div>
        <div>
          <p className="text-[.85rem] my-2 font-bold">SIZE: SMALL SINGLE 2FT6</p>
        </div>
        <div className="relative justify-between w-full my-6 inline-block text-left">
          <div className="w-full">
            <button
              type="button"
              className="inline-flex justify-start text-[#C09A73] w-full rounded-md border-2 border-black shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              {selectedOption.label}
              <div className="inline-flex justify-end">
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 011.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
          {isOpen && (
            <div
              className="z-10 origin-top-right absolute w-full right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <div
                  className={`text-[#C09A73] rounded-lg relative cursor-pointer border-[2px] border-black`}
                >
                  {options.map((option, index) => (
                    <div
                      className={`flex text-[#C09A73] px-2 rounded-lg relative cursor-pointer ${selectedOption.imagePath === option.imagePath && ''}`}
                      key={index}
                      onClick={() => handleOptionClick(option)}
                    >
                      <div className="h-[3rem] text-start w-[3rem] max-md:w-[5rem] max-md:h-[5rem] relative cursor-pointer">
                        <Image
                          src={option.imagePath}
                          alt={option.label}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <div className="mb-10 ml-2 mt-[10px] w-full text-left">
                        {option.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="leading-2 mb-2 border border-[#C09A73] bg-[#C09A73] p-[.25rem] font-bold">
          £200.00
        </div>
        <div className="my-4 w-full max-md:my-2">
          {/* <AddToCartBtn /> */}
        </div>
        <div className="flex gap-2 justify-start mt-4 text-[#00acbb] max-md:text-center max-lg:justify-center">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2m-6 0a2 2 0 012-2h2a2 2 0 012 2m-6 0V5a2 2 0 012-2h2a2 2 0 012 2v10"
            />
          </svg>
          <p className="text-[.75rem]">Free shipping available</p>
        </div>
        <div className="flex justify-start text-[#00acbb] mt-2 gap-2 max-md:text-center max-lg:justify-center">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a2 2 0 10-4 0v1.083A6 6 0 004 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h5m3 5a3 3 0 006 0"
            />
          </svg>
          <p className="text-[.75rem]">Pay in 4 interest free installments</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Products;
