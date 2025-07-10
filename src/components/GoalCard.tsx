import React from "react";
import TiltedCard from "./ui/TiltedCard";

interface GoalCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  aosDelay: string;
}

const GoalCard: React.FC<GoalCardProps> = ({
  icon,
  title,
  description,
  aosDelay,
}) => {
  return (
    <TiltedCard
      containerHeight="auto"
      containerWidth="100%"
      scaleOnHover={1.05}
      rotateAmplitude={5}
      showMobileWarning={false}
      showTooltip={false}
    >
      <div
        className="bg-card p-8 rounded-lg hover:border-primary border-2 shadow-lg flex flex-col items-center text-center w-full h-full"
        data-aos="fade-up"
        data-aos-delay={aosDelay}
      >
        <div className="text-primary mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </TiltedCard>
  );
};

export default GoalCard;
