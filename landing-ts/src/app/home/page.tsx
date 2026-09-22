"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/header";

export default function HomePage() {
  return (
    <>
      {/* Fixed Header */}
      <Header activeTab="Home" />

      {/* ─── Hero Page Wrapper ─── */}
      <div id="home" className="hero-page">

        {/* Layer 1 – Arc Graphic (absolute, behind content) */}
        <div className="hero-arc-wrap">
          <Image
            src="/assest/icons/homeIconCurve.png"
            alt="Feature icons curve"
            width={1136}
            height={407}
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Layer 2 – Central Text Content */}
        <div className="hero-content">
          <p className="hero-kicker">
            SMART ATTRACTION &amp; TICKETING PLATFORM
          </p>
          <h1 className="hero-title">
            Manage Every Journey,
            <br />
            <span className="hero-title-gold">From One Place.</span>
          </h1>
          <p className="hero-desc">
            A unified desktop platform for managing attractions,
            <br className="hero-desc-break" />
            ticket bookings, visitors, seating and daily operations.
          </p>
          <a href="#explore" className="hero-cta" id="hero-explore-btn">
            <span>Explore Platform</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Layer 3 – Full-width landscape (outside centered container) */}
        <div className="hero-landscape">
          <Image
            src="/assest/images/homeImg.png"
            alt="Heritage fort and mountain landscape"
            width={1440}
            height={517}
            priority
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `

        /* ── Reset ── */
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; overflow-x: hidden; overflow-y: auto; }

        /* ── Hero wrapper: full-viewport minus header ── */
        .hero-page {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 74px);
          background: #fff;
          overflow-x: hidden;         /* clips landscape to page edges  */
          overflow-y: visible;        /* allow page to scroll            */
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Arc: pinned to top-center, reduced width so icons look smaller ── */
        .hero-arc-wrap {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: min(920px, 85%);
          pointer-events: none;
          z-index: 1;
        }

        /* ── Content block: sits inside the open arch ── */
        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          /* arc is now 920px wide; height = (arc-width / 1136) * 407
             Reduced padding-top to bring kicker text closer to the arch */
          padding-top: 14%;
          padding-left: 24px;
          padding-right: 24px;
        }

        /* ── Kicker ── */
        .hero-kicker {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 500;
          font-size: 13px;
          line-height: 18px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #173F63;
          margin: 0 0 12px 0;
        }

        /* ── Heading ── */
        .hero-title {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: clamp(24px, 3vw, 48px);
          line-height: 1.18;
          color: #011B2F;
          margin: 0 0 10px 0;
          letter-spacing: -0.015em;
          max-width: 700px;
        }

        .hero-title-gold {
          color: #F4BC43;
        }

        /* ── Description ── */
        .hero-desc {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 400;
          font-size: 15px;
          line-height: 22px;
          letter-spacing: 0.03em;
          color: #011B2F;
          margin: 0 0 22px 0;
          max-width: 460px;
        }

        /* ── CTA Button ── */
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          height: 48px;
          padding: 0 30px;
          background: #011B2F;
          border-radius: 30px;
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(1,27,47,0.25);
          transition: all 0.22s ease;
          position: relative;
          z-index: 11;
        }
        .hero-cta:hover {
          background: #002A45;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(1,27,47,0.35);
        }

        /* ── Landscape: glued to bottom, full viewport width ── */
        .hero-landscape {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 53%;           /* occupies lower 53% of hero section  */
          min-height: 300px;
          pointer-events: none;
          z-index: 5;
        }

        /* ── Responsive overrides ── */

        /* Large desktops: cap padding-top so text doesn't go too low */
        @media (min-width: 1300px) {
          .hero-content {
            padding-top: 180px;
          }
        }

        /* Small laptops / tablets landscape */
        @media (max-width: 1024px) {
          .hero-content {
            padding-top: 14%;
          }
          .hero-title {
            font-size: clamp(26px, 4vw, 46px);
          }
        }

        /* Tablets portrait */
        @media (max-width: 768px) {
          .hero-content {
            padding-top: 13%;
          }
          .hero-kicker {
            font-size: 12px;
            letter-spacing: 0.13em;
          }
          .hero-title {
            font-size: clamp(24px, 5vw, 38px);
          }
          .hero-desc {
            font-size: 14px;
            max-width: 380px;
          }
          .hero-desc-break {
            display: none;
          }
          .hero-landscape {
            height: 48%;
            min-height: 240px;
          }
        }

        /* Mobile phones */
        @media (max-width: 540px) {
          .hero-page {
            min-height: calc(100vh - 72px);
          }
          .hero-content {
            padding-top: 44vw;
          }
          .hero-kicker {
            font-size: 11px;
            letter-spacing: 0.11em;
          }
          .hero-title {
            font-size: clamp(22px, 6.5vw, 32px);
            max-width: 100%;
          }
          .hero-desc {
            font-size: 13px;
            max-width: 90%;
          }
          .hero-cta {
            height: 44px;
            padding: 0 24px;
            font-size: 14px;
          }
          .hero-landscape {
            height: 42%;
            min-height: 200px;
          }
        }

        /* Very small phones */
        @media (max-width: 380px) {
          .hero-content {
            padding-top: 46vw;
          }
          .hero-title {
            font-size: 22px;
          }
        }

      ` }} />
    </>
  );
}
