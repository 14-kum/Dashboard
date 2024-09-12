import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "../../lib/consts/navigation";
import { HiOutlineLogout, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import classNames from "classnames";

// Sidebar link classes
const LinkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar state

  // Function to toggle the sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Smooth transition effect on mount and state change
  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.style.transition = "transform 0.6s ease, opacity 0.6s ease"; // Slow and smooth transition
      if (isOpen) {
        sidebar.style.transform = "translateX(0)"; // Slide in
        sidebar.style.opacity = "1"; // Make it fully visible
      } else {
        sidebar.style.transform = "translateX(-100%)"; // Slide out
        sidebar.style.opacity = "0"; // Make it invisible
      }
    }
  }, [isOpen]);

  return (
    <>
      {/* Toggle button for all screens */}
      <div className="bg-neutral-900 p-2 fixed top-0 left-0 z-50">
        <button className="text-white text-2xl" onClick={toggleSidebar}>
          {!isOpen && <HiOutlineMenu />} {/* Show only when the sidebar is closed */}
        </button>
      </div>

      {/* Sidebar */}
      <div
        id="sidebar"
        className={classNames(
          "bg-neutral-900 w-60 p-3 flex flex-col text-white h-full fixed md:translate-x-0 top-0 left-0 z-40 transition-transform duration-600 ease-in-out", // Slow transition classes
          {
            "translate-x-0 opacity-100": isOpen, // Visible state
            "-translate-x-full opacity-0": !isOpen, // Hidden state
          }
        )}
      >
        {/* Close button at the top-right corner */}
        {isOpen && (
          <button
            className="text-white text-2xl absolute top-3 right-3"
            onClick={toggleSidebar}
          >
            <HiOutlineX />
          </button>
        )}

        <div className="flex items-center gap-2 px-1 py-3">
          <FcBullish fontSize={24} />
          <span className="text-neutral-100 text-lg">Openshop</span>
        </div>
        <div className="flex-1 py-8 flex flex-col gap-0.5">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
          <div className={classNames("cursor-pointer text-red-500", LinkClasses)}>
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar} // Close sidebar when overlay is clicked
        ></div>
        
      )
      }
      <div
        className={`transition-all duration-1000 ease-in-out ${
          isOpen && "ml-48"
        } p-6`}
      >
       
      </div>
    </>
  );
}

export default Sidebar;

// SidebarLink component to render individual links
function SidebarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "bg-neutral-700 text-white" : "text-neutral-400",
        LinkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      <span>{item.label}</span>
    </Link>
    
  );
}
