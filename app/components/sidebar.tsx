"use client";

import NavLink from "./navlink";
import { PowerIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { PanelLeft } from "lucide-react";
import { useState } from "react";

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollaped = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div
            className={clsx(
                "h-screen flex flex-col bg-white border-r border-gray-100 shadow-md",
                collapsed ? "w-20" : "w-64",
            )}
        >
            <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
                {!collapsed && (
                    <h1 className="font-semibold text-xl tracking-tight">
                        Acme App
                    </h1>
                )}

                <PanelLeft
                    onClick={handleCollaped}
                    className="h-5 w-5 cursor-pointer text-gray-500 hover:text-black transition-colors"
                />
            </div>

            <NavLink collapsed={collapsed} />
            <div className=" mt-auto ">
                <form>
                    <button className="flex items-center justify-center gap-3 w-full py-3 px-4 border-t border-gray-200 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors">
                        <PowerIcon className="w-6" />
                        {!collapsed && (
                            <span className="font-medium">Sign Out</span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};
export default SideBar;
