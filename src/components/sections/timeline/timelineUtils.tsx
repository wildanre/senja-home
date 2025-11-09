import { TimelineItem } from "./timelineData";

export const formatTimelineForStickyScroll = (data: TimelineItem[]) => {
  return data.map((item) => ({
    title: item.title,
    description: item.features.join(" • "),
    content: (
      <div className="flex h-full w-full items-center justify-center text-white px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-center">{item.title}</h3>
      </div>
    ),
  }));
};

