"use client";
import { motion } from "motion/react";
import TextAnimation from "@/components/ui/scroll-text";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen scroll-mt-24 bg-linear-to-b from-background via-background to-background/95 overflow-hidden pb-20"
    >
      <div className="h-24" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8 flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex w-fit"
            >
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                ✨ Enterprise Learning Platform
              </span>
            </motion.div>

            {/* Main Heading with TextAnimation */}
            <div>
              <TextAnimation
                as="h1"
                text="Next-Gen Expertise For Your Enterprise"
                classname="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                direction="up"
                viewport={{ once: true, amount: 0.3 }}
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Cultivate high-performance teams through expert-led learning.
              Transform your workforce with tailored solutions designed for
              enterprise excellence.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              {[
                "Tailored Solutions",
                "Industry Insights",
                "Expert Guidance",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm font-medium text-muted-foreground hover:border-primary/30 hover:bg-muted/80 transition-all duration-200"
                >
                  <span className="text-primary">✓</span>
                  {feature}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg">Enquire Now</Button>
            </motion.div>
          </div>

          {/* RIGHT CONTENT - Image with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-full"
          >
            {/* Floating background shape */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-3xl blur-2xl" />

            <Image
              src="/hero.png"
              alt="Enterprise Learning Platform"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-xl max-h-87.5 sm:max-h-112.5 md:max-h-125 lg:max-h-none"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
