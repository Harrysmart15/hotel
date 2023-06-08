import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["I am a manager,", "also a full stack developer!","and a graphics designer","I have a knack for teaching bussiness ideas and facilating the growth of the bussiness !"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};