import TitleText from "./ui/TitleText";
import GoalCard from "./GoalCard";
import { generateRandomBackgrounds } from "@/lib/backgroundUtils";

const goals = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-rocket-icon lucide-rocket"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    title: "Short-Term Goal",
    description:
      "To secure a challenging Frontend Developer position where I can apply my skills in React and Next.js, contribute to meaningful projects, and continuously learn from experienced mentors within a collaborative team.",
    aosDelay: "200",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-align-end-horizontal-icon lucide-align-end-horizontal"
      >
        <rect width="6" height="16" x="4" y="2" rx="2" />
        <rect width="6" height="9" x="14" y="9" rx="2" />
        <path d="M22 22H2" />
      </svg>
    ),
    title: "Mid-Term Goal",
    description:
      "To evolve into a Senior Frontend Developer, taking ownership of complex features, mentoring junior developers, and deepening my expertise in performance optimization and building highly scalable applications.",
    aosDelay: "400",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-goal-icon lucide-goal"
      >
        <path d="M12 13V2l8 4-8 4" />
        <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
        <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
      </svg>
    ),
    title: "Long-Term Goal",
    description:
      "To become a technical lead or solutions architect, guiding technical strategy, driving innovation in user experience, and making a significant impact on the products and teams I help create.",
    aosDelay: "600",
  },
];

const CareerGoals = () => {
  return (
    <section id="career-goals" className="py-20 bg-background relative">
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
      <div className="container mx-auto">
        <div data-aos="fade-up" className="text-center mb-12">
          <TitleText text="Career Goals" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {goals.map((goal, index) => (
            <GoalCard
              key={index}
              icon={goal.icon}
              title={goal.title}
              description={goal.description}
              aosDelay={goal.aosDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerGoals;
