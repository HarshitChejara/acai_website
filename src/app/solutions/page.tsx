import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Solutions() {
    return (
    <React.Fragment>
    <section className="text-white bg-gradient-to-b from-[#000133] to-[#0F1048] body-font">
        <div className="container mx-auto flex px-5 sm:px-14 sm:py-32 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
            <h1 className="title-font sm:text-5xl text-3xl mb-10 font-medium">Bring your tasks, tools, and teams together in one place
              {/* <br className="hidden lg:inline-block"/> */}
            </h1>
            <div className="flex ">
            <Link href="https://app.theaccountantai.com/" target="_blank"><button className="inline-flex text-white bg-[#6161FF] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Get Started <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 sm:py-2 py-2 ml-2"/></button></Link>
            </div>
          </div>

          <div className="lg:flex-grow md:w-1/2 mx-auto">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/2 text-center bottom-0">
                <Image className="object-cover inset-auto rounded-lg" alt="hero2" width="150" height="150" src="/profile1.png"/>
              </div>
              <div className="sm:w-2/2 sm:pl-8 pt-4 top-0 text-center sm:text-left">
                <Image className="object-cover rounded-lg sm:translate-y-[20%]" alt="hero3" width="150" height="150" src="/profile2.png"/>
              </div>
            </div>
          </div>
          
        </div>
      </section>










    <section className="text-gray-600 body-font overflow-hidden bg-[#F0F3FF] mt-32 mb-32">
        <div className="container px-5 sm:px-28 py-20 mx-auto">
            <div className="flex flex-col text-center w-full">
                <h1 className="sm:text-4xl text-3xl title-font mb-2 text-black">People and teams use work management </h1>
                <br className="hidden "/><span className="font-bold sm:text-4xl text-3xl text-black">for everyday workflows and processes</span>
            </div>

    <div className="container px-5 sm:py-1 py-20 sm:mt-20 mt-12 mx-auto sm:mb-24 bg-[#646478] rounded-xl">
        <div className="flex flex-wrap -m-4 sm:mt-96">

        <div className="lg:w-1/4 w-1/2 sm:p-10">
            <div className="flex relative">
            <Image className="object-cover sm:bottom-0 absolute rounded-lg sm:translate-y-[50%] sm:translate-x-[40%]" alt="hero1" width="500" height="300" src="/import6.png"/>
            </div>
        </div>

        <div className="lg:w-1/2 w-1/2 sm:p-4">
            <div className="flex relative">
            <Image className="object-cover sm:bottom-0 absolute rounded-lg sm:translate-y-[40%] translate-y-[-40%] sm:translate-x-[0%] translate-x-[-40%]" alt="hero2" width="800" height="300" src="/import1.png"/>
            </div>
        </div>

        <div className="lg:w-1/4 w-1/2 sm:p-4">
            <div className="flex relative">
            <Image className="object-cover sm:bottom-0 sm:right-0 absolute rounded-lg sm:translate-y-[-60%] sm:translate-x-[-30%] translate-x-[90%]" alt="hero3" width="500" height="300" src="/blog2.png"/>
            </div>
        </div>

        </div>
    </div>




<div className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <h2 className="text-gray-400 font-medium title-font tracking-wider text-xl mb-5">Manage marketing requests</h2>
          <p className="leading-relaxed text-gray-400">Organize how you receive and handle marketing requests so you get them to the right people.</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <h2 className="text-gray-400 font-medium title-font tracking-wider text-xl mb-5">Streamline content creation</h2>
          <p className="leading-relaxed text-gray-400">Organize and track progress at a glance to ensure every piece moves through the right stages.</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <h2 className="text-gray-400 font-medium title-font tracking-wider text-xl mb-5">Centralize marketing projects</h2>
          <p className="leading-relaxed text-gray-400">Plan and track business goals, budgets, and marketing campaigns from A-Z.</p>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="text-gray-600 body-font shadow-xl rounded-xl">
  <div className="container px-5 py-5 mx-auto flex flex-wrap">
    <div className="md:w-3/5">
    <h2 className="sm:text-2xl text-2xl text-gray-900 font-medium title-font mb-2 ">A product built for streamlining your accounting system</h2>
    <p>Explore The Accountant AI for exclusive capabilities and integrations</p>
    </div>
    <div className="md:w-2/5 md:pl-6">
      <div className="flex md:mt-4 mt-6">
      <Link href="contact" className="ml-auto"><button className="inline-flex text-white bg-[#F86700] border hover:border-[#F86700] hover:text-[#F86700] py-1 px-8 focus:outline-none hover:bg-transparent rounded-full">Get a free trial <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 sm:py-2 py-2 ml-2"/></button></Link>
      </div>
    </div>
  </div>
</div>

</div>
</section>






<section className="text-gray-600 body-font overflow-hidden bg-[#F0F3FF]">
        <div className="container px-5 sm:px-28 py-20 mx-auto">
            <div className="flex flex-col text-center w-full">
                <h1 className="sm:text-4xl text-3xl title-font mb-5 text-gray-900">Your repetitive work <span className="font-bold">taken care of</span></h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-500">Choose from over 200 automation recipes to <br/>improve efficiency across your work and teams.</p>
            </div>
        </div>
    </section>






<section className="text-gray-600 body-font mb-20 sm:py-28 py-10">
  <div className="container mx-auto flex px-5 sm:px-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900">Creating a culture of
        <br className="hidden lg:inline-block"/><span className="font-bold">ownership</span>
      </h1>
      <p className="mb-8 leading-relaxed text-lg w-3/4">With The Accountant AI work management, ownership is integrated into the platform so people and teams are more responsible, accountable, and connected.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" width={500} height={500} alt="profile3" src="/profile3.png"/>
    </div>
  </div>

  <div className="container mx-auto flex px-5 sm:px-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900">Creating a culture of
        <br className="hidden lg:inline-block"/><span className="font-bold">ownership</span>
      </h1>
      <p className="mb-8 leading-relaxed text-lg w-3/4">With The Accountant AI work management, ownership is integrated into the platform so people and teams are more responsible, accountable, and connected.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" width={500} height={500} alt="profile3" src="/profile4.png"/>
    </div>
  </div>

  <div className="container mx-auto flex px-5 sm:px-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900">Creating a culture of
        <br className="hidden lg:inline-block"/><span className="font-bold">ownership</span>
      </h1>
      <p className="mb-8 leading-relaxed text-lg w-3/4">With The Accountant AI work management, ownership is integrated into the platform so people and teams are more responsible, accountable, and connected.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" width={500} height={500} alt="profile3" src="/profile3.png"/>
    </div>
  </div>

  <div className="container mx-auto flex px-5 sm:px-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900">Creating a culture of
        <br className="hidden lg:inline-block"/><span className="font-bold">ownership</span>
      </h1>
      <p className="mb-8 leading-relaxed text-lg w-3/4">With The Accountant AI work management, ownership is integrated into the platform so people and teams are more responsible, accountable, and connected.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" width={500} height={500} alt="profile3" src="/profile4.png"/>
    </div>
  </div>
  
  <h1 className="text-2xl text-center mt-20">Try The Accountant AI for free</h1>
  <Link href="https://app.theaccountantai.com" target="_blank"><button className="flex mx-auto mt-10 text-white bg-[#6C6CFF] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Get Started <FontAwesomeIcon icon={faArrowRight} className="mt-2 pl-4 h-4 w-4"/></button></Link>
</section>





    </React.Fragment>
    );
}