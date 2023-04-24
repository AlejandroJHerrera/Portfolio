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
          <p className="text-gray-400 lg:hidden">
            I am a full stack developer specializing in React. I have a passion
            for creating dynamic and engaging user interfaces that provide an
            exceptional user experience.
          </p>
          <p className="text-gray-400">
            One of my strengths is my ability to work well in a team
            environment. I believe that communication and collaboration are
            essential to building successful software. I am always eager to
            learn new technologies and strive to stay up to date with the latest
            industry trends. When I am not working on code, I enjoy spending
            time outdoors, reading books, and exploring new places. I am a
            dedicated and hardworking individual who is committed to delivering
            high-quality results to my clients. If you're looking for a full
            stack developer who is passionate about React and creating
            exceptional user experiences, then I am the developer for you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
