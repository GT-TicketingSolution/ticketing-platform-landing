"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Process", href: "#process" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#help" },
    { name: "FAQs", href: "#faqs" },
    { name: "Terms & Conditions", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Cancellation Policy", href: "#cancellation" },
  ];

  return (
    <>
      <footer className="footer-root" role="contentinfo">
        {/* Main Footer Content Container */}
        <div className="footer-container">
          <div className="footer-main-grid">
            {/* Column 1: Brand Logo & Description */}
            <div className="footer-brand-col">
              <Link href="/" className="footer-logo-link" aria-label="Ticketing Solution Home">
                <div className="footer-logo-icon-wrap">
                  <Image
                    src="/assest/images/logo.png"
                    alt="Ticketing Solution Logo"
                    width={58}
                    height={44}
                    className="footer-logo-img"
                  />
                </div>
                <div className="footer-brand-text">
                  <span className="footer-brand-title">Ticketing</span>
                  <span className="footer-brand-subtitle">SOLUTION</span>
                </div>
              </Link>

              <p className="footer-brand-desc">
                Your trusted platform for seamless ticket booking, travel management, and unforgettable journeys.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-nav-col">
              <h3 className="footer-col-title">Quick Links</h3>
              <ul className="footer-link-list">
                {quickLinks.map((link) => (
                  <li key={link.name} className="footer-link-item">
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vertical Divider 1 */}
            <div className="footer-divider-line" aria-hidden="true" />

            {/* Column 3: Support */}
            <div className="footer-nav-col footer-support-col">
              <h3 className="footer-col-title">Support</h3>
              <ul className="footer-link-list">
                {supportLinks.map((link) => (
                  <li key={link.name} className="footer-link-item">
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vertical Divider 2 */}
            <div className="footer-divider-line" aria-hidden="true" />
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; 2026 Ticketing Solution. All Rights Reserved.
          </p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        /* ── Footer Root (Figma Rectangle 360) ── */
        .footer-root {
          position: relative;
          width: 100%;
          background: #FFFFFF;
          box-shadow: 0px -4px 20.4px -6px rgba(0, 0, 0, 0.22);
          z-index: 20;
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .footer-container {
          width: 100%;
          max-width: 1340px;
          margin: 0 auto;
          padding: 68px clamp(24px, 4vw, 56px) 56px clamp(24px, 4vw, 56px);
          box-sizing: border-box;
        }

        .footer-main-grid {
          display: flex;
          align-items: flex-start;
          gap: 0;
          width: 100%;
        }

        /* ── Column 1: Brand & Desc ── */
        .footer-brand-col {
          width: 253px;
          flex-shrink: 0;
          margin-right: clamp(60px, 8vw, 120px);
        }

        .footer-logo-link {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          user-select: none;
        }

        .footer-logo-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 44px;
          flex-shrink: 0;
        }

        .footer-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .footer-brand-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 1;
        }

        .footer-brand-title {
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), var(--font-inter), sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 26px;
          line-height: 28px;
          color: #002A45;
          letter-spacing: -0.01em;
          display: block;
        }

        .footer-brand-subtitle {
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), var(--font-inter), sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;
          letter-spacing: 0.44em;
          color: #002A45;
          margin-top: 3px;
          text-transform: uppercase;
          display: block;
        }

        .footer-brand-desc {
          margin-top: 24px;
          width: 253px;
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px; /* 158% */
          color: #4A6072;
          letter-spacing: 0.20px;
        }

        /* ── Columns: Nav Links ── */
        .footer-nav-col {
          display: flex;
          flex-direction: column;
        }

        .footer-col-title {
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 26px;
          color: #002A45;
          margin: 0 0 22px 0;
          letter-spacing: -0.01em;
        }

        .footer-link-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-link-item {
          display: block;
        }

        .footer-link {
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14.5px;
          line-height: 20px;
          color: #4A6072;
          text-decoration: none;
          transition: color 0.18s ease;
          display: inline-block;
          white-space: nowrap;
        }

        .footer-link:hover {
          color: #002A45;
        }

        /* ── Vertical Dividers ── */
        .footer-divider-line {
          width: 1px;
          align-self: stretch;
          min-height: 210px;
          background: #DCE5ED;
          margin: 0 54px;
          flex-shrink: 0;
        }

        .footer-support-col {
          min-width: 160px;
        }

        /* ── Bottom Bar ── */
        .footer-bottom-bar {
          width: 100%;
          border-top: 1px solid #EBF1F6;
          padding: 24px 20px;
          box-sizing: border-box;
          text-align: center;
        }

        .footer-copyright {
          margin: 0;
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 13.5px;
          line-height: 1.5;
          color: #556B7D;
        }

        /* ── Responsive Overrides ── */
        @media (max-width: 1200px) {
          .footer-container {
            padding: 56px 36px 44px 36px;
          }
          .footer-brand-col {
            margin-right: 50px;
          }
          .footer-divider-line {
            margin: 0 36px;
          }
        }

        @media (max-width: 960px) {
          .footer-container {
            padding: 48px 24px 36px 24px;
          }
          .footer-main-grid {
            flex-wrap: wrap;
            gap: 40px 0;
          }
          .footer-brand-col {
            width: 100%;
            margin-right: 0;
          }
          .footer-brand-desc {
            max-width: 380px;
          }
          .footer-divider-line {
            margin: 0 28px;
          }
        }

        @media (max-width: 640px) {
          .footer-container {
            padding: 36px 20px 28px 20px;
          }
          .footer-main-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 24px;
            row-gap: 28px;
          }
          .footer-brand-col {
            grid-column: 1 / -1;
            width: 100%;
            margin-right: 0;
            padding-bottom: 22px;
            border-bottom: 1px solid #EEF3F7;
          }
          .footer-brand-desc {
            max-width: 100%;
            width: 100%;
            font-size: 13.5px;
            line-height: 22px;
            color: #556B7D;
            margin-top: 14px;
          }
          .footer-divider-line {
            display: none !important;
          }
          .footer-nav-col {
            width: 100%;
          }
          .footer-col-title {
            font-size: 16px;
            font-weight: 700;
            line-height: 22px;
            color: #002A45;
            margin: 0 0 14px 0;
            letter-spacing: -0.01em;
          }
          .footer-link-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .footer-link {
            font-size: 14px;
            line-height: 20px;
            color: #4A6072;
            white-space: normal;
            word-break: break-word;
            display: inline-block;
            padding: 2px 0;
          }
          .footer-link:hover,
          .footer-link:active {
            color: #F4BC43;
          }
          .footer-bottom-bar {
            padding: 20px 16px;
            border-top: 1px solid #EEF3F7;
          }
          .footer-copyright {
            font-size: 12.5px;
            line-height: 18px;
            color: #71879B;
            text-align: center;
          }
        }

        @media (max-width: 380px) {
          .footer-main-grid {
            column-gap: 16px;
          }
          .footer-col-title {
            font-size: 15px;
          }
          .footer-link {
            font-size: 13px;
          }
        }
      ` }} />
    </>
  );
}
