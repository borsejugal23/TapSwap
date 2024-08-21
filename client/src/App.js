import React from "react";
import './App.css';
function App() {
  const [count, setCount] = React.useState(0)
  return (
    <div className="w-1/4 m-auto mt-4 h-auto bg-gradient-to-r from-slate-900 to-slate-700">
      <h1 className="text-white text-2xl font-bold pl-2 py-2 mt-2 mx-2">
        TapSwap
      </h1>

      <div className="flex space-x-4 mt-4 bg-opacity-10 bg-white w-full py-2 px-4 rounded-lg">
        <div className="flex items-center w-full justify-center">
          <span>🟡</span>
          <span className="ml-2 text-white">{count}</span>
        </div>
        <div className="flex items-center w-full justify-center">
          <span>🔷</span>
          <span className="ml-2 text-white">0/h</span>
        </div>
        <div className="flex items-center w-full justify-center">
          <span>🌟</span>
          <span className="ml-2 text-white">0</span>
        </div>
        <div className="flex items-center w-full justify-center">
          <span>🟣</span>
          <span className="ml-2 text-white">0</span>
        </div>
      </div>
         
      {/* Container for the image */}
      <div className="flex items-center justify-center w-full h-64 mt-36 bg-gradient-to-r from-slate-900 to-slate-700 rounded-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EGUMaDiGjK_20AqlIuL338KRk-ksyis33Q&s"
          alt="coin"
          className="max-w-full max-h-full object-contain rounded-full cursor-pointer"
          onClick={()=>setCount(p=>p+1)}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer className="p-4 bg-opacity-60 bg-white flex justify-around rounded-t-lg shadow-md mt-6">
        <button className="flex flex-col items-center bg-purple-300 bg-opacity-70 text-black p-2 rounded-lg w-16 h-16 text-center">
          <span className="text-2xl">🟡</span>
          <span className="text-sm mt-1">Earn</span>
        </button>
        <button className="flex flex-col items-center bg-purple-300 bg-opacity-70 text-black p-2 rounded-lg w-16 h-16 text-center">
          <span className="text-2xl">✔️</span>
          <span className="text-sm mt-1">Tasks</span>
        </button>
        <button className="flex flex-col items-center bg-purple-300 bg-opacity-70 text-black p-2 rounded-lg w-16 h-16 text-center">
          <span className="text-2xl">🏠</span>
          <span className="text-sm mt-1">Town</span>
        </button>
        <button className="flex flex-col items-center bg-purple-300 bg-opacity-70 text-black p-2 rounded-lg w-16 h-16 text-center">
          <span className="text-2xl">🔄</span>
          <span className="text-sm mt-1">Swap</span>
        </button>
        <button className="flex flex-col items-center bg-purple-300 bg-opacity-70 text-black p-2 rounded-lg w-16 h-16 text-center">
          <span className="text-2xl">😎</span>
          <span className="text-sm mt-1">Account</span>
        </button>
      </footer>
    </div>
  );
}

export default App;
