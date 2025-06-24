import MDXComponents from "@theme-original/MDXComponents";

import TimeLine from "@site/src/components/TimeLine";
import TimeLineItem from "@site/src/components/TimeLine/TimeLineItem";

import SingleTimeline from "@site/src/components/SingleTimeLine";
import SingleTimeLineItem from "@site/src/components/SingleTimeLine/SingleTimeLineItem";

export default {
  // Reusing the default mapping
  ...MDXComponents,
  TimeLine,
  TimeLineItem,
  SingleTimeline,
  SingleTimelineItem: SingleTimeLineItem,
};
