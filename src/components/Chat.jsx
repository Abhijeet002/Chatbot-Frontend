import React from "react"
import Chatbot from '../img/chatbot.png'
import Purse from '../img/Purse.webp'


function Chat() {
    return (

        // Big container 
        <div className="flex justify-center">

            <div className="w-full md:w-2/4 items-center px-3 py-6 bg-white">

                <div className="flex flex-col">
                    <div className="flex justify-start items-end mb-4">
                        <div className="max-w-xs mx-auto md:mx-0 bg-gray-200 rounded-lg p-3">
                            <p className="text-sm">Hello, how can I help you?</p>
                            <p className="text-xs text-gray-500 mt-1">4:30pm</p>
                        </div>
                    </div>
                    <div className="flex justify-end items-end mb-4">
                        <div className="max-w-xs mx-auto md:mx-0 bg-blue-500 rounded-lg p-3">
                            <p className="text-sm text-white">Sure, what do you need assistance with?</p>
                            <p className="text-xs text-gray-500 mt-1">4:31pm</p>
                        </div>
                    </div>
                </div>



                <div className="text-left pt-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-500">Suggestions for Purses</h3>
                    <div className="flex justify-start flex-wrap gap-2">
                        <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium border-blue-600 py-2 px-3 rounded-lg  shadow-sm text-sm">
                            Clutch
                        </button>
                        <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium py-2 px-3 rounded-lg  shadow-sm text-sm">
                            Fabric
                        </button>
                        <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium py-2 px-3 rounded-lg  shadow-sm text-sm">
                            Leather
                        </button>
                        <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium py-2 px-3 rounded-lg  shadow-sm text-sm">
                            Cloth
                        </button>
                        <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium py-2 px-3 rounded-lg shadow-sm text-sm">
                           Jeans
                        </button>
                    </div>
                </div>



                <div className="bg-blue-200 w-full md:w-3/5 p-4 my-8 rounded-xl">
                    <div className="bg-white flex items-center rounded-xl">
                        <div className="left">
                            <img className="h-24 p-4 rounded-3xl" src={Purse} alt="image.jpg" />
                        </div>
                        <div className="right p-4 h-24">
                            <p className="pb-2 font-medium">Bags on Timpu</p>
                            <p className="text-gray-400 text-sm">11357 Products  &gt; </p>
                        </div>
                    </div>
                    <p className="py-4 leading-tight text-sm">Or set filter and help us choose the best bag for you.</p>
                </div>



                <div className="text-left w-full md:w-3/4 p-4 pt-0 pl-0">
                    <h3 className="text-lg font-semibold mb-2 text-gray-500">Select Filters</h3>
                    <div className="flex flex-wrap gap-2">
                        <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium border-blue-600 py-2 px-3 rounded-lg shadow-sm text-sm">
                           Strap- Long  &#x2715;
                        </button>
                        <button className="bg-gray-200 hover:bg-blue-200 text-gray-500 font-medium py-2 px-3 rounded-lg shadow-sm text-sm">
                            Colour  &#x2715;
                        </button>
                        <button className="bg-gray-200 hover:bg-blue-200 text-gray-500 font-medium py-2 px-3 rounded-lg shadow-sm text-sm">
                            Size  &#x2715;
                        </button>
                        <button className="bg-gray-200 hover:bg-blue-200 text-gray-500 font-medium py-2 px-3 rounded-lg shadow-sm text-sm">
                            Brand  &#x2715;
                        </button>
                        <button className="bg-gray-200 hover:bg-blue-200 text-gray-500 font-medium py-2 px-3 rounded-lg shadow-sm text-sm">
                            Material  &#x2715;
                        </button>
                        <button className="bg-gray-200 hover:bg-blue-200 text-gray-500 font-medium py-2 px-3 rounded-lg shadow-sm text-sm">
                            Gender  &#x2715;
                        </button>
                        <button className="bg-gray-200 hover:bg-blue-200 text-gray-500 font-medium py-2 px-3 rounded-lg shadow-sm text-sm">
                            Price  &#x2715;
                        </button>
                    </div>
                </div>



                {/* textarea  */}
                <div>
                    <div className='p-3 bg-blue-50 rounded-xl'>
                        <div className=''>
                            <div className="flex items-center justify-center ">
                                <textarea
                                    className="resize-none border rounded-s p-2 mr-0 w-full"
                                    rows="1"
                                    placeholder="Type your message here..."
                                ></textarea>
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* footer  */}
                <div>
                    <footer className="text-center text-gray-500 text-base p-4 pb-0">Powered by <span className='font-bold text-base'>Krunk.Ai</span></footer>
                </div>
            </div>
        </div>


    );

}



export default Chat;