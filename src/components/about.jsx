import React from 'react';

function About() {
  return (
    <div id="about" className="px-10">
      <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
        <div className="relative">
          <div className="h-full rounded-full overflow-hidden">
            <img
              src="./3d-casual-life-young-man-sitting-with-a-laptop-and-waving-his-hand.png"
              alt="user"
            />
          </div>
        </div>

        <div className="my-auto flex flex-col gap-3">
          <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
          <p className="text-gray-400">
            I care deeply about creating world-class, useful, and beautiful
            products that help people and make a difference. I use the MERN
            stack, but always eager to expand my skill set and learn new
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
