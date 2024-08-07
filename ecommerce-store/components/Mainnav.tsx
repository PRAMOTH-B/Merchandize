"use client";
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";

interface MainnavProps{
    data: Category[];
};
export const Mainnav:React.FC<MainnavProps> = ({data}) => {
  const pathname= usePathname();
  const routes= data.map((route)=>({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }));
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space">
        {routes.map((route)=>(
          <Link key={route.href} href={route.href} className={cn("tetx-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}>
          {route.label}
          </Link>
        ))}
    </nav>
  )
}
