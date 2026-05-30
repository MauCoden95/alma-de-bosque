import React, { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSendError(null);

    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      message
    });

    setIsLoading(false);

    if (error) {
      console.error("[Supabase] Contact insert error:", error);
      setSendError("Could not send your message. Please try again.");
      return;
    }

    setIsSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] border-b border-wood-950/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-wood-500 uppercase block mb-3">
            Inquire Directly
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Connect With Us
          </h2>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            Have questions about group bookings, seasonal rates, or tailor-made excursions? Reach out directly using your favorite channel below.
          </p>
        </div>

        {/* Form and info split Layout */}
        <div id="contact-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct info channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#101010]/60 border border-zinc-900 rounded-2xl p-6 md:p-8 space-y-6 flex-grow">
              
              <h3 className="font-serif text-xl font-medium text-white mb-4">
                Alma del Bosque Lodge
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-wood-950/20 border border-wood-850/10 text-wood-400 mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block mb-1">Our Location</span>
                  <p className="text-sm text-zinc-200 font-sans leading-relaxed">
                    Avenida Bustillo Km 12.5 (Circuito Chico), San Carlos de Bariloche, Río Negro, Patagonia Argentina
                  </p>
                </div>
              </div>

              {/* Phone & Direct WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-wood-950/20 border border-wood-850/10 text-wood-400 mt-1">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block mb-1">Call Booking Desk</span>
                  <p className="text-sm text-zinc-200 font-sans font-mono">+54 294 449-3000</p>
                  
                  {/* WhatsApp Launcher */}
                  <a
                    href="https://wa.me/5492944123456"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-forest-400 hover:text-forest-300 font-mono mt-2 transition-colors cursor-pointer"
                  >
                    <MessageCircle size={14} className="fill-forest-400/20" /> Launch WhatsApp chat
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-wood-950/20 border border-wood-850/10 text-wood-400 mt-1">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block mb-1">Secure Email</span>
                  <a href="mailto:info@almadelbosque.com" className="text-sm text-zinc-200 hover:text-wood-400 transition-colors font-mono block">
                    info@almadelbosque.com
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-zinc-850">
                <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block mb-3">Follow our stories</span>
                
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#121212] border border-zinc-850 hover:border-wood-500/25 px-4 py-2.5 rounded text-xs text-zinc-350 hover:text-white transition-all cursor-pointer"
                  >
                    <Instagram size={14} className="text-wood-400" />
                    <span className="font-sans">@almadelbosque</span>
                  </a>
                  
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#121212] border border-zinc-850 hover:border-wood-500/25 px-4 py-2.5 rounded text-xs text-zinc-350 hover:text-white transition-all cursor-pointer"
                  >
                    <Facebook size={14} className="text-wood-400" />
                    <span className="font-sans">Alma del Bosque</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact form with Success Alert Overlay */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {isSent ? (
              /* Success notification frame */
              <div id="contact-success" className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-4 animate-fade-in">
                <div className="p-3 rounded-full bg-forest-950 border border-forest-500/40 text-forest-400">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-serif text-2xl text-white font-semibold">Message Dispatched</h4>
                <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out to Alma del Bosque. We have cataloged your comments and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-350 rounded text-xs uppercase tracking-widest font-mono cursor-pointer hover:bg-zinc-850"
                >
                  Write another message
                </button>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleMessageSubmit} className="space-y-6">
                <span className="text-[10px] tracking-widest font-mono text-zinc-550 uppercase block">
                  Write Your Comments
                </span>

                <div className="flex flex-col">
                  <label htmlFor="contact-name" className="text-xs text-zinc-400 font-sans mb-1.5 font-medium">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Jane Sterling"
                    className="bg-black/60 border border-zinc-850 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-wood-500 transition-colors"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="contact-email" className="text-xs text-zinc-400 font-sans mb-1.5 font-medium">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="bg-black/60 border border-zinc-850 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-wood-500 transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="contact-message" className="text-xs text-zinc-400 font-sans mb-1.5 font-medium">Your Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Type details about your prospective dates, group booking queries, or special requirements..."
                    className="bg-black/60 border border-zinc-850 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-wood-500 transition-colors resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {sendError && (
                  <div className="flex items-start gap-3 bg-red-950/30 border border-red-800/40 rounded-lg px-4 py-3 text-xs text-red-400">
                    <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                    <span>{sendError}</span>
                  </div>
                )}

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-forest-600 hover:bg-forest-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold uppercase tracking-widest text-xs rounded transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isLoading ? (
                    <><Loader2 size={13} className="animate-spin" /> Sending... </>
                  ) : (
                    <>Send Message <Send size={13} /></>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
