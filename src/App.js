import React from "react";

const App = () => {
  return (
    <div className=" relative h-screen w-full flex justify-center items-center bg-[#02004FED]">
      <img
        src="/Polygon 2.png"
        className="absolute top-10 right-0 pb-12 w-1/3 h-screen "
      />

      <div className="flex flex-col w-1/3 space-y-5 pl-5">
        <h1 className="w-1/2 text-[50px] font-bold text-[#FFFFFF80] h-[85px] ">
          LOGIN
        </h1>
        <input
          placeholder="Username"
          className="px-6 py-2 border-1  border-[#FFFFFF1A] text-[#FFFFFF80] bg-[#333A7E42]"
        />
        <input
          placeholder="Password"
          className="px-6 py-2 border-1   border-[#FFFFFF1A] text-[#FFFFFF80] bg-[#333A7E42]"
        />
        <button className="bg-[#03004fef] p-2 w-1/2 text-white cursor-pointer">
          Login
        </button>
      </div>

      <img
        src="/Polygon 1.svg"
        className="absolute top-10 left-0 pb-12 w-1/3 h-screen "
      />
    </div>
  );
};

export default App;
