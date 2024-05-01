interface UserProps {
  alt?: string;
  source?: string;
  active?: boolean;
}

export const User = ({ source, alt, active }: UserProps) => {
  return (
    <div className="relative">
      <img className="h-8 w-8 rounded-full" src={source} alt={alt} />
      {active && (
        <span className="absolute left-6 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400 dark:border-gray-800" />
      )}
    </div>
  );
};
