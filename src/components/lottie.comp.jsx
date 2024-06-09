import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/heart.json";

const LottieComponent = (props) => {
  const initState = { url: "", width: 150, height: 150 };
  const [state, setLottieLocation] = useState(initState);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    setLottieLocation({
      url: props.url,
      name: props.name,
      width: props.width,
      height: props.height,
    });
  }, [props.url]);

  return (
    <div className="lottie-container">
      <h3>{state.name}</h3>
      <Lottie
        options={defaultOptions}
        height={state.height}
        width={state.width}
      />
    </div>
  );
};

export default LottieComponent;
