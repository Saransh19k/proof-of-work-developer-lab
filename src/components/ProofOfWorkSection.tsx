import React, { useState } from 'react';
import { globalProofItems, projectsData } from '../data/portfolioData';
import { EvidenceCategory, ProofItem } from '../types/portfolio';
import { ShieldCheck, CheckCircle2, Clock, AlertCircle, ExternalLink, Hash, RefreshCw, Terminal, Check, Copy } from 'lucide-react';

export const ProofOfWorkSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [testInput, setTestInput] = useState<string>('sovereign-ai-workbench');
  const [calculatedDigest, setCalculatedDigest] = useState<string>('');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  // Combine global proof items + project proof items
  const allProofItems: ProofItem[] = [
    ...globalProofItems,
    ...projectsData.flatMap((p) => p.proofItems)
  ];

  const categories = ['All', 'Source Code', 'Live Demos', 'Architecture', 'Testing & QA'];

  const filteredItems = selectedCategory === 'All'
    ? allProofItems
    : allProofItems.filter((item) => item.category === selectedCategory);

  // Real SHA-256 Browser Crypto verification simulator
  const runHashVerification = async (inputStr: string) => {
    setIsVerifying(true);
    setTestInput(inputStr);

    try {
      const msgBuffer = new TextEncoder().encode(inputStr);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      setTimeout(() => {
        setCalculatedDigest(hashHex);
        setIsVerifying(false);
      }, 250);
    } catch {
      setCalculatedDigest('verification_failed');
      setIsVerifying(false);
    }
  };

  const handleCopyHash = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(text);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  return (
    <section id="proof" className="py-20 border-b border-slate-800/60 bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-lime-400 mb-2 uppercase tracking-wider">
              <span>Section 02</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Empirical Audit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proof-of-Work Verification Inspector
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Every system claim is backed by audit trails: commit hashes, determinism test reports, RFC whitepapers, and live health endpoints.
            </p>
          </div>

          {/* Interactive Evidence Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-lime-400 text-black font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Audit Methodology Statement Card */}
        <div className="mb-10 p-5 rounded-2xl bg-[#0c111c] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-lime-400 uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-lime-400" />
              Proof Transparency Protocol
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Incomplete or pending implementations are transparently labeled as <span className="text-amber-400 font-mono">Pending Verification</span>. We never inflate metrics or present mock stubs as production systems.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono shrink-0">
            <div className="flex items-center gap-1.5 text-lime-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Proof</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Pending / In Progress</span>
            </div>
          </div>
        </div>

        {/* Evidence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-xl bg-[#0d121c] border transition-all flex flex-col justify-between ${
                item.verificationStatus === 'Verified'
                  ? 'border-slate-800 hover:border-lime-500/40'
                  : 'border-amber-900/40 hover:border-amber-500/40'
              }`}
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wide">
                    {item.category}
                  </span>

                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded flex items-center gap-1 ${
                      item.verificationStatus === 'Verified'
                        ? 'text-lime-400 bg-lime-950/40 border border-lime-800/50'
                        : 'text-amber-400 bg-amber-950/40 border border-amber-800/50'
                    }`}
                  >
                    {item.verificationStatus === 'Verified' ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <Clock className="w-3 h-3" />
                    )}
                    {item.verificationStatus}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Verification Method */}
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs font-mono text-slate-400 mb-3 space-y-1">
                  <div className="text-[11px] text-slate-500">Audit Method:</div>
                  <div className="text-slate-300">{item.verificationMethod}</div>
                  {item.notes && (
                    <div className="text-amber-400/90 text-[11px] pt-1 border-t border-slate-800">
                      Note: {item.notes}
                    </div>
                  )}
                </div>
              </div>

              {/* Artifact Hash & Action Link */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                {item.artifactHash ? (
                  <button
                    onClick={() => {
                      runHashVerification(item.artifactHash!);
                      handleCopyHash(item.artifactHash!);
                    }}
                    className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-lime-300 transition-colors"
                    title="Click to load into hash verifier"
                  >
                    <Hash className="w-3.5 h-3.5 text-lime-400" />
                    <span className="truncate max-w-[140px]">{item.artifactHash}</span>
                    {copiedHash === item.artifactHash ? (
                      <Check className="w-3 h-3 text-lime-400" />
                    ) : (
                      <Copy className="w-3 h-3 text-slate-600" />
                    )}
                  </button>
                ) : (
                  <span className="text-[11px] font-mono text-slate-600">No raw digest</span>
                )}

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-lime-400 hover:text-lime-300 hover:underline"
                  >
                    Verify
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-600">Pending URL</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Live Browser SHA-256 Checksum Tester */}
        <div className="p-6 rounded-2xl bg-[#0d121c] border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-lime-400" />
                Live Cryptographic Checksum Auditor
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Test artifact string verification in real-time using browser-native Web Cryptography SHA-256.
              </p>
            </div>

            <button
              onClick={() => runHashVerification(testInput || 'sovereign-ai-workbench')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-lime-400 hover:bg-lime-300 rounded-lg transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isVerifying ? 'animate-spin' : ''}`} />
              Run Audit Calculation
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-5">
              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                Artifact Seed / Hash String:
              </label>
              <input
                type="text"
                value={testInput}
                onChange={(e) => setTestInput(e.target.value)}
                placeholder="Enter artifact identifier..."
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-lime-400"
              />
            </div>

            <div className="md:col-span-7">
              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                SHA-256 Computed Output Digest:
              </label>
              <div className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-lime-400 overflow-x-auto whitespace-nowrap">
                {calculatedDigest || 'Click "Run Audit Calculation" to compute live SHA-256 digest'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
