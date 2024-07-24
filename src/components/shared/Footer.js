"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import mastercard1 from "../../assets/payment-icon.svg";
import mastercard2 from "../../assets/payment-icon-2.svg";
import visa from "../../assets/visa.svg";
import paypal from "../../assets/paypal.svg";
import americanaccess from "../../assets/americanaccess.svg";

const Footer = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [orderingOpen, setOrderingOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const aboutDropdown = () => {
    setAboutOpen(!aboutOpen);
    setOrderingOpen(false)
    setTermsOpen(false)
  };

  const OrderingDropdown = () => {
    setOrderingOpen(!orderingOpen);
    setAboutOpen(false);
    setTermsOpen(false)

  };
  const TermsDropdown = () => {
    setTermsOpen(!termsOpen);
    setOrderingOpen(false)
    setAboutOpen(false);


  };
  return (
    <footer className="bg-[#EEEEEE] p-6  text-[#383f48] shadow-xl border-t-2 border-black-800">
      <div className="flex  justify-between max-lg:flex-col-reverse">
        <div className="flex justify-between w-[40%] px-10 max-2xl:w-[50%] max-xl:px-0 max-xl:w-[60%] max-lg:w-[100%] max-xl:justify-around max-md:flex-col max-md:my-3">
          <ul className="p-0 m-0  max-lg:items-center leading-7 text-[0.9rem] max-xl:text-[0.85rem]">
            <div className="max-md:flex max-md:justify-between max-md:w-[100%]">
              <li className="font-semibold  mb-5">About</li>{" "}
              <button
                className="hidden max-md:inline w-10 h-10 rounded-full bg-blue-500 text-white focus:outline-none transition-transform duration-300 transform "
                onClick={aboutDropdown}
              >
                {aboutOpen ? "--" : "+"}
              </button>
            </div>
            <div className="hidden max-md:block">
              {aboutOpen && (
                <div className="mb-7 w-[100%] bg-white border border-gray-200 shadow-md rounded-md">
                  {/* Dropdown content */}
                  <ul>
                    <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="#">About Us</Link>
                    </li>
                    {/* <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="#">Showrooms</Link>
                    </li> */}
                    <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="#">Reviews</Link>
                    </li>
                    <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="#">FAQ&apos;S</Link>
                    </li>
                    {/* <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="#">Careers</Link>
                    </li> */}
                    <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="#">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <ul className="p-0 m-0 max-md:hidden">
              <li className="mb-2">
                <Link href="#">About Us</Link>
              </li>
              {/* <li className="mb-2">
                <Link href="#">Showrooms</Link>
              </li> */}
              <li className="mb-2">
                <Link href="#">Reviews</Link>
              </li>
              <li className="mb-2">
                <Link href="#">FAQ&apos;S</Link>
              </li>
              {/* <li className="mb-2">
                <Link href="#">Careers</Link>
              </li> */}
              <li className="mb-2">
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </ul>

          <ul className="p-0 m-0 max-lg:items-center leading-7 text-[0.9rem] max-xl:text-[0.85rem]">
            <div className="max-md:flex max-md:justify-between max-md:w-[100%]">
              <li className="font-semibold  mb-5">Ordering</li>{" "}
              <button
                className="hidden max-md:inline w-10 h-10 rounded-full bg-blue-500 text-white focus:outline-none transition-transform duration-300 transform "
                onClick={OrderingDropdown}
              >
                {orderingOpen ? "--" : "+"}
              </button>
            </div>

            <div className="hidden max-md:block">
              {orderingOpen && (
                <div className="mb-7 w-[100%] bg-white border border-gray-200 shadow-md rounded-md">
                  {/* Dropdown content */}
                  <ul>
                    <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="#">Buying Guides</Link>
                    </li>
                    <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="#">Free Fabric Samples</Link>
                    </li>
                    <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="">
                        Delivery <br /> Cards
                      </Link>
                    </li>
                    <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="#">Delivery Services</Link>
                    </li>
                    {/* <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="#">Bed Factory Direct Blog</Link>
                    </li> */}
                  </ul>
                </div>
              )}
            </div>
            <ul className="p-0 m-0 max-md:hidden">
              <li className="mb-2">
                <Link href="">Buying Guides</Link>
              </li>
              {/* <li className="mb-2">
                <Link href="">Free Fabric Samples</Link>
              </li> */}
              <li className="mb-2">
                <Link href="">Free Fabric Samples</Link>
              </li>
              <li className="mb-2">
                <Link href="">
                  Delivery <br /> Cards
                </Link>
              </li>
              <li className="mb-2">
                <Link href="">Delivery Services</Link>
              </li>
              {/* <li className="mb-2">
                <Link href="">Bed Factory Direct Blog</Link>
              </li> */}
            </ul>
          </ul>

          <ul className="p-0 m-0 max-lg:items-center leading-7 text-[0.9rem] max-xl:text-[0.85rem]">
            <div className="max-md:flex max-md:justify-between max-md:w-[100%]">
              <li className="font-semibold  mb-5">T&Zzz&apos;s</li>{" "}
              <button
                className="hidden max-md:inline w-10 h-10 rounded-full bg-blue-500 text-white focus:outline-none transition-transform duration-300 transform "
                onClick={TermsDropdown}
              >
                {termsOpen ? "--" : "+"}
              </button>
            </div>
            <div className="hidden max-md:block">
              {termsOpen && (
                <div className="mb-7 w-[100%] bg-white border border-gray-200 shadow-md rounded-md">
                  {/* Dropdown content */}
                  <ul className="p-0 m-0">
                    <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="#">Product Guarantees</Link>
                    </li>
                    <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="#">Terms & Conditions</Link>
                    </li>
                    <li className="mb-2 py-2 px-4 hover:bg-gray-100">
                      <Link href="#">Returns and Refunds</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <ul className="p-0 m-0 max-md:hidden">
              <li className="mb-2">
                <Link href="">Product Guarantees</Link>
              </li>
              <li className="mb-2">
                <Link href="">Terms & Conditions</Link>
              </li>
              <li className="mb-2">
                <Link href="">Returns and Refunds</Link>
              </li>
            </ul>
          </ul>
        </div>

        <div className=" w-[35%] text-[0.9rem] max-2xl:w-[40%] max-lg:w-[100%] max-2xl:flex max-2xl:flex-col max-xl:text-[0.85rem]">
          <p className="font-semibold mb-5">Stay In Touch</p>
          <p>Get info about offers, giveaways and new products</p>
          <div className="">
            <form className="flex items-center border my-3 h-[2.5rem] border-gray-300 rounded w-[70%] max-2xl:w-[80%] max-xl:w-[100%]">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="py-2 px-4 flex-grow outline-none h-[100%]"
                required
              />
              <button
                type="submit"
                className="py-2 px-2 bg-blue-500 text-white text-[0.75rem] font-semibold h-[100%]"
              >
                Sign Up
              </button>
            </form>
          </div>
          <p className="text-[0.75rem] mb-14 max-md:hidden">
            We won&apos;t share your details with anyone else.
          </p>
          <div className="px-3 max-md:hidden">
            <div>
              <p className="font-bold mb-2 max-lg:text-center">
                Secure Payment By
              </p>
              <div className="flex gap-1 max-lg:justify-center max-lg:mb-12 mt-5">
                <Image src={visa} alt="visa" />
                <Image src={mastercard1} alt="mastercard1" />
                <Image src={mastercard2} alt="mastercard2" />
                <Image src={paypal} alt="paypal" />
                <Image src={americanaccess} alt="americanaccess" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:hidden">
        <p className="text-[0.75rem] mb-14 max-md:text-center max-md:mb-10">
          We won&apos;t share your details with anyone else.
        </p>
        <div>
          <p className="font-bold mb-2 max-lg:text-center">Secure Payment By</p>
          <div className="flex gap-1 max-lg:justify-center max-lg:mb-12 mt-5">
            <Image src={visa} alt="visa" />
            <Image src={mastercard1} alt="mastercard1" />
            <Image src={mastercard2} alt="mastercard2" />
            <Image src={paypal} alt="paypal" />
            <Image src={americanaccess} alt="americanaccess" />
          </div>
        </div>
      </div>
      <div className="mt-10">
      <p className=" text-center py-10 border-t-[#ddd] border-t-[1px] text-[0.7rem]">
        © {new Date().getFullYear()} Synergy-IT. All rights reserved. <br />{" "}
        privacy and cookies
      </p>
      </div>
    </footer>
  );
};

export default Footer;
