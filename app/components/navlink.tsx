"use client";

import {
    DocumentDuplicateIcon,
    HomeIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navigationLinks = [
    {
        name: "Home",
        href: "/dashboard",
        icon: HomeIcon,
    },
    {
        name: "Customer",
        href: "/dashboard/customer",
        icon: UserGroupIcon,
    },
    {
        name: "Invoice",
        href: "/dashboard/invoice",
        icon: DocumentDuplicateIcon,
    },
];

const NavLink = ({ collapsed }: any) => {
    const pathname = usePathname();
    return (
        <div className="flex flex-col gap-4 mt-10 p-2">
            {navigationLinks.map((link) => {
                const NavIcon = link.icon;
                return (
                    <div key={link.name}>
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "flex items-center gap-2 p-3 rounded-xl",
                                {
                                    "bg-sky-300 text-blue-600 ":
                                        pathname === link.href,
                                },
                            )}
                        >
                            <NavIcon className="w-6" />
                            {!collapsed && <p>{link.name}</p>}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
export default NavLink;
