import React from "react";

const ShimmerCard=()=>{
    return(<div className="res-card hover:shadow-xl  hover:w-[216] w-[219] h-[389] mx-4 my-4 bg-gray-100 py-3 rounded-2xl px-4">
      <div className="w-[184] h-[217] bg-gray-200 rounded-lg" />
      <div>
        <h3 className="my-2 h-[40]  w-[185] rounded-lg bg-gray-200"></h3>
        <div>
        <h3 className="my-2 h-[18]  w-[185]  rounded-lg bg-gray-200"></h3>
        <h3 className="my-2 h-[18]  w-[185]  rounded-lg bg-gray-200"></h3>
        <h3 className="my-2 h-[18]  w-[185]  rounded-lg bg-gray-200"></h3>
        </div>
      </div>
    </div>)
}

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
    
    </div>
  );
};

export default Shimmer;
