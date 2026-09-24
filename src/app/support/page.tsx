"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SignUpModal from "@/components/SignUpModal";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function SupportPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIds, setOpenFaqIds] = useState<string[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Auto-scroll to hash on mount or hash change
  useEffect(() => {
    const handleHashScroll = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 150);
        }
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "What types of attractions and venues can Ticketing Solution manage?",
      answer: "Ticketing Solution is built for heritage forts, museums, monument complexes, amusement parks, wildlife sanctuaries, water parks, botanical gardens, and exhibition centers. You can manage multiple attractions, ticket counters, and entry gates from a single unified platform.",
    },
    {
      id: "faq-2",
      question: "Can we configure different ticket rates for domestic vs international visitors and children?",
      answer: "Yes. The platform provides full support for multi-tier visitor categories. You can easily set up separate pricing rules for Domestic Adults, Foreign Tourists, Children (with age thresholds), Senior Citizens, Students, and VIP visitors.",
    },
    {
      id: "faq-3",
      question: "How does slot-based capacity management prevent overcrowding?",
      answer: "You can define maximum visitor quotas per hourly or daily timeslot. When the allotted limit is reached across online bookings and physical counters, the slot automatically closes for new reservations to ensure safety and smooth visitor flow.",
    },
    {
      id: "faq-4",
      question: "Can counter staff issue tickets and scan entries offline if internet drops?",
      answer: "Yes. Our cashier counter software and handheld turnstile scanners maintain an encrypted local database. If network connectivity drops, entry scanning and ticket issuance continue smoothly in offline mode and synchronize automatically once reconnected.",
    },
    {
      id: "faq-5",
      question: "What payment methods are supported at ticket counters and online?",
      answer: "The platform supports all standard payment methods including dynamic UPI QR codes (GPay, PhonePe, Paytm), credit/debit card POS machines, net banking, and physical cash. It automatically calculates cash change and issues GST-compliant tax invoices.",
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      {/* Fixed Site Header */}
      <Header activeTab="Support" onSignUpClick={openModal} />

      <main className="support-page-root">
        {/* ─── Hero Section ─── */}
        <section className="support-hero">
          <div className="support-hero-inner">
            <h1 className="support-hero-title">
              Help Center &amp; <span className="support-hero-gold">FAQs</span>
            </h1>
            <p className="support-hero-subtitle">
              Have questions or need assistance? Reach out to our support team directly or find answers to common questions below.
            </p>
          </div>
        </section>

        {/* ─── Main Content Container ─── */}
        <div className="support-content-container">

          {/* ─── SECTION 1: Help Center (Single Simple Contact Details Card) ─── */}
          <section id="help-center" className="support-section">
            <div className="support-section-header">
              <span className="support-section-eyebrow">HELP CENTER</span>
              <h2 className="support-section-title">Contact Details</h2>
              <p className="support-section-desc">
                Our support team is here to help with your bookings, account queries, counter setup, or technical assistance.
              </p>
            </div>

            <div className="support-single-contact-card">
              <div className="support-contact-grid">
                {/* Phone */}
                <div className="support-contact-item">
                  <div className="support-icon-wrap">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#002A45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="support-item-info">
                    <span className="support-item-label">Phone Support</span>
                    <a href="" className="support-item-value support-item-link">
                      +91 **********
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="support-contact-item">
                  <div className="support-icon-wrap">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#002A45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="support-item-info">
                    <span className="support-item-label">Email Address</span>
                    <a href="mailto:support@ticketingsolution.com" className="support-item-value support-item-link">
                      support@ticketingsolution.com
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="support-contact-item">
                  <div className="support-icon-wrap">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#002A45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="support-item-info">
                    <span className="support-item-label">Support Hours</span>
                    <span className="support-item-value">
                      Monday to Saturday, 9:00 AM – 8:00 PM IST
                    </span>
                  </div>
                </div>

                {/* Office Location */}
                <div className="support-contact-item">
                  <div className="support-icon-wrap">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#002A45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="support-item-info">
                    <span className="support-item-label">Office Address</span>
                    <span className="support-item-value">
                       -
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── SECTION 2: FAQs (Fixed 5 Questions Only) ─── */}
          <section id="faqs" className="support-section">
            <div className="support-section-header">
              <h2 className="support-section-title">Frequently Asked Questions</h2>
              <p className="support-section-desc">
                Here are answers to the top questions about how Ticketing Solution works.
              </p>
            </div>

            <div className="support-faq-list">
              {faqs.map((faq) => {
                const isOpen = openFaqIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className={`support-faq-item ${isOpen ? "support-faq-item--open" : ""}`}
                  >
                    <button
                      type="button"
                      className="support-faq-question-btn"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span className="support-faq-question-text">{faq.question}</span>
                      <span className="support-faq-chevron" aria-hidden="true">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${faq.id}`}
                        className="support-faq-answer"
                        role="region"
                      >
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Sign Up / Demo Modal */}
      <SignUpModal isOpen={isModalOpen} onClose={closeModal} />

      <style dangerouslySetInnerHTML={{
        __html: `
        /* ── Support Layout ── */
        .support-page-root {
          min-height: 100vh;
          background: #F7FAFC;
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), sans-serif;
          color: #002A45;
        }

        /* ── Hero ── */
        .support-hero {
          background: linear-gradient(135deg, #002A45 0%, #004170 55%, #173F63 100%);
          padding: 96px 24px 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .support-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 40%, rgba(244,188,67,0.12) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 30%, rgba(23,63,99,0.35) 0%, transparent 55%);
          pointer-events: none;
        }
        .support-hero-inner {
          position: relative;
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .support-hero-badge {
          display: inline-block;
          background: rgba(244,188,67,0.18);
          border: 1px solid rgba(244,188,67,0.35);
          color: #F4BC43;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 16px;
        }
        .support-hero-title {
          font-size: clamp(30px, 4.5vw, 44px);
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 14px 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .support-hero-gold {
          color: #F4BC43;
        }
        .support-hero-subtitle {
          font-size: 15.5px;
          line-height: 1.65;
          color: rgba(255,255,255,0.8);
          margin: 0;
          max-width: 580px;
        }

        /* ── Container ── */
        .support-content-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 52px 24px 88px;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        /* ── Section Header ── */
        .support-section {
          scroll-margin-top: 96px;
        }
        .support-section-header {
          margin-bottom: 24px;
          padding-bottom: 14px;
          border-bottom: 2px solid #E6EFF5;
        }
        .support-section-eyebrow {
          display: block;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #173F63;
          margin-bottom: 4px;
        }
        .support-section-title {
          font-size: clamp(24px, 3.2vw, 30px);
          font-weight: 800;
          color: #002A45;
          margin: 0 0 8px 0;
          letter-spacing: -0.015em;
        }
        .support-section-desc {
          font-size: 14.5px;
          color: #556B7D;
          margin: 0;
          line-height: 1.6;
        }

        /* ── Single Contact Card ── */
        .support-single-contact-card {
          background: #FFFFFF;
          border: 1px solid #E2EAF0;
          border-radius: 18px;
          padding: 32px 32px 24px;
          box-shadow: 0 4px 18px rgba(0,42,69,0.05);
        }
        .support-contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px 24px;
        }
        .support-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .support-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #EDF4F9;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .support-item-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .support-item-label {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #6B8294;
        }
        .support-item-value {
          font-size: 14.5px;
          font-weight: 600;
          color: #002A45;
          line-height: 1.5;
        }
        .support-item-link {
          color: #004170;
          text-decoration: none;
          transition: color 0.18s;
        }
        .support-item-link:hover {
          color: #F4BC43;
          text-decoration: underline;
        }

        /* ── Card Footer Action ── */
        .support-card-footer {
          margin-top: 28px;
          padding-top: 22px;
          border-top: 1px solid #EDF3F7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .support-footer-text {
          font-size: 14px;
          color: #556B7D;
          margin: 0;
        }
        .support-action-btn {
          background: #002A45;
          color: #FFFFFF;
          border: none;
          font-size: 13.5px;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
          transition: all 0.2s ease;
        }
        .support-action-btn:hover {
          background: #004170;
          transform: translateY(-1px);
        }

        /* ── Fixed 5 FAQs List ── */
        .support-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .support-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2EAF0;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.2s ease;
        }
        .support-faq-item:hover {
          border-color: #CBDCE9;
        }
        .support-faq-item--open {
          border-color: #BDD9F0;
          box-shadow: 0 4px 16px rgba(0,42,69,0.05);
        }
        .support-faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 22px;
          background: none;
          border: none;
          text-align: left;
          font-family: inherit;
          cursor: pointer;
          color: #002A45;
          transition: background 0.18s;
        }
        .support-faq-question-btn:hover {
          background: #F8FBFE;
        }
        .support-faq-question-text {
          font-size: 15.5px;
          font-weight: 700;
          line-height: 1.45;
          flex: 1;
        }
        .support-faq-chevron {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #EBF2F8;
          color: #002A45;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.22s ease, background 0.2s;
        }
        .support-faq-item--open .support-faq-chevron {
          transform: rotate(180deg);
          background: #002A45;
          color: #FFFFFF;
        }
        .support-faq-answer {
          padding: 0 22px 20px 22px;
          border-top: 1px solid #F0F4F8;
          background: #FAFDFE;
        }
        .support-faq-answer p {
          margin: 14px 0 0;
          font-size: 14px;
          line-height: 1.7;
          color: #4A6072;
        }

        /* ── Responsive ── */
        @media (max-width: 720px) {
          .support-contact-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .support-single-contact-card {
            padding: 24px 20px;
          }
          .support-card-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .support-action-btn {
            width: 100%;
            justify-content: center;
          }
        }
        @media (max-width: 600px) {
          .support-hero {
            padding: 85px 16px 44px;
          }
          .support-content-container {
            padding: 36px 16px 64px;
            gap: 44px;
          }
          .support-faq-question-btn {
            padding: 16px 18px;
          }
          .support-faq-answer {
            padding: 0 18px 18px;
          }
        }
      ` }} />
    </>
  );
}



