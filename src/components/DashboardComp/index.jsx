import React from "react";

function DashboardComp() {
  return (
    <div>
      <div>
        <div className="bg-white border rounded-[8px] p-4">
          <div>
            <p className="text-[15px] text-gray-500">Total Page Views</p>
          </div>
          <div className="mt-2 flex gap-4">
            <p className="text-[20px] font-semibold">4,42,236</p>
            <button
              className={`border text-[12px ] bg-blue-600 px-3 text-white rounded-[5px] `}
            >
              59.3%
            </button>
          </div>
          <div>
            <p className="text-[13px] mt-3 text-gray-500">
              You made an extra 35,000 this year
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComp;
