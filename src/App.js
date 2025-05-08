import React from "react";

const App = () => {
  return (
    <div className=" relative h-screen w-[100vw] flex justify-center items-center bg-[#02004FED]">
      <div className="custom-clip w-[600px] h-[700px] fixed top-[15px] left-[1100.5px] bg-[#333A7E42] md:block hidden"></div>
      <div className="custom-clip w-[600px] h-[700px] fixed top-[25px] left-[-305.5px] bg-[#333A7E42] rotate-180 md:block hidden"></div>

      <div className="flex flex-col w-1/3 space-y-5 pl-5">
        <h1 className="w-1/2 text-[50px] font-bold text-[#FFFFFF80] h-[85px] ">
          LOGIN
        </h1>
        <input
          placeholder="Username"
          className="px-6 py-2 border-1  border-[#b9b4b41a] text-[#FFFFFF80] bg-[#333A7E42]"
        />
        <input
          placeholder="Password"
          className="px-6 py-2 border-1   border-[#FFFFFF1A] text-[#FFFFFF80] bg-[#333A7E42]"
        />
        <button className="bg-[#03004fef] p-2 w-1/2 text-white cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
};

export default App;
