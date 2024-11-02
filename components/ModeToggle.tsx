"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
   
        <button className='relative btn btn-round' onClick={() => {theme === "dark" ? setTheme("light") : setTheme("dark")}}  >
          <Sun className=" top-0 h-[1.2rem] w-[1.2rem] rotate-0 dark:hidden transition-all dark:-rotate-90" />
          <Moon className=" w-0 h-0 dark:h-[1.2rem]  dark:w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </button>
     
   
  )
}
