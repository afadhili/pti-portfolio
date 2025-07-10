import BlurText from "./BlurText";

export default function TitleText({
  text,
  description,
}: {
  text: string;
  description?: string;
}) {
  return (
    <div className="mb-12 text-center relative">
      <BlurText
        text={text}
        delay={150}
        animateBy="letters"
        direction="top"
        className="text-3xl md:text-4xl font-bold text-foreground mb-2 absolute left-1/2 -top-12 -translate-x-1/2 "
      />
      <div className="w-20 h-1 bg-primary mx-auto mt-8"></div>
      {description ? (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto px-4">
          {description}
        </p>
      ) : null}
    </div>
  );
}
