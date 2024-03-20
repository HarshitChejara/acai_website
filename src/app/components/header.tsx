"use client";

import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
      <Popover className={"sticky z-50 mx-auto flex items-center sm:px-12 px-6 py-2 h-24"}>
        <div className="flex inline-flex">
        <Link href="/"><Image src="/logo.png" alt="logo" width="90" height="50"/></Link>
        <Link href="/"><h1 className="font-bold text-xl py-5">The Accountant AI</h1></Link>
        </div>
        
        {/* <Link href="/"><h1 className="text-gray-500 sm:text-3xl tracking-widest">Title</h1></Link> */}
        <div className="bg-transparent md:mr-auto sm:ml-12 ml-1">
          <div className="hidden sm:flex text-gray-600 items-center justify-center gap-2 md:gap-8">
            {/* <Link href="">Products</Link> */}
            <Link href="about">About Us</Link>
            <Link href="features">Features</Link>
            <Link href="solutions">Solutions</Link>
          </div>
        </div>
        <div className="bg-transparent md:ml-auto">
          <div className="hidden sm:flex text-gray-600 items-center justify-center gap-2 md:gap-8">
            <Link href="blog">Blogs</Link>
            <Link href="early_access">Early access</Link>
            <Link href="pricing">Pricing</Link>
          </div>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30"/>

        <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">

        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opaity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex item-center justify-between">
                <Link href="/"><h1 className="text-black font-bold text-xl">The Accountant AI</h1></Link>
                <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {/* <Link className="text-black focus:outline-none px-2 font-bold" href="">Products</Link> */}
                  <Link className="text-black focus:outline-none px-2 font-bold" href="about">About Us</Link>  
                  <Link className="text-black focus:outline-none px-2 font-bold" href="features">Features</Link>
                  <Link className="text-black focus:outline-none px-2 font-bold" href="solutions">Solutions</Link>  
                  <Link className="text-black focus:outline-none px-2 font-bold" href="blog">Blogs</Link>
                  <Link className="text-black focus:outline-none px-2 font-bold" href="early_access">Early access</Link>
                  <Link className="text-black focus:outline-none px-2 font-bold" href="pricing">Pricing</Link>
                </nav>
              </div>
              
            </div>
          </div>
        </Popover.Panel>
        </Transition>
  
        <div className="hidden sm:block px-5 py-7 h-24">
        <Link href="contact" target="_blank"><button type="button" className="text-white rounded-full py-2 px-5 leading-6 bg-[#6C6CFF]">Get Started <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4"/></button></Link>
        </div>
      </Popover>
  );
};
export default Header;