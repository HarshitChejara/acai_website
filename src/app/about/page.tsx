import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';

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
      <p className="mb-8 leading-relaxed text-lg">These days, we continue to fuel our growth by evolving into a multi-product company, providing people, teams, and companies powerful products to help turn their work visions into a reality. <span className="text-black font-bold">We are only just getting started.</span></p>
    </div>
  </div>
</section>







<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 sm:py-44 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">Our story</h1>
    </div>
    <div className="flex flex-wrap -m-4">

      <div className="lg:w-1/3 lg:mb-0 mb-6 p-5 w-full">
        <div className="h-full text-center p-5 sm:py-12 rounded-lg shadow-md hover:shadow-2xl">
          <Image alt="testimonial" width={50} height={50} className="w-20 h-20 mb-8 object-cover object-center inline-block " src="/japan.png"/>
          <h1 className="text-[#595AD4] font-bold title-font text-xl">We are live in Japan</h1>
          <p className="leading-relaxed py-5 p-5">Welcome to our new team in the Land of the Rising Sun. We are excited to continue <span className="text-[#595AD4]">growing our presence in the Asia Pacific and Japan</span> region with our business launch in Tokyo and Singapore.</p>
          <h2 className="text-gray-900 font-medium title-font text-lg">October 2022</h2>
        </div>
      </div>

      <div className="lg:w-1/3 lg:mb-0 mb-6 p-5 w-full">
        <div className="h-full text-center p-5 sm:py-12 rounded-lg shadow-md hover:shadow-2xl">
          <Image alt="testimonial" width={50} height={50} className="w-20 h-20 mb-8 object-cover object-center inline-block " src="/awards.png"/>
          <h1 className="text-[#595AD4] font-bold title-font text-xl">Its Awards Season!</h1>
          <p className="leading-relaxed py-5 p-5">We were named by <span className="text-[#595AD4]">Great Places to Work</span>, as - a great place to work! Not only that, we are a <span className="text-[#595AD4]">Fast Company Brand That Matters</span>, on top of that, we have made the top of the list of <span className="text-[#595AD4]">Duns 100 Best Hi-Tech Companies to Work for!</span></p>
          <h2 className="text-gray-900 font-medium title-font text-lg">November 2022</h2>
        </div>
      </div>

      <div className="lg:w-1/3 lg:mb-0 mb-6 p-5 w-full">
        <div className="h-full text-center p-5 sm:py-12 rounded-lg shadow-md hover:shadow-2xl">
          <Image alt="testimonial" width={50} height={50} className="w-20 h-20 mb-8 object-cover object-center inline-block " src="/gloab.png"/>
          <h1 className="text-[#595AD4] font-bold title-font text-xl">Stay tuned…</h1>
          <p className="leading-relaxed py-5 p-5">There are so much more to come!</p>
          <h2 className="text-gray-900 font-medium title-font text-lg">The Future</h2>
        </div>
      </div>

    </div>
  </div>
</section>








    <section className="text-gray-600 body-font">
      <div className="container px-5 sm:px-14 sm:mb-24 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Our culture and values</h1>
        </div>
        <div className="flex flex-wrap -m-4">

          <div className="xl:w-1/3 md:w-1/2 p-4 w-full">
            <div className="bg-[#F0F3FF] p-10 rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4">
              <Image alt="testimonial" width={60} height={50} src="/culture1.png"/>
              </div>
              <h2 className="text-2xl text-gray-900 title-font mb-2">Transparency and Trust</h2>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4 w-full">
            <div className="bg-[#F0F3FF] p-10 rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4">
              <Image alt="testimonial" width={60} height={50} src="/culture2.png"/>
              </div>
              <h2 className="text-2xl text-gray-900 title-font mb-2">Ownership and Impact</h2>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4 w-full">
            <div className="bg-[#F0F3FF] p-10 rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4">
              <Image alt="testimonial" width={60} height={50} src="/culture3.png"/>
              </div>
              <h2 className="text-2xl text-gray-900 title-font mb-2">Speed and Execution</h2>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4 w-full">
            <div className="bg-[#F0F3FF] p-10 rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4">
              <Image alt="testimonial" width={60} height={50} src="/culture4.png"/>
              </div>
              <h2 className="text-2xl text-gray-900 title-font mb-2">Product-first</h2>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4 w-full">
            <div className="bg-[#F0F3FF] p-10 rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4">
              <Image alt="testimonial" width={60} height={50} src="/culture5.png"/>
              </div>
              <h2 className="text-2xl text-gray-900 title-font mb-2">Inclusivity</h2>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4 w-full">
            <div className="bg-[#F0F3FF] p-10 rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4">
              <Image alt="testimonial" width={60} height={50} src="/culture6.png"/>
              </div>
              <h2 className="text-2xl text-gray-900 title-font mb-2">Customer-Centricity</h2>
            </div>
          </div>

        </div>
      </div>
    </section>








    <section className="text-white body-font sm:px-20 px-5 py-24">
      <div className="container mx-auto bg-[#1F0F83] rounded-3xl flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-10 md:pr-16 sm:px-20 px-5 flex flex-col md:items-start md:text-left sm:mt-1 mt-10 mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-12"><span className="font-bold">Together we can impact</span> how
            <br className="hidden lg:inline-block"/>teams work across the globe
          </h1>
          <div className="flex justify-center">
          <Link href="https://app.theaccountantai.com/" target="_blank"><button className="inline-flex text-black font-medium bg-white py-3 px-10 focus:outline-none rounded-full text-lg">Join our team! <FontAwesomeIcon icon={faArrowRight} className="mt-2 pl-4 h-4 w-4"/></button></Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 sm:w-5/6">
          <Image className="object-cover object-center rounded-3xl ml-auto" alt="hero" width={300} height={300} src="/half_circle.png"/>
        </div>
      </div>
    </section>








    <section className="text-gray-600 body-font">
      <div className="container px-5 sm:px-16 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Get to know us better</h1>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

          <div className="p-4 md:w-1/3 sm:mb-0 mb-6 w-full">
            <div className="p-2 rounded-lg shadow hover:shadow-2xl hover:shadow-[#1D8CF252] h-full">
              <div className="rounded-lg h-88 overflow-hidden">
                <Image alt="content" className="object-cover object-center h-full w-full" width={200} height={200} src="/speaker.png"/>
              </div>
              <div className="p-3">
                <h2 className="font-bold title-font text-gray-900">Read</h2>
                <h2 className="text-2xl font-bold title-font text-gray-900 py-3">How acai help accounting</h2>
                <p className="text-base leading-relaxed">Check out some of our favorite articles over the years!</p>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3 sm:mb-0 mb-6 w-full">
            <div className="p-2 rounded-lg shadow hover:shadow-2xl hover:shadow-[#1D8CF252] h-full">
              <div className="rounded-lg h-88 overflow-hidden">
                <Image alt="content" className="object-cover object-center h-full w-full" width={200} height={200} src="/mike.png"/>
              </div>
              <div className="p-3">
                <h2 className="font-bold title-font text-gray-900">Listen</h2>
                <h2 className="text-2xl font-bold title-font text-gray-900 py-3">Startup for Startup podcast</h2>
                <p className="text-base leading-relaxed">Sharing insights, experience, and knowledge.</p>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3 sm:mb-0 mb-6 w-full">
            <div className="p-2 rounded-lg shadow hover:shadow-2xl hover:shadow-[#1D8CF252] h-full">
              <div className="rounded-lg h-88 overflow-hidden">
                <Image alt="content" className="object-cover object-center h-full w-full" width={200} height={200} src="/gallery.png"/>
              </div>
              <div className="p-3">
                <h2 className="font-bold title-font text-gray-900">Explore</h2>
                <h2 className="text-2xl font-bold title-font text-gray-900 py-3">Our blog stacks</h2>
                <p className="text-base leading-relaxed">Customer stories, tips, and our opinions on everything in between.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>










    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-bold title-font mb-8 text-black">Lets get social</h1>
          <div className="text-center item-center justify-center">
          <span className="text-white inline-flex lg:mt-0 w-full justify-center md:justify-start md:w-auto">
              <a className="rounded-full bg-black h-10 w-10" href="https://linkedin.com" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} className="mt-2 h-6 w-6"/>
              </a>
              <a className="rounded-full bg-black h-10 w-10 ml-3" href="https://facebook.com" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} className="mt-2 h-6 w-6"/>
              </a>
              <a className="rounded-full bg-black h-10 w-10 ml-3" href="https://twitter.com" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="mt-2 h-6 w-6"/>
              </a>
              <a className="rounded-full bg-black h-10 w-10 ml-3" href="https://www.youtube.com" target="_blank">
              <FontAwesomeIcon icon={faYoutube} className="mt-2 h-6 w-6"/>
              </a>
              <a className="rounded-full bg-black h-10 w-10 ml-3" href="https://instagram.com" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="mt-2 h-6 w-6"/>
              </a>
              <a className="rounded-full bg-black h-10 w-10 ml-3" href="https://instagram.com" target="_blank">
              <FontAwesomeIcon icon={faBasketball} className="mt-2 h-6 w-6"/>
              </a>
          </span>
          </div>
        </div>
        <div className="w-2/3 container mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" width={200} height={200} src="/social1.png"/>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" width={200} height={200} src="/social2.png"/>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" width={200} height={200} src="/social3.png"/>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" width={200} height={200} src="/social4.png"/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>










    <section className="text-white body-font bg-[#5034FF] mb-24 sm:mt-24">
      <div className="container mx-auto relative rounded-3xl flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-5/6 sm:pl-24 mt-5 px-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl">Empowering teams to
            <br className="hidden lg:inline-block"/><span className="font-bold"> accomplish more, together</span>
          </h1>
          <p className="py-7 text-lg">14-day free trial | No credit card needed</p>
          <div className="flex justify-center">
          <Link href="https://app.theaccountantai.com/" target="_blank"><button className="inline-flex text-black font-medium bg-white py-3 px-10 focus:outline-none rounded-full text-lg">Get Started <FontAwesomeIcon icon={faArrowRight} className="mt-2 pl-4 h-4 w-4"/></button></Link>
          </div>
        </div>
        <div className="w-full">
          <Image className="object-cover object-center rounded ml-auto h-96 w-full " alt="hero" width={700} height={300} src="/about4.png"/>
        </div>
      </div>
    </section>


    
    </React.Fragment>
    );
}