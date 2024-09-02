"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { ChevronDown, Menu, Search, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AppBar = () => {
  const { setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Hamburger menu for mobile devices */}
        <div className="flex items-center">
          <button
            className="lg:hidden block text-muted-foreground"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </button>

          <Link href="/" className="text-primary font-black ml-4 lg:ml-0">
            Edublends
          </Link>

            <div className="hidden lg:flex items-center ml-6 gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="group flex items-center cursor-pointer">
                  <span className="group-hover:text-primary text-muted-foreground">
                    Courses
                  </span>
                  <ChevronDown className="ml-1 h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Data Science</DropdownMenuItem>
                <DropdownMenuItem>Cyber Security</DropdownMenuItem>
                <DropdownMenuItem>Cyber Security</DropdownMenuItem>
                <DropdownMenuItem>Cyber Security</DropdownMenuItem>
                <DropdownMenuItem>Cyber Security</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary text-muted-foreground"
            >
              About Us
            </Link>
            <Link
              href="/contactus"
              className="text-sm font-medium hover:text-primary text-muted-foreground"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* Search bar and login button */}
        <div className="flex items-center space-x-4">
          <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 w-full"
            />
          </div>

          <Link href="/login">
            <Button className="hover:text-gray-300 text-muted-foreground text-white">
              <UserRound className="mr-2 h-4 w-4" /> Login
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-2 px-4 pb-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center cursor-pointer text-muted-foreground"
                onClick={toggleMenu}
              >
                Courses
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem>Data Science</DropdownMenuItem>
              <DropdownMenuItem>Cyber Security</DropdownMenuItem>
              <DropdownMenuItem>Cyber Security</DropdownMenuItem>
              <DropdownMenuItem>Cyber Security</DropdownMenuItem>
              <DropdownMenuItem>Cyber Security</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/about" className="text-muted-foreground">
            About Us
          </Link>
          <Link href="/contact" className="text-muted-foreground">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default AppBar;
