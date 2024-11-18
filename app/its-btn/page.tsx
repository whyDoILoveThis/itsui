import PageComponent from "@/components/PageComponent";
import React from "react";
import { CodeSnipButtonCSS } from "./CodeSnipButtonCSS";

const Page = () => {
  return (
    <PageComponent
      title={"ItsButton"}
      tagline={"Simple css button classes"}
      description={
        "I was going to create an ItsButton, but I realized that it would make more sense, and be easier to implement if I just made some css classes instead."
      }
      exampleElement={
        <div className="flex flex-wrap items-center w-fit gap-2">
          <button className="btn">button</button>
          <button className="btn btn-round">🎯</button>
          <button className="btn btn-ghost">ghost 👻</button>
          <button className="btn btn-blue">blue btn</button>
          <button className="btn btn-green">green btn</button>
          <button className="btn btn-red">red btn</button>
          <button className="btn btn-yellow">yellow btn</button>
          <button className="btn btn-orange">orange btn</button>
          <button className="btn btn-purple">purple btn</button>
          <button className="btn btn-pink">pink btn</button>
        </div>
      }
      CodeSnipCSS={CodeSnipButtonCSS}
    />
  );
};

export default Page;
