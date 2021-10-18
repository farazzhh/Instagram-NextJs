import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="shadow-sm border-b z-50 bg-white sticky top-0 ">
      <div className="flex justify-between max-w-6xl m-5 lg:mx-auto">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="cursor-pointer relative lg:hidden w-10 flex-shrink-0">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle - search input*/}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 bg-gray-50 block w-full rounded-md sm:text-sm border-gray-300 focus:ring-black focus:border-black"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <MenuIcon className="h-10 md:hidden cursor-pointer" />
          <HomeIcon className="navBtn" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute w-5 h-5 -top-1 text-sm -right-2 flex items-center justify-center bg-red-500 rounded-full text-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="./logo.png"
            alt="profile pic"
            className="rounded-full h-10 bg-green-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
