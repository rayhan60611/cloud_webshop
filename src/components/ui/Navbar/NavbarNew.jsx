import { CircleUser, Menu, Search } from "lucide-react";
// import React from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import { Button } from "../button";
import { Input } from "../input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../navigation-menu";
import { cn } from "@/lib/utils";

const NavbarNew = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 z-50">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link>
          <img
            className="h-auto max-w-10"
            src="../../../../public/logtech-black.png"
            alt=""
          />
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <span className="sr-only">LowTech GmbH</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                <Link
                  to="#"
                  className="text-muted-foreground transition-colors hover:text-foreground "
                >
                  Dashboard
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] h-auto p-6">
                  <NavigationMenuLink>Dashboard</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                <Link
                  to="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Order
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] h-auto p-6">
                  <NavigationMenuLink>Order</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                <Link
                  to="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Products
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] h-auto p-6 flex justify-evenly">
                  <NavigationMenuLink asChild>
                    <Link
                      className="border px-4 py-2 hover:bg-black hover:text-white duration-500"
                      to="/allProduct"
                    >
                      All Products
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className="border px-4 py-2 hover:bg-black hover:text-white duration-500"
                  >
                    <Link className="border p-2" to="/addProduct">
                      Add Products
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                <Link
                  to="#"
                  className="text-muted-foreground transition-colors hover:text-foreground "
                >
                  Customers
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                <Link
                  to="#"
                  className="text-foreground transition-colors hover:text-foreground"
                >
                  Settings
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <img
                className="h-auto max-w-10"
                src="../../../../public/logtech-black.png"
                alt=""
              />
              <span className="sr-only">LowTech GmbH</span>
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground "
            >
              Customers
            </Link>
            <Link to="#" className="hover:text-foreground">
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default NavbarNew;
