"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SignUpModal from "@/components/SignUpModal";

function FtsChairIcon({ size = 36, color = "#011B2F" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="15" y="8" width="14" height="17" rx="3.5" />
      <line x1="15" y1="14" x2="29" y2="14" />
      <rect x="9" y="18" width="5.5" height="12" rx="2.5" />
      <rect x="29.5" y="18" width="5.5" height="12" rx="2.5" />
      <rect x="13.5" y="24" width="17" height="6.5" rx="2" />
      <line x1="14" y1="30.5" x2="12" y2="38" />
      <line x1="30" y1="30.5" x2="32" y2="38" />
      <line x1="12" y1="35.5" x2="32" y2="35.5" />
    </svg>
  );
}

function FtsChartIcon({ size = 36, color = "#011B2F" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="24" width="6.5" height="13" rx="2.5" />
      <rect x="18.75" y="15.5" width="6.5" height="21.5" rx="2.5" />
      <rect x="27.5" y="7" width="6.5" height="30" rx="2.5" />
    </svg>
  );
}

function FtsTicketIcon({ size = 36, color = "#011B2F" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <g transform="rotate(-38 22 22)">
        <path d="M8 14a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v3.5a3 3 0 0 0 0 6V27a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-3.5a3 3 0 0 0 0-6V14z" />
        <circle cx="22" cy="20.5" r="3" />
      </g>
    </svg>
  );
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      {/* Fixed Header */}
      <Header activeTab="Home" onSignUpClick={openModal} />

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
          <button
            type="button"
            className="hero-cta"
            id="hero-explore-btn"
            onClick={openModal}
          >
            <span>Explore Platform</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
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

      {/* ─── How It Works Section ─── */}
      <section id="how-it-works" className="hiw-section">
        {/* Background clouds */}
        <div className="hiw-bg">
          <Image
            src="/assest/images/bluebg.png"
            alt="Cloud background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center top", opacity: 0.85 }}
          />
        </div>

        {/* Section Header */}
        <div className="hiw-header">
          <p className="hiw-kicker">H O W &nbsp; I T &nbsp; W O R K S</p>
          <h2 className="hiw-title">
            From attraction setup to
            <br />
            <span className="hiw-title-gold">ticket completion.</span>
          </h2>
        </div>

        {/* Steps Flow with Full-Width Connecting Wave (No Left/Right gaps) */}
        <div className="hiw-flow-wrapper">
          {/* Yellow Wavy Connecting Curve - Spans 100% edge-to-edge */}
          <div className="hiw-curve-bg">
            <Image
              src="/assest/images/homeCurveImg.png"
              alt="Process workflow curve"
              width={1440}
              height={382}
              priority
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Step 1: Set Up */}
          <div className="hiw-step-col hiw-step-1">
            <div className="hiw-icon-wrap">
              <Image
                src="/assest/icons/setupIcon.png"
                alt="Set Up Icon"
                width={72}
                height={72}
                className="hiw-icon-img"
              />
            </div>
            <h3 className="hiw-step-title">Set Up</h3>
            <p className="hiw-step-desc">
              Add attractions and set visitor categories.
            </p>
            <div className="hiw-card-wrap">
              <Image
                src="/assest/images/addAttractionImg.png"
                alt="Add Attraction - Amer Fort"
                width={237}
                height={140}
                className="hiw-card-img"
              />
            </div>
          </div>

          {/* Step 2: Configure */}
          <div className="hiw-step-col hiw-step-2">
            <div className="hiw-icon-wrap">
              <Image
                src="/assest/icons/configureIcon.png"
                alt="Configure Icon"
                width={72}
                height={72}
                className="hiw-icon-img"
              />
            </div>
            <h3 className="hiw-step-title">Configure</h3>
            <p className="hiw-step-desc">
              Set pricing, capacity and layouts.
            </p>
            <div className="hiw-card-wrap">
              <Image
                src="/assest/images/layoutImg.png"
                alt="Layout and Capacity"
                width={261}
                height={129}
                className="hiw-card-img"
              />
            </div>
          </div>

          {/* Step 3: Book */}
          <div className="hiw-step-col hiw-step-3">
            <div className="hiw-icon-wrap">
              <Image
                src="/assest/icons/bookIcon.png"
                alt="Book Icon"
                width={72}
                height={72}
                className="hiw-icon-img"
              />
            </div>
            <h3 className="hiw-step-title">Book</h3>
            <p className="hiw-step-desc">
              Create bookings and manage visitors.
            </p>
            <div className="hiw-card-wrap">
              <Image
                src="/assest/images/visitorImg.png"
                alt="Visitors Selection"
                width={231}
                height={122}
                className="hiw-card-img"
              />
            </div>
          </div>

          {/* Step 4: Process */}
          <div className="hiw-step-col hiw-step-4">
            <div className="hiw-icon-wrap">
              <Image
                src="/assest/icons/processIcon.png"
                alt="Process Icon"
                width={72}
                height={72}
                className="hiw-icon-img"
              />
            </div>
            <h3 className="hiw-step-title">Process</h3>
            <p className="hiw-step-desc">
              Handle payments and generate invoices.
            </p>
            <div className="hiw-card-wrap">
              <Image
                src="/assest/images/paymentImg.png"
                alt="Payment Confirmation"
                width={235}
                height={109}
                className="hiw-card-img"
              />
            </div>
          </div>

          {/* Step 5: Track */}
          <div className="hiw-step-col hiw-step-5">
            <div className="hiw-icon-wrap">
              <Image
                src="/assest/icons/trackIcon.png"
                alt="Track Icon"
                width={72}
                height={72}
                className="hiw-icon-img"
              />
            </div>
            <h3 className="hiw-step-title">Track</h3>
            <p className="hiw-step-desc">
              Monitor operations and real-time reports.
            </p>
            <div className="hiw-card-wrap">
              <Image
                src="/assest/images/trackImg.png"
                alt="Today's Operations Analytics"
                width={262}
                height={111}
                className="hiw-card-img"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ─── Possibilities Section (Built to fit the attraction) ─── */}
      <section id="possibilities" className="pos-section">
        {/* Background clouds */}
        <div className="pos-bg">
          <Image
            src="/assest/images/bluebg.png"
            alt="Cloud background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center top", opacity: 0.85 }}
          />
        </div>

        {/* Section Header */}
        <div className="pos-header">
          <p className="pos-kicker">O N E &nbsp; S Y S T E M . &nbsp; M A N Y &nbsp; P O S S I B I L I T I E S .</p>
          <h2 className="pos-title">
            Built to <span className="pos-title-gold">fit the attraction,</span>
            <br />
            not the other way around.
          </h2>
        </div>

        {/* 3 Possibility Cards Grid */}
        <div className="pos-grid">
          {/* Card 1: 01 Simple */}
          <div className="pos-card pos-card-1">
            <div className="pos-card-icon-wrap">
              <Image
                src="/assest/icons/simpleIcon.png"
                alt="Simple Icon"
                width={86}
                height={86}
                className="pos-card-icon"
              />
            </div>
            <div className="pos-card-content">
              <h3 className="pos-card-title">01 Simple</h3>
              <div className="pos-card-text-block">
                <p className="pos-card-text">
                  Less complexity.
                  <br />
                  More control.
                </p>
                <p className="pos-card-text pos-card-text-spaced">
                  Everyday operations made
                  <br />
                  clear and easy to manage.
                </p>
              </div>
            </div>
            <div className="pos-card-img-wrap">
              <Image
                src="/assest/images/simpleImg.png"
                alt="Simple operations dashboard"
                width={304}
                height={146}
                className="pos-card-img"
              />
            </div>
          </div>

          {/* Card 2: 02 Flexible */}
          <div className="pos-card pos-card-2">
            <div className="pos-card-icon-wrap">
              <Image
                src="/assest/icons/flexibleIcon.png"
                alt="Flexible Icon"
                width={86}
                height={86}
                className="pos-card-icon"
              />
            </div>
            <div className="pos-card-content">
              <h3 className="pos-card-title">02 Flexible</h3>
              <div className="pos-card-text-block">
                <p className="pos-card-text">
                  Different attractions.
                  <br />
                  Different needs.
                </p>
                <p className="pos-card-text pos-card-text-spaced">
                  Designed to adapt to
                  <br />
                  different layouts, visitor
                  <br />
                  flows and experiences.
                </p>
              </div>
            </div>
            <div className="pos-card-img-wrap">
              <Image
                src="/assest/images/flexibleImg.png"
                alt="Flexible attraction types"
                width={292}
                height={158}
                className="pos-card-img"
              />
            </div>
          </div>

          {/* Card 3: 03 Ready to Grow */}
          <div className="pos-card pos-card-3">
            <div className="pos-card-icon-wrap">
              <Image
                src="/assest/icons/readyIcon.png"
                alt="Ready to Grow Icon"
                width={86}
                height={86}
                className="pos-card-icon"
              />
            </div>
            <div className="pos-card-content">
              <h3 className="pos-card-title">03 Ready to Grow</h3>
              <div className="pos-card-text-block">
                <p className="pos-card-text">
                  Start with one.
                  <br />
                  Scale when you&apos;re ready.
                </p>
                <p className="pos-card-text pos-card-text-spaced">
                  A system that can grow
                  <br />
                  alongside the attractions you
                  <br />
                  manage.
                </p>
              </div>
            </div>
            <div className="pos-card-img-wrap">
              <Image
                src="/assest/images/readyImg.png"
                alt="Scalable growth illustration"
                width={274}
                height={156}
                className="pos-card-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features Section ─── */}
      <section id="features" className="fts-section" aria-label="Platform Features">
        {/* Section Header – style code matching How It Works header */}
        <div className="fts-header">
          <p className="fts-kicker">P L A T F O R M &nbsp; F E A T U R E S</p>
          <h2 className="fts-title">
            Everything you need,
            <br />
            <span className="fts-title-gold">connected in one place.</span>
          </h2>
        </div>

        {/* Hero: Orbital Diagram */}
        <div className="fts-hero">
          <div className="fts-hero-inner">
            {/* Orbital Diagram with scrollImg.png */}
            <div className="fts-orbit-stage" aria-label="Feature modules orbiting the platform">
              <div className="fts-orbit-img-wrap">
                <Image
                  src="/assest/images/scrollImg.png"
                  alt="Platform Features Diagram"
                  width={630}
                  height={420}
                  priority
                  className="fts-scroll-img"
                />

                {/* Top-Left: Attractions */}
                <div className="fts-label fts-label--attractions">
                  <span className="fts-node-title">Attractions Management</span>
                  <span className="fts-node-sub">Add &amp; manage destinations</span>
                </div>

                {/* Top-Right: Customers */}
                <div className="fts-label fts-label--customers">
                  <span className="fts-node-title">Layouts</span>
                  <span className="fts-node-sub">Configure capacity</span>
                </div>

                {/* Bottom-Right: Operations */}
                <div className="fts-label fts-label--operations">

                  <span className="fts-node-title">Reports</span>
                  <span className="fts-node-sub">Generate &amp; view reports</span>
                </div>

                {/* Bottom: Layouts */}
                <div className="fts-label fts-label--layouts">
                  <span className="fts-node-title">Complimentary Pass</span>
                  <span className="fts-node-sub">Manage VIP pass</span>
                </div>

                {/* Middle-Left: Bookings */}
                <div className="fts-label fts-label--bookings">
                  <span className="fts-node-title">CCTV Monitoring</span>
                  <span className="fts-node-sub">View live footage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlights Bar */}
        <div className="fts-bar" aria-label="Key platform highlights">
          <div className="fts-bar-inner">
            <div className="fts-bar-item">
              <div className="fts-bar-icon-wrap">
                <FtsTicketIcon size={26} color="#011B2F" />
              </div>
              <div className="fts-bar-text">
                <span className="fts-bar-title">Smart Ticketing</span>
                <span className="fts-bar-sub">Fast and organized booking.</span>
              </div>
            </div>
            <div className="fts-bar-divider" aria-hidden="true" />
            <div className="fts-bar-item">
              <div className="fts-bar-icon-wrap">
                <FtsChairIcon size={26} color="#011B2F" />
              </div>
              <div className="fts-bar-text">
                <span className="fts-bar-title">Flexible Layouts</span>
                <span className="fts-bar-sub">Manage seating and attraction layouts.</span>
              </div>
            </div>
            <div className="fts-bar-divider" aria-hidden="true" />
            <div className="fts-bar-item">
              <div className="fts-bar-icon-wrap">
                <FtsChartIcon size={26} color="#011B2F" />
              </div>
              <div className="fts-bar-text">
                <span className="fts-bar-title">Complete Control</span>
                <span className="fts-bar-sub">Track operations from one platform.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner Section (Ready to take control?) ─── */}
      <section id="cta" className="cta-section">
        {/* Background clouds */}
        <div className="cta-bg">
          <Image
            src="/assest/images/bluebg.png"
            alt="Cloud background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center top", opacity: 0.85 }}
          />
        </div>

        <div className="cta-container">
          <div className="cta-card">
            {/* Left Content Area */}
            <div className="cta-content">
              <p className="cta-kicker">YOUR OPERATIONS, ONE PLATFORM.</p>
              <h2 className="cta-title">Ready to take control?</h2>
              <button
                type="button"
                className="cta-btn"
                id="cta-enter-btn"
                onClick={openModal}
              >
                <span>Enter Ticketing Solution</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10H16M16 10L10.5 4.5M16 10L10.5 15.5" stroke="#002A45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Right Palace/Mahal Illustration */}
            <div className="cta-img-wrap">
              <Image
                src="/assest/images/mahalImg.png"
                alt="Heritage Mahal Palace"
                width={539}
                height={539}
                priority
                className="cta-mahal-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer Section ─── */}
      <Footer />

      {/* ─── Sign Up Modal ─── */}
      <SignUpModal isOpen={isModalOpen} onClose={closeModal} />

      <style dangerouslySetInnerHTML={{
        __html: `

        /* ── Reset ── */
        *, *::before, *::after { box-sizing: border-box; }

        /* ── Hero wrapper ── */
        .hero-page {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 74px);
          background: #fff;
          overflow-x: clip;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Arc: pinned to top-center ── */
        .hero-arc-wrap {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: min(860px, 76%);
          pointer-events: none;
          z-index: 1;
          max-width: 100vw;
          overflow: hidden;
        }

        /* ── Content block ── */
        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          padding-top: clamp(120px, 19%, 230px);
          padding-bottom: clamp(160px, 32%, 280px);
          padding-left: 24px;
          padding-right: 24px;
          flex: 1;
          justify-content: flex-start;
        }

        /* ── Kicker ── */
        .hero-kicker {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 500;
          font-size: 13px;
          line-height: 18px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #206997ff;
          margin: 0 0 14px 0;
        }

        /* ── Heading ── */
        .hero-title {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: clamp(28px, 3.2vw, 52px);
          line-height: 1.18;
          color: #011B2F;
          margin: 0 0 12px 0;
          letter-spacing: -0.015em;
          max-width: 700px;
        }

        .hero-title-gold {
          color: #F4BC43;
        }

        /* ── Description ── */
        .hero-desc {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 450;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0.03em;
          color: #1c425fff;
          margin: 0 0 26px 0;
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
          border: none;
          cursor: pointer;
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

        /* ── Landscape ── */
        .hero-landscape {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60%;
          min-height: 260px;
          pointer-events: none;
          z-index: 5;
          overflow: hidden;
        }

        /* ═══════════════════════════════════════════════
           ── HOW IT WORKS SECTION ──
        ═══════════════════════════════════════════════ */
        .hiw-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          padding-top: clamp(60px, 8vw, 85px);
          padding-bottom: clamp(10px, 2vw, 24px);
          overflow-x: clip;
          scroll-margin-top: 74px;
        }

        /* Background clouds */
        .hiw-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        /* Header (Centered) */
        .hiw-header {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 1200px;
          margin: -50px auto clamp(1px, 0vw, 7px) auto;
          padding: 0 24px;
        }

        .hiw-kicker {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
           font-size: clamp(9px, 1.1vw, 12px);
          line-height: 18px;
          letter-spacing: 0.20em;
          text-transform: uppercase;
           color: #8394a2ff;
          margin-bottom: 12px;
        }

        .hiw-title {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: clamp(26px, 3.3vw, 46px);
          line-height: 1.2;
          letter-spacing: -0.015em;
          color: #011B2F;
          margin: 0;
        }

        .hiw-title-gold {
          color: #F4BC43;
        }

        /* Flow wrapper: Full width (0 left/right gaps) with container queries for 100% locked geometry */
        .hiw-flow-wrapper {
          position: relative;
          width: 100%;
          max-width: 100vw;
          container-type: inline-size;
          min-height: calc(221 / 1440 * 100cqw + 225px);
          z-index: 2;
        }

        /* Full width yellow curve line - 0px gap left and right */
        .hiw-curve-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          pointer-events: none;
          z-index: 2;
        }

        /* Step Column */
        .hiw-step-col {
          position: absolute;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: min(230px, 17.5cqw);
          transform: translateX(-50%);
          transition: transform 0.25s ease;
        }

        /* Exact (X, Y) Alignment Coordinates derived from homeCurveImg.png (1440 x 382) */
        .hiw-step-1 {
          left: 12.64cqw;
          top: calc(177 / 1440 * 100cqw - 36px);
        }

        .hiw-step-2 {
          left: 30.62cqw;
          top: calc(71 / 1440 * 100cqw - 36px);
        }

        .hiw-step-3 {
          left: 49.17cqw;
          top: calc(214 / 1440 * 100cqw - 36px);
        }

        .hiw-step-4 {
          left: 69.17cqw;
          top: calc(74 / 1440 * 100cqw - 36px);
        }

        .hiw-step-5 {
          left: 88.68cqw;
          top: calc(221 / 1440 * 100cqw - 36px);
        }

        /* Icon Badge */
        .hiw-icon-wrap {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hiw-icon-img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        /* Step Title */
        .hiw-step-title {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 900;
          font-size: clamp(15px, 1.22vw, 18px);
          line-height: 22px;
          color: #011B2F;
          margin: 0 0 4px 0;
        }

        /* Step Description */
        .hiw-step-desc {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: clamp(8px, 0.86vw, 12px);
          line-height: 158.23%;
          text-align: center;
          color: #011B2F;
          width: 189px;
          max-width: 100%;
          min-height: 42px;
          margin: 0 auto 12px auto;
        }

        /* Card Container */
        .hiw-card-wrap {
          width: 100%;
          max-width: 228px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.25s ease, filter 0.25s ease;
        }

        .hiw-card-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 12px;
        }

        /* ═══════════════════════════════════════════════
           ── FEATURES SECTION ──
        ═══════════════════════════════════════════════ */
        .fts-section {
          width: 100%;
          background: #ffffff;
          scroll-margin-top: 74px;
          display: flex;
          flex-direction: column;
          padding-top: clamp(24px, 4vw, 56px);
        }

        /* Section Header (styled identical to How It Works header) */
        .fts-header {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto clamp(20px, 3vw, 36px) auto;
          padding: 0 24px;
        }

        .fts-kicker {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(9px, 1.1vw, 12px);
          line-height: 18px;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: #8394a2ff;
          margin: 0 0 12px;
        }

        .fts-title {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: clamp(26px, 3.3vw, 46px);
          line-height: 1.2;
          letter-spacing: -0.015em;
          color: #011B2F;
          margin: 0;
        }

        .fts-title-gold {
          color: #F4BC43;
        }

        /* Hero (orbital diagram) */
        .fts-hero {
          background: #ffffff;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 24px 0;
          overflow: hidden;
          position: relative;
        }

        .fts-hero-inner {
          width: 100%;
          max-width: 1060px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Orbit stage container with scrollImg.png */
        .fts-orbit-stage {
          width: 100%;
          max-width: 980px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 44px 40px 52px;
          margin-bottom: 0px;
        }

        .fts-orbit-img-wrap {
          position: relative;
          width: 100%;
          max-width: 660px;
        }

        .fts-scroll-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 14px 34px rgba(1, 27, 47, 0.08));
        }

        /* Overlaid feature labels */
        .fts-label {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 2px;
          pointer-events: none;
          z-index: 3;
        }

        .fts-node-title {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(12.5px, 1.35vw, 15px);
          font-weight: 700;
          color: #011B2F;
          line-height: 1.25;
          white-space: nowrap;
        }

        .fts-node-sub {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(10.5px, 1.1vw, 12.5px);
          font-weight: 400;
          color: #5A7184;
          line-height: 1.35;
          white-space: nowrap;
        }

        /* Positions relative to scrollImg.png */
        /* Top: Attractions Management - positioned directly ABOVE the Attraction icon */
        .fts-label--attractions {
          top: -5%;
          left: 29.5%;
          transform: translateX(-50%);
          text-align: center;
          align-items: center;
        }

        /* Top-Right: Layouts */
        .fts-label--customers {
          top: 22%;
          left: 92%;
          transform: translateY(-50%);
          text-align: left;
          align-items: flex-start;
        }

        /* Bottom-Right: Reports */
        .fts-label--operations {
          top: 66%;
          left: 94%;
          transform: translateY(-50%);
          text-align: left;
          align-items: flex-start;
        }

        /* Bottom: Complimentary Pass - positioned directly BELOW the Complimentary Pass icon */
        .fts-label--layouts {
          top: 98%;
          left: 43.5%;
          transform: translateX(-50%);
          text-align: center;
          align-items: center;
        }

        /* Middle-Left: CCTV Monitoring - centered beneath the left card, completely clear of yellow dot */
        .fts-label--bookings {
          top: 66%;
          left: 12%;
          transform: translateX(-50%);
          text-align: center;
          align-items: center;
        }

        /* Bottom Highlights Bar */
        .fts-bar {
          background: #ffffff;
          width: 100%;
          padding: 26px 24px 24px;
          margin-top: 40px;
        }

        .fts-bar-inner {
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fts-bar-item {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
          justify-content: center;
          padding: 8px 20px;
        }

        .fts-bar-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #FFF9EC;
          border: 2px solid #F4BC43;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(244, 188, 67, 0.2);
        }

        .fts-bar-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .fts-bar-title {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #011B2F;
          line-height: 1.3;
        }

        .fts-bar-sub {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          color: #5A7184;
          line-height: 1.4;
        }

        .fts-bar-divider {
          width: 1px;
          height: 44px;
          background: #E2E8F0;
          flex-shrink: 0;
        }

        /* ── Features Responsive ── */
        @media (max-width: 900px) {
          .fts-orbit-stage {
            padding: 38px 24px 44px;
            margin-bottom: 0;
          }
          .fts-orbit-img-wrap {
            max-width: 540px;
          }
          .fts-label--customers {
            left: 90%;
          }
          .fts-label--operations {
            left: 91%;
          }
        }

        @media (max-width: 768px) {
          .fts-header {
            margin-bottom: 16px;
          }
          .fts-hero {
            padding: 4px 16px 0;
          }
          .fts-orbit-stage {
            padding: 32px 16px 38px;
            margin-bottom: 0;
          }
          .fts-orbit-img-wrap {
            max-width: 440px;
          }
          .fts-node-sub {
            display: none;
          }
          .fts-node-title {
            font-size: 11px;
          }
          .fts-label--attractions {
            top: -10%;
          }
          .fts-label--layouts {
            top: 97%;
          }
          .fts-label--bookings {
            top: 65%;
            left: 12%;
          }

          .fts-bar {
            padding: 14px 20px 20px;
          }
          .fts-bar-inner {
            flex-direction: column;
            gap: 12px;
          }
          .fts-bar-divider {
            width: 60%;
            height: 1px;
            margin: 4px 0;
          }
          .fts-bar-item {
            justify-content: flex-start;
            width: 100%;
            max-width: 320px;
            padding: 6px 0;
          }
        }

        @media (max-width: 480px) {
          .fts-orbit-stage {
            padding: 26px 10px 32px;
          }
          .fts-orbit-img-wrap {
            max-width: 310px;
          }
          .fts-node-title {
            font-size: 9.5px;
          }
          .fts-label--attractions {
            top: -10%;
            left: 29.5%;
          }
          .fts-label--customers {
            left: 88%;
          }
          .fts-label--operations {
            left: 89%;
          }
          .fts-label--layouts {
            top: 97%;
            left: 43.5%;
          }
          .fts-label--bookings {
            top: 65%;
            left: 12%;
          }
        }

        @media (max-width: 360px) {
          .fts-orbit-img-wrap {
            max-width: 280px;
          }
          .fts-node-title {
            font-size: 8.5px;
          }
          .fts-label--customers {
            left: 86%;
          }
          .fts-label--operations {
            left: 87%;
          }
        }

        /* ═══════════════════════════════════════════════
           ── POSSIBILITIES SECTION ──
        ═══════════════════════════════════════════════ */
        .pos-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          padding-top: clamp(10px, 2vw, 24px);
          padding-bottom: clamp(20px, 2.5vw, 36px);
          overflow-x: clip;
        }

        /* Background clouds */
        .pos-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        /* Header (Centered) */
        .pos-header {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto clamp(54px, 4.5vw, 48px) auto;
          padding: 30px 24px;
        }

        .pos-kicker {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: clamp(9px, 1.1vw, 12px);
          line-height: 20px;
          text-align: center;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #8394a2ff;
          margin-bottom: 10px;
        }

        .pos-title {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 800;
          font-size: clamp(26px, 3.4vw, 46px);
          line-height: 1.25;
          text-align: center;
          color: #011B2F;
          margin: 0 auto;
          max-width: 680px;
        }

        .pos-title-gold {
          color: #F4BC43;
        }

        /* 3 Cards Grid */
        .pos-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          max-width: 1160px;
          margin: 0 auto;
          column-gap: clamp(20px, 3vw, 36px);
          padding: 0 24px;
          align-items: start;
        }

        /* Card Container (Frosted Glass with Soft Sky Blue Tint) */
        .pos-card {
          position: relative;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          width: 100%;
          max-width: 350px;
          margin: 0 auto;
          background: rgba(226, 236, 242, 0.45);
          border: 1.5px solid rgba(163, 215, 248, 0.7);
          box-shadow: 0 16px 36px rgba(1, 27, 47, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.8) inset;
          border-radius: 31px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 50px 32px 24px 32px;
          text-align: left;
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease, border-color 0.28s ease;
        }

        .pos-card:hover {
          transform: translateY(-6px);
          border-color: rgba(163, 215, 248, 0.95);
          background: rgba(212, 229, 239, 0.55);
          box-shadow: 0 24px 50px rgba(1, 27, 47, 0.08), 0 0 20px rgba(163, 215, 248, 0.35);
        }

        /* Middle Card Staggered Down */
        .pos-card-2 {
          margin-top: 48px;
        }

        /* Floating Icon badge overlapping top-left of card */
        .pos-card-icon-wrap {
          position: absolute;
          top: -48px;
          left: 32px;
          width: 96px;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          filter: drop-shadow(0 6px 14px rgba(1, 27, 47, 0.06));
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .pos-card:hover .pos-card-icon-wrap {
          transform: scale(1.06) translateY(-2px);
        }

        .pos-card-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Card Content Block */
        .pos-card-content {
          text-align: left;
          width: 100%;
        }

        /* Card Title */
        .pos-card-title {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 122%;
          color: #011B2F;
          text-align: left;
          margin: 8px 0 14px 0;
        }

        /* Card Text */
        .pos-card-text-block {
          text-align: left;
          width: 100%;
        }

        .pos-card-text {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 14.5px;
          line-height: 1.45;
          color: #4f5860ff;
          text-align: left;
          margin: 0;
        }

        .pos-card-text-spaced {
          margin-top: 14px;
          font-weight: 600;
        }

        /* Bottom Illustration Container */
        .pos-card-img-wrap {
          margin-top: 24px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .pos-card-img {
          width: 100%;
          height: auto;
          max-height: 155px;
          object-fit: contain;
        }

        /* ═══════════════════════════════════════════════
           ── CTA SECTION ──
        ═══════════════════════════════════════════════ */
        .cta-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          padding-top: clamp(90px, 9vw, 110px);
          padding-bottom: clamp(60px, 8vw, 90px);
          overflow: visible;
        }

        /* Background clouds */
        .cta-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        /* Centered container with max-width */
        .cta-container {
          position: relative;
          z-index: 2;
          max-width: 1340px;
          margin: 0 auto;
          padding: 0 clamp(26px, 2vw, 24px);
        }

        /* Dark navy CTA card */
        .cta-card {
          position: relative;
          background: #002A45;
          border-radius: 21px;
          width: 100%;
          min-height: 380px;
          display: flex;
          align-items: center;
          overflow: visible;
          padding: 60px 64px 60px 80px;
        }

        /* Left content area */
        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
          flex: 1;
          max-width: 560px;
          z-index: 3;
        }

        /* Kicker */
        .cta-kicker {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.75);
          margin: 0 0 20px 0;
        }

        /* Heading */
        .cta-title {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: clamp(28px, 3.6vw, 52px);
          line-height: 1.15;
          color: #FFFFFF;
          margin: 0 0 40px 0;
          white-space: nowrap;
        }

        /* Gradient CTA button */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          height: 58px;
          padding: 0 32px;
          background: linear-gradient(180deg, #8ECAF3 0%, #DFF2FF 100%);
          border-radius: 44px;
          border: none;
          cursor: pointer;
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          color: #002A45;
          text-decoration: none;
          transition: all 0.22s ease;
          white-space: nowrap;
          box-shadow: 0 8px 28px rgba(142, 202, 243, 0.35);
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(142, 202, 243, 0.5);
          background: linear-gradient(180deg, #9fd4f7 0%, #e8f7ff 100%);
        }
        .cta-btn svg {
          flex-shrink: 0;
        }

        /* Right image wrap — overflows above the card top (dome sticks out) */
        .cta-img-wrap {
          position: absolute;
          right: 0;
          bottom: 0;
          top: -90px;
          width: clamp(300px, 43%, 520px);
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          overflow: visible;
          z-index: 4;
          pointer-events: none;
        }

        .cta-mahal-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom right;
        }

        /* ── Responsive overrides ── */

        @media (min-width: 1400px) {
          .hero-arc-wrap {
            width: min(920px, 68%);
          }
          .hero-content {
            padding-top: clamp(160px, 24%, 280px);
          }
        }

        @media (max-width: 1024px) {
          .hero-arc-wrap {
            width: min(740px, 80%);
          }
          .hero-content {
            padding-top: clamp(100px, 16%, 180px);
            padding-bottom: clamp(40px, 8%, 100px);
          }
          .hero-page {
            min-height: auto;
          }
          .hero-landscape {
            height: 52%;
            min-height: 220px;
          }
          .hero-title {
            font-size: clamp(26px, 4vw, 46px);
          }

          /* HIW Tablet view: Clean stacked flow */
          .hiw-flow-wrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 36px 16px;
            padding: 0 24px;
            min-height: auto;
          }
          .hiw-curve-bg {
            display: none;
          }
          .hiw-step-col {
            position: relative;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            width: 100%;
            margin: 0 auto;
          }
          .hiw-step-desc {
            min-height: auto;
          }
          .hiw-card-wrap {
            max-width: 240px;
          }

          /* POS Tablet view */
          .pos-grid {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 56px;
            column-gap: 28px;
          }
          .pos-card-2 {
            margin-top: 0;
          }
          .pos-card-3 {
            grid-column: 1 / -1;
            max-width: 380px;
          }

          /* CTA Tablet — keep mahal inside card, no overflow */
          .cta-card {
            padding: 48px 40px 48px 60px;
            min-height: 300px;
            overflow: hidden;
          }
          .cta-img-wrap {
            position: absolute;
            right: 0;
            bottom: 0;
            top: 0;
            width: clamp(240px, 38%, 400px);
            overflow: hidden;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .cta-mahal-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: right bottom;
          }
        }

        @media (max-width: 768px) {
          .hero-page {
            min-height: auto;
            overflow-x: hidden;
            padding-bottom: 0;
          }
          .hero-arc-wrap {
            width: min(600px, 92%);
            left: 50%;
            transform: translateX(-50%);
          }
          .hero-content {
            padding-top: clamp(140px, 28%, 220px);
            padding-bottom: 36px;
            padding-left: 20px;
            padding-right: 20px;
            flex: none;
          }
          .hero-landscape {
            position: relative;
            width: 100%;
            height: auto;
            min-height: 200px;
            max-height: 45vw;
            bottom: auto;
            left: auto;
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
            height: auto;
            min-height: 230px;
            max-height: 42vh;
          }

          /* HIW 2-column on tablet/mobile */
          .hiw-section {
            padding-top: clamp(48px, 8vw, 68px);
            padding-bottom: 60px;
          }
          .hiw-header {
            margin: 0 auto 28px auto;
            padding: 0 20px;
          }
          .hiw-flow-wrapper {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px 14px;
            padding: 0 16px;
          }
          .hiw-step-5 {
            grid-column: 1 / -1;
          }
          .hiw-step-title {
            font-size: 18px;
            font-weight: 700;
            line-height: 24px;
            margin-bottom: 6px;
          }
          .hiw-step-desc {
            font-size: 13.5px;
            font-weight: 500;
            line-height: 20px;
            color: #385166;
            min-height: auto;
            width: 100%;
            max-width: 280px;
            margin: 0 auto 14px auto;
          }

          /* POS Mobile / Tablet */
          .pos-section {
            padding-top: 50px;
            padding-bottom: 70px;
          }
          .pos-kicker {
            letter-spacing: 0.35em;
          }

          /* CTA Tablet */
          .cta-card {
            padding: 50px 48px;
          }
          .cta-img-wrap {
            width: clamp(260px, 38%, 420px);
          }
        }

        @media (max-width: 540px) {
          .hero-page {
            min-height: auto;
            overflow-x: hidden;
          }
          .hero-arc-wrap {
            width: 100%;
            max-width: 100vw;
            overflow: hidden;
          }
          .hero-content {
            padding-top: 160px;
            padding-left: 18px;
            padding-right: 18px;
            padding-bottom: 32px;
            flex: none;
          }
          .hero-landscape {
            position: relative;
            width: 100%;
            height: auto;
            min-height: 180px;
            max-height: 48vw;
            bottom: auto;
            left: auto;
          }
          .hero-kicker {
            font-size: 11px;
            letter-spacing: 0.11em;
          }
          .hero-title {
            font-size: clamp(24px, 7vw, 34px);
            max-width: 100%;
          }
          .hero-desc {
            font-size: 13.5px;
            max-width: 92%;
            line-height: 20px;
          }
          .hero-cta {
            height: 46px;
            padding: 0 26px;
            font-size: 14px;
          }
          .hero-landscape {
            height: auto;
            min-height: 200px;
            max-height: 38vh;
          }

          /* HIW 1-column Mobile */
          .hiw-section {
            padding-top: clamp(52px, 12vw, 80px);
            padding-bottom: 60px;
          }
          .hiw-header {
            margin: 0 auto 24px auto;
            padding: 0 16px;
          }
          .hiw-kicker {
            font-size: 11px;
            letter-spacing: 0.22em;
            margin-bottom: 12px;
          }
          .hiw-title {
            font-size: clamp(24px, 6.8vw, 32px);
            line-height: 1.25;
          }
          .hiw-flow-wrapper {
            grid-template-columns: 1fr;
            gap: 38px;
            padding: 0 18px;
            width: 100%;
            box-sizing: border-box;
          }
          .hiw-step-5 {
            grid-column: auto;
          }
          .hiw-step-col {
            width: 100%;
            max-width: 100%;
          }
          .hiw-step-title {
            font-size: 19px;
            font-weight: 700;
            line-height: 25px;
            margin-bottom: 6px;
          }
          .hiw-step-desc {
            width: 100%;
            max-width: 320px;
            min-height: auto;
            font-size: 14px;
            font-weight: 500;
            line-height: 21px;
            color: #385166;
            margin: 0 auto 16px auto;
          }
          .hiw-card-wrap {
            width: 100%;
            max-width: 100%;
            display: flex;
            justify-content: center;
          }
          .hiw-card-img {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
          }

          /* POS Mobile */
          .pos-grid {
            grid-template-columns: 1fr;
            row-gap: 52px;
            padding: 0 16px;
          }
          .pos-card-3 {
            grid-column: auto;
            max-width: 350px;
          }
          .pos-kicker {
            font-size: 11px;
            letter-spacing: 0.22em;
          }

          /* CTA Mobile */
          .cta-section {
            padding-top: clamp(40px, 6vw, 60px);
          }
          .cta-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 36px 22px 0 22px;
            overflow: hidden;
          }
          .cta-title {
            white-space: normal;
            font-size: clamp(24px, 5.5vw, 36px);
          }
          .cta-content {
            max-width: 100%;
            padding-bottom: 28px;
          }
          .cta-img-wrap {
            position: relative;
            right: auto;
            bottom: auto;
            top: auto;
            width: 100%;
            height: 200px;
            justify-content: center;
          }
          .cta-mahal-img {
            object-position: center bottom;
          }
        }

        @media (max-width: 430px) {
          .hero-arc-wrap {
            width: 100%;
            overflow: hidden;
          }
          .hero-content {
            padding-top: 138px;
            padding-bottom: 28px;
            padding-left: 16px;
            padding-right: 16px;
          }
          .hero-landscape {
            min-height: 160px;
            max-height: 46vw;
          }
          .hiw-section {
            padding-top: 56px;
          }
          .hiw-header {
            margin: 0 auto 20px auto;
            padding: 0 16px;
          }
          .hiw-flow-wrapper {
            padding: 0 16px;
            gap: 36px;
          }
          .hiw-card-wrap {
            width: 100%;
            max-width: 100%;
          }
          .hiw-card-img {
            width: 100% !important;
            max-width: 100% !important;
          }
          .hiw-step-desc {
            font-size: 13.5px;
            max-width: 300px;
          }

          /* CTA smallest */
          .cta-title {
            font-size: 24px;
            white-space: normal;
          }
          .cta-btn {
            height: 48px;
            padding: 0 20px;
            font-size: 13px;
          }
        }

      ` }} />
    </>
  );
}
