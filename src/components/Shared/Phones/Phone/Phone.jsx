import React from "react";
import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-2/3 rounded-xl bg-clip-border">
        <img src={phone.image} className="object-cover h-60 mx-auto" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {phone.phone_name}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            ${phone.price}
          </p>
        </div>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          {phone.rating} stars
        </p>
      </div>
      <div className="p-6 pt-0">
        <Link to={`/phones/${phone.id}`}>
          <button
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-gray-200"
            type="button"
          >
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Phone;
