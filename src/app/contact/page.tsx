"use client";

import Image from "next/image";
import React, { useState } from 'react';
import axios from 'axios';


export default function Contact() {


const [First_Name, setFirstName]=useState('');
const [Last_Name, setLastName]=useState('');
const [Email, setEmail]=useState('');
const [Job_Title, setJobTitle]=useState('');
const [Phone_Number, setPhoneNumber]=useState('');
const [Company_Name, setCompanyName]=useState('');
const [Company_Size, setCompanySize]=useState('');
const [Message, setMessage]=useState('');


const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // console.log(First_Name,Last_Name,Email,Job_Title,Phone_Number,Company_Name,Company_Size,Message);
    const data={
        First_Name:First_Name,
        Last_Name:Last_Name,
        Email:Email,
        Job_Title:Job_Title,
        Phone_Number:Phone_Number,
        Company_Name:Company_Name,
        Company_Size:Company_Size,
        Message:Message
    }
    axios.post('https://sheet.best/api/sheets/97ffc63f-993e-44de-87e1-b86f5a78fb35',data).then((response)=>{
        // console.log(response);
        setFirstName('');
        setLastName('');
        setEmail('');
        setJobTitle('');
        setPhoneNumber('');
        setCompanyName('');
        setCompanySize('');
        setMessage('');
    })
}
    return (
    <React.Fragment>

    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">

        <div className="sm:w-1/2 mb-10 sm:px-16">
            <div className="container mx-auto rounded-3xl shadow-2xl shadow-[#1D8CF229] border-l-8 border-b-8 border-[#595AD4] py-10 px-12">
                <div className="flex flex-col text-left w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900">Contact our team</h1>
                </div>
                <div className=" mx-auto">
                    <form className="form-group" onSubmit={handleSubmit} >
                    <div className="flex flex-wrap -m-3 text-black">
                        <div className="p-4 w-1/2">
                            <div className="relative text-left">
                                <label htmlFor="First_Name" className="leading-7 text-lg">First name <span className="text-red-500">*</span></label>
                                <input type="text" id="First_Name" name="First_Name" onChange={(e)=>setFirstName(e.target.value)} value={First_Name} required className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-4 w-1/2">
                            <div className="relative text-left">
                                <label htmlFor="Last_Name" className="leading-7 text-lg">Last name <span className="text-red-500">*</span></label>
                                <input type="text" id="Last_Name" name="Last_Name" onChange={(e)=>setLastName(e.target.value)} value={Last_Name} required className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-4 w-1/2">
                            <div className="relative text-left">
                                <label htmlFor="Email" className="leading-7 text-lg">Work email <span className="text-red-500">*</span></label>
                                <input type="email" id="Email" name="Email" onChange={(e)=>setEmail(e.target.value)} value={Email} required className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-4 w-1/2">
                            <div className="relative text-left">
                                <label htmlFor="Job_Title" className="leading-7 text-lg">Job title</label>
                                <input type="text" id="Job_Title" name="Job_Title" onChange={(e)=>setJobTitle(e.target.value)} value={Job_Title} className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-4 w-full">
                            <div className="relative text-left">
                                <label htmlFor="Phone_Number" className="leading-7 text-lg">Phone number <span className="text-red-500">*</span></label>
                                <input type="text" id="Phone_Number" name="Phone_Number" onChange={(e)=>setPhoneNumber(e.target.value)} value={Phone_Number} required className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-4 w-1/2">
                            <div className="relative text-left">
                                <label htmlFor="Company_Name" className="leading-7 text-lg">Company name <span className="text-red-500">*</span></label>
                                <input type="text" id="Company_Name" name="Company_Name" onChange={(e)=>setCompanyName(e.target.value)} value={Company_Name} required className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-4 w-1/2">
                            <div className="relative text-left">
                                <label htmlFor="Company_Size" className="leading-7 text-lg">Company size <span className="text-red-500">*</span></label>
                                <input type="text" id="Company_Size" name="Company_Size" onChange={(e)=>setCompanySize(e.target.value)} value={Company_Size} required className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-4 w-full">
                            <div className="relative text-left">
                                <label htmlFor="Message" className="leading-7 text-lg">How can our team help you?</label>
                                <textarea id="Message" name="Message" onChange={(e)=>setMessage(e.target.value)} value={Message} className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="w-3/4 p-2 w-full mx-auto">
                            <p className="text-center">By clicking submit, I acknowledge receipt of the theaccountantai.com  <span className="text-[#0000EE]">Privacy policy</span></p>
                        </div>
                        <div className="p-2 w-full">
                            <button type="submit" className="flex mx-auto text-white bg-[#6161FF] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Submit</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="sm:w-1/2 mb-10 px-4">
            <div className="flex flex-col text-left w-full mb-12 sm:mt-1 mt-20">
                <h1 className="sm:text-3xl text-2xl title-font font-bold mb-4 text-gray-900">Streamline your accounting system in one connected space</h1>
            </div>

            <div className="-my-8 ">
            <div className=" flex flex-wrap md:flex-nowrap sm:pr-10 divide-x-2 divide-gray-300">
                <div className="md:w-64 md:mb-0 mb-6 flex flex-col">
                <div className="mx-auto">
                    <Image alt="globe" width={50} height={50} src="/globe.png"/>
                </div>
                <h2 className="font-semibold title-font text-gray-600">Across <span className="font-bold">200+</span> </h2>
                <span className="text-gray-500">countries</span>
                </div>
                <div className="md:flex-grow text-left pl-12 w-full">
                <p className="leading-relaxed text-lg">Meet with a product consultant to see how theaccountingai.com can fit your exact business needs</p>
                </div>
            </div>

            <div className="py-8 flex flex-wrap md:flex-nowrap sm:pr-10 divide-x-2 divide-gray-300">
                <div className="md:w-64 md:mb-0 mb-6 flex flex-col ">
                <div className="mx-auto">
                    <Image alt="people" width={50} height={50} src="/people.png"/>
                </div>
                <h2 className="font-semibold title-font text-gray-600"><span className="font-bold">180K+ </span>paying</h2>
                <span className="text-gray-500">customers</span>
                </div>
                <div className="md:flex-grow text-left pl-12 w-full">
                <p className="leading-relaxed text-lg">Explore our tailored pricing plans based on your goals and priorities</p>
                </div>
            </div>

            <div className="py-8 flex flex-wrap md:flex-nowrap sm:pr-10 divide-x-2 divide-gray-300">
                <div className="md:w-64 md:mb-0 mb-6 flex flex-col">
                <div className="mx-auto">
                    <Image alt="plant" width={50} height={50} src="/plant.png"/>
                </div>
                <h2 className="font-semibold title-font text-gray-600">Serving <span className="font-bold">200+</span> </h2>
                <span className="text-gray-500">industries</span>
                </div>
                <div className="md:flex-grow text-left pl-12 w-full">
                <p className="leading-relaxed text-lg">Boost productivity from day one by building your teams ideal workflow</p>
                </div>
            </div>

    </div>
        <div className="text-left py-8 px-5">
            <p>For general questions visit our <span className="text-[#009AFF]">Help Center</span></p>
        </div>
        <div className="text-left text-lg py-5 px-5 bg-[#F0F3FF] rounded-lg">
            <p className="p-5">theaccountantai.com saves us about 1,850 hrs of staff time and somewhere in the range of $50,000 a month.</p>
            <p className="p-5">Stefana Muller | Senior Director, CTO Product and Program Office | Oscar</p>
        </div>


        <div className="flex flex-wrap text-center ">
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
        </div>
    </div>
    </section>

    </React.Fragment>
    );
}