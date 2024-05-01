interface FilterOptionProps {
  text: string;
  number: number;
  isSelected?: boolean;
  handleClick?: () => void;
}

export const FilterOption = ({
  text,
  number,
  isSelected,
  handleClick,
}: FilterOptionProps) => {
  return (
    <button
      onClick={handleClick}
      className={`py-1 sm:py-2 md:py-3 lg:py-4 ${isSelected && "border-b-4 border-[#2f2e8b] bg-[#aaa9e2] sm:bg-transparent dark:bg-transparent"}`}
    >
      <span
        className={`text-xs md:text-sm xl:text-base  ${isSelected ? "text-[#3d3afc] dark:text-[#6463cd]" : "dark:text-slate-50"}`}
      >
        {text}
      </span>
      <span
        className={`ml-1 rounded-md px-1.5 text-xs md:text-sm lg:ml-2 xl:text-base dark:bg-gray-700 ${isSelected ? "bg-[#2f2e8b]/30 dark:bg-[#2f2e8b]/70" : "bg-gray-100"}`}
      >
        {number}
      </span>
    </button>
  );
};
