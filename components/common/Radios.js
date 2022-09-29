import React from "react";
import { FiTruck } from "react-icons/fi";

function Radios({ value, time, cost }) {
  return (
    <div>
      <div className="p-3 card border border-gray-200 bg-white rounded-md">
        <label className="cursor-pointer label">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-3 text-main">
                <FiTruck />
              </span>
              <div>
                <h6 className="font-medium text-sm">{value}</h6>
                <p className="text-xs text-gray-500 font-medium">
                  Delivery: {time}{" "}
                  <span className="font-medium text-gray-600">Cost : ${cost}.00</span>
                </p>
              </div>
            </div>
            <input
              name="shippingOption"
              type="radio"
              className="form-radio outline-none focus:ring-0 text-main"
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default Radios;
