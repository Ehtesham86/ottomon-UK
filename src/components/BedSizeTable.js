import React from "react";

const BedSizeTable = () => {
  return (
    <div className="overflow-x-auto  bg-[#EEEEEE]  w-full text-[#1c2c39] font-semibold text-[1rem] animate__animated animate__fadeIn">
      <table className="w-[80%]   divide-y divide-gray-200 relative -translate-x-1/2 left-1/2 border-[1px] border-[#00acbb]">
        <thead className="border-[1px] border-[#00acbb]  ">
          <tr className="">
            <th
              scope="col"
              className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider border-r-[1px] border-[#00acbb]"
            >
              Bed Size
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider border-r-[1px] border-[#00acbb]"
            >
              Width (cm)
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider border-r-[1px] border-[#00acbb]"
            >
              Length (Exc Headboard) (cm)
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider border-r-[1px] border-[#00acbb]"
            >
              Total Base Height (cm) (Incl 4cm Feet)
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider border-r-[1px] border-[#00acbb]"
            >
              Base Unit Dimensions (cm) (End Lift Ottoman)
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider border-r-[1px] border-[#00acbb]"
            >
              Base Unit Dimensions (cm) (Side Lift Ottoman)
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
            >
              Storage Depths (cm)
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          <tr className="border-[1px] border-[#00acbb]">
            <td className="px-6 py-6 whitespace-nowrap border-r-[1px] border-[#00acbb]">
              2ft6
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-r-[1px] border-[#00acbb]">
              75
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-r-[1px] border-[#00acbb]">
              190.5
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-r-[1px] border-[#00acbb]">
              37
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-r-[1px] border-[#00acbb]">
              1 Unit size 75 x 190.5 x 33
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-r-[1px] border-[#00acbb]">
              1 Unit size 75 x 190.5 x 33
            </td>
            <td className="px-6 py-6 whitespace-nowrap">26</td>
          </tr>
          <tr className="border-[1px] border-[#00acbb]">
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              3ft
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              91.5
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              190.5
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              37
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              1 Unit size 91.5 x 190.5 x 33
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              1 Unit size 91.5 x 190.5 x 33
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              26
            </td>
          </tr>
          <tr className="border-[1px] border-[#00acbb]">
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              6ft
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              122
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              190.5
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              37
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              2 Unit size 61 x 190.5 x 33
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              2 Units size 122 x 95.25 x 33
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              26
            </td>
          </tr>
          <tr className="border-[#00acbb]">
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              6ft6
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              137
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              190.5
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              37
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              2 Unit size 68.5 x 190.5 x 33
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              2 Units size 137 x 95.25 x 33
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              26
            </td>
          </tr>
          <tr className="border-[#00acbb]">
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              5ft
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              152
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              200
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              37
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              2 Unit size 76 x 200 x 33
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              2 Units size 152 x 100 x 33
            </td>
            <td className="px-6 py-6 whitespace-nowrap">26</td>
          </tr>
          <tr className="border-black border-[2px] bg-[#00acbb]">
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              6ft
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              183
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              200
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              37
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              2 Unit size 91.5 x 200 x 33
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              2 Units size 183 x 100 x 33
            </td>
            <td className="px-6 py-6 whitespace-nowrap border-[1px] border-[#00acbb]">
              26
            </td>
          </tr>
        </tbody>
      </table>
      {/* <div className="font-bold text-[1.1rem] mt-5 leading-6 w-[80%] p-2 my-3 -translate-x-1/2 relative left-1/2">
        *All Wingback Floor Standing Bed Heads add a further 10cm to the width
        of the bed each. <br />
        *All Standard Floor Standing Bed Heads add approximately 8cm to the
        length of the End Opening Ottomans <br />
        *All Side Opening Ottomans are required to be fitted with spacers
        between the bed base and the headboard this adds approximately 10cm to
        the length of the bed.
      </div> */}
      
    </div>
  );
};

export default BedSizeTable;
