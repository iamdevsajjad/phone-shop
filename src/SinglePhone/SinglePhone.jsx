import React from "react";

const SinglePhone = ({phone}) => {

    const handleAddToFavorites = () =>{
        console.log(phone);
    }



    const {image, phone_name, brand_name, price, rating} = phone || {}  ;
  return (
    <div className="fullCard flex justify-center items-center h-[100vh]">
      <div className="relative flex w-full my-auto max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={image}
            alt="image" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            Your phone
          </h6>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {phone_name}
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Brand: {brand_name}
          </p>
          <h3 className="text-xl">Price: ${price}</h3>
          <p className="my-3">rating : {rating}stars</p>
          {/* <Link className="inline-block" 
          to="/"> */}
            <button
            onClick={handleAddToFavorites}
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center bg-slate-100 text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to favorites
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          {/* </Li> */}
        </div>
      </div>
    </div>
  );
};

export default SinglePhone;
