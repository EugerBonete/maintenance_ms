"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Image from "next/image";

export default function NavUser() {
  const { user } = useUser();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src={user?.imageUrl ?? ""}
            alt="logo"
            className="mt-1 rounded-full object-cover pt-1"
            width={30}
            height={30}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{user?.fullName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {user?.emailAddresses[0]?.emailAddress}
          </DropdownMenuItem>
          <SignOutButton>
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </SignOutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
