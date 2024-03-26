import React from "react";

function ShadowPages({ shadow, title }) {
  return (
    <div>
      <div className={` bg-white  shadow-[${shadow}]`}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default ShadowPages;
