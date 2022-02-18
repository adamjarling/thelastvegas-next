import React from "react";
import names from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import classNames from "classnames";
import SocialMediaIcons from "components/social-media-icons";
import Obfuscate from "react-obfuscate";

const navLinks = [
  // {
  //   url: "/story",
  //   label: "Story",
  // },
  // {
  //   url: "/videos",
  //   label: "Videos",
  // },
  // {
  //   url: "/discography",
  //   label: "Discography",
  // },
  // {
  //   url: "/news",
  //   label: "News",
  // },
  // {
  //   url: "/tour",
  //   label: "Tour",
  // },
  // {
  //   url: "/contact",
  //   label: "Contact",
  // },
];

export default function Header() {
  const [active, setActive] = React.useState(false);
  const [isNavBg, setIsNavBg] = React.useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    setIsNavBg(currPos.y < -200);
  });

  return (
    <>
      <header
        className={classNames([
          "fixed",
          "top-0",
          "z-20",
          "min-w-full",
          "transition",
          "duration-1000",
          "bg-black",
          "bg-opacity-80",
        ])}
      >
        <div className="flex justify-between items-center px-4 md:px-8">
          <Link href="/">
            <a className="relative border-none w-40 pt-1">
              <Image
                src="/images/tlv-sweet-salvation-logo-white.png"
                alt="UO logo"
                layout="responsive"
                width={1496}
                height={576}
              />
            </a>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:block text-sm uppercase">
            {navLinks.map(({ url, label }) => (
              <span key={url} className="px-6">
                <Link href={url}>
                  <a className="border-none">{label}</a>
                </Link>
              </span>
            ))}
          </nav>

          {/* Hamburger menu mobile nav */}
          {/* <div
            className={names(
              ["tham", "tham-e-squeeze", "tham-w-8", "lg:hidden"],
              {
                "tham-active": active,
              }
            )}
            onClick={() => setActive(!active)}
          >
            <div className="tham-box">
              <div className="tham-inner bg-uo-black" />
            </div>
          </div> */}
        </div>
      </header>

      {/** Overlay */}
      <nav
        className={names(
          [
            "z-10",
            "fixed",
            "transition-all",
            "duration-1000",
            "ease-in-out",
            "h-screen",
            "w-screen",
            "bg-white",
            "text-3xl",
            "sm:text-5xl",
            "md:text-6xl",
            "font-display",
            "text-center",
            "tracking-widest",
            "h-0",
          ],
          {
            "opacity-90": active,
            "opacity-0": !active,
            "h-full": active,
            visible: active,
            invisible: !active,
          }
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="">
            {navLinks.map((nl) => (
              <li key={nl.label} className="py-5 sm:py-8 font-sans uppercase">
                <Link href={nl.url}>
                  <a className="border-none">{nl.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center w-full text-2xl mb-12 absolute bottom-0">
          <SocialMediaIcons />
        </div>
      </nav>
    </>
  );
}
