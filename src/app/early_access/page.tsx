import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function EarlyAccess() {
    return (
    <React.Fragment>
<section className="bg-[#F5F6F8] body-font overflow-hidden">
    <div className="container px-5 sm:px-28 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-4xl text-3xl title-font mb-2 text-black">Start your 14-day free trial</h1>
        <div className="flex mx-auto overflow-hidden mt-6">
            <button className="py-2 px-6 bg-[#6161FF] text-white rounded-full focus:outline-none">Get Started <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4"/></button>
        </div>
        </div>
    </div>
  </section>



    <section className="text-gray-600 body-font">
      <div className="container sm:py-32 mx-auto">
        <div className="flex flex-wrap text-center sm:py-10 sm:px-36 bg-[#F7F7FA] border-t border-b border-[#E7DAED] ">
          <div className="flex flex-col text-center w-full py-14 px-14">
            <h1 className="sm:text-4xl text-2xl title-font text-gray-700">Integrate your work with all your favorite tools</h1>
          </div>
          <div className="p-4 md:w-1/5 w-1/2 w-full">
            <div className="px-4 py-6 rounded-lg inline-block">
              <Image alt="mobile app" width={70} height={70} src="/quickbooks.png"/>
            </div>
          </div>

          <div className="p-4 md:w-1/5 w-1/2 w-full">
            <div className="px-4 py-6 rounded-lg inline-block">
              <Image alt="mobile app" width={70} height={70} src="/xero.png"/>
            </div>
          </div>

          <div className="p-4 md:w-1/5 w-1/2 w-full">
            <div className="px-4 py-6 rounded-lg inline-block">
              <Image alt="mobile app" width={70} height={70} src="/drive.png"/>
            </div>
          </div>

          <div className="p-4 md:w-1/5 w-1/2 w-full">
            <div className="px-4 py-6 rounded-lg inline-block">
              <Image alt="mobile app" width={80} height={80} src="/cloud.png"/>
            </div>
          </div>

          <div className="p-4 md:w-1/5 w-1/2 w-full">
            <div className="px-4 py-6 rounded-lg inline-block">
              <Image alt="mobile app" width={70} height={70} src="/netsuite.png"/>
            </div>
          </div>
        </div>
      </div>
    </section>






  <section className="bg-[#2B2C5D] body-font overflow-hidden">
    <div className="container px-5 sm:px-28 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-5xl text-3xl title-font mb-2 text-white">See why over customers are choosing acai.com</h1>
        <div className="flex mx-auto overflow-hidden mt-6">
            <button className="py-2 px-6 bg-[#6161FF] text-white rounded-full focus:outline-none">Get Started <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4"/></button>
        </div>
        </div>
    </div>
  </section>

    </React.Fragment>
  );
}