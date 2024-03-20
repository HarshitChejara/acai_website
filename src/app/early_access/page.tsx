import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function EarlyAccess() {
    return (
    <React.Fragment>
    <section className="bg-[#0F1048] text-white body-font">
    <div className="container px-5 py-24 mx-auto sm:mb-24">
        <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-5xl text-2xl title-font mb-8">The product development software
        <br className="hidden lg:inline-block"/><span className="font-bold">for streamlining your accounting system</span>
        </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:px-48">From product strategy to launch, manage it all with one flexible platform. What would you like to manage with your product management software?</p>
            <button className="flex mx-auto sm:mt-28 text-white bg-[#6161FF] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Get Started <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 sm:py-2 py-2 ml-2"/></button>
            <p className="mt-3 leading-relaxed">No credit card needed ✦ Unlimited time on Free plan</p>
        </div>
        <div className="flex flex-wrap -m-4 sm:mt-96">

        <div className="lg:w-1/4 w-1/2 sm:p-10">
            <div className="flex relative">
            <Image className="object-cover sm:bottom-0 absolute rounded-lg sm:translate-y-[50%] sm:translate-x-[20%]" alt="hero1" width="500" height="300" src="/welcome.png"/>
            </div>
        </div>

        <div className="lg:w-1/2 w-1/2 sm:p-4">
            <div className="flex relative">
            <Image className="object-cover sm:bottom-0 absolute rounded-lg sm:translate-y-[40%] translate-y-[-40%] sm:translate-x-[0%] translate-x-[-40%]" alt="hero2" width="800" height="300" src="/import5.png"/>
            </div>
        </div>

        <div className="lg:w-1/4 w-1/2 sm:p-4">
            <div className="flex relative">
            <Image className="object-cover sm:bottom-0 sm:right-0 absolute rounded-lg sm:translate-y-[60%] sm:translate-x-[-30%] translate-x-[90%]" alt="hero3" width="500" height="300" src="/blog1.png"/>
            </div>
        </div>

        </div>
    </div>
    </section>










<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 sm:px-28 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0 relative">
        <Image className="object-cover object-center rounded sm:ml-2" width={500} height={200} alt="background image" src="/Ellipse.png" />
        <div className="absolute inset-0 flex items-center justify-center">
            <Image className="object-cover object-center rounded" width={550} height={200} alt="overlay image" src="/import_file.png" />
        </div>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-44 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Get a bird’s eye view in a snap</h1>
      <p className="mb-8 leading-relaxed text-lg">monday.com equips you with the tools to create custom dashboards and track progress, timelines and budgets at a glance. Easily run reports from a high-level overview down to very last detail.</p>
    </div>
  </div>
</section>









<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 sm:px-28 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-44 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Collaborate smartly across teams</h1>
      <p className="mb-8 leading-relaxed text-lg">Use data tools to smartly assign and prioritize tasks, share files, and see who is doing what anytime. Our customizable boards keep everyone synced and working towards the same goal.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative">
        <Image className="object-cover object-center rounded sm:ml-2" width={500} height={200} alt="background image" src="/Ellipse.png" />
        <div className="absolute inset-0 flex items-center justify-center">
            <Image className="object-cover object-center rounded" width={550} height={200} alt="overlay image" src="/import_file.png" />
        </div>
        {/* <Image className="object-cover object-center rounded sm:ml-2" width={500} height={200} alt="background image" src="/file_exported.png" /> */}
    </div>
  </div>
</section>









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
  <div className="container px-5 sm:px-12 py-24 mx-auto">
    <div className="flex flex-col text-center w-full sm:mb-20">
      <h1 className="sm:text-5xl text-3xl title-font mb-4 text-gray-900">Centralize all your work processes</h1>
    </div>
    <div className="flex flex-wrap -m-4">

      <div className="p-24 lg:w-1/3 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0 relative">
            <Image className="object-cover object-center rounded " width={500} height={200} alt="background image" src="/sky_circle.png" />
            <div className="absolute inset-0 flex items-center justify-center">
                <Image className="object-cover object-center rounded" width={550} height={200} alt="overlay image" src="/import_file.png" />
            </div>
            </div>
          <div className="w-full">
            <h2 className="title-font font-bold text-xl text-gray-900 py-5">Views</h2>
            <p className="mb-4 text-lg">Free your team from the redundant manual tasks in minutes</p>
          </div>
        </div>
      </div>

      <div className="p-24 lg:w-1/3 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0 relative">
            <Image className="object-cover object-center rounded " width={500} height={200} alt="background image" src="/sky_circle.png" />
            <div className="absolute inset-0 flex items-center justify-center">
                <Image className="object-cover object-center rounded" width={550} height={200} alt="overlay image" src="/welcome.png" />
            </div>
            </div>
          <div className="w-full">
            <h2 className="title-font font-bold text-xl text-gray-900 py-5">Automations</h2>
            <p className="mb-4 text-lg">Free your team from the redundant manual tasks in minutes</p>
          </div>
        </div>
      </div>

      <div className="p-24 lg:w-1/3 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0 relative">
            <Image className="object-cover object-center rounded " width={500} height={200} alt="background image" src="/sky_circle.png" />
            <div className="absolute inset-0 flex items-center justify-center">
                <Image className="object-cover object-center rounded" width={550} height={200} alt="overlay image" src="/import1.png" />
            </div>
            </div>
          <div className="w-full">
            <h2 className="title-font font-bold text-xl text-gray-900 py-5">Workload</h2>
            <p className="mb-4 text-lg">Get a clear breakdown of your team resource capacity to improve workflow</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>










    <section className="text-gray-600 body-font">
      <div className="container mx-auto">
        <div className="flex flex-wrap text-center sm:py-10 sm:px-36 bg-[#F7F7FA] border-t border-b border-[#E7DAED] ">
          <div className="flex flex-col text-center w-full py-14 px-14">
            <h1 className="sm:text-4xl text-2xl title-font text-gray-700">Integrate your work with all your favorite tools</h1>
          </div>
          <div className="p-4 md:w-1/5 w-1/2">
            <div className="px-4 py-6 rounded-lg inline-block">
              <Image alt="mobile app" width={70} height={70} src="/quickbooks.png"/>
            </div>
          </div>

          <div className="p-4 md:w-1/5 w-1/2">
            <div className="px-4 py-6 rounded-lg inline-block">
              <Image alt="mobile app" width={70} height={70} src="/xero.png"/>
            </div>
          </div>

          <div className="p-4 md:w-1/5 w-1/2">
            <div className="px-4 py-6 rounded-lg inline-block">
              <Image alt="mobile app" width={70} height={70} src="/drive.png"/>
            </div>
          </div>

          <div className="p-4 md:w-1/5 w-1/2">
            <div className="px-4 py-6 rounded-lg inline-block">
              <Image alt="mobile app" width={80} height={80} src="/cloud.png"/>
            </div>
          </div>

          <div className="p-4 md:w-1/5 w-1/2">
            <div className="px-4 py-6 rounded-lg inline-block">
              <Image alt="mobile app" width={70} height={70} src="/netsuite.png"/>
            </div>
          </div>
        </div>
      </div>
    </section>






  <section className="bg-[#2B2C5D] body-font overflow-hidden sm:mb-32">
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