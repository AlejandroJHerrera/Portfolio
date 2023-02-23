import React from 'react';

function Projects() {
  return (
    <div id="projects" className="py-40 ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
          <h1 className="text-3xl dark:text-white">Works & Projects</h1>
          <p className="w-1/2 text-center text-gray-400">
            I help bring ideas to life. Powered by VS Code and coffee, I turn
            your requirements into a well-designed websites
          </p>
        </div>

        <div className="p-5 sm:p-0 flex flex-wrap justify-between">
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src="./movieClone.png" alt="projects" />

            <div className="flex justify-between px-4 mt-2">
              <h1>Imdb Clone</h1>

              <a
                target={'_blank'}
                rel="noreferrer"
                href="https://imdb-ajch.vercel.app/"
              >
                View
              </a>
            </div>
          </div>

          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src="./instagramclone.png" alt="projects" />
            <div className="flex justify-between px-4 mt-2">
              <h1>Instagram Clone</h1>
              <a
                rel="noreferrer"
                target={'_blank'}
                href="https://instav1-clone-ajhc.vercel.app/"
              >
                View
              </a>
            </div>
          </div>

          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src="./movieviewerv2.png" alt="projects" />
            <div className="flex justify-between px-4 mt-2">
              <h1>Manga Viewer v2</h1>
              <a target={'_blank'} href="">
                Coming soon!
              </a>
            </div>
          </div>

          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src="./mangaviewerv1.png" alt="projects" />
            <div className="flex justify-between px-4 mt-2">
              <h1>Manga Viewer v1</h1>
              <a target={'_blank'} href="">
                Coming soon!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
