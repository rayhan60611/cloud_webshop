import { CircleUser, Menu, Search, ShoppingCart } from "lucide-react";
// import React from "react";
import { Link, Navigate, useMatch } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import { Button } from "../button";
import { Input } from "../input";
import { AuthContext } from "@/providers/AuthProviders";
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
import { useContext } from "react";
import { ProductCartContext } from "../allProducts/ProductCartProvider";
import SearchProduct from "../search/SearchProduct";

const NavbarNew = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const fullname = user?.displayName.split(" ");
  const { productCart } = useContext(ProductCartContext);

  const totalCartItemCount = Object.values(productCart).reduce(
    (previous, current) => current + previous,
    0
  );
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 z-50 ">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ">
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
                  <NavigationMenuLink>
                    <Link
                      className="border px-4 py-2 hover:bg-black hover:text-white duration-500"
                      to="/allProduct"
                    >
                      All Products
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Link
                      className="border px-4 py-2 hover:bg-black hover:text-white duration-500"
                      to="/addProduct"
                    >
                      Add Products
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                <Link
                  to="#"
                  className="text-muted-foreground transition-colors hover:text-foreground "
                >
                  Contact us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                <Link
                  to="#"
                  className="text-foreground transition-colors hover:text-foreground"
                >
                  Settings
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <Sheet>
        <SheetTrigger>
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
              to="/allProduct"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              to="/aboutUs"
              className="text-muted-foreground hover:text-foreground "
            >
              About Us
            </Link>
            <Link to="#" className="hover:text-foreground">
              Contact Us
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <SearchProduct></SearchProduct>
        </div>
        <div className="hover:text-lime-600 duration-500">
          <Link to="/shoppingCart">
            {/* <ShoppingCart className="relative"></ShoppingCart>
            <span className="absolute bg-red-600 top-0 right-0 z-10">1</span> */}
            <div className="flex justify-center items-center">
              <div className="relative py-2">
                <div className="absolute top-0 left-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                    {totalCartItemCount}
                  </p>
                </div>
                <ShoppingCart className="mt-1 h-6 w-6" />
              </div>
            </div>
          </Link>
        </div>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="secondary" size="icon" className="rounded-full">
                {user.photoURL ? (
                  <img
                    className="rounded-full border-green-600 "
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <CircleUser className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Hello,{" "}
                <h1 className="font-semibold pl-1">
                  {fullname ? fullname[fullname.length - 1] : " "}
                </h1>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link to="/login">
            <Button asChild>
              <span>Login</span>
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default NavbarNew;
