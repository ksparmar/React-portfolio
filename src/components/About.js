import React from 'react';
export default function About(){
    return (
        <section id ="about" className="bg-gray-800">
            <div className = "container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className = "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h2 className ="bm-8 text-white leading-relaxed">
                    I am a 4th year computing science student at Simon Fraser University. 
                    I like to building apps, websites and playing around with data.
                    </h2>
                    <div className = "flex justify-center">
                        <a 
                        href = "#contact"
                        className = "inline-flex text-white bg-green-500 border-0 mt-6 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Get connected with me    
                        </a>
                        <a href ="#projects"
                        className = "ml-4 inline-flex text-white bg-gray-700 border-0 mt-6 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        See my past work!    
                        </a>
                    </div>
                </div>
                <div className ="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className = "object-cover object-center rounded"
                        alt = "hero"
                        src = "./coding.svg" //use your image
                    />
                </div>    
            </div>
        </section>
    );
}