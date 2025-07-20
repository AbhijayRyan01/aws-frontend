const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white font-['Poppins']">
      
      {/* Left Section: Logo + Title + Navigation Links */}
      <div className="flex items-center gap-6">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-green-400 rounded-full" />
          <h1 className="text-xl font-extrabold text-gray-800 tracking-tight">
            Amazon Product Comment Analyzer
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-5 text-sm font-medium text-gray-600">
          <li className="text-red-500 cursor-pointer">Home</li>
          <li className="cursor-pointer hover:text-gray-800">Dashboard</li>
          <li className="cursor-pointer hover:text-gray-800">History</li>
          <li className="cursor-pointer hover:text-gray-800">Settings</li>
        </ul>
      </div>

      {/* Right Section: Search, Bell, User, Profile */}
      <div className="flex items-center gap-4">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-1.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm w-52"
          />
          <i className="fas fa-search absolute right-3 top-2.5 text-gray-500 text-sm" />
        </div>

        {/* Bell Icon */}
        <i className="fas fa-bell text-gray-500 hover:text-gray-800 cursor-pointer" />

        {/* User Icon */}
        <i className="fas fa-user text-gray-500 hover:text-gray-800 cursor-pointer" />

        {/* Profile Initials */}
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
          AP
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
