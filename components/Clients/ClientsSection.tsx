"use client";

import { motion } from "motion/react";
import Image from "next/image";

const partners = [
  { name: "Reliance", initials: "RIL", imageUrl: "/clients/reliance.png" },
  { name: "HCL", initials: "HCL", imageUrl: "/clients/hcl.png" },
  { name: "IBM", initials: "IBM", imageUrl: "/clients/ibm.png" },
  { name: "CRIF", initials: "CRIF", imageUrl: "/clients/crif.png" },
  { name: "Bayer", initials: "BAYER", imageUrl: "/clients/bayer.png" },
];

const ClientsSection = () => {
  return (
    <section
      id="clients"
      className="relative scroll-mt-24 overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-primary/4 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
            Trusted By
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our Proven <span className="text-primary">Partnerships</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Successful collaborations with the
            <span className="font-medium text-primary">
              {" "}
              industry&apos;s best
            </span>
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:mt-16 lg:grid-cols-5 lg:gap-5">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="flex h-28 items-center justify-center rounded-2xl border border-border/50 bg-card/70 p-4 shadow-sm transition-all duration-200 group-hover:border-primary/30 group-hover:bg-card group-hover:shadow-md sm:h-32 sm:p-5 lg:h-36">
                {partner.imageUrl ? (
                  <Image
                    src={partner.imageUrl}
                    alt={partner.name}
                    width={160}
                    height={96}
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 28vw, 16vw"
                    className="h-full w-full max-h-16 object-contain opacity-80 lg:grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-20 lg:max-h-24"
                  />
                ) : (
                  <div className="flex h-12 w-full items-center justify-center rounded-lg bg-muted text-sm font-medium text-muted-foreground">
                    {partner.initials}
                  </div>
                )}
              </div>
              <p className="mt-2 text-center text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary sm:text-sm">
                {partner.name}
              </p>
              <div className="mx-auto mt-2 h-px w-8 bg-primary/0 transition-all duration-200 group-hover:w-12 group-hover:bg-primary/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
