import { User } from "./User";
import { ComposeIcon } from "./icons/ComposeIcon";
import { FolderIcon } from "./icons/FolderIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { ImageIcon } from "./icons/ImageIcon";
import { InboxIcon } from "./icons/InboxIcon";
import ProfilePictureOne from "../assets/images/profile-picture-1.jpg";
import ProfilePictureTwo from "../assets/images/profile-picture-2.jpg";
import ProfilePictureThree from "../assets/images/profile-picture-3.jpg";
import { SettingsIcon } from "./icons/SettingsIcon";
import { UserIcon } from "./icons/UserIcon";

export const SideNavbar = () => {
  return (
    <div className="hidden flex-col border-r md:flex dark:border-slate-950">
      <h3 className="p-5 italic dark:text-slate-50">Logo</h3>
      <ul className="space-y-5 border-b py-5 dark:border-slate-950 [&>li]:mx-auto [&>li]:w-fit">
        <li>
          <HomeIcon className="h-6 w-6 dark:text-slate-50" />
        </li>
        <li>
          <InboxIcon className="h-6 w-6 dark:text-slate-50" />
        </li>
        <li>
          <ComposeIcon className="h-6 w-6 dark:text-slate-50" />
        </li>
        <li>
          <FolderIcon className="h-6 w-6 dark:text-slate-50" />
        </li>
        <li>
          <ImageIcon className="h-6 w-6 dark:text-slate-50" />
        </li>
      </ul>
      <div className="space-y-3 border-b p-5 dark:border-slate-950">
        <User source={ProfilePictureOne} alt="Profile Picture" active />
        <User source={ProfilePictureTwo} alt="Profile Picture" active />
        <User source={ProfilePictureThree} alt="Profile Picture" />
      </div>
      <ul className="flex flex-1 flex-col justify-end space-y-4 pb-8 [&>li]:mx-auto [&>li]:w-fit">
        <li>
          <SettingsIcon className="h-6 w-6 dark:text-slate-50" />
        </li>
        <li>
          <UserIcon className="h-6 w-6 dark:text-slate-50" />
        </li>
      </ul>
    </div>
  );
};
