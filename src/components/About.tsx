import TitleText from "./ui/TitleText";
import Orb from "./background/Orb";
import { generateRandomBackgrounds } from "../lib/backgroundUtils";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {generateRandomBackgrounds(2).map((bg, idx) => (
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
      <div className="container mx-auto px-4 relative z-10 ">
        <div data-aos="fade-up">
          <TitleText text="About Me" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-right" data-aos-delay="200">
            <div className="absolute inset-0 z-0">
              <Orb />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-80 h-80 bg-primary rounded-full overflow-hidden">
                  <img
                    src="/images/me2.png"
                    alt=""
                    className="object-cover object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ahmad Fadhili
            </h3>
            <h4 className="text-xl text-primary font-medium mb-6">
              Fullstack Developer
            </h4>

            <p className="text-foreground/80 mb-6">
              I'm a passionate fullstack developer with expertise in building
              modern web applications. With a strong foundation in both frontend
              and backend technologies, I create seamless, user-friendly
              experiences that solve real-world problems.
            </p>

            <p className="text-foreground/80 mb-8">
              My journey in web development started with a curiosity about how
              things work on the internet. That curiosity evolved into a career
              where I continuously learn and adapt to new technologies while
              maintaining a focus on writing clean, maintainable code that
              delivers value.
            </p>
            <div
              className="grid grid-cols-2 gap-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div>
                <h5 className="font-semibold text-foreground mb-2">Location</h5>
                <p className="text-foreground/70">Gresik, Indonesia</p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-2">Email</h5>
                <p className="text-foreground/70">ahmad.fadhili@example.com</p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-2">
                  Experience
                </h5>
                <p className="text-foreground/70">1+ Year</p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-2">
                  Availability
                </h5>
                <p className="text-foreground/70">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
