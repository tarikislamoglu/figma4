import React from "react";

const App = () => {
  return (
    <div className=" relative h-screen w-full flex justify-center items-center bg-[#02004FED]">
      <div className="w-1/3 h-screen bg-[#363d7b42] absolute top-0 right-0"></div>
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
      <div className="w-1/3 h-screen bg-[#363d7b42] absolute top-0 left-0"></div>
    </div>
  );
};

export default App;
