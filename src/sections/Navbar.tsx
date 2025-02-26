"use client";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "Integrations", href: "#" },
  { label: "FAQs", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="py-4 lg:py-8 fixed w-full top-0 z-50 ">
      <div className="container max-w-5xl">
        <div className="border border-white/15 rounded-3xl md:rounded-full bg-neutral-950/70 backdrop-blur-lg">
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center  p-2 px-4 md:pr-2">
            <div>
              <Image
                src={Logo}
                alt="logo"
                className="h-9 w-auto md:h-auto"
                priority
              />
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <nav className="flex gap-6 font-medium">
                {navLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.label}
                    className="hover:text-lime-400 transition duration-500"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex justify-end gap-4">
              <div className="md:hidden" onClick={handleMenuOpen}>
                {isOpen ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
              </div>
              <Button
                className="hidden md:inline-flex items-center"
                variant="secondary"
              >
                Log In
              </Button>

              <Button
                className="hidden md:inline-flex items-center"
                variant="primary"
              >
                Sign Up
              </Button>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col mt-4  py-5">
                    {navLinks.map((link) => (
                      <Link
                        onClick={() => setIsOpen(!isOpen)}
                        href={link.href}
                        key={link.label}
                        className="py-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Button
                      size="sm"
                      variant="secondary"
                      className="whitespace-nowrap mt-4"
                    >
                      Log In
                    </Button>
                    <Button
                      size="sm"
                      variant="primary"
                      className="whitespace-nowrap mt-2"
                    >
                      Sign Up
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
