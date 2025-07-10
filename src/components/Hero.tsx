import Squares from "./background/Squares";
import SplitText from "./ui/SplitText";
import { generateRandomBackgrounds } from "../lib/backgroundUtils";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 bg-background"
    >
      <div className="absolute inset-0 z-0">
        {generateRandomBackgrounds(3).map((bg, idx) => (
          <div
            key={idx}
            className="absolute rounded-full blur-[180px] opacity-50"
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

        <Squares
          direction="diagonal"
          speed={0.1}
          borderColor="oklch(0.2970 0.0504 292.9163)"
          squareSize={90}
          hoverFillColor="oklch(0.6894 0.1075 301.5196)"
        />
      </div>
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col items-center"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
            <SplitText
              text="Hi, I'm"
              className="text-foreground"
              duration={0.3}
            />{" "}
            <SplitText
              text="Ahmad Fadhili"
              className="text-primary"
              duration={1}
            />
          </h1>
          <h2
            className="text-xl md:text-2xl font-medium text-muted-foreground mb-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Fullstack Developer
          </h2>
          <p
            className="text-lg text-foreground/80 mb-8 max-w-lg text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            I specialize in building modern web applications with Node.js,
            React, Next.js, and Laravel. Let's turn your ideas into reality with
            clean, efficient code.
          </p>
          <div
            className="flex flex-wrap gap-4"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:translate-y-[-2px] transition-all shadow-sm hover:shadow-md"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:translate-y-[-2px] transition-all border border-border"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
