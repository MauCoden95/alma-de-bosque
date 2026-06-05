import React, { useState, useEffect } from "react";
import { CABINS_DATA } from "../data";
import { Calendar, Briefcase, FileText, CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { isSupabaseConfigured, supabase } from "../lib/supabase";
import { useLanguage } from "../i18n/LanguageContext";

interface BookingFormProps {
  prefilledParams: {
    checkIn: string;
    checkOut: string;
    guests: number;
    cabinId: string;
  };
  onClearPrefills: () => void;
}

export default function BookingForm({ prefilledParams, onClearPrefills }: BookingFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [selectedCabinId, setSelectedCabinId] = useState(CABINS_DATA[0].id);
  const [specialRequests, setSpecialRequests] = useState("");
  const { t } = useLanguage();
  
  // Submit state
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Sync prefill params from parent searches or selectors
  useEffect(() => {
    if (prefilledParams.checkIn) setArrivalDate(prefilledParams.checkIn);
    if (prefilledParams.checkOut) setDepartureDate(prefilledParams.checkOut);
    if (prefilledParams.guests) setGuests(prefilledParams.guests);
    if (prefilledParams.cabinId) setSelectedCabinId(prefilledParams.cabinId);
  }, [prefilledParams]);

  const selectedCabin = CABINS_DATA.find((c) => c.id === selectedCabinId) || CABINS_DATA[0];

  // Calculate nights
  let nights = 0;
  if (arrivalDate && departureDate) {
    const start = new Date(arrivalDate);
    const end = new Date(departureDate);
    const diffTime = end.getTime() - start.getTime();
    if (diffTime > 0) {
      nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
  }

  // Cost calculations
  const subtotal = nights * selectedCabin.price;
  const localTaxRate = 0.21; // 21% IVA
  const taxAmount = subtotal * localTaxRate;
  const totalAmount = subtotal + taxAmount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    // Generate a unique reference code
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const formattedCode = `ALMA-2026-${randomNum}`;

    if (!isSupabaseConfigured || !supabase) {
      setIsLoading(false);
      setSubmitError(t.booking.submitError);
      return;
    }

    const { error } = await supabase.from("bookings").insert({
      full_name: fullName,
      email,
      phone,
      arrival_date: arrivalDate,
      departure_date: departureDate,
      guests,
      cabin_id: selectedCabinId,
      cabin_name: selectedCabin.name,
      total_amount: totalAmount,
      special_requests: specialRequests || null,
      booking_code: formattedCode,
      status: "pending"
    });

    setIsLoading(false);

    if (error) {
      console.error("[Supabase] Booking insert error:", error);
      setSubmitError(t.booking.submitError);
      return;
    }

    setBookingCode(formattedCode);
    setIsSuccess(true);
    onClearPrefills();
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setArrivalDate("");
    setDepartureDate("");
    setGuests(2);
    setSelectedCabinId(CABINS_DATA[0].id);
    setSpecialRequests("");
  };

  return (
    <section id="booking" className="py-24 bg-[#0A0A0A] border-b border-wood-950/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-wood-500 uppercase block mb-3">
            {t.booking.badge}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            {t.booking.title}
          </h2>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            {t.booking.subtitle}
          </p>
        </div>

        {isSuccess ? (
          /* SUCCESS SCREEN */
          <div
            id="booking-success-card"
            className="max-w-3xl mx-auto bg-zinc-900/65 border border-forest-500/30 rounded-2xl p-8 md:p-12 text-center shadow-3xl animate-fade-in"
          >
            <div className="w-16 h-16 bg-forest-950 border border-forest-500/50 text-forest-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={36} />
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl text-white font-semibold mb-4">
              {t.booking.successTitle}
            </h3>
            
            <div className="inline-block bg-black px-6 py-2.5 rounded-lg border border-wood-800/20 mb-8">
              <span className="block text-[9px] tracking-widest font-mono text-zinc-500 uppercase">{t.booking.refLabel}</span>
              <span className="block text-lg font-mono text-wood-400 font-bold">{bookingCode}</span>
            </div>

            <div className="text-left space-y-4 max-w-lg mx-auto bg-black/40 border border-zinc-850 p-6 rounded-xl mb-8 text-zinc-300 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-zinc-850 pb-2.5">
                <span className="text-zinc-500 font-sans">{t.booking.leadGuest}:</span>
                <span className="text-white font-semibold">{fullName}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-850 pb-2.5">
                <span className="text-zinc-500 font-sans">{t.booking.cabinChoice}:</span>
                <span className="text-white font-semibold">{selectedCabin.name}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-850 pb-2.5">
                <span className="text-zinc-500 font-sans">{t.booking.duration}:</span>
                <span className="text-white font-semibold">{arrivalDate} â€“ {departureDate} ({nights} {nights === 1 ? t.booking.night : t.booking.nights})</span>
              </div>
              <div className="flex justify-between font-serif text-base pt-1">
                <span className="text-wood-400 font-semibold">{t.booking.totalPrice}:</span>
                <span className="text-wood-400 font-bold">${totalAmount.toLocaleString()} USD</span>
              </div>
            </div>

            <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              {t.booking.successMsg.replace("{email}", email)}
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-3 bg-wood-500 hover:bg-wood-400 text-black font-semibold rounded uppercase tracking-wider text-xs transition-transform cursor-pointer"
            >
              {t.booking.anotherBtn}
            </button>
          </div>
        ) : (
          /* RESERVATION FORM & SUMMARY SIDE-BY-SIDE */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: The Form */}
            <div className="lg:col-span-7 bg-zinc-950 border border-wood-950/15 p-6 md:p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal Information Group */}
                <div className="space-y-4">
                  <span className="text-[10px] tracking-widest font-mono text-wood-550 uppercase block border-b border-zinc-900 pb-2">
                    {t.booking.c1_title}
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="book-full-name" className="text-xs text-zinc-400 font-sans mb-1.5 font-medium">{t.booking.fullNameLabel}</label>
                      <input
                        id="book-full-name"
                        type="text"
                        required
                        placeholder={t.booking.fullNamePlaceholder}
                        className="bg-black/60 border border-zinc-800/80 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-wood-500 transition-colors"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <label htmlFor="book-email" className="text-xs text-zinc-400 font-sans mb-1.5 font-medium">{t.booking.emailLabel}</label>
                      <input
                        id="book-email"
                        type="email"
                        required
                        placeholder={t.booking.emailPlaceholder}
                        className="bg-black/60 border border-zinc-800/80 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-wood-500 transition-colors"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="book-phone" className="text-xs text-zinc-400 font-sans mb-1.5 font-medium">{t.booking.phoneLabel}</label>
                    <input
                      id="book-phone"
                      type="tel"
                      required
                      placeholder={t.booking.phonePlaceholder}
                      className="bg-black/60 border border-zinc-800/80 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-wood-500 transition-colors"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Logistical Parameters Group */}
                <div className="space-y-4 pt-2">
                  <span className="text-[10px] tracking-widest font-mono text-wood-550 uppercase block border-b border-zinc-900 pb-2">
                    {t.booking.c2_title}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="book-arrival" className="text-xs text-zinc-400 font-sans mb-1.5 font-medium">{t.booking.arrivalLabel}</label>
                      <input
                        id="book-arrival"
                        type="date"
                        required
                        className="bg-black/60 border border-zinc-800/100 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-wood-500 transition-colors cursor-pointer"
                        value={arrivalDate}
                        onChange={(e) => setArrivalDate(e.target.value)}
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <label htmlFor="book-departure" className="text-xs text-zinc-400 font-sans mb-1.5 font-medium">{t.booking.departureLabel}</label>
                      <input
                        id="book-departure"
                        type="date"
                        required
                        className="bg-black/60 border border-zinc-800/100 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-wood-500 transition-colors cursor-pointer"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="book-cabin-type" className="text-xs text-zinc-400 font-sans mb-1.5 font-medium">{t.booking.cabinTypeLabel}</label>
                      <select
                        id="book-cabin-type"
                        className="bg-black/60 border border-zinc-800/100 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-wood-500 transition-colors cursor-pointer"
                        value={selectedCabinId}
                        onChange={(e) => setSelectedCabinId(e.target.value)}
                      >
                        {CABINS_DATA.map((cabin) => (
                          <option key={cabin.id} value={cabin.id} className="bg-zinc-900 text-white">
                            {cabin.name} â€” (${cabin.price}/{t.booking.night})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="book-guests-count" className="text-xs text-zinc-400 font-sans mb-1.5 font-medium">{t.booking.guestsCountLabel}</label>
                      <select
                        id="book-guests-count"
                        className="bg-black/60 border border-zinc-800/100 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-wood-500 transition-colors cursor-pointer"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                      >
                        {Array.from({ length: selectedCabin.capacity }).map((_, i) => (
                          <option key={i + 1} value={i + 1} className="bg-zinc-900 text-white">
                            {i + 1} {i + 1 === 1 ? t.booking.guest : t.booking.guests} ({t.booking.maxGuests} {selectedCabin.capacity})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Comments Group */}
                <div className="flex flex-col pt-2">
                  <span className="text-[10px] tracking-widest font-mono text-wood-550 uppercase block border-b border-zinc-900 pb-2 mb-4">
                    {t.booking.c3_title}
                  </span>
                  <label htmlFor="book-special" className="text-xs text-zinc-400 font-sans mb-1.5 font-medium">{t.booking.specialLabel}</label>
                  <textarea
                    id="book-special"
                    rows={4}
                    placeholder={t.booking.specialPlaceholder}
                    className="bg-black/60 border border-zinc-850/80 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-wood-500 transition-colors resize-none"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                  />
                </div>

                {submitError && (
                  <div className="flex items-start gap-3 bg-red-950/30 border border-red-800/40 rounded-lg px-4 py-3 text-xs text-red-400">
                    <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  id="book-submit-btn"
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-wood-500 hover:bg-wood-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold uppercase tracking-widest text-xs rounded-md transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isLoading ? (
                    <><Loader2 size={14} className="animate-spin" /> {t.booking.processing}</>
                  ) : (
                    <>{t.booking.submitBtn} <ArrowRight size={14} /></>
                  )}
                </button>

              </form>
            </div>

            {/* Right Col: Interactive Cost Estimator Summary */}
            <div className="lg:col-span-5 bg-zinc-900/40 border border-wood-850/10 rounded-2xl p-6 md:p-8 space-y-6">
              <span className="text-[10px] tracking-widest font-mono text-zinc-550 uppercase block">
                {t.booking.pricingSummary}
              </span>
              
              {/* Selected Cabin Quick card preview */}
              <div className="flex gap-4 items-center border-b border-zinc-850 pb-5">
                <img
                  src={selectedCabin.image}
                  alt={selectedCabin.name}
                  className="w-20 h-20 object-cover rounded-lg border border-zinc-800"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">{selectedCabin.name}</h4>
                  <p className="text-xs text-zinc-400 font-mono mt-1 mt-0.5">{t.booking.baseFare}: ${selectedCabin.price} / {t.booking.night}</p>
                  <p className="text-[10px] text-wood-400 tracking-wide font-mono mt-0.5 uppercase">{t.cabins.capacity}: {t.booking.maxGuests} {selectedCabin.capacity} {t.booking.guests}</p>
                </div>
              </div>

              {/* Dynamic Calculations display */}
              <div className="space-y-3.5 text-xs">
                {nights >= 1 ? (
                  <>
                    <div className="flex justify-between text-zinc-400">
                      <span>{t.booking.rateCalculation}:</span>
                      <span className="font-mono text-white">${selectedCabin.price} x {nights} {nights === 1 ? t.booking.night : t.booking.nights}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400 border-b border-zinc-850 pb-3">
                      <span>{t.booking.subtotal}:</span>
                      <span className="font-mono text-white">${subtotal.toLocaleString()} USD</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>{t.booking.taxLabel}:</span>
                      <span className="font-mono text-white">${taxAmount.toLocaleString()} USD</span>
                    </div>
                    <div className="flex justify-between text-zinc-400 border-b border-zinc-850 pb-3">
                      <span>{t.booking.levyLabel}:</span>
                      <span className="font-mono text-forest-400">{t.booking.levyFree}</span>
                    </div>
                    
                    {/* Final Grand Total highlight */}
                    <div className="flex justify-between items-baseline font-serif text-lg pt-2">
                      <span className="text-white font-semibold">{t.booking.totalEstCost}:</span>
                      <div className="text-right">
                        <span className="text-wood-400 font-bold block">${totalAmount.toLocaleString()} USD</span>
                        <span className="text-[8px] font-mono tracking-widest text-zinc-550 block uppercase mt-0.5">{t.booking.taxIncluded}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* INSUFFICIENT CALENDAR INFO STATE */
                  <div className="py-8 text-center text-zinc-450 space-y-4">
                    <div className="w-10 h-10 rounded-full border border-dashed border-zinc-800 flex items-center justify-center mx-auto text-zinc-400 bg-black/20">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-300 text-xs">{t.booking.awaitingTitle}</p>
                      <p className="text-[10px] text-zinc-500 mt-1">{t.booking.awaitingMsg}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Trust Badge */}
              <div className="bg-black/60 border border-zinc-850 rounded-xl p-4 flex items-center gap-3.5 text-[10px] text-zinc-400 leading-normal">
                <Briefcase size={16} className="text-[#999] flex-shrink-0" />
                <p>{t.booking.guarantee}</p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
