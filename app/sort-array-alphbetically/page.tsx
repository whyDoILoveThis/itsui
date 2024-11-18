"use client";
import PageComponent from "@/components/PageComponent";
import React from "react";
import { CodeSnipSortingUsage } from "./CodeSnipSortingUsage";

const Page = () => {
  const arrayToSort = ["Never", "Gonna", "Give", "You", "Up"];

  return (
    <PageComponent
      title="Sort array alphabetically"
      tagline="Since I just cant remember how to do this."
      description="Dont you hate when you forget how to do something even though you do it all the time? AHHH why why why! Well this is one of those things for me so im adding it to the footer of this site because I always have it open."
      exampleElement={
        <div className="flex flex-col gap-2">
          <p>
            const <b>arrayToSort</b> = [&quot;Never&quot;, &quot;Gonna&quot;, &quot;Give&quot;, &quot;You&quot;, &quot;Up&quot;]
          </p>
          <div className="flex gap-2">
            <span className="flex flex-col border p-1 rounded-sm">
              <b>Not Sorted:</b>
              {arrayToSort.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </span>
            <span className="flex flex-col border p-1 rounded-sm">
              <b>Sorted:</b>
              {arrayToSort
                .sort((a, b) => a.localeCompare(b))
                .map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
            </span>
          </div>
        </div>
      }
      CodeSnipUsage={CodeSnipSortingUsage}
    />
  );
};

export default Page;
