export const CodeSnipThreeDotsUsage = `<div className="w-52">
  {/* Default usage of the ItsThreeDots component inline with text */}
  dots
  <ItsThreeDots />

  {/* Larger text example: shows the animation inside a bold heading */}
  <p className="text-2xl font-bold">
    Loading
    <ItsThreeDots />
  </p>

  {/* Large text with italic styling: demonstrates flexible styling inheritance */}
  <p className="text-lg italic">
    Loadering
    <ItsThreeDots />
  </p>

  {/* Small text with color overrides: the dots will follow the parent style unless wrapped */}
  <p className="text-sm text-blue-500">
    hotty toddy
    {/* Nested span to override the dot color to red while the parent stays blue */}
    <span className="text-red-500">
      <ItsThreeDots />
    </span>
  </p>
</div>

`