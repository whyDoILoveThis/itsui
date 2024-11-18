"use client";
import PageComponent from "@/components/PageComponent";
import ItsFileInput from "@/ItsFileInput/ItsFileInput";
import React, { useState } from "react";
import { CodeSnipFileInputUsage } from "./CodeSnipFileInputUsage";
import { CodeSnipFileInputComponent } from "./CodeSnipFileInputComponent";
import { CodeSnipFileInputCSS } from "./CodeSnipFileInputCSS";
import Image from "next/image";

const Page = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      // Use FileReader to read and display the image
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <PageComponent
      title="ItsFileInput"
      tagline="A customizable file input component."
      description="Simply pass a handleFileChange function. Template code for that is also below. For best results add the css as well, it fixes a cursor-pointer issue."
      exampleElement={
        <div className="flex flex-col items-center gap-2">
          <ItsFileInput handleFileChange={handleFileChange} />
          {imageUrl && (
            <Image width={280} height={100} src={imageUrl} alt={imageUrl} />
          )}
        </div>
      }
      CodeSnipUsage={CodeSnipFileInputUsage}
      CodeSnipComponent={CodeSnipFileInputComponent}
      CodeSnipCSS={CodeSnipFileInputCSS}
    />
  );
};

export default Page;
