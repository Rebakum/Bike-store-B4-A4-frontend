import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BiCartAdd } from "react-icons/bi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
// brand fro logo
import brand from "@/assets/images/logo/Bike_Shop_Logo.png";
//
const menuList = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "All PRODUCTS", link: "/bikes" },
  { id: 3, name: "SERVICES", link: "/service" },
  { id: 4, name: "ABOUT", link: "/about" },
  { id: 5, name: "CONTACT", link: "/contact" },
];

//
const Navbar = () => {
  const CartIcon = (
    <Link
      to="/cart"
      className="relative p-2 hover:scale-105 transition-all duration-300"
    >
      <BiCartAdd className="w-8 h-8 " />

      <span className="absolute -top-2 -right-2 bg-black text-white  text-sm font-black rounded-full px-2 py-1">
        {/* {cartData?.items?.length} cart data  */}
        {/* if cart item add then implement dianamic cart data */} 0
      </span>
    </Link>
  );
  return (
    <div>
      <section className="sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
              <div className=" text-3xl text-white font-bold capitalize">
                <img className=" w-56" src={brand} alt="bike store brand" />
              </div>
            </Link>
          </div>

          {/* Middle - Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex gap-6 font-bold">
              {menuList.map((item) => (
                <li className="relative group" key={item.id}>
                  <Link to={item.link}>
                    <span
                      className={`cursor-pointer hover:text-primary-red transition-all duration-300 ${
                        item.link === location.pathname
                          ? "text-primary-red"
                          : ""
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary-red transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side - Cart & Login/Profile */}
          <div className="hidden lg:flex items-center gap-10">
            {/* Cart */}
            {CartIcon}
            {/* Profile/Login Button with dianamic add user data form data base*/}
            {/* {isUser ? (
              <ProfileDropdown user={isUser as TUser} />
            ) : (
              <Link to="/login">
                <Button
                  variant="outline"
                  className="text-primary-red font-semibold text-lg hover:shadow-md h-10"
                >
                  Log in
                </Button>
              </Link>
            )} */}
            {/* Profile/Login Button with static*/}
            <Link to="/login">
              <Button className="text-black bg-white shadow-none capitalize font-medium text-lg hover:shadow-md h-10 hover:text-white">
                login
              </Button>
            </Link>
          </div>

          {/* Mobile Navbar - Drawer */}
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <div className="flex items-center gap-2">
                  <div className="flex  gap-6 items-center">
                    {/* Cart */}
                    {CartIcon}
                    {/* <Link
                    to="/cart"
                    className="relative p-2 hover:scale-105 transition-all duration-300"
                  >
                    <BiCartAdd className="w-8 h-8 text-white" />
                    {cartItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
                        {cartItems}
                      </span>
                    )}
                  </Link> */}
                    {/* Login/Profile */}
                    {/* {isUser ? (
                      <ProfileDropdown user={isUser as TUser} />
                    ) : (
                      <Link to="/login">
                        <Button
                          variant="outline"
                          className="text-primary-red font-semibold"
                        >
                          Log in
                        </Button>
                      </Link> 
                    )} */}
                    <Link to="/login">
                      <Button className="text-black bg-white shadow-none capitalize font-medium text-lg hover:shadow-md h-10 hover:text-white">
                        Log in
                      </Button>
                    </Link>
                  </div>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </div>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold">
                        ROYAL KNIGHT
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Menu List */}
                <div className="mb-6 mt-6 flex flex-col gap-4">
                  <ul className="flex flex-col font-semibold gap-6">
                    {menuList.map((item) => (
                      <li className="relative group" key={item?.id}>
                        <Link to={item.link}>
                          <span
                            className={`cursor-pointer hover:text-primary-red transition-all duration-300 ${
                              item.link === location.pathname
                                ? "text-primary-red"
                                : ""
                            }`}
                          >
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
