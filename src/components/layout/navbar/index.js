"use client";

import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import CartComponent from "../cart";
import LoginScreen from "@/components/auth/login";
import RegisterScreen from "@/components/auth/register";
import Cookies from "universal-cookie";
const cookie = new Cookies();

const navigation = [
  { name: "HOME", href: "/", current: true },
  { name: "UNISEX", href: "/categories/unisex", current: false },
  { name: "WOMEN", href: "/categories/women", current: false },
  { name: "MEN", href: "/categories/men", current: false },
  { name: "KIDS", href: "/categories/kids", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const accessToken = cookie.get("ClothifyStore");

  return (
    <>
      <CartComponent open={cartOpen} setOpen={setCartOpen} />
      <LoginScreen
        open={loginOpen}
        setOpen={setLoginOpen}
        setRegisterOpen={setRegisterOpen}
      />
      <RegisterScreen
        open={registerOpen}
        setOpen={setRegisterOpen}
        setLoginOpen={setLoginOpen}
      />
      <Disclosure as="nav" className="bg-black text-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-16 py-4">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <span className="sm:text-xl lg:text-3xl">
                      Clothify Store
                    </span>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {!accessToken ? (
                    <div>
                      <button
                        onClick={(e) => console.log("Profile clicked")}
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 flex flex-row"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Profile</span>
                        <p>Username</p>
                        <UserCircleIcon
                          className="h-8 w-8"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={(e) => setLoginOpen(true)}
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 flex flex-row"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Profile</span>
                        <p>Login</p>
                      </button>
                      <button
                        onClick={(e) => setRegisterOpen(true)}
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 flex flex-row"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Profile</span>
                        <p>Sign up</p>
                      </button>
                    </div>
                  )}

                  <button
                    onClick={(e) => setCartOpen(true)}
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
