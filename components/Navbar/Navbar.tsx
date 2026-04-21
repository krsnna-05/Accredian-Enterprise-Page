"use client";

import Link from "next/link";
import { motion } from "motion/react";
import NavbarMobile from "./NavbarMobile";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#accredian-edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto h-16 max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="mt-3 flex h-12 items-center rounded-2xl border border-border/70 bg-background/90 px-3 shadow-sm backdrop-blur-md lg:px-4 xl:px-5">
          <Link
            href="#home"
            className="shrink-0 pr-2 text-sm font-semibold tracking-wide text-primary lg:pr-3"
          >
            <span className="text-lg leading-none lg:text-xl xl:text-2xl">
              Accredian
            </span>
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto whitespace-nowrap pr-2 [scrollbar-width:none] lg:flex xl:justify-center"
            aria-label="Primary"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.06, duration: 0.3 }}
                className="hover-underline-animation left rounded-md px-2 py-1 text-xs font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:text-primary lg:px-2.5 xl:px-3 xl:text-sm"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="ml-auto lg:hidden">
            <NavbarMobile navItems={navItems} />
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.22, duration: 0.28 }}
            className="hidden shrink-0 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Talk To Us
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
