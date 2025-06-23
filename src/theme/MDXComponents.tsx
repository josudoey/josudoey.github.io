import MDXComponents from '@theme-original/MDXComponents'

import Timeline from '@site/src/components/Timeline'
import TimelineItem from '@site/src/components/Timeline/TimelineItem'

import SingleTimeline from '@site/src/components/SingleTimeLine'
import SingleTimeLineItem from '@site/src/components/SingleTimeLine/SingleTimeLineItem'

export default {
  // Reusing the default mapping
  ...MDXComponents,
  SingleTimeline,
  SingleTimelineItem: SingleTimeLineItem,
  Timeline,
  TimelineItem
}
