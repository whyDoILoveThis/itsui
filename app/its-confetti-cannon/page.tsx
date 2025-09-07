import PageComponent from "@/components/PageComponent";
import React from "react";
import { CodeSnipConfettiCannonUsage } from "./CodeSnipConfettiCannonUsage";
import { CodeSnipConfettiCannon } from "./CodeSnipConfettiCannon";
import ItsConfettiCannon from "@/ItsConfettiCannon/ItsConfettiCannon";

const page = () => {
  return (
    <PageComponent
      title="ConfettiCannon"
      tagline="For all your confetti popping needs 🎊"
      description="ConfettiCannon is a lightweight, canvas-based confetti effect you can drop into any React app. It handles bursts, particle physics, shapes, colors, and performance tuning out of the box — spam-click safe and mobile-friendly. Just render it, and let the party fly. >>NEW - pop shake animation now on the cannon when shooting."
      exampleElement={<ItsConfettiCannon />}
      CodeSnipUsage={CodeSnipConfettiCannonUsage}
      CodeSnipComponent={CodeSnipConfettiCannon}
    />
  );
};

export default page;
