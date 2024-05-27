"use client";
import Link from "next/link";
import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import useMediaQuery from "@/hooks/useMediaQuery";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const isMobile = useMediaQuery("(max-width:768px)");
  console.log(isMobile);

  return (
    <>
      {isMobile ? (
        <div className="bg-black bg-opacity-60  h-24 w-full fixed z-50 top-0">
          <MobileMenu />
        </div>
      ) : (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            ease: "linear",
            type: "spring",
            stiffness: 120,
            damping: 10,
            duration: 1,
          }}
          className="flex items-center justify-between text-sm p-4 px-20"
        >
          <Link href={"/"} className="text-white hover:font-bold hover:text-custom-purple">
            Zee
          </Link>
          <ul className="flex items-center justify-between gap-10 p-5 text-primary rounded-xl bg-black bg-opacity-60 border border-[#2B2B2B]">
            <li className="transition duration-300 ease-in-out transform hover:scale-105">
              <Link
                href={"#home"}
                className="hover:font-bold hover:text-custom-purple"
              >
                Home
              </Link>
            </li>
            <li className="transition duration-300 ease-in-out transform hover:scale-105">
              <Link
                href={"#about"}
                className="hover:font-bold hover:text-custom-purple"
              >
                About
              </Link>
            </li>
            <li className="transition duration-300 ease-in-out transform hover:scale-105">
              <Link
                href={"#projects"}
                className="hover:font-bold hover:text-custom-purple"
              >
                Projects
              </Link>
            </li>
            <li className="transition duration-300 ease-in-out transform hover:scale-105">
              <Link
                href={"#service"}
                className="hover:font-bold hover:text-custom-purple"
              >
                Services
              </Link>
            </li>
          </ul>

          <div className="flex items-center justify-between gap-10">
            {/* <ThemeSwitch/> */}

            <ButtonComponent
              textColor={"text-white"}
              bgColor={"bg-blue"}
              text={"Contact"}
              onClick={() => router.push("#contact")}
            >
              Contact
            </ButtonComponent>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
