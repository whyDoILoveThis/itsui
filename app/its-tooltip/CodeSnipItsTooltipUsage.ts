export const CodeSnipItsTooltipUsage = `{/** Tooltip as text */}
<ItsTooltip
  delay={300}
  tooltipText="Tooltip text"
  tooltipClassName="text-xs"
>
  <button className={\`border w-fit rounded-md border-slate-600 px-2 \`}>
    tooltip text
  </button>
</ItsTooltip>
{/** Tooltip as an element */} 
<ItsTooltip
  delay={300}
  tooltipElement={
    <div>this is a div. could be an img or link or anything mwahaha</div>
  }
>
  <button className={\`border w-fit rounded-md border-slate-600 px-2 \`}>
    Item with tooltip element
  </button>
</ItsTooltip>
`;
