"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "How its works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // If target is not on current page (e.g. from /support), navigate to /#section
        window.location.href = "/" + href;
      }
    }
  };

  const router = useRouter();

  const supportLinks = [
    { name: "Help Center", href: "/support#help-center" },
    { name: "FAQs", href: "/support#faqs" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const handleSupportLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/terms" || href === "/privacy-policy") {
      e.preventDefault();
      router.push(href);
    } else if (href.startsWith("/support#")) {
      const hash = href.split("#")[1];
      if (typeof window !== "undefined" && window.location.pathname === "/support") {
        e.preventDefault();
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
          window.history.pushState(null, "", href);
        }
      }
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

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

            {/* Navigation & Contact Columns Group */}
            <div className="footer-nav-group">
              {/* Column 2: Quick Links */}
              <div className="footer-nav-col footer-quick-col">
                <h3 className="footer-col-title">Quick Links</h3>
                <ul className="footer-link-list">
                  {quickLinks.map((link) => (
                    <li key={link.name} className="footer-link-item">
                      <a href={link.href} className="footer-link" onClick={(e) => handleLinkClick(e, link.href)}>
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
                      <a
                        href={link.href}
                        className="footer-link"
                        onClick={(e) => handleSupportLinkClick(e, link.href)}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vertical Divider 2 */}
              <div className="footer-divider-line" aria-hidden="true" />

              {/* Column 4: Contact */}
              <div className="footer-nav-col footer-contact-col">
                <h3 className="footer-col-title">Contact</h3>
                <ul className="footer-contact-list">
                  {/* 1. Mobile / Phone Number */}
                  <li className="footer-contact-item">
                    <a href="tel:+919876543210" className="footer-contact-link" aria-label="Phone number">
                      <span className="footer-contact-icon-wrap" aria-hidden="true">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      <span className="footer-contact-text">+91 **********</span>
                    </a>
                  </li>

                  {/* 2. Email Address */}
                  <li className="footer-contact-item">
                    <a href="mailto:support@ticketingsolution.com" className="footer-contact-link" aria-label="Email address">
                      <span className="footer-contact-icon-wrap" aria-hidden="true">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </span>
                      <span className="footer-contact-text">support@ticketingsolution.com</span>
                    </a>
                  </li>

                  {/* 3. Instagram */}
                  <li className="footer-contact-item">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-contact-link"
                      aria-label="Instagram profile"
                    >
                      <span className="footer-contact-icon-wrap" aria-hidden="true">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </span>
                      <span className="footer-contact-text">Instagram: Link here come</span>
                    </a>
                  </li>

                  {/* 4. Facebook */}
                  <li className="footer-contact-item">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-contact-link"
                      aria-label="Facebook page"
                    >
                      <span className="footer-contact-icon-wrap" aria-hidden="true">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </span>
                      <span className="footer-contact-text">Facebook: link here come</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Ticketing Solution. All Rights Reserved.
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
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px clamp(20px, 3.5vw, 48px) 50px clamp(20px, 3.5vw, 48px);
          box-sizing: border-box;
        }

        .footer-main-grid {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
        }

        /* ── Column 1: Brand & Desc ── */
        .footer-brand-col {
          width: 250px;
          flex-shrink: 0;
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
          margin-top: 20px;
          width: 100%;
          max-width: 250px;
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          color: #4A6072;
          letter-spacing: 0.20px;
        }

        /* ── Navigation & Contact Columns Group ── */
        .footer-nav-group {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex: 1;
          max-width: 820px;
          margin-left: clamp(32px, 5vw, 72px);
        }

        /* ── Columns: Nav Links ── */
        .footer-nav-col {
          display: flex;
          flex-direction: column;
        }

        .footer-quick-col {
          min-width: 110px;
        }

        .footer-support-col {
          min-width: 140px;
        }

        .footer-contact-col {
          min-width: 230px;
        }

        .footer-col-title {
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 26px;
          color: #002A45;
          margin: 0 0 20px 0;
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
          width: 4px;
          border-left: 1.3px solid #c8d5e0ff;
          height: 165px;
          min-height: 165px;
          margin: 0 clamp(16px, 2.5vw, 36px);
          flex-shrink: 0;
          align-self: flex-start;
        }

        /* ── Column 4: Contact ── */
        .footer-contact-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact-item {
          display: block;
        }

        .footer-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14.5px;
          line-height: 20px;
          color: #4A6072;
          text-decoration: none;
          transition: all 0.18s ease;
          white-space: nowrap;
        }

        .footer-contact-link:hover {
          color: #002A45;
        }

        .footer-contact-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: #F0F5F9;
          color: #173F63;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .footer-contact-link:hover .footer-contact-icon-wrap {
          background: #F4BC43;
          color: #011B2F;
          transform: translateY(-1px);
        }

        .footer-contact-text {
          white-space: nowrap;
        }

        /* ── Bottom Bar ── */
        .footer-bottom-bar {
          width: 100%;
          border-top: 1.5px solid #d8e3ebff;
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
        @media (max-width: 1150px) {
          .footer-container {
            padding: 56px 24px 40px 24px;
          }
          .footer-nav-group {
            margin-left: 28px;
          }
          .footer-divider-line {
            margin: 0 18px;
          }
          .footer-contact-text {
            white-space: normal;
          }
        }

        @media (max-width: 920px) {
          .footer-main-grid {
            flex-direction: column;
            gap: 36px;
          }
          .footer-brand-col {
            width: 100%;
            max-width: 480px;
          }
          .footer-nav-group {
            width: 100%;
            max-width: 100%;
            margin-left: 0;
          }
        }

        @media (max-width: 640px) {
          .footer-container {
            padding: 36px 20px 28px 20px;
          }
          .footer-nav-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 20px;
            row-gap: 28px;
          }
          .footer-divider-line {
            display: none !important;
          }
          .footer-nav-col {
            width: 100%;
          }
          .footer-contact-col {
            grid-column: 1 / -1;
            margin-top: 8px;
            padding-top: 20px;
            border-top: 1px solid #EEF3F7;
          }
          .footer-col-title {
            font-size: 16px;
            font-weight: 700;
            line-height: 22px;
            color: #002A45;
            margin: 0 0 14px 0;
            letter-spacing: -0.01em;
          }
          .footer-link-list,
          .footer-contact-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .footer-link,
          .footer-contact-link {
            font-size: 14px;
            line-height: 20px;
            color: #4A6072;
            white-space: normal;
            word-break: break-word;
            display: inline-flex;
            padding: 2px 0;
          }
          .footer-link:hover,
          .footer-link:active,
          .footer-contact-link:hover,
          .footer-contact-link:active {
            color: #173F63;
          }
          .footer-bottom-bar {
            padding: 20px 16px;
            border-top: 1px solid #EEF3F7;
          }
          .footer-copyright {
            font-size: 12.5px;
        }

        @media (max-width: 380px) {
          .footer-nav-group {
            column-gap: 16px;
          }
          .footer-col-title {
            font-size: 15px;
          }
          .footer-link,
          .footer-contact-link {
            font-size: 13px;
          }
        }
      ` }} />
    </>
  );
}
