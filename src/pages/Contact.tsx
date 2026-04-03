import { useState, useEffect } from "react";
import { Mail, Bug, Lightbulb, Send, CheckCircle2 } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "feedback", message: "" });

  useEffect(() => {
    document.title = "Contact Us - ToolsMama";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Have feedback, found a bug, or want to suggest a tool? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Get in Touch</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                We're a small team passionate about building useful, privacy-focused tools. Your feedback helps us improve.
              </p>
            </div>

            <div className="space-y-8">
              <ContactDetail icon={Mail} title="Email" desc="support@toolsmama.com" />
              <ContactDetail icon={Bug} title="Report a Bug" desc="Found something broken? Let us know with a short description and the tool name." />
              <ContactDetail icon={Lightbulb} title="Suggest a Tool" desc="Have an idea for a tool we should build? We love community suggestions!" />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-none">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:border-blue-500 transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:border-blue-500 transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Subject</label>
                    <select
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:border-blue-500 transition-all font-bold text-slate-700 dark:text-slate-300 appearance-none"
                      value={formData.subject}
                      onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                    >
                      <option value="feedback">General Feedback</option>
                      <option value="bug">Bug Report</option>
                      <option value="suggestion">Tool Suggestion</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:border-blue-500 transition-all font-medium resize-none text-slate-900 dark:text-white placeholder-slate-400"
                      placeholder="Tell us what's on your mind..."
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 dark:shadow-none active:scale-[0.98]"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Message Received!</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg mb-10">
                    Thanks for reaching out, {formData.name}. We'll get back to you within 1-2 business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-4 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactDetail({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400 shadow-sm">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{title}</h4>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
