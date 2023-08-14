import React from "react";

export default function FooterIconContainer({ children, link }) {
  return (
    <div>
      <a href={link} target="_blank">
        <div className="cursor-pointer border rounded-full mx-auto p-[12px] grid">
          {children}
        </div>
      </a>
    </div>
  );
}
