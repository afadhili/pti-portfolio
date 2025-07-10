import TitleText from "./ui/TitleText";
import SpotlightCard from "./ui/SpotlightCard";
import Squares from "./background/Squares";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.1}
          borderColor="oklch(0.2970 0.0504 292.9163)"
          squareSize={90}
          hoverFillColor="oklch(0.6894 0.1075 301.5196)"
        />
      </div>
      <div className="container mx-auto px-4">
        <div data-aos="fade-up">
          <TitleText
            text="My Skills"
            description="I've worked with a variety of technologies in the web development
              world. Here's an overview of my technical skills and expertise."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SpotlightCard
              key={index}
              spotlightColor={
                [
                  "rgba(255, 100, 100, 0.25)",
                  "rgba(100, 255, 100, 0.25)",
                  "rgba(100, 100, 255, 0.25)",
                ][index % 3] as any
              }
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className="p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    data-aos="fade-left"
                    data-aos-delay={400 + skillIndex * 50}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
