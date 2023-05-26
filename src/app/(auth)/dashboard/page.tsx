import { Logo } from "@/components/Logo";
import NavBar from "@/components/NavBar";
import Stack from "@/components/Stack";
import prisma from "@/utils/db";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function NavButton({ children }: { children: string }) {
  return (
    <div className="text-gray-100 text p-2  ">
      <Link
        href="/dashboard/menu"
        className="p-2  group hover:bg-gray-400/90 w-full text-left rounded-md transition-all duration-200"
      >
        <p className="group-hover:translate-x-2 transition-all duration-200">
          {children}
        </p>
      </Link>
    </div>
  );
}

export default async function DashboardPage() {
  return <div>Home Dashboard</div>;
}
