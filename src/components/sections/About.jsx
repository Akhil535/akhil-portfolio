import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "JavaScript", "TailwindCSS"];
  const backendSkills = ["Node.js (basics)", "MongoDB (basics)", "GraphQL (basics)"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-background/50 backdrop-blur-md"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all bg-white/10 backdrop-blur-md shadow-md dark:bg-gray-900 dark:border-gray-700">
            <p className="text-gray-300 mb-6">
              Passionate developer with a strong record of building scalable web
              applications and innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-foreground">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-foreground">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-white/10 backdrop-blur-md shadow-md dark:bg-gray-900 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-foreground">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Master of Computer Applications (MCA)</strong> - CHMM College for Advanced Studies Trivandrum (2020–2022)
                </li>
                <li>
                  <strong>Bachelor of Computer Applications (BCA)</strong> - Fatima Mata National College, Kollam
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-white/10 backdrop-blur-md shadow-md dark:bg-gray-900 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-foreground">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    React.js Developer at{" "}
                    <a
                      href="https://uniathena.com/"
                      className="text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      UniAthena
                    </a>{" "}
                    (2023 – 2025)
                  </h4>
                  <p>
                    Working as a React.js Developer, building and maintaining UniAthena’s Main Portal, Alumni System, and Blog System using React, Node.js, MongoDB, and Tailwind CSS.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Data Operator at UniAthena (December 2022 – April 2023)</h4>
                  <p>
                    Managed backend data entry, document uploads, report generation, and supported technical teams before transitioning into the development role.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
