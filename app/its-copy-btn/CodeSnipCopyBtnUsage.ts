export const CodeSnipCopyBtnUsage = `
// Simplest usage
<ItsCopyBtn text={testText} />

// Making use of the optional props
 <ItsCopyBtn
   btnText={
      <span className="flex gap-1 items-center">
        <ClipboardIcon /> Copy
      </span>
    }
   copiedText={
      <span className="flex gap-1 items-center">
        <ClipboardCheckIcon /> Copied
      </span>
    }
   classNames="btn-ghost"
   text={code}
  />
`