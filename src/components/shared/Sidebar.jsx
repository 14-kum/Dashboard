import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "../../lib/consts/navigation";
import classNames from "classnames";
import { HiOutlineLogout, HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const LinkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar for mobile devices
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button for small screens */}
      <div className="md:hidden bg-neutral-900 p-2">
        <button
          className="text-white text-2xl"
          onClick={toggleSidebar}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={classNames(
          "bg-neutral-900 w-60 p-3 flex flex-col text-white h-full fixed md:relative md:translate-x-0 transition-transform",
          { "translate-x-0": isOpen, "-translate-x-full": !isOpen } // Slide in/out on mobile
        )}
      >
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
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;

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
