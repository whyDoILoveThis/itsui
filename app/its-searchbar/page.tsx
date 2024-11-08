"use client";
import React, { useState } from "react";
import ItsSearchbar from "../../ItsSearchbar/ItsSearchbar";
import PageComponent from "../../components/PageComponent";

export default function Page() {
  const [searchTerm, setSearchterm] = useState("");

  return (
    <PageComponent
      title="Search Bar"
      tagline="An optionally expandable searchbar."
      description="Choose to either have the button that opens the bar, or choose to lock it open. By default, its  Create your own state var for the value, and pass that as props."
      exampleElement={
        <div>
          <ItsSearchbar
            searchbarWidth="180px"
            searchTerm={searchTerm}
            setSearchTerm={setSearchterm}
          />
          <ItsSearchbar
            searchbarAsAnimatedButton={true}
            searchbarWidth="290px"
            searchTerm={searchTerm}
            setSearchTerm={setSearchterm}
          />
        </div>
      }
    />
  );
}
