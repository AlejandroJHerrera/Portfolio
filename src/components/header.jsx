import React from 'react';

function Header() {
  return (
    <div className="h-[450px] lg:h-screen relative overflow-hidden " id="home">
      <img
        src="./casual-life-3d-young-man-standing-with-hands-in-pockets.png"
        alt="3d-model"
        className="absolute bottom-0 right-20  lg:left-36 lg:right-0 mx-auto h-4/6 lg:h-3/6 object-cover"
      />
      <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto  w-big h-big 2xl:w-bigger 2xl:h-bigger bg-indigo-900 rounded-full -z-30"></div>
      <div className="absolute  top-1/3 left-8 text-xl sm:left-10 sm:text-4xl md:left-40  lg:text-6xl lg:top-1/4 lg:left-20 2xl:left-[400px]">
        <span className="text-gray-600 ">
          <h1>Full stack</h1>
        </span>
        <p className="text-red-500 font-bold">Developer</p>
      </div>
      <div className="hidden lg:flex flex-col gap-5 rounded-lg shadow-xl absolute top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3 xl:right-20 2xl:w-1/5 2xl:right-[350px] xl:-top-20">
        <h1 className="text-4xl font-bold text-indigo-800">Hi I'm Alejandro</h1>
        <p className="text-gray-400">
          I am a junior software developer, recently graduated from my Fullstack
          Bootcamp. I am looking for my first opportunity in this new field
        </p>
        <a
          href="#contact"
          className="bg-indigo-600 text-white text-xl px-3 py-2 w-fit rounded-md font-semibold "
        >
          Contact me
        </a>
      </div>
    </div>
  );
}

export default Header;
