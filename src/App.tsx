import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundVideo from "./components/BackgroundVideo";
import FuturisticGridBackground from "./components/FuturisticGridBackground";
import SkoolBanner from "./components/SkoolBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProofStats from "./components/SocialProofStats";
import ProblemSection from "./components/ProblemSection";
import FoundersLetter from "./components/FoundersLetter";
import BenefitsGrid from "./components/BenefitsGrid";
import SimplifiedFramework from "./components/SimplifiedFramework";
import FeaturesChecklist from "./components/FeaturesChecklist";
import WhoForGrid from "./components/WhoForGrid";
import ValueStack from "./components/ValueStack";
import ComparisonContrast from "./components/ComparisonContrast";
import RoiCalculator from "./components/RoiCalculator";
import SkoolGamification from "./components/SkoolGamification";
import SkoolPreviewShowcase from "./components/SkoolPreviewShowcase";
import MindmapExplorer from "./components/MindmapExplorer";
import AgentConstellation from "./components/AgentConstellation";
import CurriculumRoadmap from "./components/CurriculumRoadmap";
import PromptVault from "./components/PromptVault";
import YouTubeHub from "./components/YouTubeHub";
import BlogSection from "./components/BlogSection";
import Blog from "./components/Blog";
import BlogArticle from "./components/BlogArticle";
import SystemChangelog from "./components/SystemChangelog";
import ManifestoFAQ from "./components/ManifestoFAQ";
import FloatingDock from "./components/FloatingDock";
import StickyJoinBar from "./components/StickyJoinBar";
import Footer from "./components/Footer";

const Home: React.FC<{ currentBrand: string }> = ({ currentBrand }) => (
  <main className="flex-grow">
    {/* 02: Hero */}
    <Hero currentBrand={currentBrand} />

    {/* 03: Social Proof & System Uptime Stats */}
    <SocialProofStats />

    {/* 04: Problem Section: Traditional Agency Overhead Is Collapsing */}
    <ProblemSection />

    {/* 05: The Founder's Letter: Our Radical Departure */}
    <FoundersLetter />

    {/* 06: Core Benefits: The 6 Pillars of Sovereign Media */}
    <BenefitsGrid />

    {/* 07: The 4-Step Simplified Visual Blueprint */}
    <SimplifiedFramework />

    {/* 08: Everything You Get Inside (Feature Checklist) */}
    <FeaturesChecklist />

    {/* 09: This Is For You If... (6 Personas: Agencies, Larpers, Creators, Founders) */}
    <WhoForGrid />

    {/* 10: The Free Value Stack Breakdown */}
    <ValueStack />

    {/* 11: The Old Way vs The Sovereign Way (High Contrast) */}
    <ComparisonContrast />

    {/* 12: Interactive Time & Money Savings Calculator */}
    <RoiCalculator />

    {/* 13: Inside Our Official Skool Community (Interactive Platform Preview) */}
    <SkoolPreviewShowcase />

    {/* 14: Skool Gamification & 5-Level Status Progression */}
    <SkoolGamification />

    {/* 15: Deep Engineering SMP Pipeline Mindmap (Protected Scripts) */}
    <MindmapExplorer />

    {/* 16: Multi-Agent Constellation & Terminal Cockpit */}
    <AgentConstellation />

    {/* 17: 4-Phase Classroom Curriculum */}
    <CurriculumRoadmap />

    {/* 18: Proprietary Master Prompt & Automation Vault */}
    <PromptVault />

    {/* 19: YouTube Masterclasses & Breakdown Hub */}
    <YouTubeHub />

    {/* 20: Rotating Free Guides & Engineering Blueprints (Interactive Reader) */}
    <BlogSection />

    {/* 21: Real-Time OS Changelog & Live Releases */}
    <SystemChangelog />

    {/* 22: The Anti-AI-Slop Manifesto & FAQs */}
    <ManifestoFAQ />
  </main>
);

export const App: React.FC = () => {
  const currentBrand = "NOVARA ACADEMY";

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#05080F] text-[#EDF0F5] relative overflow-x-hidden selection:bg-[#C9A84C]/30 selection:text-[#E8D5A3] pb-16">
        
        {/* Fullscreen Video Background */}
        <BackgroundVideo />

        {/* Interactive Futuristic Grid Canvas */}
        <FuturisticGridBackground />

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Announcement Banner */}
          <SkoolBanner />

          {/* Sticky Glassmorphic Navbar */}
          <Navbar />

          <Routes>
            <Route path="/" element={<Home currentBrand={currentBrand} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
          </Routes>

          {/* Persistent Floating Action Dock */}
          <FloatingDock />

          {/* Persistent Sticky Join Bar */}
          <StickyJoinBar />

          {/* Luxury Footer */}
          <Footer currentBrand={currentBrand} />
        </div>
      </div>
    </Router>
  );
};

export default App;