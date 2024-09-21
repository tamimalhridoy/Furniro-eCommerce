import React from "react";

const Blogsitetext = () => {
  return (
    <div className="w-1/4 pt-24">
      <div class="relative flex items-center">
        <input
          placeholder="Search..."
          className="input shadow-lg border-2 border-gray-300 px-5 py-3 rounded-xl w-full transition-all outline-none"
          name="search"
          type="search"
        />
      </div>
    </div>
  );
};

export default Blogsitetext;
