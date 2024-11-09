import PageComponent from "@/components/PageComponent";
import ItsSkeleton from "@/ItsSkeleton/ItsSkeleton";
import React from "react";
import { CodeSnipSkeletonUsage } from "./CodeSnipSkeletonUsage";
import { CodeSnipSkeletonComponent } from "./CodeSnipSkeletonComponent";

const Page = () => {
  return (
    <PageComponent
      title="ItsSkeleton"
      tagline="A flexible skeleton box ready to use."
      description="Just set the width & height of your box. You can add additional classes if you like... Maybe something needs rounded full or you want to tweak the transition duration of different boxes.. 😁"
      exampleElement={
        <div className="flex flex-col gap-2">
          <ItsSkeleton />

          <ItsSkeleton
            width="100px"
            height="100px"
            ClassNames="rounded-full duration-600"
            duration={1000}
          />
        </div>
      }
      CodeSnipUsage={CodeSnipSkeletonUsage}
      CodeSnipComponent={CodeSnipSkeletonComponent}
    />
  );
};

export default Page;
