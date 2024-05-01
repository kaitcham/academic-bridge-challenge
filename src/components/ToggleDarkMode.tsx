import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

interface ToggleDarkModeProps {
  isDarkMode: boolean;
}

const ToggleDarkMode = ({ isDarkMode }: ToggleDarkModeProps) => {
  return isDarkMode ? (
    <SunIcon className="h-5 w-5 dark:text-yellow-700" />
  ) : (
    <MoonIcon className="h-5 w-5" />
  );
};
export default ToggleDarkMode;
