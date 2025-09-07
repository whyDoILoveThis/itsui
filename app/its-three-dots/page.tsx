import PageComponent from "@/components/PageComponent";
import React from "react";
import { CodeSnipThreeDotsUsage } from "./CodeSnipThreeDotsUsage";
import { CodeSnipThreeDots } from "./CodeSnipThreeDots";
import ItsFooBar from "@/ItsFooBar/ItsFooBar";
import ItsThreeDots from "@/ItsThreeDots/ItsThreeDots";

const page = () => {
  return (
    <PageComponent
      title={"ThreeDots"}
      tagline={
        "A tiny text-friendly animation that adds a smooth, looping three-dot loader anywhere inline."
      }
      description={
        "ItsThreeDots is a lightweight animation component that cycles through three simple dots to create a smooth loading effect. It inherits all text styles from its parent, making it blend seamlessly with any design or theme. The animation is minimal, unobtrusive, and effective for indicating activity without overwhelming the interface. Its clean behavior ensures it feels natural in any context where a subtle visual cue is needed. This component is ideal for placeholders, loaders, or conversational UIs where simplicity and consistency matter."
      }
      exampleElement={
        <div className="w-52">
          dots
          <ItsThreeDots />
          <p className="text-2xl font-bold">
            Loading
            <ItsThreeDots />
          </p>
          <p className="text-lg italic">
            Loadering
            <ItsThreeDots />
          </p>
          <p className="text-sm text-blue-500">
            hotty toddy
            <span className="text-red-500">
              <ItsThreeDots />
            </span>
          </p>
        </div>
      }
      CodeSnipUsage={CodeSnipThreeDotsUsage}
      CodeSnipComponent={CodeSnipThreeDots}
    />
  );
};

export default page;
