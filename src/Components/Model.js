import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Model = () => {
  return (
    <div>
      <div className=" absolute inset-x-0 top-[20%] text-center">
        <h1 className="text-4xl font-bold">Model 3</h1>
        <p className="p-2 text-sm">
          Order Online for &nbsp;
          <a href="https://www.tesla.com/support/taking-delivery">
            <span className=" underline underline-offset-4">
              Touchless Delivery
            </span>
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
        <a href="https://www.tesla.com/inventory/new/m3">
          <button className="bg-[#eeeeee] rounded-md w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-black">
            Explore Inventory
          </button>
        </a>
        <a href="https://www.tesla.com/drive?selectedModel=modely">
          <button className="bg-[#393c41] rounded-md w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white">
            Demo Drive
          </button>
        </a>
      </div>
      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
        <FiChevronDown size={24} />
      </div>
    </div>
  );
};

export default Model;
