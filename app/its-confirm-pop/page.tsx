"use client";
import PageComponent from "@/components/PageComponent";
import { useConfirm } from "@/ItsConfirmPop/ItsConfirmPop";
import React, { useEffect, useState } from "react";
import { CodeSnipConfirmPopUsage } from "./CodeSnipConfirmPopUsage";
import { CodeSnipConfirmPopComponent } from "./CodeSnipConfirmPopComponent";

const Page = () => {
  const { ItsConfirm } = useConfirm();
  const [doIt, setDoIt] = useState(false);

  useEffect(() => {
    if (setDoIt) {
      setTimeout(() => {
        setDoIt(false);
      }, 800);
    }
  }, [doIt]);

  const handleConfirm = async () => {
    const confirmed = await ItsConfirm(
      `Are you sure you want to do this thing?`
    );
    if (confirmed) {
      //await functionDoingStuff()
      //setSomeStateVar(state);
      //Maybe do something else;
      setDoIt(true);
      return;
    }
  };
  return (
    <div>
      <PageComponent
        title="ItsConfirmPop"
        tagline="A customizable confirmation popup."
        description="Simply wrap your app in the ItsConfirmProvider, then you can call the await ItsConfirm(). This function opens the custom modal and returns a Promise that resolves when the user clicks Confirm or Cancel.  You use await ItsConfirm just like window.confirm(), making integration simple and familiar."
        exampleElement={
          <div>
            <button onClick={handleConfirm} className="btn btn-purple">
              do thing ✨
            </button>
          </div>
        }
        CodeSnipUsage={CodeSnipConfirmPopUsage}
        CodeSnipComponent={CodeSnipConfirmPopComponent}
      />
      <div
        className={` fixed inset-0 flex justify-center items-center transition-all ${
          doIt ? "zz-top bg-black bg-opacity-70" : "z-lowest bg-opacity-0"
        } `}
      >
        <img
          className={`${
            doIt ? "opacity-100" : "opacity-0 "
          } transition-opacity duration-500 rounded-full w-[300px] h-[180px]`}
          src="/patric-laugh.webp"
        />
      </div>
    </div>
  );
};

export default Page;
