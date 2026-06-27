import { cn } from "@/lib/utils";

const TagFilter = ({ tags, activeTag, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8" data-testid="article-tag-filter">
      <button
        type="button"
        onClick={() => onSelect(null)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium border-2 transition-colors",
          activeTag === null
            ? "bg-[#FF6B2C] border-[#FF6B2C] text-white"
            : "border-gray-200 text-gray-600 hover:border-[#FF6B2C] hover:text-[#FF6B2C]"
        )}
      >
        All articles
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onSelect(tag)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium border-2 transition-colors",
            activeTag === tag
              ? "bg-[#FF6B2C] border-[#FF6B2C] text-white"
              : "border-gray-200 text-gray-600 hover:border-[#FF6B2C] hover:text-[#FF6B2C]"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
