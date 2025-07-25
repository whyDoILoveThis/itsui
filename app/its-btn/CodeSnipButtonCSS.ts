export const CodeSnipButtonCSS = `
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

.btn-w-icon {
  @apply flex
  items-center
  gap-1;
}

.btn-blue {
  @apply text-blue-600
  dark:text-blue-200
  border-blue-500
  bg-blue-600
  dark:bg-blue-400
  bg-opacity-20
  dark:bg-opacity-20;
}

.btn-green {
  @apply text-green-600
  dark:text-green-200
  border-green-500
  bg-green-600
  dark:bg-green-400
  bg-opacity-20
  dark:bg-opacity-20;
}

.btn-red {
  @apply text-red-600
  dark:text-red-200
  border-red-500
  bg-red-600
  dark:bg-red-400
  bg-opacity-20
  dark:bg-opacity-20;
}

.btn-yellow {
  @apply text-yellow-600
  dark:text-yellow-200
  border-yellow-500
  bg-yellow-600
  dark:bg-yellow-400
  bg-opacity-20
  dark:bg-opacity-20;
}

.btn-orange {
  @apply text-orange-600
  dark:text-orange-200
  border-orange-500
  bg-orange-600
  dark:bg-orange-400
  bg-opacity-20
  dark:bg-opacity-20;
}

.btn-purple {
  @apply text-purple-600
  dark:text-purple-200
  border-purple-500
  bg-purple-600
  dark:bg-purple-400
  bg-opacity-20
  dark:bg-opacity-20;
}

.btn-pink {
  @apply text-pink-600
  dark:text-pink-200
  border-pink-500
  bg-pink-600
  dark:bg-pink-400
  bg-opacity-20
  dark:bg-opacity-20;
}

.btn-ghost {
  @apply border-none
  rounded-md
  bg-opacity-0
  dark:bg-opacity-0;
}

.btn-round {
  --btn-size: 35px;
  @apply w-[var(--btn-size)]
  h-[var(--btn-size)] 
  max-w-[var(--btn-size)]
  max-h-[var(--btn-size)] 
  rounded-full
  p-0
  flex
  justify-center
  items-center;
}
`