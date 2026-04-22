"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import NavbarMobile from "./NavbarMobile";
import { navItems } from "@/config/constants";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sections = navItems
      .map((item) => item.href.replace("#", ""))
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const updateActiveFromScroll = () => {
      const offset = window.scrollY + 140;
      let current = `#${sections[0].id}`;

      sections.forEach((section) => {
        if (section.offsetTop <= offset) {
          current = `#${section.id}`;
        }
      });

      setActiveHref(current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.getAttribute("id");
          if (id) setActiveHref(`#${id}`);
          return;
        }

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          if (id) setActiveHref(`#${id}`);
        });
      },
      {
        root: null,
        rootMargin: "-25% 0px -45% 0px",
        threshold: [0.15, 0.3, 0.45, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    updateActiveFromScroll();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveFromScroll);
    };
  }, []);

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
            <span className="text-2xl leading-none">Accredian</span>
          </Link>
          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto whitespace-nowrap pr-2 [scrollbar-width:none] lg:flex xl:justify-center"
            aria-label="Primary"
          >
            {navItems.map((item, index) => {
              const isActive = activeHref === item.href;

              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.06, duration: 0.3 }}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "nav-link hover-underline-animation left rounded-md px-2 py-1 text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:text-primary lg:px-2.5 xl:px-3 xl:text-sm",
                    isActive && "active text-primary",
                  )}
                >
                  {item.label}
                </motion.a>
              );
            })}
          </nav>

          <div className="ml-auto lg:hidden">
            <NavbarMobile navItems={navItems} />
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.22, duration: 0.28 }}
          >
            <Button className="hidden rounded-full lg:block">Talk to us</Button>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
