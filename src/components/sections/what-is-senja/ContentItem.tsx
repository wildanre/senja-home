interface ContentItemProps {
  title: string;
  description: string;
}

export default function ContentItem({ title, description }: ContentItemProps) {
  return (
    <div className="border-l-4 border-none pl-6">
      <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white dark:text-[#e8f0f7] tracking-tight">
        {title}
      </h4>
      <p 
        className="text-base md:text-lg text-white/90 dark:text-[#d0dce6] tracking-tight"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

