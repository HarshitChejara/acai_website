import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <React.Fragment>
      <section className="text-white bg-gradient-to-b from-[#000133] to-[#0F1048] body-font">
        <div className="py-10 bg-[#452AEA]"></div>
        <div className="container mx-auto flex px-5 sm:px-14 sm:py-32 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
            <h1 className="title-font sm:text-7xl text-3xl mb-8 font-medium">A platform built for
              <br className="hidden lg:inline-block"/>intelligent Accounting
            </h1>
            <p className="sm:mb-20 leading-relaxed text-xl">What would you like to manage with theaccountantai.com</p>
            <div className="flex ">
            <Link href="https://app.theaccountantai.com/" target="_blank"><button className="inline-flex text-white bg-gradient-to-r from-[#5034FF] to-[#B4B4FF] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Get Started <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 sm:py-2 py-2 ml-2"/></button></Link>
            </div>
            <p className="mt-8 leading-relaxed">No credit card needed ✦ Unlimited time on Free plan</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-auto sm:pl-1 pl-9">
          <div className="image-container relative mt-52">
            <Image className="object-cover absolute inset-auto top-1/2 left-1/2 translate-y-[-90%] translate-x-[-80%] z-10 rounded-lg" alt="hero2" width="500" height="300" src="/hero1.png"/>
            <Image className="object-cover absolute bottom-0 right-0 rounded-lg animate-pulse" alt="hero3" width="500" height="300" src="/Frame.png"/>
          </div>
          </div>
        </div>
      </section>




    <section className="text-gray-600 body-font">
      <div className="container px-5 sm:px-12 sm:py-32 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-4xl text-3xl title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Your Automated Accountant that manages your Accounts in <span className="font-bold">your way</span></h1>
          <p className="lg:pl-52 lg:w-2/3 mx-auto leading-relaxed text-xl">Streamline your accounting needs, efficiency, and productivity by customizing any workflow to fit your needs. Import any IMG/CSV/EXCEL/PDF/WORD file or from your own software API.
            <span className="flex sm:mt-5 mt-5">
            <Link href="https://app.theaccountantai.com/" target="_blank"><button className="inline-flex text-white bg-[#6161FF] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Get Started <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 sm:py-2 py-2 ml-2"/></button></Link>
            </span>
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">

          <div className="flex flex-wrap w-1/2">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1">
              <Image alt="gallery" className="object-cover object-center block" width={500} height={300} src="/welcome.png"/>
            </div>
            <div className="md:p-2 p-1">
              <Image alt="gallery" className="object-cover object-center block animate-bounce" width={400} height={100} src="/file_exported.png"/>
            </div>
            <div className="md:p-2 p-1">
              <Image alt="gallery" className="object-cover object-center block" width={600} height={300} src="/company_profile.png"/>
            </div>
          </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1">
                <Image alt="gallery" className="object-cover object-center block" width={500} height={300} src="/plan.png"/>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image alt="gallery" className="object-cover object-center block animate-bounce" width={500} height={300} src="/file_approved.png"/>
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image alt="gallery" className=" object-cover object-center block" width={700} height={400} src="/import_file.png"/>
            </div>
          </div>

        </div>
      </div>
    </section>




    <section className="text-gray-600 bg-[#F9F9FF] body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">Our premium features</h1>
        </div>
        <div className="flex flex-wrap -m-4">

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white hover:border-[#FFC107] border hover:translate-y-6 shadow-lg p-6 rounded-lg">
              <div className="w-16 h-16 inline-flex border border-[#57007B] items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
                <Image alt="mobile app" width={50} height={50} src="/mobile_app.png"/>
              </div>
              <h2 className="text-lg text-gray-900 font-bold title-font mb-2">Collect Data</h2>
              <p className="leading-relaxed text-base">Import any number of files. JPG or JPEG or PDF or EXCEL or CSV or WORD formates supported.</p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white hover:border-[#FFC107] border hover:translate-y-6 shadow-lg p-6 rounded-lg">
              <div className="w-16 h-16 inline-flex border border-[#57007B] items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
                <Image alt="mobile app" width={40} height={40} src="/Code_perspective.png"/>
              </div>
              <h2 className="text-lg text-gray-900 font-bold title-font mb-2">Analyse Data</h2>
              <p className="leading-relaxed text-base">Intelligent Document Processing (IDP) clasifies your finantial and non-finantial files on its own.</p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white hover:border-[#FFC107] border hover:translate-y-6 shadow-lg p-6 rounded-lg">
              <div className="w-16 h-16 inline-flex border border-[#57007B] items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
                <Image alt="mobile app" width={40} height={40} src="/Dashboard.png"/>
              </div>
              <h2 className="text-lg text-gray-900 font-bold title-font mb-2">Manage Data</h2>
              <p className="leading-relaxed text-base">The Accountant AI allows you to customise how you manage your accounting.</p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white hover:border-[#FFC107] border hover:translate-y-6 shadow-lg p-6 rounded-lg">
              <div className="w-16 h-16 inline-flex border border-[#57007B] items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
                <Image alt="mobile app" width={50} height={50} src="/mobile_app.png"/>
              </div>
              <h2 className="text-lg text-gray-900 font-bold title-font mb-2">Automate Accounting</h2>
              <p className="leading-relaxed text-base">Relax and stay back while The Accountant AI manages your Accounting for you.</p>
            </div>
          </div>

        </div>
      </div>
    </section>




    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 sm:px-16 sm:py-72 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <span className="inline-block h-1 w-20 rounded bg-[#FFC107] mb-6"></span>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900">How Accountant AI will ease
            <br className="hidden lg:inline-block"/><span className="font-bold">the accounting system</span>
          </h1>
          <p className="mb-8 leading-relaxed text-lg">We <span className="text-[#F76680]">automate document processing</span> for businesses. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are an Accounting Automation company that guarantees successfully making the accounting automated for yuor business.</p>
          <div className="flex justify-center">
            <p className="font-medium text-black">See more Information <FontAwesomeIcon icon={faArrowRight} className="text-[#57007B] pl-4 h-4 w-4"/></p>
          </div>
        </div>
        <div className="md:w-1/2 w-5/6 container sm:px-1 px-8 sm:mr-1 mr-28">
          <div className="image-container relative sm:mt-52 mt-32">
            <Image className="object-cover absolute top-0 z-20 rounded-lg" alt="hero1" width={250} height={150} src="/file_approved.png"/>
            <Image className="object-cover absolute inset-auto sm:top-1/2 sm:left-1/2 translate-y-[-40%] sm:translate-x-[-40%] translate-x-[50%] rounded-lg z-10" alt="hero2" width={500} height={300} src="/import2.png"/>
            <Image className="object-cover absolute bottom-0 rounded-lg" alt="hero3" width={500} height={300} src="/import1.png"/>
          </div>
        </div>
      </div>
    </section>




    <section className="text-white px-12 sm:py-1 py-12 body-font">
      <div className="container bg-[#00854D] rounded-2xl sm:px-32 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-8xl text-3xl font-bold title-font mb-4">Lets talk numbers</h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center">

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-r-2 border-[#00CA72] px-4 sm:py-6">
              <h2 className="title-font font-bold text-5xl mb-5">100,000+</h2>
              <p className="leading-relaxed">File Import Capacity</p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-r-2 border-[#00CA72] px-4 py-6">
              <h2 className="title-font font-bold text-5xl mb-5">6+</h2>
              <p className="leading-relaxed">Supported Document formats</p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="px-4 py-6">
              <h2 className="title-font font-bold text-5xl mb-5">5+</h2>
              <p className="leading-relaxed">Integations Available</p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-l-2 border-[#00CA72] px-4 py-6">
              <h2 className="title-font font-bold text-5xl mb-5">Free</h2>
              <p className="leading-relaxed">Plans Available</p>
            </div>
          </div>

        </div>
      </div>
    </section>






    <section className="text-gray-600 body-font">
      <div className="container py-28 mx-auto">
        <div className="flex flex-col w-full mb-20 px-14">
        <span className="inline-block h-1 w-20 rounded bg-[#4CAF50] mb-6"></span>
          <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900">The Accountant AI Integrations with
            <br className="hidden lg:inline-block"/>other platforms
          </h1>
        </div>
        <div className="flex flex-wrap text-center bg-[#F7F7FA] border-t border-b border-[#E7DAED] ">
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





    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 sm:px-20 py-24 mx-auto">

        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <span className="inline-block h-1 w-20 rounded bg-[#1B6953] mb-6"></span>
          <h1 className="sm:text-4xl text-2xl title-font mb-2 text-gray-900">The Accountant AI 
          <br className="hidden lg:inline-block"/><span className="font-bold">Features</span>
          </h1>
        </div>

        <div className="mx-auto flex flex-wrap sm:mb-20">
          <div className="lg:w-1/2 w-full lg:pr-20 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-8">Remove Manual Tasks</h1>
            <p className="leading-relaxed mb-8 text-lg">Removing Manual Data entry habit is not easy. We provide you an automated accountant that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)</p>
            <p className="leading-relaxed mb-8 text-lg">Our <span className="bg-gradient-to-r from-[#F76680] to-[#57007B] inline-block text-transparent bg-clip-text">delivery model</span> helps you cut costs and deliver within budget.</p>
            <p className="border-l-2 border-[#F76680] mb-8"><span className="leading-relaxed bg-gradient-to-r from-[#F76680] to-[#57007B] inline-block text-transparent bg-clip-text italic ml-3">The Accountant AI is quick to identify larger problem with the Software so we decided to expand our scope to build new modules</span></p>
            <a className="inline-flex items-center">
              <Image alt="blog" src="/Ellipse1.png" width={50} height={50} className="rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">Jeewa markram</span>
                <span className="text-gray-400 text-sm tracking-widest mt-0.5">CEO</span>
              </span>
            </a>
          </div>
          <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded" width={400} height={200} src="/import3.png"/>
        </div>

        <div className="mx-auto flex flex-wrap sm:mb-20">
          <div className="lg:w-1/2 w-full lg:pr-20 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-8">Audit Log- Manage Approvals easily.</h1>
            <p className="leading-relaxed mb-8 text-lg">We help you Manage the documents approvals that fit your business, follows your processes, and easy to adapt.</p>
            <p className="leading-relaxed mb-8 text-lg">Our <span className="bg-gradient-to-r from-[#F76680] to-[#57007B] inline-block text-transparent bg-clip-text">delivery model</span> helps you cut costs and deliver within budget.</p>
            <p className="border-l-2 border-[#F76680] mb-8"><span className="leading-relaxed bg-gradient-to-r from-[#F76680] to-[#57007B] inline-block text-transparent bg-clip-text italic ml-3">The Accountant AI is quick to identify larger problem with the Software so we decided to expand our scope to build new modules</span></p>
            <a className="inline-flex items-center">
              <Image alt="blog" src="/Ellipse2.png" width={50} height={50} className="rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">Jeewa markram</span>
                <span className="text-gray-400 text-sm tracking-widest mt-0.5">CEO</span>
              </span>
            </a>
          </div>
          <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded" width={400} height={200} src="/import4.png"/>
        </div>

        <div className="mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-20 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-8">No limit- Upto a million records</h1>
            <p className="leading-relaxed mb-8 text-lg">Getting Correct Accounting documents is very difficult. Import data from multiple sources and stay up to date with your accounting.</p>
            <p className="leading-relaxed mb-8 text-lg">Our <span className="bg-gradient-to-r from-[#F76680] to-[#57007B] inline-block text-transparent bg-clip-text">delivery model</span> helps you cut costs and deliver within budget.</p>
            <p className="border-l-2 border-[#F76680] mb-8"><span className="leading-relaxed bg-gradient-to-r from-[#F76680] to-[#57007B] inline-block text-transparent bg-clip-text italic ml-3">The Accountant AI is quick to identify larger problem with the Software so we decided to expand our scope to build new modules</span></p>
            <a className="inline-flex items-center">
              <Image alt="blog" src="/Ellipse3.png" width={50} height={50} className="rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">Jeewa markram</span>
                <span className="text-gray-400 text-sm tracking-widest mt-0.5">CEO</span>
              </span>
            </a>
          </div>
          <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded" width={400} height={200} src="/import5.png"/>
        </div>

      </div>
    </section>








    <section className="text-gray-600 bg-[#F5F6F8] border-t border-b border-[#E7DAED] body-font">
      <div className="container px-5 sm:px-16 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <span className="inline-block h-1 w-20 rounded bg-[#57007B] mb-6"></span>
          <h1 className="sm:text-4xl text-2xl title-font mb-2 text-gray-900">Explore Our Blogs to know 
          <br className="hidden lg:inline-block"/><span className="font-bold">the latest industry trends</span>
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border bg-white border-[#E7DAED] p-8 py-14 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-lg bg-black text-indigo-500 flex-shrink-0">
                <Image alt="rocket" width={40} height={40} src="/rocket.png"/>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl title-font font-medium mb-3">Feature Highlight</h2>
                <p className="leading-relaxed text-base">Unlike other companies, we are a <span className="text-black">Accounting Automation </span> company. Projects are driven by Accountants and they make sure design and processes translate to automated accounting..</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border bg-white border-[#E7DAED] p-8 py-14 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#509CF5] to-[#68DBF2] text-indigo-500 flex-shrink-0">
                <Image alt="code" width={40} height={40} src="/Code_perspective.png"/>
              </div>
              <div className="flex-grow">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-3">Feature Highlight</h2>
                <p className="leading-relaxed text-base">Unlike other companies, we are a <span className="text-black">Accounting Automation </span> company. Projects are driven by Accountants and they make sure design and processes translate to automated accounting..</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border bg-white border-[#E7DAED] p-8 py-14 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#FF3D9A] to-[#FF92AE] text-indigo-500 flex-shrink-0">
                <Image alt="heart_rate" width={40} height={40} src="/heart_rate.png"/>
              </div>
              <div className="flex-grow">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-3">Feature Highlight</h2>
                <p className="leading-relaxed text-base">Unlike other companies, we are a <span className="text-black">Accounting Automation </span> company. Projects are driven by Accountants and they make sure design and processes translate to automated accounting..</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border bg-white border-[#E7DAED] p-8 py-14 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#24E795] to-[#67E9F1] text-indigo-500 flex-shrink-0">
                <Image alt="shield" width={40} height={40} src="/shield.png"/>
              </div>
              <div className="flex-grow">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-3">Feature Highlight</h2>
                <p className="leading-relaxed text-base">Unlike other companies, we are a <span className="text-black">Accounting Automation </span> company. Projects are driven by Accountants and they make sure design and processes translate to automated accounting..</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border bg-white border-[#E7DAED] p-8 py-14 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#F7936F] to-[#FFEF5E] text-indigo-500 flex-shrink-0">
                <Image alt="success" width={40} height={40} src="/success.png"/>
              </div>
              <div className="flex-grow">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-3">Feature Highlight</h2>
                <p className="leading-relaxed text-base">Unlike other companies, we are a <span className="text-black">Accounting Automation </span> company. Projects are driven by Accountants and they make sure design and processes translate to automated accounting..</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border bg-white border-[#E7DAED] p-8 py-14 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#57007B] to-[#F76680] text-indigo-500 flex-shrink-0">
                <Image alt="lock" width={40} height={40} src="/lock.png"/>
              </div>
              <div className="flex-grow">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-3">Feature Highlight</h2>
                <p className="leading-relaxed text-base">Unlike other companies, we are a <span className="text-black">Accounting Automation </span> company. Projects are driven by Accountants and they make sure design and processes translate to automated accounting..</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>











    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <span className="inline-block h-1 w-20 rounded bg-[#FFC107] mb-6"></span>
          <h1 className="sm:text-4xl text-2xl title-font mb-2 text-gray-900">How 
          <br className="hidden lg:inline-block"/><span className="font-bold">The Accountant AI works</span>
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 sm:px-32 px-8">

          <div className="lg:w-1/2 lg:mb-0 mb-6 sm:p-20">
            <div className="h-full text-center">
              <h1 className="text-white bg-[#1F0F83] text-3xl py-5 w-20 h-20 object-center inline-block rounded-full mb-8">1</h1>
              <p className="leading-relaxed text-left">Regester on The Accountant AI.</p>
            </div>
          </div>

          <div className="lg:w-1/2 lg:mb-0 mb-6 sm:p-20">
            <div className="h-full text-center">
              <h1 className="text-white bg-[#1F0F83] text-3xl py-5 w-20 h-20 object-center inline-block rounded-full mb-8">2</h1>
              <p className="leading-relaxed text-left">Create your first company on The Accountant AI. You can create more than one company.</p>
            </div>
          </div>

          <div className="lg:w-1/2 lg:mb-0 mb-6 sm:p-20">
            <div className="h-full text-center">
              <h1 className="text-white bg-[#1F0F83] text-3xl py-5 w-20 h-20 object-center inline-block rounded-full mb-8">3</h1>
              <p className="leading-relaxed text-left">Link your accounting system on theacountantai.com. We support Xero, Quickbooks, NetSuite bookkeeping software integrations. More comming soon.</p>
            </div>
          </div>

          <div className="lg:w-1/2 lg:mb-0 mb-6 sm:p-20">
            <div className="h-full text-center">
              <h1 className="text-white bg-[#1F0F83] text-3xl py-5 w-20 h-20 object-center inline-block rounded-full mb-8">4</h1>
              <p className="leading-relaxed text-left">Import single File or import files in bulk. The Accountant AI supports JPG/ JPEG/ EXCEL/ CSV/ PDF/ WORD file formats.</p>
            </div>
          </div>

          <div className="lg:w-1/2 lg:mb-0 mb-6 sm:p-20">
            <div className="h-full text-center">
              <h1 className="text-white bg-[#1F0F83] text-3xl py-5 w-20 h-20 object-center inline-block rounded-full mb-8">5</h1>
              <p className="leading-relaxed text-left">Setup custom Document Approval flows and edit before adding data to your accounting system.</p>
            </div>
          </div>

          <div className="lg:w-1/2 lg:mb-0 mb-6 sm:p-20">
            <div className="h-full text-center">
              <h1 className="text-white bg-[#1F0F83] text-3xl py-5 w-20 h-20 object-center inline-block rounded-full mb-8">6</h1>
              <p className="leading-relaxed text-left">Your Accounting is Automated now. Get Started here.</p>
            </div>
          </div>

        </div>
      </div>
    </section>










    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center items-center w-full mb-5">
          <span className="inline-block h-1 w-20 rounded bg-[#57007B] mb-6"></span>
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">Featured 
          <br className="hidden lg:inline-block"/><span className="font-bold">Resources</span>
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">

          <div className="p-8 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center">
              <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" width={200} height={200} src="/Resources1.png"/>
              <div className="w-full">
                <p className="mb-4">How to Automate your Accounting in 4 steps on ACAI</p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-black font-medium inline-flex ml-auto items-center md:mb-2 lg:mb-0">Read More <FontAwesomeIcon icon={faArrowRight} className="ml-4 h-4 w-4"/></a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center">
              <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" width={200} height={200} src="/Resources2.png"/>
              <div className="w-full">
                <p className="mb-4">How to Import from Google Drive or One Drive.</p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-black font-medium inline-flex ml-auto items-center md:mb-2 lg:mb-0">Read More <FontAwesomeIcon icon={faArrowRight} className="ml-4 h-4 w-4"/></a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center">
              <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" width={200} height={200} src="/Resources3.png"/>
              <div className="w-full">
                <p className="mb-4">How to Link your Xero account to ACAI.</p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-black font-medium inline-flex ml-auto items-center md:mb-2 lg:mb-0">Read More <FontAwesomeIcon icon={faArrowRight} className="ml-4 h-4 w-4"/></a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center">
              <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" width={200} height={200} src="/Resources4.png"/>
              <div className="w-full">
                <p className="mb-4">How to Link your Quickbooks account to ACAI.</p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-black font-medium inline-flex ml-auto items-center md:mb-2 lg:mb-0">Read More <FontAwesomeIcon icon={faArrowRight} className="ml-4 h-4 w-4"/></a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center">
              <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" width={200} height={200} src="/Resources5.png"/>
              <div className="w-full">
                <p className="mb-4">Best Ways to use ACAI.</p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-black font-medium inline-flex ml-auto items-center md:mb-2 lg:mb-0">Read More <FontAwesomeIcon icon={faArrowRight} className="ml-4 h-4 w-4"/></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>








    <section className="text-white body-font sm:px-28 px-5 sm:py-28">
      <div className="container mx-auto bg-[#1F0F83] rounded-3xl flex px-5 sm:px-20 sm:py-1 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-12 font-medium">Streamline your accounting
            <br className="hidden lg:inline-block"/>system with The Accountant AI
          </h1>
          <div className="flex justify-center">
          <Link href="https://app.theaccountantai.com/" target="_blank"><button className="inline-flex text-black font-medium bg-white py-2 px-14 focus:outline-none rounded-xl text-lg">Start Trial</button></Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image className="object-cover object-center rounded ml-auto" alt="hero" width={300} height={300} src="/circle_frame.png"/>
        </div>
      </div>
    </section>

    </React.Fragment>
  );
}
