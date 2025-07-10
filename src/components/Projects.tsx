import { generateRandomBackgrounds } from "@/lib/backgroundUtils";
import TitleText from "./ui/TitleText";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, payment processing, and user authentication.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "ecommerce",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
      technologies: ["React", "Express", "PostgreSQL", "Socket.io"],
      image: "taskapp",
      link: "#",
    },
    {
      title: "Learning Management System",
      description:
        "An educational platform for creating and managing courses, tracking student progress, and facilitating online learning.",
      technologies: ["Laravel", "Vue.js", "MySQL", "AWS"],
      image: "lms",
      link: "#",
    },
    {
      title: "Health & Fitness Tracker",
      description:
        "A mobile-responsive application for tracking workouts, nutrition, and health metrics with data visualization.",
      technologies: ["React Native", "Node.js", "GraphQL", "MongoDB"],
      image: "fitness",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 relative">
      {generateRandomBackgrounds(3).map((bg, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full blur-[180px] opacity-50`}
          style={{
            width: bg.width,
            height: bg.height,
            top: bg.top,
            left: bg.left,
            right: bg.right,
            backgroundColor: bg.color,
          }}
        ></div>
      ))}
      <div className="container mx-auto px-4">
        <div data-aos="fade-up">
          <TitleText
            text="My Projects"
            description="Here are some of the projects I've worked on. Each project represents different challenges and solutions in web development."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-md border border-border transition duration-200 hover:shadow-lg hover:border-primary hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div
                className="h-48 bg-primary/10 flex items-center justify-center"
                data-aos="fade-down"
                data-aos-delay={300 + index * 100}
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="p-6"
                data-aos="fade-up"
                data-aos-delay={400 + index * 100}
              >
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent border text-secondary-foreground text-xs rounded-full"
                      data-aos="fade-left"
                      data-aos-delay={500 + techIndex * 50}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
