export const generateRandomBackgrounds = (count: number) => {
  const colors = ["#a855f7", "#14b8a6", "#f43f5e", "#fbbf24", "#3b82f6"];
  return colors
    .sort(() => 0.5 - Math.random())
    .slice(0, count)
    .map((color, idx) => ({
      color,
      width: `${15 + idx * 10}vw`,
      height: `${15 + idx * 10}vh`,
      top: `${5 + idx * 15}%`,
      left: idx % 2 === 0 ? "-15%" : "auto",
      right: idx % 2 !== 0 ? "10%" : "auto",
    }));
};
