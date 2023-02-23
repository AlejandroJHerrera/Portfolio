import React from 'react';

function Tools() {
  return (
    <div className="" id="tools">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-indigo-600 font-semibold">Tools</h1>
          <h1 className="text-3xl">What tools I use?</h1>
        </div>
      </div>
      {/* card */}
      <div className="flex flex-wrap p-5 justify-between">
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center  my-3 md:my-10 ">
          <img src="/mongo.png" alt="Mongo" className="w-10" />
          <h1 className="font-medium text-lg">MongoDb</h1>
        </div>{' '}
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center my-3 md:my-10">
          <img src="/Express.jpg" alt="Express" className="w-10" />
          <h1 className="font-medium text-lg">Express</h1>
        </div>{' '}
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center my-3 md:my-10">
          <img src="/logo192.png" alt="React" className="w-10" />
          <h1 className="font-medium text-lg">React</h1>
        </div>{' '}
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center my-3 md:my-10">
          <img src="/nodejs.png" alt="Node" className="w-10" />
          <h1 className="font-medium text-lg">Nodejs</h1>
        </div>{' '}
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center my-3 md:my-10">
          <img src="/tailwindcss.png" alt="Tailwindcss" className="w-10" />
          <h1 className="font-medium text-lg">Tailwindcss</h1>
        </div>{' '}
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center my-3 md:my-10">
          <img src="/Recoil.png" alt="Recoil" className="w-10" />
          <h1 className="font-medium text-lg">Recoil</h1>
        </div>
      </div>
    </div>
  );
}

export default Tools;
