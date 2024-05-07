import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "MYSTERY-CASES",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "RIDDLES",
        1000,
        "MURDER CASES",
        1000,
        "COMPETITION ",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
