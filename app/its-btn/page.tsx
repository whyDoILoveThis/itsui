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
        <div className="flex flex-wrap gap-2">
          <button className="btn">button</button>
          <button className="btn btn-blue">blue button</button>
          <button className="btn btn-green">green button</button>
          <button className="btn btn-red">red button</button>
          <button className="btn btn-yellow">yellow button</button>
          <button className="btn btn-orange">orange button</button>
          <button className="btn btn-purple">purple button</button>
          <button className="btn btn-pink">pink button</button>
        </div>
      }
      CodeSnipCSS={CodeSnipButtonCSS}
    />
  );
};

export default Page;
