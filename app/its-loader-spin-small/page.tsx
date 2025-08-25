import PageComponent from "@/components/PageComponent";
import React from "react";
import { CodeSnipLoaderSpinSmallUsage } from "./CodeSnipLoaderSpinSmallUsage";
import { CodeSnipLoaderSpinSmall } from "./CodeSnipLoaderSpinSmall";
import ItsLoaderSpinSmall from "@/ItsLoaderSpinSmall/ItsLoaderSpinSmall";
import { CodeSnipLoaderSpinSmallCSS } from "./CodeSnipLoaderSpinSmallCSS";

const page = () => {
  return (
    <PageComponent
      title={"LoaderSpinSmall"}
      tagline={"Sleak and small loader spinner for your loading needs"}
      description={
        "Perfect for buttons and small spaces where you need a subtle loading indicator"
      }
      exampleElement={
        <div className="flex flex-col gap-4">
          {/* NEUTRALS */}
          <div>
            <p className="text-sm font-bold mb-1">NEUTRALS</p>
            <div className="flex flex-wrap gap-1 items-center">
              <ItsLoaderSpinSmall />
              <ItsLoaderSpinSmall color="silver" />
              <ItsLoaderSpinSmall color="black" />
              <ItsLoaderSpinSmall color="white" />
            </div>
          </div>

          {/* RED / PINKS */}
          <div>
            <p className="text-sm font-bold mb-1">RED / PINKS</p>
            <div className="flex flex-wrap gap-1 items-center">
              <ItsLoaderSpinSmall color="red" />
              <ItsLoaderSpinSmall color="pink" />
              <ItsLoaderSpinSmall color="hotpink" />
            </div>
          </div>

          {/* ORANGES / YELLOWS */}
          <div>
            <p className="text-sm font-bold mb-1">ORANGES / YELLOWS</p>
            <div className="flex flex-wrap gap-1 items-center">
              <ItsLoaderSpinSmall color="orange" />
              <ItsLoaderSpinSmall color="yellow" />
            </div>
          </div>

          {/* GREENS */}
          <div>
            <p className="text-sm font-bold mb-1">GREENS</p>
            <div className="flex flex-wrap gap-1 items-center">
              <ItsLoaderSpinSmall color="lime" />
              <ItsLoaderSpinSmall color="green" />
              <ItsLoaderSpinSmall color="forestgreen" />
            </div>
          </div>

          {/* BLUES */}
          <div>
            <p className="text-sm font-bold mb-1">BLUES</p>
            <div className="flex flex-wrap gap-1 items-center">
              <ItsLoaderSpinSmall color="cyan" />
              <ItsLoaderSpinSmall color="blue" />
              <ItsLoaderSpinSmall color="darkblue" />
            </div>
          </div>

          {/* PURPLES */}
          <div>
            <p className="text-sm font-bold mb-1">PURPLES</p>
            <div className="flex flex-wrap gap-1 items-center">
              <ItsLoaderSpinSmall color="purple" />
              <ItsLoaderSpinSmall color="violet" />
            </div>
          </div>

          {/* BROWNS */}
          <div>
            <p className="text-sm font-bold mb-1">BROWNS</p>
            <div className="flex flex-wrap gap-1 items-center">
              <ItsLoaderSpinSmall color="brown" />
            </div>
          </div>

          {/* TEALS / AQUAS */}
          <div>
            <p className="text-sm font-bold mb-1">TEALS / AQUAS</p>
            <div className="flex flex-wrap gap-1 items-center">
              <ItsLoaderSpinSmall color="teal" />
              <ItsLoaderSpinSmall color="aqua" />
            </div>
          </div>
        </div>
      }
      CodeSnipUsage={CodeSnipLoaderSpinSmallUsage}
      CodeSnipComponent={CodeSnipLoaderSpinSmall}
      CodeSnipCSS={CodeSnipLoaderSpinSmallCSS}
    />
  );
};

export default page;
