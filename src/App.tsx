import React, { useState, useEffect } from "react";
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
import SystemChangelog from "./components/SystemChangelog";
import ManifestoFAQ from "./components/ManifestoFAQ";
import FloatingDock from "./components/FloatingDock";
import StickyJoinBar from "./components/StickyJoinBar";
import Footer from "./components/Footer";
import LeadCaptureModal from "./components/LeadCaptureModal";

export const App: React.FC = () => {
  const currentBrand = "NOVARA ACADEMY";
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadModalSource, setLeadModalSource] = useState("direct");

  const handleOpenLeadModal = (source = "direct") => {
    setLeadModalSource(source);
    setLeadModalOpen(true);
  };

  // Exit intent detection (triggers once per session on desktop cursor leave)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 15 && !sessionStorage.getItem("novara_exit_intent_fired")) {
        sessionStorage.setItem("novara_exit_intent_fired", "true");
        setLeadModalSource("exit_intent");
        setLeadModalOpen(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#05080F] text-[#EDF0F5] relative overflow-x-hidden selection:bg-[#C9A84C]/30 selection:text-[#E8D5A3] pb-16">
      
      {/* ── Fullscreen Video Background (from novaramedia.store) ── */}
      <BackgroundVideo />

      {/* ── Interactive Futuristic Grid Canvas with Gold Parallax Glow (from novaramedia.store) ── */}
      <FuturisticGridBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 00: Sleek Floating Psychological Announcement Banner */}
        <SkoolBanner />

        {/* 01: Sticky Glassmorphic Navbar */}
        <Navbar onOpenLeadModal={handleOpenLeadModal} />

        {/* Main High-Converting Sales Canvas */}
        <main className="flex-grow">
          {/* 02: AI Profit Boardroom Style Hero */}
          <Hero currentBrand={currentBrand} onOpenLeadModal={handleOpenLeadModal} />

          {/* 03: Social Proof & System Uptime Stats */}
          <SocialProofStats />

          {/* 04: Problem Section: Traditional Agency Overhead Is Collapsing */}
          <ProblemSection />

          {/* 05: About Our Founder & Architect (Ricardo Gutierrez) */}
          <FoundersLetter />

          {/* 06: What Members Are Doing Right Now (6 Enterprise Pillars) */}
          <BenefitsGrid />

          {/* 07: The 4-Step Simplified Visual Blueprint */}
          <SimplifiedFramework />

          {/* 08: Everything You Get Inside (Feature Checklist) */}
          <FeaturesChecklist />

          {/* 09: This Is For You If... (6 Personas: Agencies, Larpers, Creators, Founders) */}
          <WhoForGrid />

          {/* 10: The Sovereign Value Stack Breakdown */}
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

          {/* 16: Multi-Agent Constellation & Terminal Cockpit (Hermes, OpenClaw, Antigravity, Codex, Alfred, Oracle) */}
          <AgentConstellation />

          {/* 17: 4-Phase Classroom Curriculum */}
          <CurriculumRoadmap />

          {/* 18: Proprietary Master Prompt & Automation Vault (Locked Previews) */}
          <PromptVault onOpenLeadModal={handleOpenLeadModal} />

          {/* 19: YouTube Masterclasses & Breakdown Hub */}
          <YouTubeHub />

          {/* 20: Rotating Architecture Blueprints & Guides (Interactive Reader) */}
          <BlogSection />

          {/* 21: Real-Time OS Changelog & Live Releases */}
          <SystemChangelog />

          {/* 22: The Anti-AI-Slop Manifesto & FAQs */}
          <ManifestoFAQ />
        </main>

        {/* Persistent Floating Action Dock */}
        <FloatingDock />

        {/* Persistent Sticky Join Bar for Desktop & Mobile */}
        <StickyJoinBar onOpenLeadModal={handleOpenLeadModal} />

        {/* Luxury Footer */}
        <Footer currentBrand={currentBrand} />

        {/* High-Converting Lead Capture Modal & Trojan-Horse Downloader */}
        <LeadCaptureModal
          isOpen={leadModalOpen}
          onClose={() => setLeadModalOpen(false)}
          triggerSource={leadModalSource}
        />
      </div>

    </div>
  );
};

export default App;