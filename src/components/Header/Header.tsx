import React from "react";

interface Props {}

// interface State {
//
// }

const Header: React.FC<Props> = (Props) => {
  return (
    <nav className="shadow">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="hidden cursor-pointer sm:flex justify-center items-center">
                <div className="sm:hidden flex justify-center items-center" />
              </div>
            </div>
            <div className="right-0 flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="w-10 h-10 bg-gray-50  hover:bg-gray-100 dark:bg-gray-400 dark:hover:bg-gray-300 dark:text-gray-50  p-1 flex items-center justify-center rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
