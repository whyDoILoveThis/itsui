export const CodeSnipDropdownCSS = `
 .text-shadow {
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
}

.btn {
  @apply selection:bg-transparent
  text-slate-600
  dark:text-slate-200
  border-slate-500
  bg-slate-600
  dark:bg-slate-400
  bg-opacity-20
  hover:bg-opacity-30
  dark:bg-opacity-20
  dark:hover:bg-opacity-10
  cursor-pointer
  w-fit 
  p-2
  px-4
  border
  rounded-full;
}

.btn-ghost {
  @apply border-none
  rounded-md
  bg-opacity-0
  dark:bg-opacity-0;
}

.btn-w-icon {
  @apply flex
  items-center
  gap-1;
}
`