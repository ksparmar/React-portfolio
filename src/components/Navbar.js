import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect } from 'react';
import useAnalyticsEventTracker from "../useGaTracker";


export default function Navbar(){
    const gaEventTracker = useAnalyticsEventTracker('Navbar');
    useEffect(() => {
        gaEventTracker('navbar loaded');
    });
    return (
        <header className = "bg-black md:sticky top-0 z-10">
            <div className = "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className = "title-font font-medium text-white mb-4 md:mb-0">
                    <a href = "#about" className = "ml-3 text-xl">
                        Khushwant Singh Parmar
                    </a>
                </a>
                <nav className = "md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                   <a href = "#projects" className="mr-5 hover:text-white" onClick={()=>gaEventTracker('past work')}>
                        Past Work
                   </a>
                   <a href = "#skills" className = "mr-5 hover:text-white" onClick={()=>gaEventTracker('skills')}>
                        Skills
                   </a> 
                   <a href="./2022-23 resume.pdf" download onClick={()=>gaEventTracker('resume download')}>
                      Resume
                    </a>
                   
                </nav>
                <a 
                    href = "#contact"
                    onClick={()=>gaEventTracker('contact form hyperlink')}
                    className = "inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base text-white mt-4 md:mt-0">
                    Let's work together
                    <ArrowRightIcon className = "w-4 h-4 ml-1"/>
                    </a>
            </div>
        </header>
    );
}