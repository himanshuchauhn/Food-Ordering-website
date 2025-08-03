import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="bg-white shadow-lg p-8 rounded-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Signup</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="border p-2 rounded" />
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <input type="password" placeholder="Password" className="border p-2 rounded" />
          <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
