import { useEffect } from "react";
import { ShieldCheck } from "lucide-react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy - ToolsMama";
  }, []);

  return (
    <div className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Effective Date: March 28, 2026</p>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/30 rounded-3xl p-8 mb-12 flex gap-6 items-start">
          <div className="w-12 h-12 bg-white dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h3 className="text-emerald-900 dark:text-emerald-100 font-bold text-lg mb-2">Short version:</h3>
            <p className="text-emerald-700 dark:text-emerald-300 leading-relaxed font-medium">
              ToolsMama does not collect, store, or transmit your files or data anywhere. All tools run entirely inside your browser.
            </p>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">1. Introduction</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Welcome to ToolsMama ("we," "us," or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our website.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">2. Information We Do NOT Collect</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Because ToolsMama's tools run entirely in your browser using JavaScript, we do <strong>not</strong> collect:
          </p>
          <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
            <li>Files you upload or process (they never leave your device)</li>
            <li>Text you type into our tools</li>
            <li>Passwords you generate</li>
            <li>QR code content you create</li>
            <li>Any form of sensitive personal data related to tool usage</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">3. How Our Tools Work</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            All file processing, conversions, and generations occur locally within your web browser. For example:
          </p>
          <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
            <li>The Image Compressor uses your browser's Canvas API to resize and compress images locally.</li>
            <li>The PDF Merger uses the pdf-lib library, which runs entirely in your browser tab.</li>
            <li>The Password Generator uses browser cryptography APIs that never contact a server.</li>
            <li>The Text to Speech tool uses the SpeechSynthesis Web API built into your browser.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">4. Analytics</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We may use minimal, anonymized analytics to understand general usage patterns. This data does not include any personally identifiable information or file contents. We do not use tracking cookies for advertising.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">5. Contact Us</h2>
          <p className="text-slate-600 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at our contact page or email us at <strong>privacy@toolsmama.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
