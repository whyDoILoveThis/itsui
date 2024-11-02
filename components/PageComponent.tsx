"use client";
import ItsCode from "@/components/ItsCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  title: string;
  tagline: string;
  description: string;
  exampleElement: React.ReactNode;
  CodeSnipUsage?: string;
  CodeSnipComponent?: string;
  CodeSnipCSS?: string;
}

export default function PageComponent({
  title,
  tagline,
  description,
  exampleElement,
  CodeSnipUsage,
  CodeSnipComponent,
  CodeSnipCSS,
}: Props) {
  return (
    <article className={`flex flex-col gap-8 p-4 pt-12`}>
      {/** Header */}
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p>{tagline}</p>
      </div>
      {/** Description */}
      <p className="text-slate-600 dark:text-slate-200">{description}</p>
      {/** Example */}
      <div className="flex flex-col bg-slate-400 bg-opacity-10 w-fit p-2 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Example</h2>

        <div className="flex flex-col gap-4">{exampleElement}</div>
      </div>

      <Tabs
        defaultValue="usage"
        className="w-full flex flex-col items-center max-w-[800px]"
      >
        <TabsList>
          {CodeSnipUsage && <TabsTrigger value="usage">Useage</TabsTrigger>}
          {CodeSnipComponent && (
            <TabsTrigger value="component">Component</TabsTrigger>
          )}
          {CodeSnipCSS && <TabsTrigger value="css">CSS</TabsTrigger>}
        </TabsList>
        {CodeSnipUsage && (
          <TabsContent value="usage">
            <ItsCode lang="jsx" code={CodeSnipUsage} />
          </TabsContent>
        )}
        {CodeSnipComponent && (
          <TabsContent value="component">
            <ItsCode lang="tsx" code={CodeSnipComponent} />
          </TabsContent>
        )}
        {CodeSnipCSS && (
          <TabsContent value="css">
            <ItsCode lang="css" code={CodeSnipCSS} />
          </TabsContent>
        )}
      </Tabs>
    </article>
  );
}
