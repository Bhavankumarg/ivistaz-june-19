import Image from "next/image";
import React from "react";

const LetsHelpYou = () => {
  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto text-center lg:py-20 py-7">
          <h5 className="text-white text-3xl lg:text-5xl">Let’s Help You</h5>
        </div>
        <div className="flex lg:px-10 flex-col lg:flex-row gap-5 justify-center items-center pb-10">
          <div className="py-6 flex items-center justify-start gap-3 bg-gradient-to-r from-[#DEDFF5] to-[#DAF5F3] p-5 h-24 lg:w-2/3 w-xs">
            <Image
              src="/generation-for-tech/green-tick.png"
              width={30}
              height={30}
              alt="tick"
            />
            <p className="lg:text-xl">Attract more qualified leads</p>
          </div>
          <div className="py-3 flex items-center justify-start gap-3 bg-gradient-to-r from-[#E5F7D2] to-[#D9F7F2] p-5 h-24 lg:w-2/3 w-xs">
            <Image
              src="/generation-for-tech/green-tick.png"
              width={30}
              height={30}
              alt="tick"
            />
            <p className="lg:text-xl">Improve your own brand’s digital <br/> presence</p>
          </div>
          <div className="py-3 flex items-center justify-start gap-3 bg-gradient-to-r from-[#F7D9D9] to-[#FCE9DD] p-5 h-24 lg:w-2/3 w-xs">
            <Image
              src="/generation-for-tech/green-tick.png"
              width={30}
              height={30}
              alt="tick"
            />
            <p className="lg:text-xl">Scale delivery for your clients— quietly, efficiently, without hiring overhead</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsHelpYou;
