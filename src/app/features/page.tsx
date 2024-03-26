import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Features() {
    return (
    <React.Fragment>
        <section className="text-white bg-gradient-to-b from-[#000133] to-[#0F1048] body-font">
        <div className="container mx-auto flex px-5 sm:px-14 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
            <h1 className="title-font sm:text-6xl text-3xl mb-8 font-medium">Seamlessly integrate
              <br className="hidden lg:inline-block"/>all of your favorite tools
            </h1>
            <p className="sm:mb-10 leading-relaxed text-xl sm:w-3/4">Connect theaccountantai.com with the tools you already use to have all your team’s work in one place.</p>
            <div className="flex ">
            <Link href="https://app.theaccountantai.com/" target="_blank"><button className="inline-flex text-white bg-[#6161FF] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Get Started <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 mt-2 ml-2"/></button></Link>
            </div>
          </div>
          <div className="lg:w-3/6 mx-auto">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 text-center mt-auto">
                <Image className="object-cover inset-auto rounded-lg sm:translate-y-[30%]" alt="hero2" width="500" height="300" src="/xero_integration.png"/>
              </div>
              <div className="sm:w-2/3 sm:pl-8 pt-4 sm:mt-0 text-center sm:text-left">
                <Image className="object-cover rounded-lg sm:translate-y-[20%]" alt="hero3" width="500" height="300" src="/google_drive.png"/>
              </div>
            </div>
          </div>
        </div>
      </section>








<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

      <div className="p-20 md:w-1/3">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/outlook.png" alt="outlook"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Outlook</h1>
            <p className="leading-relaxed mb-3 text-lg">Automatically convert emails into action items to track and manage inside theaccountantai.com.</p>
          </div>
        </div>
      </div>

      <div className="p-20 md:w-1/3">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/dropbox.png" alt="outlook"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Dropbox</h1>
            <p className="leading-relaxed mb-3 text-lg">Easily attach, share, and preview files stored in your Dropbox from within theaccountantai.com.</p>
          </div>
        </div>
      </div>

      <div className="p-20 md:w-1/3">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/slack.png" alt="outlook"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Slack</h1>
            <p className="leading-relaxed mb-3 text-lg">Share information, updates and files in Slack #channels from directly inside theaccountantai.com.</p>
          </div>
        </div>
      </div>

      <div className="p-20 md:w-1/3">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/outlook.png" alt="outlook"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Outlook</h1>
            <p className="leading-relaxed mb-3 text-lg">Automatically convert emails into action items to track and manage inside theaccountantai.com.</p>
          </div>
        </div>
      </div>

      <div className="p-20 md:w-1/3">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/dropbox.png" alt="outlook"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Dropbox</h1>
            <p className="leading-relaxed mb-3 text-lg">Easily attach, share, and preview files stored in your Dropbox from within theaccountantai.com.</p>
          </div>
        </div>
      </div>

      <div className="p-20 md:w-1/3">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/slack.png" alt="outlook"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Slack</h1>
            <p className="leading-relaxed mb-3 text-lg">Share information, updates and files in Slack #channels from directly inside theaccountantai.com.</p>
          </div>
        </div>
      </div>

    </div>
    <Link href="https://app.theaccountantai.com" target="_blank"><button className="flex mx-auto mt-16 text-white bg-[#6C6CFF] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">See more features <FontAwesomeIcon icon={faArrowRight} className="mt-2 ml-4 h-4 w-4"/></button></Link>
  </div>
</section>










<section className="text-gray-600 bg-[#F9F9FF] body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">Set-up you The Accountant AI in just a few clicks</h1>
          <p className="text-2xl mt-2">Use our recipes with ease - no code required</p>
        </div>
        <div className="flex flex-wrap -m-4">

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white hover:-translate-y-10 shadow-lg rounded-lg">
                <Image alt="feature1" width={600} height={300} src="/feature1.png"/>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white hover:-translate-y-10 shadow-lg rounded-lg">
                <Image alt="feature1" width={600} height={300} src="/feature2.png"/>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white hover:-translate-y-10 shadow-lg rounded-lg">
                <Image alt="feature1" width={600} height={300} src="/feature3.png"/>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white hover:-translate-y-10 shadow-lg rounded-lg">
                <Image alt="feature1" width={600} height={300} src="/feature4.png"/>
            </div>
          </div>

        </div>
      </div>
    </section>












    <section className="text-gray-600 body-font">
      <div className="container px-5 sm:px-28 sm:py-52 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">Recommended integrations for any team</h1>
          <p className="text-xl mt-2">theaccountantai.com, ranked #1 for productivity, helps teams manage and execute projects that deliver results on time.</p>
        </div>
        <div className="flex flex-wrap ">

          <div className="xl:w-1/4 md:w-1/2">
            <div className="bg-white rounded-lg">
                <input className="border-l-4 border-indigo-500 py-2 px-3 bg-[#F5F6F8] px-16" placeholder="Google Drive"/>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2">
            <div className="bg-white rounded-lg">
                <input className="border-l-4 border-green-500 py-2 px-3 bg-[#F5F6F8] px-16" placeholder="One Drive"/>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2">
            <div className="bg-white rounded-lg">
                <input className="border-l-4 border-red-500 py-2 px-3 bg-[#F5F6F8] px-16" placeholder="Xero"/>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2">
            <div className="bg-white rounded-lg">
                <input className="border-l-4 border-sky-500 py-2 px-3 bg-[#F5F6F8] px-16" placeholder="Quickbooks"/>
            </div>
          </div>

        </div>
      </div>
    </section>










<section className="text-gray-600 body-font overflow-hidden bg-[#F5F6F8]">
    <div className="container px-5 sm:px-28 py-16 mx-auto">
        <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-4xl text-3xl title-font mb-2 font-bold  text-gray-900">Integrate your favorite tools with theaccountantai.com</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-500">14-day free trial | No credit card required</p>
        <div className="flex mx-auto overflow-hidden mt-6">
        <Link href="https://app.theaccountantai.com/" target="_blank"><button className="py-2 px-6 bg-[#6161FF] text-white rounded-full focus:outline-none flex">Get Started <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1 h-4 w-4"/></button></Link>
        </div>
        </div>
    </div>
  </section>












  <section className="text-gray-600 body-font">
  <div className="container px-5 sm:px-12 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

      <div className="p-5 md:w-1/4">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/monkey.png" alt="monkey"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">SurveyMonkey</h1>
            <p className="leading-relaxed mb-3 text-lg">Receive your survey, poll, and quiz results in your theaccountantai.com account to help facilitate lead management.</p>
          </div>
        </div>
      </div>

      <div className="p-5 md:w-1/4">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/mailchimp.png" alt="mailchimp"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Mailchimp</h1>
            <p className="leading-relaxed mb-3 text-lg">Manage your email campaigns within theaccountantai.com. Get the latest stats on deployed emails and collect new leads efficiently.</p>
          </div>
        </div>
      </div>

      <div className="p-5 md:w-1/4">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/facebooks_ads.png" alt="facebooks_ads"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Facebook Ads</h1>
            <p className="leading-relaxed mb-3 text-lg">Add the data you want to see on your boards to create, manage, and track your Facebook ads all from theaccountantai.com.</p>
          </div>
        </div>
      </div>

      <div className="p-5 md:w-1/4">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/hubspot.png" alt="hubspot"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">HubSpot</h1>
            <p className="leading-relaxed mb-3 text-lg">Manage all your leads and contacts in theaccountantai.com to ensure your entire company is collaborating together.</p>
          </div>
        </div>
      </div>

      <div className="p-5 md:w-1/4">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/typeform.png" alt="typeform"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Typeform</h1>
            <p className="leading-relaxed mb-3 text-lg">Easily organize Typeform submissions in one visual workspace, and add all your data in seconds to theaccountantai.com.</p>
          </div>
        </div>
      </div>

      <div className="p-5 md:w-1/4">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/clearbit.png" alt="clearbit"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Clearbit</h1>
            <p className="leading-relaxed mb-3 text-lg">Turn any lead into a prospect. Seamlessly pull the right data to understand customers and see the results in theaccountantai.com.</p>
          </div>
        </div>
      </div>

      <div className="p-5 md:w-1/4">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/jotform.png" alt="jotform"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">JotForm</h1>
            <p className="leading-relaxed mb-3 text-lg">Better manage leads, distribute surveys, and collect payments with your customizable form via JotForm inside theaccountantai.com.</p>
          </div>
        </div>
      </div>

      <div className="p-5 md:w-1/4">
        <div className="h-full rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" width={500} height={200} src="/box.png" alt="box"/>
          <div className="mt-6">
            <h1 className="title-font text-xl font-bold text-gray-900 mb-3">Box.com</h1>
            <p className="leading-relaxed mb-3 text-lg">Upload your files, share them with your teammates, and collaborate on them together in theaccountantai.com</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>











<section className="text-gray-600 body-font overflow-hidden bg-[#F5F6F8]">
    <div className="container px-5 sm:px-28 py-16 mx-auto">
        <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-4xl text-3xl title-font mb-2 font-bold  text-gray-900">Try theaccountantai.com for your team</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-500">14-day free trial | No credit card required</p>
        <div className="flex mx-auto overflow-hidden mt-6">
        <Link href="https://app.theaccountantai.com/" target="_blank"><button className="py-2 px-6 bg-[#6161FF] text-white rounded-full focus:outline-none flex">Get Started <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1 h-4 w-4"/></button></Link>
        </div>
        </div>
    </div>
  </section>
    </React.Fragment>
    );
}