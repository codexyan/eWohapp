import React from "react";

export default function ComingSoonPage() {
  return (
    <div className="bg-amber-100">
      <div className="flex items-center justify-center w-full min-h-screen gap-5 ">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-5xl font-bold text-amber-900">Coming Soon</h1>
          <p className="px-10 py-3 text-xl text-white rounded-full bg-amber-950">
            Stay Tuned
          </p>
        </div>
      </div>
    </div>
  );
}
