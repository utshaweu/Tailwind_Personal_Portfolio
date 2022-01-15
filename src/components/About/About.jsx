import React from "react";

const About = () => {
  return (
    <>
      <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section className="w-full">
          <h2 id="about" className="secondary-title">
            About us
          </h2>
          <p
            className="section-paragraph
             first-letter:text-5xl first-letter:font-bold first-letter:text-secondary first-letter:mr-3 first-letter:float-left"
          >
            A self-motivated, energetic, and passionate professional web Development with valuable experience in HTML, CSS, JavaScript and React JS. In future, I would like to be a
            full-stack web developer. I love to learn about new tech and new languages, try to grab the new features of the technologies.
          </p>
          <div className="flex flex-wrap gap-2">
            <p class="px-6 py-2 rounded-lg w- bg-gradient-to-r from-cyan-500 to-blue-500 text-center text-sm font-medium">JavaScript</p>
            <p class="px-6 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-center text-sm font-medium">ES6</p>
            <p class="px-6 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center text-sm font-medium">ReactJS</p>
            <p class="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-center text-sm font-medium">jQuery</p>
            <p class="px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-center text-sm font-medium">Bootstrap</p>
            <p class="px-6 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-center text-sm font-medium">Material UI</p>
            <p class="px-6 py-2 rounded-lg bg-gradient-to-r from-lime-500 to-green-500 text-center text-sm font-medium">Tailwind</p>
            <p class="px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-center text-sm font-medium">Sass</p>
            <p class="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 text-center text-sm font-medium">WordPress (Basic)</p>
            <p class="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-center text-sm font-medium">PSD/Figma/XD to Html</p>
            <p class="px-6 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-center text-sm font-medium">Git & GitHub</p>
            <p class="px-6 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-pink-500 text-center text-sm font-medium">Netlify</p>
            <p class="px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-center text-sm font-medium">Firebase</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
