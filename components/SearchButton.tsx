"use client";

import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "./icons/SearchIcon";
import { componentLinks } from "@/lib/links-components";
import Link from "next/link";

const normalizeString = (str: string) =>
  str.toLowerCase().replace(/[-\s]/g, ""); // Remove dashes and spaces, and make lowercase.

const SearchButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState("");

  // Focus input when dialog opens
  useEffect(() => {
    if (isDialogOpen) {
      inputRef.current?.focus();
    }
  }, [isDialogOpen]);

  // Filter the links based on the normalized search term
  const filteredLinks = componentLinks.filter((link) => {
    const normalizedLabel = normalizeString(link.label);
    const normalizedHref = normalizeString(link.href);
    const normalizedSearch = normalizeString(searchTerm);

    return (
      normalizedLabel.includes(normalizedSearch) ||
      normalizedHref.includes(normalizedSearch)
    );
  });

  // Toggle dialog visibility
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
    setSearchTerm("");
  };

  // Handle keydown event for Ctrl+K
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsDialogOpen((prev) => !prev); // Toggle dialog
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown); // Cleanup
  }, []);

  return (
    <div className="fixed zz-top-plus1 top-4 right-14 flex justify-center items-center">
      <button
        onClick={toggleDialog}
        className="btn btn-xs btn-squish flex items-center gap-1"
      >
        <SearchIcon /> <span className="text-xs">Ctrl+K</span>
      </button>

      {isDialogOpen && (
        <div className="fixed zz-top-plus1 inset-0 bg-black backdrop-blur-md bg-opacity-70 flex justify-center items-center">
          <div className="bg-white bg-opacity-5 p-6 rounded relative">
            <div className=" flex flex-col items-center pt-10">
              {/* Search Input */}
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for a component..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-6 w-80 px-2 p-1 text-sm border rounded shadow focus:outline-none"
              />

              {/* Render Filtered Links */}
              <ul className="w-full flex flex-col gap-2">
                {filteredLinks.length > 0 ? (
                  filteredLinks.map((link, index) => (
                    <li onClick={toggleDialog} className="w-full" key={index}>
                      <Link
                        href={link.href}
                        className="btn btn-ghost"
                        style={{ width: "100%" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500">No results found</li>
                )}
              </ul>
            </div>
            <button
              onClick={toggleDialog}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchButton;
