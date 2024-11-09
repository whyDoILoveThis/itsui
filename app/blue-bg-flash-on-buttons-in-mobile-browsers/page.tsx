import PageComponent from "@/components/PageComponent";
import { Divide } from "lucide-react";
import React from "react";
import { CodeSnipFlashCSS } from "./CodeSnipFlashCSS";

const Page = () => {
  return (
    <PageComponent
      title="Remove the blue bg flash on links and buttons in mobile browsers"
      tagline="Remove the dredded blue flash."
      description="You have a nice looking ui, only to open it on a mobile device, and every link & button you press flashes blue! AHHH why me god.. Here you find the simple fix."
      exampleElement={
        <div className="flex flex-col gap-1">
          <span className="btn do-the-stupid-blue-flash">blue</span>
          <button className="btn">not blue 🤗</button>
        </div>
      }
      CodeSnipCSS={CodeSnipFlashCSS}
    />
  );
};

export default Page;
