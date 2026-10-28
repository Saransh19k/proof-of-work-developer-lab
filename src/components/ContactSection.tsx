import React, { useState } from 'react';
import { developerProfile } from '../data/portfolioData';
import { Mail, Copy, Check, ExternalLink, Send, Linkedin, Github, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    intent: 'Full-Time Engineering Role',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);

  const intents = [
    'Full-Time Engineering Role',
    'Summer 2027 Internship',
    'Open Source Collaboration',
    'Hackathon Team Invitation',
    'Technical / Architecture Query'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = 'Please provide your name.';
    if (!formState.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formState.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formState.message.trim() || formState.message.trim().length < 10) {
      errs.message = 'Please include a message of at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose mailto URI
    const mailtoSubject = encodeURIComponent(`[${formState.intent}] ${formState.subject} - from ${formState.name}`);
    const mailtoBody = encodeURIComponent(
      `Hi ${developerProfile.name},\n\nName: ${formState.name}\nEmail: ${formState.email}\nInquiry Type: ${formState.intent}\n\nMessage:\n${formState.message}\n\n---\nSent via Proof-of-Work Developer Lab`
    );

    const mailtoUrl = `mailto:${developerProfile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;
    setSubmittedStatus(true);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-800/60 bg-[#090c13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-lime-400 mb-2 uppercase tracking-wider">
            <span>Section 07</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Direct communication channels for engineering recruiters, hackathon organizers, and collaborative contributors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels & Fast Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0d121c] border border-slate-800 space-y-6">
              <h3 className="text-base font-bold text-white font-mono">
                Verified Channels
              </h3>

              {/* Email Direct Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-400">Direct Primary Email:</div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold font-mono text-white truncate">
                    {developerProfile.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-lime-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2">
                <a
                  href={`https://github.com/${developerProfile.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 hover:bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-slate-400" />
                    <span>github.com/{developerProfile.githubUsername}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href={developerProfile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 hover:bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>

              {/* Honest Delivery Transparency Note */}
              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/90 text-xs text-slate-400 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-300">Zero Simulated Backend: </span>
                  Submissions launch your standard email client with your message pre-formatted. We do not pretend a mock database queued your message.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-[#0d121c] border border-slate-800 space-y-4"
              noValidate
            >
              <h3 className="text-base font-bold text-white font-mono mb-2">
                Draft a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-xs text-white focus:outline-none ${
                      errors.name ? 'border-red-500' : 'border-slate-800 focus:border-lime-400'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@company.com"
                    className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-xs text-white focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-slate-800 focus:border-lime-400'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Inquiry Intent
                </label>
                <select
                  value={formState.intent}
                  onChange={(e) => setFormState({ ...formState, intent: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-lime-400"
                >
                  {intents.map((intent) => (
                    <option key={intent} value={intent}>
                      {intent}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="e.g. Distributed Systems Engineer role at..."
                  className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-xs text-white focus:outline-none ${
                    errors.subject ? 'border-red-500' : 'border-slate-800 focus:border-lime-400'
                  }`}
                />
                {errors.subject && <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Share details about the position, engineering team, or project collaboration..."
                  className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-xs text-white focus:outline-none ${
                    errors.message ? 'border-red-500' : 'border-slate-800 focus:border-lime-400'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-black bg-lime-400 hover:bg-lime-300 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Launch Mail Client & Send
                </button>
              </div>

              {submittedStatus && (
                <div className="p-3 rounded-lg bg-lime-950/40 border border-lime-800/60 text-xs text-lime-300 flex items-start gap-2 mt-4">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    Mail client triggered with your structured message. If your browser blocked the window or you use webmail, send directly to{' '}
                    <span className="font-mono font-bold text-white">{developerProfile.email}</span>.
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
