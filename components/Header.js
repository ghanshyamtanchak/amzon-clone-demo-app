import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 pl-6 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/amazon_logo.png"
            width={150}
            height={40}
            className="cursor-pointer"
            alt="amazon logo"
            priority={true}
          />
        </div>
        {/* Search */}
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer mx-6">
          <input
            type="text"
            className="p-2 h-full flex-grow w-6 rounded-l-md focus:outline-none flex-shrink"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Account Info */}
        <div className="text-white flex items-center text-xs space-x-6 whitespace-nowrap mr-6">
          <div className="link">
            <p>Hello Ghanshyam Tanchak</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center bg-amazon_blue-light space-x-3 p-2 pl-6 text-white">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
      </div>
    </header>
  );
};

export default Header;