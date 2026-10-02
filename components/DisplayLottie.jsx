import { Lottie } from "lottie-react";

const GreetingLottie = ({ animationPath }) => {
  return (
    <Lottie
      src={animationPath}
      loop
      autoplay
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default GreetingLottie;
