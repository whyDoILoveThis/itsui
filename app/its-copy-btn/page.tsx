"use client";
import PageComponent from "@/components/PageComponent";
import ItsCopyBtn from "@/ItsCopyBtn/ItsCopyBtn";
import React, { useState } from "react";
import { CodeSnipCopyBtnUsage } from "./CodeSnipCopyBtnUsage";
import { CodeSnipCopyBtnComponent } from "./CodeSnipCopyBtnComponent";

const Page = () => {
  const [testText, setTestText] = useState("text to copy");
  const [text, setText] = useState("");
  return (
    <PageComponent
      title="ItsCopyBtn"
      tagline="A simple button that copys text to the clipboard."
      description="Simply pass the text you want copied as the text prop, and the button will copy that text to the users clipboard. Customize the style of the button in the component itself. There are classname props, but they may have style conflicts by default"
      exampleElement={
        <div className="flex flex-col gap-2">
          <input
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
            className="input"
            placeholder="text to copy..."
          />

          <div className="flex justify-between w-full">
            <ItsCopyBtn text={testText} />
            {testText !== "" ? (
              <button
                onClick={() => {
                  setTestText("");
                  setText("");
                }}
              >
                clear
              </button>
            ) : (
              text !== "" && (
                <button
                  onClick={() => {
                    setTestText("");
                    setText("");
                  }}
                >
                  clear
                </button>
              )
            )}
          </div>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input"
            placeholder="test pasting here..."
          />
        </div>
      }
      CodeSnipUsage={CodeSnipCopyBtnUsage}
      CodeSnipComponent={CodeSnipCopyBtnComponent}
    />
  );
};

export default Page;
