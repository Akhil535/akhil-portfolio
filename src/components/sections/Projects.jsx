import { RevealOnScroll } from "../RevealOnScroll";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import UniAthenaInsights from "../../assets/skills/uniathena/Uniathena_insights.png";
import UniAthenaMain from "../../assets/skills/uniathena/Uniathena_Main.png";
import UniAthenaAlumni from "../../assets/skills/uniathena/Uniathena_Alumni.png";
const projects = [
  {
    id: 1,
    title: "UniAthena Main Portal",
    description: "uniAthena Main portal using React, Node, mongoDB, Tailwind CSS",
    image: UniAthenaMain,
    tags: ["React", "Node", "mongoDB", "Tailwind CSS"],
    demoUrl: "https://uniathena.com/",
    githubUrl: "https://github.com/Akhil535",
  },
  {
    id: 2,
    title: "Uniathena Alumni Portal",
    description: "Alumni project system using React, Node, mongoDB, Tailwind CSS",
    image: UniAthenaAlumni,
    tags: ["React", "Node", "mongoDB", "Tailwind CSS"],
    demoUrl:
      "https://uniathena.com/alumni?utm_source=Direct&utm_medium=Website&utm_campaign=Website&utm_page=login&utm_pos=",
    githubUrl: "https://github.com/Akhil535",
  },
  {
    id: 3,
    title: "Uniathena Blog Page",
    description: "A blog page create system using React, Node, mongoDB, Tailwind CSS",
    image: UniAthenaInsights,
    tags: ["React", "Node", "mongoDB", "Tailwind CSS"],
    demoUrl:
      "https://uniathena.com/insights/blogs?utm_source=Direct&utm_medium=Website&utm_campaign=Website&utm_page=login&utm_pos=",
    githubUrl: "https://github.com/Akhil535",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`
                  glass p-6 rounded-xl border border-white/10
                  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                  transition-all flex flex-col  bg-white/30 backdrop-blur-md border-white/30 shadow-md
                    dark:bg-gray-900 dark:border-gray-700
                  ${idx === projects.length - 1 ? "md:col-span-2" : ""}
                `}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden rounded-t-2xl mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">{project.description}</p>

                {/* Links */}
                <div className="flex justify-between items-center mt-auto pt-3 border-t border-border">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    <span className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Demo</span>
                    <ExternalLink size={20} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={22} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer button */}
          <div className="mt-16 text-center">
            <a
              href="https://github.com/Akhil535"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-primary text-background font-semibold text-lg shadow-lg hover:bg-primary/90 transition-colors"
            >
              Check My Github <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
