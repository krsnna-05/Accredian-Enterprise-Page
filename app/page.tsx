import HeroSection from "@/components/Hero/HeroSection";
import ClientsSection from "@/components/Clients/ClientsSection";
import StatsSection from "@/components/Stats/StatsSection";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ClientsSection />
    </div>
  );
};

export default HomePage;
