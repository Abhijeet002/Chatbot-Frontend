import React from 'react'
import Chatbot from '../img/chatbot.png'

function Top() {
    return (
        <div className='flex justify-center  '>

            <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-2/4 bg-gray-200 p-4">
                <div className="flex items-center mb-2 md:mb-0">
                    <img src={Chatbot} alt="Bot Icon" className="h-10 mr-2" />
                    <div>
                        <h1 className="text-lg font-semibold">Timpu</h1>
                        <p className="text-sm text-gray-600">Chat Assistant</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="text-green-500 mr-1 hidden md:block">Online</span>
                    <div className="h-2 w-2 bg-green-500 rounded-full hidden md:block"></div>
                </div>
            </div>
        </div>



    )
}
export default Top;