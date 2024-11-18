import PageComponent from "@/components/PageComponent";
import React from "react";
import { CodeSnipChunkArrayCode } from "./CodeSnipChunkArrayCode";
import { CodeSnipChunkArrayUsage } from "./CodeSnipChunkArrayUsage";

const Page = () => {
  return (
    <PageComponent
      title="chunkArray()"
      tagline="A simple utility function to chop an array into chunks."
      description="The first parameter is the array you want to chunk, and the second is the chunk size."
      CodeSnipUsage={CodeSnipChunkArrayUsage}
      CodeSnipCode={CodeSnipChunkArrayCode}
    />
  );
};

export default Page;
