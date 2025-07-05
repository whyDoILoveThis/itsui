import PageComponent from "@/components/PageComponent";
import React from "react";
import { CodeSnipButtonCSS } from "./CodeSnipButtonCSS";
import { CodeSnipButtonUsage } from "./CodeSnipButtonUsage";
import { TbIcons } from "react-icons/tb";
import { SiGhostery } from "react-icons/si";

const Page = () => {
  return (
    <PageComponent
      title={"ItsButton"}
      tagline={"Simple css button classes"}
      description={
        "I was going to create an ItsButton, but I realized that it would make more sense, and be easier to implement if I just made some css classes instead. It is important the styles in the stylesheet stay in the order I have them here, so that specificity is handled properly. However, the classes can be added to the component in any order."
      }
      exampleElement={
        <article>
          <div className="flex flex-wrap items-center w-fit gap-2">
            <b className="w-full mt-2">Base Styles</b>
            <button className="btn">button</button>
            <button className="btn btn-w-icon">
              icon btn <TbIcons />
            </button>
            <button className="btn btn-red">red btn</button>
            <button className="btn btn-orange">orange btn</button>
            <button className="btn btn-yellow">yellow btn</button>
            <button className="btn btn-green">green btn</button>
            <button className="btn btn-blue">blue btn</button>
            <button className="btn btn-purple">purple btn</button>
            <button className="btn btn-pink">pink btn</button>
            <button className="btn btn-ghost">ghost 👻</button>
            <button className="btn btn-round">🎯</button>
          </div>
          <div className="flex flex-wrap items-center w-fit gap-2">
            <b className="w-full mt-4">Combinations</b>
            <button className="btn btn-round btn-purple">👾</button>
            <button className="btn btn-round btn-ghost btn-orange">🦧</button>
            <button className="btn btn-ghost btn-red btn-w-icon">
              red ghost <SiGhostery />
            </button>
          </div>
        </article>
      }
      CodeSnipUsage={CodeSnipButtonUsage}
      CodeSnipCSS={CodeSnipButtonCSS}
    />
  );
};

export default Page;
