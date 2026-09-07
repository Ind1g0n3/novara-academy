import React, { useState } from "react";
import { AGENT_CONSTELLATION, AgentModel } from "../data/agentConstellationData";
import { 
  Compass, 
  Cpu, 
  BrainCircuit, 
  Terminal as TerminalIcon, 
  Mic, 
  Radio, 
  Sparkles, 
  Copy, 
  Check, 
  Play, 
  CheckCircle2 
} from "lucide-react";

export const AgentConstellation: React.FC = () => {
  const [activeAgentId, setActiveAgentId] = useState<string>(AGENT_CONSTELLATION[0].id);
  const [terminalHistory, setTerminalHistory] = useState<string[]>(AGENT_CONSTELLATION[0].mockConsoleOutput);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);

  const activeAgent: AgentModel = AGENT_CONSTELLATION.find(a => a.id === activeAgentId) || AGENT_CONSTELLATION[0];

  const handleAgentSelect = (agent: AgentModel) => {
    setActiveAgentId(agent.id);
    setTerminalHistory(agent.mockConsoleOutput);
    setCopiedPrompt(false);
  };

  const handleCopyPrompt = (promptText: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleRunCommand = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setTerminalHistory(prev => [
        ...prev,
        `> ${activeAgent.mockConsoleCommand}`,
        `[${activeAgent.name}-EXEC] Handshake confirmed. Active runtime dispatched.`,
        `[${activeAgent.name}-STATUS] All subroutines operational.`
      ]);
      setIsExecuting(false);
    }, 600);
  };

  const getAgentIcon = (name: string) => {
    switch (name) {
      case "HERMES": return Compass;
      case "OPENCLAW": return Cpu;
      case "ANTIGRAVITY": return BrainCircuit;
      case "CODEX": return TerminalIcon;
      case "ALFRED": return Mic;
      case "ORACLE": return Radio;
      default: return Sparkles;
    }
  };

  return (
    <section id="agents" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-xs font-mono font-bold text-[#DDD6FE] uppercase tracking-widest mb-4">
          <BrainCircuit className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span>Multi-Agent Constellation Core</span>
        </div>
        <h2 className="font-aquire text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#EDF0F5] mb-3 uppercase">
          Six Autonomous <span className="gold-gradient-text">Specialist Agents</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          The SMP engine does not rely on a single generic prompt. Six specialized AI agents coordinate in real time across scheduling, browser automation, high-speed coding, voice supervision, and market intelligence.
        </p>
      </div>

      {/* Agents Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {AGENT_CONSTELLATION.map((agent) => {
          const Icon = getAgentIcon(agent.name);
          const isSelected = agent.id === activeAgentId;
          return (
            <button
              key={agent.id}
              onClick={() => handleAgentSelect(agent)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                isSelected
                  ? "bg-[#0B1120] shadow-xl scale-[1.03]"
                  : "bg-[#05080F]/80 border-white/10 hover:border-white/20 hover:bg-[#0B1120]/60"
              }`}
              style={{
                borderColor: isSelected ? agent.themeColor : undefined,
                boxShadow: isSelected ? `0 0 25px ${agent.glowColor}` : undefined
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div 
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-md"
                  style={{ backgroundColor: `${agent.themeColor}20`, color: agent.themeColor, border: `1px solid ${agent.themeColor}40` }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span 
                  className="text-[9px] font-mono font-extrabold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${agent.themeColor}25`, color: agent.themeColor }}
                >
                  {agent.badge}
                </span>
              </div>
              <div>
                <h4 className="font-['Aquire',sans-serif] text-sm font-bold text-[#EDF0F5] tracking-wider">
                  {agent.name}
                </h4>
                <p className="text-[10px] font-mono text-[#8B9BB4] mt-0.5 truncate">
                  {agent.codename}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Agent Interactive Cockpit */}
      <div className="glass-card rounded-3xl border p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
        style={{ borderColor: `${activeAgent.themeColor}40` }}
      >
        {/* Glow Header */}
        <div 
          className="absolute top-0 right-0 w-[500px] h-[350px] blur-[120px] pointer-events-none -z-10"
          style={{ backgroundColor: activeAgent.glowColor }}
        />

        {/* Top Agent Details Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
          <div className="flex items-start gap-4">
            <div 
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 border shadow-xl"
              style={{ 
                backgroundColor: `${activeAgent.themeColor}20`, 
                borderColor: `${activeAgent.themeColor}50`, 
                color: activeAgent.themeColor,
                boxShadow: `0 0 20px ${activeAgent.glowColor}`
              }}
            >
              {React.createElement(getAgentIcon(activeAgent.name), { className: "w-8 h-8 sm:w-9 sm:h-9" })}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span 
                  className="px-3 py-0.5 rounded-md font-mono text-xs font-bold"
                  style={{ backgroundColor: `${activeAgent.themeColor}25`, color: activeAgent.themeColor }}
                >
                  {activeAgent.codename.toUpperCase()}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-[#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {activeAgent.activeStatus}
                </span>
              </div>
              <h3 className="font-aquire text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#EDF0F5] tracking-tight">
                {activeAgent.name} // {activeAgent.role}
              </h3>
              <p className="text-sm text-[#94A3B8] mt-2 max-w-3xl leading-relaxed">
                {activeAgent.description}
              </p>
            </div>
          </div>

          <button
            onClick={() => handleCopyPrompt(activeAgent.systemPromptSnippet)}
            className="px-4 py-2.5 rounded-xl bg-[#0B1120] border border-white/10 hover:border-white/30 text-xs font-mono text-[#EDF0F5] transition-all flex items-center justify-center gap-2 self-start lg:self-center"
          >
            {copiedPrompt ? (
              <>
                <Check className="w-4 h-4 text-[#10B981]" />
                <span className="text-[#10B981]">System Prompt Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C9A84C]" />
                <span>Copy System Prompt</span>
              </>
            )}
          </button>
        </div>

        {/* Capabilities & Interactive Terminal Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Core Directives & Capabilities (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Directive */}
            <div className="bg-[#05080F]/90 rounded-2xl p-5 border border-white/10">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B9BB4] mb-2">
                Primary Directive
              </h4>
              <p className="text-sm font-medium text-[#EDF0F5] leading-relaxed">
                "{activeAgent.primaryDirective}"
              </p>
            </div>

            {/* Core Capabilities List */}
            <div className="bg-[#05080F]/90 rounded-2xl p-5 border border-white/10">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C9A84C] mb-4">
                Operational Capabilities
              </h4>
              <ul className="space-y-2.5">
                {activeAgent.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#EDF0F5] font-medium">
                    <span 
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: activeAgent.themeColor }}
                    />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prompt Snippet Preview */}
            <div className="bg-[#020408] rounded-2xl p-4 border border-white/5 text-left">
              <span className="text-[10px] font-mono text-[#64748B] block uppercase mb-1">System Prompt Preview:</span>
              <p className="text-xs font-mono text-[#94A3B8] italic line-clamp-3 leading-relaxed">
                {activeAgent.systemPromptSnippet}
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Terminal Simulator (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#020408] border border-[#1E293B] overflow-hidden shadow-2xl flex flex-col h-full min-h-[380px]">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0B1120] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                  <span className="text-xs font-mono font-bold text-[#8B9BB4] ml-2">
                    {activeAgent.name.toLowerCase()}-runtime.sh
                  </span>
                </div>

                <button
                  onClick={handleRunCommand}
                  disabled={isExecuting}
                  className="px-3 py-1 rounded-md text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  style={{
                    backgroundColor: `${activeAgent.themeColor}20`,
                    color: activeAgent.themeColor,
                    borderColor: `${activeAgent.themeColor}40`,
                    borderWidth: '1px'
                  }}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{isExecuting ? "Executing..." : "Execute Test Command"}</span>
                </button>
              </div>

              {/* Terminal Logs View */}
              <div className="p-4 sm:p-5 font-mono text-xs text-[#EDF0F5] space-y-2 flex-grow overflow-y-auto max-h-[320px]">
                <div className="text-[#64748B]"># Connected to Sovereign Media OS daemon [session: c067c824]</div>
                <div className="text-[#C9A84C] font-semibold">{`$ ${activeAgent.mockConsoleCommand}`}</div>
                {terminalHistory.map((line, idx) => (
                  <div 
                    key={idx} 
                    className={`leading-relaxed ${
                      line.startsWith("[") ? "text-[#E2E8F0]" : "text-[#10B981]"
                    }`}
                  >
                    {line}
                  </div>
                ))}
                {isExecuting && (
                  <div className="text-[#F59E0B] animate-pulse">
                    [DISPATCHING] Submitting command to local agent executor...
                  </div>
                )}
              </div>

              {/* Terminal Footer Prompt Bar */}
              <div className="px-4 py-2.5 bg-[#05080F] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#8B9BB4]">
                <span>Status: <strong className="text-[#10B981]">READY</strong></span>
                <span>Port: <strong>:8000</strong> (FastAPI)</span>
                <span>Sync: <strong>Obsidian WAL</strong></span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default AgentConstellation;
