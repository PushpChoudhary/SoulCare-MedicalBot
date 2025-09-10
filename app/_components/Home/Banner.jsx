import { Button } from '@/components/ui/button'
import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  items-center">
        <div className="">
          <h1 className="text-7xl py-4 px-8 font-semibold leading-light">
            Take Care of <span>Your Mind</span> & Soul
          </h1>
          <p className="text-lg px-9 py-2">
            Professional mental health support at your fingertips. Start your
            journey towards wellness today
          </p>
          <div className="px-9 flex gap-6 ">
            <a className="bg-indigo-700 rounded-lg px-4 py-2 shadow-blue-500 hover:bg-indigo-400" href="/chat">
              Explore Chatbot
            </a>
            {/* <Button className="bg-gray-200  text-indigo-800 rounded-lg px-4 py-2 hover:bg-gray-400">
              Explore Voice Assisant
            </Button> */}
          </div>
        </div>
        <div className="flex justify-center">
            <img
             src="/assets/ChatBot Sideimage.jpg"
             width={500}
             height={500}
            />
        </div>
      </div>
    </div>
  );
}

export default Banner
