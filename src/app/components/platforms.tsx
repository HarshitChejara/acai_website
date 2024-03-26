"use client";

import Image from "next/image";
import React from 'react';
import Link from "next/link";


export default function Platforms() {
    return (
    <React.Fragment>
          {/* <div className="flex flex-wrap text-center "> */}
          <div className="p-4 md:w-1/5 w-1/2">
            <div className="px-4 py-6 rounded-lg inline-block">
              <Link href="https://quickbooks.intuit.com" target="_blank"><Image alt="mobile_app" width={70} height={70} src="/quickbooks.png"/></Link>
            </div>
          </div>
          <div className="p-4 md:w-1/5 w-1/2">
            <div className="px-4 py-6 rounded-lg inline-block">
                <Link href="https://www.xero.com" target="_blank"><Image alt="mobile_app" width={70} height={70} src="/xero.png"/></Link>
            </div>
          </div>
          <div className="p-4 md:w-1/5 w-1/2">
            <div className="px-4 py-6 rounded-lg inline-block">
                <Link href="https://accounts.google.com" target="_blank"><Image alt="mobile_app" width={70} height={70} src="/drive.png"/></Link>
            </div>
          </div>
          <div className="p-4 md:w-1/5 w-1/2">
            <div className="px-4 py-6 rounded-lg inline-block">
                <Link href="https://cloud.google.com" target="_blank"><Image alt="mobile_app" width={80} height={80} src="/cloud.png"/></Link>
            </div>
          </div>
          <div className="p-4 md:w-1/5 w-1/2">
            <div className="px-4 py-6 rounded-lg inline-block">
                <Link href="https://system.netsuite.com" target="_blank"><Image alt="mobile_app" width={70} height={70} src="/netsuite.png"/></Link>
            </div>
          </div>
        {/* </div> */}
    </React.Fragment>
    );
}