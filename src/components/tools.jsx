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
          <img src="/mongo.png" alt="Mongo" className="w-32 lg:w-40" />
          <h1 className="font-medium text-lg">MongoDb</h1>
        </div>
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center my-3 md:my-10">
          <img
            src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.png"
            alt="Express"
            className="w-32 lg:w-40"
          />
          <h1 className="font-medium text-lg">Express</h1>
        </div>
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center my-3 md:my-10">
          <img
            src="https://blog.koalite.com/wp-content/uploads/logo-reactjs.png"
            alt="React"
            className="w-32 lg:w-40"
          />
          <h1 className="font-medium text-lg">React</h1>
        </div>
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center my-3 md:my-10">
          <img src="/nodejs.png" alt="Node" className="w-32 lg:w-40" />
          <h1 className="font-medium text-lg">Nodejs</h1>
        </div>
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center my-3 md:my-10">
          <img
            src="https://logospng.org/download/tailwind-css/tailwind-css-1024.png"
            alt="Tailwindcss"
            className="w-32 lg:w-40"
          />
          <h1 className="font-medium text-lg">Tailwindcss</h1>
        </div>
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center my-3 md:my-10">
          <img src="/Recoil.png" alt="Recoil" className="w-32 lg:w-40" />
          <h1 className="font-medium text-lg">Recoil</h1>
        </div>
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center my-3 md:my-10">
          <img
            src="https://i.imgur.com/JqtPn44.png"
            alt="Nextjs"
            className="w-32 lg:w-40"
          />
          <h1 className="font-medium text-lg">Nextjs</h1>
        </div>
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center my-3 md:my-10">
          <img
            src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png"
            alt="Redux-Icon"
            className="w-32 lg:w-40"
          />
          <h1 className="font-medium text-lg">Redux</h1>
        </div>
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 justify-center items-center my-3 md:my-10">
          <img
            src="https://miro.medium.com/v2/resize:fit:852/1*-qHIwYU7WV_fbe9PlfHq2w.png"
            alt="Typescript-Icon"
            className="w-32 lg:w-40"
          />
          <h1 className="font-medium text-lg">Typescript</h1>
        </div>
      </div>
    </div>
  );
}

export default Tools;
