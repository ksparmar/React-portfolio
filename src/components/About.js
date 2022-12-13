import React from 'react';
import useAnalyticsEventTracker from '../useGaTracker';

export default function About(){
    const gaEventTracker = useAnalyticsEventTracker('About');
    return (
        <section id ="about" className="bg-gray-800">
            <div className = "container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className = "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className ="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Welcome to my world!</h1> 
                    <h2 className ="bm-8 text-gray-300 leading-relaxed">
                        I'm a fourth year CS student at SFU. 
                        I enjoy building apps, websites, and playing around with data
                        to add value. 
                    </h2>
                    <div className = "flex justify-center">
                        <a 
                        href = "https://www.linkedin.com/in/ksparmar81/" onClick={() => gaEventTracker('linkedin redirect')}
                        className = "inline-flex text-white bg-green-500 border-0 mt-6 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-base">
                        Get connected with me    
                        </a>
                        <a href ="#projects" onClick={()=> gaEventTracker('past projects')}
                        className = "ml-4 inline-flex text-white bg-gray-700 border-0 mt-6 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base">
                        Past Projects    
                        </a>
                        <a href ="./2022-23 resume.pdf" download onClick={()=>gaEventTracker('resume download')}
                            className = "ml-4 inline-flex text-white bg-gray-700 border-0 mt-6 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base">
                        My Resume   
                        </a>
                    </div>
                    <div className = "flex justify-center" >
                        <a
                        href ="./CMPT 353-Project-Khushwant.pdf" download onClick={()=>gaEventTracker('353 project download')}
                        className = "ml-4 inline-flex text-white bg-gray-700 border-0 mt-6 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base">
                        Python Data Science Project Report   
                        </a>
                        <a 
                        href ="./318 Project.pdf" download onClick={()=>gaEventTracker('318 project download')}
                        className = "ml-4 inline-flex text-white bg-gray-700 border-0 mt-6 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base">
                        R Project Report
                        </a>
                    </div>
                </div>
                <div className ="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className = "object-cover object-center rounded"
                        alt = "hero"
                        src = "./coding.png" //use your image
                    />
                </div>    
            </div>
        </section>
    );
}