import React, { useState } from "react";
import BedSizeTable from "./BedSizeTable";
import Faq from "./Faq";

const ProductbaseDropdown = () => {
  const [selectedItem, setSelectedItem] = useState("Dimensions");
  // const [dropdownActive, setDropdownActive] = useState(true);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "Dimensions":
        return (
          <div className="flex flex-col gap-10 items-center justify-center">
            <BedSizeTable />
            <BedSizeTable />
            <BedSizeTable />
          </div>
        );
      case "Frequently Asked Questions":
        return (
          <div>
            <Faq/>
          </div>
        );

      case "Description":
        return <div></div>;
      case "Reviews":
        return <div></div>;
      default:
        return (
          <div className="flex flex-col gap-10 items-center justify-center">
            <BedSizeTable />
            <BedSizeTable />
            <BedSizeTable />
          </div>
        );
    }
  };

  return (
    <div className="bg-[#EEEEEE max-lg:hidden">
      <ul className="flex h-24 items-center  justify-center gap-10 border-[1px] bg-[#EEEEEE] p-0 m-0 text-sm max-sm:gap-4 max-sm:text-[0.8rem]">
        <li
          className={`cursor-pointer ${
            selectedItem === "Dimensions"
              ? "border border-black rounded-lg px-4 py-2"
              : ""
          }`}
          onClick={() => handleItemClick("Dimensions")}
        >
          Dimensions
        </li>
        <li
          className={`cursor-pointer ${
            selectedItem === "Frequently Asked Questions"
              ? "border border-black rounded-lg px-4 py-2"
              : ""
          }`}
          onClick={() => handleItemClick("Frequently Asked Questions")}
        >
          Frequently Asked Questions
        </li>
        <li
          className={`cursor-pointer ${
            selectedItem === "Description"
              ? "border border-black rounded-lg px-4 py-2"
              : ""
          }`}
          onClick={() => handleItemClick("Description")}
        >
          Description
        </li>
        <li
          className={`cursor-pointer ${
            selectedItem === "Reviews"
              ? "border border-black rounded-lg px-4 py-2"
              : ""
          }`}
          onClick={() => handleItemClick("Reviews")}
        >
          Reviews
        </li>
        {/* Add similar classes and conditions for other list items */}
      </ul>

      <div className="py-5 px-2 shadow-2xl">{renderContent()}</div>
    </div>
  );
};

export default ProductbaseDropdown;
