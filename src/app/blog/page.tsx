import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

export default function Blog() {
    return (
    <React.Fragment>
    <section className="text-white body-font sm:px-52 px-5 sm:py-12">
        <form action="#" className="md:w-1/2">
            <div className="items-center mx-auto mb-3 mt-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div className="relative sm:pr-1">
                <input type="text" placeholder="Search" className="sm:pl-4 pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-64" />
                <div className="absolute inset-y-0 sm:right-0 sm:pl-1 pl-2 pr-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 w-4 h-4" />
                </div>
            </div>
            <div className="relative sm:pl-1">
                <p className="pl-10 pr-4 py-2 text-[#0073EA] bg-[#CCE5FF] rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-64">Featured</p>
                {/* <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-64" /> */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faStar} className="text-[#0073EA] bg-[#CCE5FF] w-4 h-4"/>
                </div>
            </div>
            </div>
        </form>
      <div className="container mx-auto bg-[#595AD4] rounded-xl flex px-5 sm:px-10 sm:py-20 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-5 font-medium">Get started with The Accountant AI to streamline your accounting system</h1>
          <p className="text-lg md:w-1/2">The theaccountantai.com system center offers a variety of templates customizable for every industry, business, and team.</p>
        </div>
      </div>
    </section>







    <section className="text-gray-600 body-font">
    <div className="container px-5 sm:px-44 mx-auto">
        <div className="flex flex-col w-full mb-5 sm:mt-1 mt-8">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Featured categories</h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center">

        <div className="p-4 md:w-1/6 w-1/2 w-full">
            <div className="object-center p-4 rounded-lg">
            <Image  alt="gallery" width="200" height="200" src="/category1.png" />
            </div>
            <p className="leading-relaxed">Automate Imports</p>
        </div>

        <div className="p-4 md:w-1/6 w-1/2 w-full">
            <div className="object-center p-4 rounded-lg">
            <Image  alt="gallery" width="200" height="200" src="/category2.png" />
            </div>
            <p className="leading-relaxed">Intelligent Accounting</p>
        </div>

        <div className="p-4 md:w-1/6 w-1/2 w-full">
            <div className="object-center p-4 rounded-lg">
            <Image  alt="gallery" width="200" height="200" src="/category3.png" />
            </div>
            <p className="leading-relaxed">How to use</p>
        </div>

        <div className="p-4 md:w-1/6 w-1/2 w-full">
            <div className="object-center p-4 rounded-lg">
            <Image  alt="gallery" width="200" height="200" src="/category4.png" />
            </div>
            <p className="leading-relaxed">Link Third-party apps</p>
        </div>

        <div className="p-4 md:w-1/6 w-1/2 w-full">
            <div className="object-center p-4 rounded-lg">
            <Image  alt="gallery" width="200" height="200" src="/category5.png" />
            </div>
            <p className="leading-relaxed">Customise</p>
        </div>

        <div className="p-4 md:w-1/6 w-1/2 w-full">
            <div className="object-center p-4 rounded-lg">
            <Image  alt="gallery" width="200" height="200" src="/category6.png" />
            </div>
            <p className="leading-relaxed">Help & Support</p>
        </div>

        </div>
    </div>
    </section>








    <section className="text-gray-600 body-font">
    <div className="container px-5 sm:px-44 py-24 mx-auto">
        <div className="flex flex-col">
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-4">
            <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-3xl mb-2 sm:mb-0">Most popular</h1>
        </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="border p-6 rounded-lg">
                <div className="rounded-lg h-64 overflow-hidden">
                <Image alt="content" className="object-cover object-center" width={600} height={500} src="/blog1.png"/>
                </div>
                <h2 className="text-xl font-bold title-font text-gray-900 mt-5">How theaccountantai words</h2>
                <p className="text-lg leading-relaxed mt-2">Manage contacts and deals in one place&nbsp;&nbsp;</p>
            </div>
        </div>

        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="border p-6 rounded-lg">
                <div className="rounded-lg h-64 overflow-hidden">
                <Image alt="content" className="object-cover object-center" width={600} height={500} src="/blog2.png"/>
                </div>
                <h2 className="text-xl font-bold title-font text-gray-900 mt-5">How theaccountantai helps </h2>
                <p className="text-lg leading-relaxed mt-2">Plan all your upcoming campaigns in a visual way.</p>
            </div>
        </div>

        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="border p-6 rounded-lg">
                <div className="rounded-lg h-64 overflow-hidden">
                <Image alt="content" className="object-cover object-center" width={600} height={500} src="/blog3.png"/>
                </div>
                <h2 className="text-xl font-bold title-font text-gray-900 mt-5">theaccountantai automated system</h2>
                <p className="text-lg leading-relaxed mt-2">Manage simple to complex projects across multiple teams and departments.</p>
            </div>
        </div>
        </div>



        <div className="flex flex-col">
        <div className="flex flex-wrap sm:flex-row flex-col py-10">
            <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-3xl mb-2 sm:mb-0">New and notable</h1>
        </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="border p-6 rounded-lg">
                <div className="rounded-lg h-64 overflow-hidden">
                <Image alt="content" className="object-cover object-center" width={600} height={500} src="/blog4.png"/>
                </div>
                <h2 className="text-xl font-bold title-font text-gray-900 mt-5">Early access</h2>
                <p className="text-lg leading-relaxed mt-2">Plan your roadmap, track progress, and manage your cross-functional team.</p>
            </div>
        </div>

        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="border p-6 rounded-lg">
                <div className="rounded-lg h-64 overflow-hidden">
                <Image alt="content" className="object-cover object-center" width={600} height={500} src="/blog5.png"/>
                </div>
                <h2 className="text-xl font-bold title-font text-gray-900 mt-5">Streamline your accounts </h2>
                <p className="text-lg leading-relaxed mt-2">Manage all your content initiatives on our content calendar template.</p>
            </div>
        </div>

        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="border p-6 rounded-lg">
                <div className="rounded-lg h-64 overflow-hidden">
                <Image alt="content" className="object-cover object-center" width={600} height={500} src="/blog6.png"/>
                </div>
                <h2 className="text-xl font-bold title-font text-gray-900 mt-5">Contacts</h2>
                <p className="text-lg leading-relaxed mt-2">Keep track of all contact information in one, secure place.</p>
            </div>
        </div>
        </div>

    </div>
    </section>
    </React.Fragment>
  );
}