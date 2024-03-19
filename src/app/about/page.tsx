import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function AboutUs() {
    return (
    <React.Fragment>
     <section className="text-gray-600 body-font">
        <div className="container px-5 sm:px-32 py-24 mx-auto flex flex-wrap">
            <h2 className="sm:text-5xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">So how did
            <br className="hidden lg:inline-block"/><span className="text-[#6C6CFF]"> theaccountantai.com</span> come to be?
            </h2>
            <div className="md:w-3/5 md:pl-12">
            <p className="leading-relaxed text-base text-lg">Well for us, it happened somewhere in between collaborating and communicating, engaging, and scaling rapidly. All while being totally transparent and working the way we want.</p>
            </div>
        </div>
        <div className="w-full">
            <Image alt="mobile app" width={1600} height={900} src="/about1.png"/>
        </div>
    </section>







    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 sm:px-32 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-32 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="mb-8 leading-relaxed text-lg">As we integrated and automated, built workflows, created templates, and expanded our community beyond our wildest expectations, we continued to grow. It is through this journey that the monday.com Work OS was born.</p>
            </div>
            <div className="flex lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover object-center rounded" width={600} height={300} alt="hero" src="/about2.png"/>
            </div>
        </div>
    </section>






<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 sm:px-32 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="object-cover object-center rounded" width={600} height={300} alt="hero" src="/about3.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <p className="mb-8 leading-relaxed text-lg">June 10th, 2021 marked the start of a new era for monday.com—we rang the opening bell and officially became a publicly traded company on Nasdaq.</p>
      <p className="mb-8 leading-relaxed text-lg">These days, we continue to fuel our growth by evolving into a multi-product company, providing people, teams, and companies powerful products to help turn their work visions into a reality. <span className="text-black font-bold">We’re only just getting started.</span></p>
    </div>
  </div>
</section>







<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 sm:py-44 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">Our story</h1>
    </div>
    <div className="flex flex-wrap -m-4">

      <div className="lg:w-1/3 lg:mb-0 mb-6 p-5 sm:py-12 rounded-lg shadow-md hover:shadow-2xl">
        <div className="h-full text-center">
          <Image alt="testimonial" width={50} height={50} className="w-20 h-20 mb-8 object-cover object-center inline-block " src="/japan.png"/>
          <h1 className="text-[#595AD4] font-bold title-font text-xl">We are live in Japan</h1>
          <p className="leading-relaxed py-5 p-5">Welcome to our new team in the Land of the Rising Sun. We’re excited to continue <span className="text-[#595AD4]">growing our presence in the Asia Pacific and Japan</span> region with our business launch in Tokyo and Singapore.</p>
          <h2 className="text-gray-900 font-medium title-font text-lg">October 2022</h2>
        </div>
      </div>

      <div className="lg:w-1/3 lg:mb-0 mb-6 p-5 sm:py-12 rounded-lg shadow-md hover:shadow-2xl">
        <div className="h-full text-center">
          <Image alt="testimonial" width={50} height={50} className="w-20 h-20 mb-8 object-cover object-center inline-block " src="/japan.png"/>
          <h1 className="text-[#595AD4] font-bold title-font text-xl">It’s Awards Season!</h1>
          <p className="leading-relaxed py-5 p-5">We were named by <span className="text-[#595AD4]">Great Places to Work</span>, as - a great place to work! Not only that, we are a <span className="text-[#595AD4]">Fast Company Brand That Matters</span>, on top of that, we have made the top of the list of <span className="text-[#595AD4]">Duns 100 Best Hi-Tech Companies to Work for!</span></p>
          <h2 className="text-gray-900 font-medium title-font text-lg">November 2022</h2>
        </div>
      </div>

      <div className="lg:w-1/3 lg:mb-0 mb-6 p-5 sm:py-12 rounded-lg shadow-md hover:shadow-2xl">
        <div className="h-full text-center">
          <Image alt="testimonial" width={50} height={50} className="w-20 h-20 mb-8 object-cover object-center inline-block " src="/japan.png"/>
          <h1 className="text-[#595AD4] font-bold title-font text-xl">Stay tuned…</h1>
          <p className="leading-relaxed py-5 p-5">There’s so much more to come!</p>
          <h2 className="text-gray-900 font-medium title-font text-lg">The Future</h2>
        </div>
      </div>

    </div>
  </div>
</section>
    </React.Fragment>
    );
}