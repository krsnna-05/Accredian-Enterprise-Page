"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavbarMobileProps = {
  navItems: Array<{ label: string; href: string }>;
};

const NavbarMobile = ({ navItems }: NavbarMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-background text-foreground/85 transition-colors hover:bg-accent"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-12 z-50 w-[min(92vw,20rem)] rounded-xl border border-border/70 bg-background/95 p-2 shadow-lg backdrop-blur-md"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile Primary">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-accent hover:text-primary",
                    item.label === "Home" && "bg-accent text-primary",
                  )}
                >
                  {item.label}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Talk To Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
