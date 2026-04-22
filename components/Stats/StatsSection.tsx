"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import TextAnimation from "@/components/ui/scroll-text";

const stats = [
  {
    number: 10000,
    suffix: "+",
    label: "Professionals Trained",
    description: "For Exceptional Career Success",
    icon: "👥",
  },
  {
    number: 200,
    suffix: "+",
    label: "Sessions Delivered",
    description: "With Unmatched Learning Excellence",
    icon: "📚",
  },
  {
    number: 5000,
    suffix: "+",
    label: "Active Learners",
    description: "Engaged In Dynamic Courses",
    icon: "🎯",
  },
];

const AnimatedCounter = ({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = target / steps;
    let currentValue = 0;
    const interval = setInterval(() => {
      currentValue += stepValue;
      if (currentValue >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(currentValue));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section
      id="stats"
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm font-semibold text-primary mb-4"
          >
            OUR IMPACT
          </motion.p>

          <TextAnimation
            as="h2"
            text="Our Track Record"
            classname="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            direction="up"
            viewport={{ once: true, amount: 0.3 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            The Numbers Behind{" "}
            <span className="text-primary font-semibold">Our Success</span>
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative rounded-2xl border border-border/30 bg-background/50 backdrop-blur-sm p-8 md:p-10 overflow-hidden hover:border-primary/30 transition-all duration-300">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Number */}
                  <div className="mb-6">
                    <span className="text-5xl mb-3 inline-block">
                      {stat.icon}
                    </span>
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">
                      <AnimatedCounter
                        target={stat.number}
                        suffix={stat.suffix}
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-primary to-transparent"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Join thousands of professionals transforming their careers
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex rounded-full bg-primary text-primary-foreground px-8 py-3 font-semibold hover:shadow-lg transition-all duration-200"
          >
            Start Your Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
