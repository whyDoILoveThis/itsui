import PageComponent from "@/components/PageComponent";
import React from "react";
import { CodeSnipFoobarUsage } from "./CodeSnipFooBarUsage";
import { CodeSnipFoobar } from "./CodeSnipFooBar";
import ItsFooBar from "@/ItsFooBar/ItsFooBar";

const page = () => {
  return (
    <PageComponent
      title={"FooBar"}
      tagline={"Its the fooby booby bariest boo bar ever to foo bar"}
      description={
        "Fooby booby bar attack in the middle of Fooby Lane. Calling all fooby troopers"
      }
      exampleElement={
        <div>
          <ItsFooBar btnText="Fooby Boo Bar" />
        </div>
      }
      CodeSnipUsage={CodeSnipFoobarUsage}
      CodeSnipComponent={CodeSnipFoobar}
    />
  );
};

export default page;
