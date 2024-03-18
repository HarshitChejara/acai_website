"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Footer()
{
    return(
        <React.Fragment>
        <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-600 text-lg mb-5">&nbsp;</h2>
                <nav className="list-none mb-10">
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Pricing</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Contact us</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Templates</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">SMB</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Enterprise</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Nonprofits</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Apps marketplace</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">24/7 support</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-600 text-lg mb-5">Features</h2>
                <nav className="list-none mb-10">
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Docs</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Integrations</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Automations</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Files</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Dashboards</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Kanban</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Gantt</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-600 text-lg mb-5">ACAI features</h2>
                <nav className="list-none mb-10">
                <li className="mb-5">
                    <a className="inline-flex text-gray-600 hover:text-gray-800"><Image src="/work.png" width="25" height="15" alt="work management" className="mr-2"/>acai work management</a>
                </li>
                <li className="mb-5">
                    <a className="inline-flex text-gray-600 hover:text-gray-800"><Image src="/crm.png" width="25" height="15" alt="work management" className="mr-2"/>acai sales CRM</a>
                </li>
                <li className="mb-5">
                    <a className="inline-flex text-gray-600 hover:text-gray-800"><Image src="/marketer.png" width="25" height="15" alt="work management" className="mr-2"/>acai marketer</a>
                </li>
                <li className="mb-5">
                    <a className="inline-flex text-gray-600 hover:text-gray-800"><Image src="/project.png" width="25" height="15" alt="work management" className="mr-2"/>acai projects</a>
                </li>
                <li className="mb-10">
                    <a className="inline-flex text-gray-600 hover:text-gray-800"><Image src="/dev.png" width="25" height="15" alt="work management" className="mr-2"/>acai dev</a>
                </li>
                <h2 className="title-font font-medium text-gray-600 text-lg mb-5">More by acai.com</h2>
                <li className="mb-5">
                    <a className="inline-flex text-gray-600 hover:text-gray-800"><Image src="/canvas.png" width="25" height="15" alt="work management" className="mr-2"/>Canvas</a>
                </li>
                <li>
                    <a className="inline-flex text-gray-600 hover:text-gray-800"><Image src="/workform.png" width="25" height="15" alt="work management" className="mr-2"/>WorkForms</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-600 text-lg mb-5">Use cases</h2>
                <nav className="list-none mb-10">
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Marketing</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Project management</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Sales</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Developers</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">HR</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">IT</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Operations</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Construction</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-600 text-lg mb-5">Company</h2>
                <nav className="list-none mb-10">
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">About us</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Careers - We are hiring!</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">monday-U</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Press</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Customer stories</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Become a partner</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Sustainability & ESG</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Affiliates</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Digital Lift</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Investor relations</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-600 text-lg mb-5">Resources</h2>
                <nav className="list-none mb-10">
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Help Center</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Community</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Webinars</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Startup for startup</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Global events</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">App development</a>
                </li>
                <li className="mb-5">
                    <a className="text-gray-600 hover:text-gray-800">Find a partner</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Compare</a>
                </li>
                </nav>
            </div>
            </div>
        </div>
        <div className="border-t border-gray-200">
            <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">            

                <span className="inline-flex  lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                    <a className="text-gray-500">
                    <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6"/>
                    </a>
                    <a className="ml-3 text-gray-500">
                    <FontAwesomeIcon icon={faFacebook} className="h-6 w-6"/>
                    </a>
                    <a className="ml-3 text-gray-500">
                    <FontAwesomeIcon icon={faTwitter} className="h-6 w-6"/>
                    </a>
                    <a className="ml-3 text-gray-500">
                    <FontAwesomeIcon icon={faInstagram} className="h-6 w-6"/>
                    </a>
                </span>

                <div className="flex md:flex-nowrap lg:ml-auto flex-wrap justify-center items-end md:justify-start">
                    <div className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
                        <div className="mr-3">
                            <svg viewBox="30 336.7 120.9 129.2" width="30">
                                <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"/>
                                <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"/>
                                <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"/>
                                <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"/>
                            </svg>
                        </div>
                        <div>
                            <div className="text-xs">GET IT ON</div>
                            <div className="text-xl font-semibold font-sans -mt-1">Google Play</div>
                        </div>
                    </div>
                    <div className="flex mt-3 w-48 h-14 bg-black ml-4 text-white rounded-xl items-center justify-center">
                        <div className="mr-3">
                            <svg viewBox="0 0 384 512" width="30" >
                                <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                            </svg>
                        </div>
                        <div>
                            <div className="text-xs">Download on the</div>
                            <div className="text-2xl font-semibold font-sans -mt-1">App Store</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/* <div className="bg-gray-100"> */}
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <span className="text-gray-500 text-sm text-center sm:text-left">
                <a className="underline">Security</a>&nbsp;|&nbsp;
                <a className="underline">Terms and privacy</a>&nbsp;|&nbsp;
                <a className="underline">Privacy policy</a>&nbsp;|&nbsp;
                <a className="underline">Status</a>
            </span>   
            <p className="text-gray-500 text-sm text-center sm:text-left sm:ml-20">All Rights Reserved
                <a href="#" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer"> © acai.com</a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm underline">Accessibility statement</span>
            </div>
        {/* </div> */}
        </footer>
        </React.Fragment>
    );
}