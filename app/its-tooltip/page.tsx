'use client';

import ItsTooltip from '@/ItsTooltip/ItsTooltip';
import { CodeSnipItsTooltip } from './CodeSnipItsTooltip';
import { CodeSnipItsTooltipUsage } from './CodeSnipItsTooltipUsage';
import { CodeSnipItsToolTipCSS } from './CodeSnipItsTooltipCSS';
import PageComponent from '@/components/PageComponent';

export default function Page() {
  return (
      <PageComponent
        title="ItsTooltip"
        tagline="An easy to use tooltip."
        description=" All you do is, wrap the element you want to have a tooltip, in
        an ItsTooltip. Then pass the features as props."
        exampleElement={ <div className="flex flex-col gap-4">
        {' '}
        {/** Tooltip as text */}
        <ItsTooltip
          delay={300}
          tooltipText="Tooltip text"
          tooltipClassName="text-xs"
        >
          <button
            className={`border w-fit rounded-md border-slate-600 px-2 `}
          >
            tooltip text
          </button>
        </ItsTooltip>
        {/** Tooltip as an element */}
        <ItsTooltip
          delay={300}
          tooltipElement={
            <div>
              this is a div. could be an img or link or anything mwahaha
            </div>
          }
        >
          <button
            className={`border w-fit rounded-md border-slate-600 px-2 `}
          >
            Item with tooltip element
          </button>
        </ItsTooltip>
      </div>}
      CodeSnipUsage={CodeSnipItsTooltipUsage}
      CodeSnipComponent={CodeSnipItsTooltip}
      CodeSnipCSS={CodeSnipItsToolTipCSS}
      />

      
  );
}
