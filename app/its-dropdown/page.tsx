"use client";
import ChevronsUpDown from "@/components/icons/ChevronsUpDown";
import PageComponent from "@/components/PageComponent";
import ItsDropdown from "@/ItsDropdown/ItsDropdown";
import React, { useState } from "react";
import { CodeSnipDropdownUsage } from "../its-dropdown/CodeSnipDropdownUsage";
import { CodeSnipDropdownComonent } from "./CodeSnipDropdownComponent";
import { CodeSnipDropdownCSS } from "./CodeSnipDropdownCSS";

const Page = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const categorys = ["fast", "slow", "new", "old", "broken", "fixed"];
  const sortOrders = ["long", "short", "tall", "wide", "newest", "oldest"];
  return (
    <PageComponent
      title="ItsDropdown"
      tagline="An easy to use dropdown menu."
      description="An ItsDropdown expects its children to be an array mapped to list items. The button has a text, and btnClassNames props. A ReactNode can be passed to the button for icons or something. There is a closeWhenClicked prop if you want the dropdown to close when an item is selected. An ItsDropdown can also be rendered recursivly."
      exampleElement={
        <div className="flex flex-col gap-2">
          <b>Simple</b>
          <ItsDropdown
            closeWhenClicked={true}
            btnText={
              <span className="btn-w-icon">
                ItsDropdown <ChevronsUpDown />
              </span>
            }
            btnClassNames="btn btn-ghost"
          >
            {categorys.map((category, index) => (
              <li
                key={index}
                className="btn btn-ghost"
                style={{ width: "100%" }}
                onClick={() => {
                  setCategoryFilter(category);
                }}
              >
                {category}
              </li>
            ))}
          </ItsDropdown>
          <b>Recursive</b>
          <ItsDropdown
            menuClassNames="-translate-x-8"
            btnText="Filters"
            btnClassNames="btn btn-ghost"
          >
            <ItsDropdown
              btnText={
                <span className="flex items-center gap-1">
                  Category <ChevronsUpDown />
                </span>
              }
              btnClassNames="btn btn-ghost"
            >
              {categorys.map((category, index) => (
                <li
                  key={index}
                  className="btn btn-ghost"
                  style={{ width: "100%" }}
                  onClick={() => {
                    setCategoryFilter(category);
                  }}
                >
                  {category}
                </li>
              ))}
            </ItsDropdown>
            <ItsDropdown
              closeWhenClicked={true}
              btnText={
                <span className="flex items-center whitespace-nowrap gap-1">
                  Sort Order <ChevronsUpDown />
                </span>
              }
              btnClassNames="btn btn-ghost"
            >
              {sortOrders.map((sortOrder, index) => (
                <li
                  key={index}
                  className="btn btn-ghost"
                  style={{ width: "100%" }}
                  onClick={() => {
                    setSortOrder(sortOrder);
                  }}
                >
                  {sortOrder}
                </li>
              ))}
            </ItsDropdown>
          </ItsDropdown>
        </div>
      }
      CodeSnipUsage={CodeSnipDropdownUsage}
      CodeSnipComponent={CodeSnipDropdownComonent}
      CodeSnipCSS={CodeSnipDropdownCSS}
    />
  );
};

export default Page;
