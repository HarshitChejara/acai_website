import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Pricing() {
    return (
    <React.Fragment>
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 sm:px-28 sm:py-24 sm:mb-1 mb-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">Supercharge your teamwork. Start <span className="text-[#5559DF]">free.</span></h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Unlimited boards and workflows. No credit card needed.</p>
        <div className="flex mx-auto overflow-hidden mt-6">
            <button className="py-2 px-6 bg-[#6161FF] text-white rounded-full focus:outline-none">Get Started <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4"/></button>
        </div>
        </div>
        <div className="flex flex-col w-full text-right mb-5 text-lg">
            <h2 className="text-[#595AD4]">Yearly SAVE 18%</h2>
        </div>
        <div className="flex flex-wrap -m-4">

        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded border border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-2xl text-black title-font mb-1 font-bold">Free</h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-5">
                    <span>$0</span>
                    <span className="text-lg ml-1 font-normal text-gray-400">free <br/>forever</span>
                </h1>
                <h2 className="text-xl text-black title-font mb-1 font-bold">Up to 2 seats</h2>
                    <div className="items-left py-3">
                        <button className="bg-[#6161FF] px-8 py-2 text-white rounded-full">Try for free</button>
                    </div>
                    <p className="text-gray-500 text-lg">For individuals looking to keep track of their work</p>
                <span className="inline-block h-1 w-50 rounded bg-gray-300 mt-28 mb-5"></span>
                <h1 className="text-2xl font-bold text-gray-900 leading-none flex items-center pb-4 mb-4">Individual plan includes:</h1>
                <p className="flex items-center text-gray-600 mb-2">Up to 3 boards<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Unlimited docs<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">200+ templates<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Over 20 column types<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Up to 2 team members<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">iOS and Android apps<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
            </div>
        </div>

        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded border border-gray-300 flex flex-col relative overflow-hidden">
            <span className="bg-[#A25DDC] text-white w-full py-1 tracking-widest text-xs absolute right-0 top-0 rounded-blr"></span>

                <h2 className="text-2xl text-black title-font mb-1 font-bold">Basic</h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4">
                    <span className="text-[#A25DDC]">$9</span>
                    <span className="text-lg ml-1 font-normal text-gray-400">tasks /<br/>month</span>
                </h1>
                <h2 className="text-xl text-black title-font font-bold">Total $24 / month</h2>
                    <p className="text-gray-500">Billed annually</p>
                    <div className="items-left py-3">
                        <button className="bg-[#6161FF] px-8 py-2 text-white rounded-full">Get Plan</button>
                    </div>
                    <p className="text-gray-500 text-lg">Manage all your teams’ work in one place</p>
                <span className="inline-block h-1 w-50 rounded bg-gray-300 mt-28 mb-5"></span>
                <h1 className="text-2xl font-bold text-gray-900 leading-none flex items-center pb-4 mb-4">Includes Individual, plus:</h1>
                <p className="flex items-center text-gray-600 mb-2">Unlimited free viewers<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Unlimited items<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">5 GB file storage<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Prioritised customer support<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Create a dashboard based on 1 board<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
            </div>
        </div>

        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded border border-gray-300 flex flex-col relative overflow-hidden">
            <span className="bg-[#0085FF] text-white w-full py-1 tracking-widest text-xs absolute right-0 top-0 rounded-blr"></span>
                <div className="inline-flex">
                    <h2 className="text-2xl text-black title-font mb-1 font-bold">Growth</h2>
                    <button className="bg-[#0085FF] text-white ml-auto rounded p-1">Most Popular</button>
                </div>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4">
                    <span className="text-[#0085FF]">$99</span>
                    <span className="text-lg ml-1 font-normal text-gray-400">tasks /<br/>month</span>
                </h1>
                <h2 className="text-xl text-black title-font font-bold">Total $30 / month</h2>
                    <p className="text-gray-500">Billed annually</p>
                    <div className="items-left py-3">
                        <button className="bg-[#6161FF] px-8 py-2 text-white rounded-full">Get Plan</button>
                    </div>
                    <p className="text-gray-500 text-lg">Collaborate and optimize your team processes</p>
                <span className="inline-block h-1 w-50 rounded bg-gray-300 mt-28 mb-5"></span>
                <h1 className="text-2xl font-bold text-gray-900 leading-none flex items-center pb-4 mb-4">Includes Basic, plus:</h1>
                <p className="flex items-center text-gray-600 mb-2">Timeline & Gantt views<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Calendar view<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Guest access<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Automations (250 actions per month)<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Integrations (250 actions per month)<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Create a dashboard that combines up to 5 boards<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
            </div>
        </div>

        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded border border-gray-300 flex flex-col relative overflow-hidden">
            <span className="bg-[#00CA72] text-white w-full py-1 tracking-widest text-xs absolute right-0 top-0 rounded-blr"></span>

                <h2 className="text-2xl text-black title-font mb-1 font-bold">Enterprise</h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4">
                    <span className="text-[#00CA72]">$199</span>
                    <span className="text-lg ml-1 font-normal text-gray-400">tasks /<br/>month</span>
                </h1>
                <h2 className="text-xl text-black title-font font-bold">Total $48 / month</h2>
                    <p className="text-gray-500">Billed annually</p>
                    <div className="items-left py-3">
                        <button className="bg-[#6161FF] px-8 py-2 text-white rounded-full">Get Plan</button>
                    </div>
                    <p className="text-gray-500 text-lg">Streamline and run your teams’ complex workflows</p>
                <span className="inline-block h-1 w-50 rounded bg-gray-300 mt-28 mb-5"></span>
                <h1 className="text-2xl font-bold text-gray-900 leading-none flex items-center pb-4 mb-4">Includes Standard, plus:</h1>
                <p className="flex items-center text-gray-600 mb-2">Private boards and docs<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Chart view<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Time tracking<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Formula column<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Dependency column<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Automations (25,000 actions per month)<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Integrations (25,000 actions per month)<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
                <p className="flex items-center text-gray-600 mb-2">Create a dashboard that combines up to 10 boards<FontAwesomeIcon icon={faCircleExclamation} className="text-gray-400 w-5 h-5 ml-auto"/></p>
            </div>
        </div>

        </div>
    </div>
    </section>







    <section className="text-gray-600 body-font">
      <div className="container sm:py-28 mx-auto">
        <div className="flex flex-col text-center w-full sm:mb-20 px-14">
          <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-700">Complete features list</h1>
        </div>
        <div className="flex flex-wrap text-center sm:px-36 bg-[#F7F7FA] border-t border-b border-[#E7DAED] ">
          <div className="flex flex-col text-center w-full py-14 px-14">
            <h1 className="sm:text-4xl text-2xl title-font text-gray-700">Our integrations with other workspaces</h1>
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







<section className="text-gray-800 bg-[#F9F9F9] body-font">
    <div className="py-24 sm:px-72 px-5">
    <h1 className="text-center mb-10 p-3 text-3xl">Frequently Asked Questions</h1>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input1" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input1" className="flex items-center p-3 inline-flex text-xl">Is there a free version of acai.com?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input1"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input2" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input2" className="flex items-center p-3 inline-flex text-xl">How much does acai.com cost?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input2"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input3" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input3" className="flex items-center p-3 inline-flex text-xl">Can you pay for acai.com monthly?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input3"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input4" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input4" className="flex items-center p-3 inline-flex text-xl">Which pricing plan is right for me?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input4"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input5" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input5" className="flex items-center p-3 inline-flex text-xl">How does our pricing work?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input5"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input6" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input6" className="flex items-center p-3 inline-flex text-xl">What if I change my mind?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input6"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input7" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input7" className="flex items-center p-3 inline-flex text-xl">Do you offer any discounted plans?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input7"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input8" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input8" className="flex items-center p-3 inline-flex text-xl">Does monday.com offer plans for students?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input8"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input9" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input9" className="flex items-center p-3 inline-flex text-xl">Does monday.com offer plans to nonprofits and NGOs?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input9"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input10" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input10" className="flex items-center p-3 inline-flex text-xl">How can I manage my billing?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input10"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input11" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input11" className="flex items-center p-3 inline-flex text-xl">Can I change my plan?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input11"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input12" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input12" className="flex items-center p-3 inline-flex text-xl">How secure is acai.com?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input12"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input13" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input13" className="flex items-center p-3 inline-flex text-xl">What payment methods do you accept?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input13"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input14" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
              <label htmlFor="input14" className="flex items-center p-3 inline-flex text-xl">Do you have mobile apps?</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input14"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed sollicitudin.</p>
            </div>
        </div>
    </div>

    </div>
  </section>






  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 sm:px-28 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-4xl text-3xl title-font mb-2 text-gray-900">Start using acai.com today</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-500">Try it now for free / No credit card needed</p>
        <div className="flex mx-auto overflow-hidden mt-6">
            <button className="py-2 px-6 bg-[#6161FF] text-white rounded-full focus:outline-none">Get Started <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4"/></button>
        </div>
        </div>
    </div>
  </section>

   </React.Fragment>
  );
}