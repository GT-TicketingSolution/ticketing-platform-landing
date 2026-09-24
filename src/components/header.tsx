"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PAGE_TITLES } from "@/constant/metaConstant";

interface HeaderProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onSignUpClick?: () => void;
}

export default function Header({
  activeTab = "Home",
  onTabChange,
  onSignUpClick,
}: HeaderProps) {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(
    pathname === "/support" ? "Support" : activeTab
  );

  useEffect(() => {
    if (pathname === "/support") {
      setCurrentTab("Support");
    } else if (activeTab) {
      setCurrentTab(activeTab);
    }
  }, [activeTab, pathname]);

  const titleMap: Record<string, string> = {
    Home: PAGE_TITLES.HOME,
    Process: PAGE_TITLES.PROCESS,
    Features: PAGE_TITLES.FEATURES,
    Support: "Support | Ticketing Solution",
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "How its works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Support", href: "/support" }
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string; href: string }) => {
    if (link.href.startsWith("#")) {
      const target = document.querySelector(link.href);
      if (target) {
        e.preventDefault();
        handleNavClick(link.name);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // If on another route like /support, navigate to /#section
        window.location.href = "/" + link.href;
      }
    } else {
      handleNavClick(link.name);
    }
  };

  const handleNavClick = (tabName: string) => {
    setCurrentTab(tabName);
    if (titleMap[tabName]) {
      document.title = titleMap[tabName];
    }
    if (onTabChange) {
      onTabChange(tabName);
    }
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDrawerOpen]);

  return (
    <>
      <header className="ticketing-header-root">
        <div className="ticketing-header-container">
          {/* Brand Logo & Title */}
          <Link
            href="/"
            className="ticketing-logo-link"
            onClick={() => handleNavClick("Home")}
            aria-label="Ticketing Solution Home"
          >
            <div className="ticketing-logo-icon-wrap">
              <Image
                src="/assest/images/logo.png"
                alt="Ticketing Solution Logo"
                width={58}
                height={44}
                priority
                className="ticketing-logo-img"
              />
            </div>
            <div className="ticketing-brand-text">
              <span className="ticketing-brand-title">Ticketing</span>
              <span className="ticketing-brand-subtitle">Solution</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="ticketing-desktop-nav" aria-label="Main Navigation">
            <ul className="ticketing-nav-list">
              {navLinks.map((link) => {
                const isActive = currentTab === link.name || (link.href === "/support" && pathname === "/support");
                return (
                  <li key={link.name} className="ticketing-nav-item">
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className={`ticketing-nav-link ${isActive ? "active" : ""}`}
                        onClick={(e) => handleNavLinkClick(e, link)}
                      >
                        {link.name}
                        {isActive && <span className="ticketing-nav-indicator" />}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={`ticketing-nav-link ${isActive ? "active" : ""}`}
                        onClick={() => handleNavClick(link.name)}
                      >
                        {link.name}
                        {isActive && <span className="ticketing-nav-indicator" />}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Right Action */}
          <div className="ticketing-header-right">
            <button
              type="button"
              className="ticketing-signup-btn"
              id="header-signup-btn"
              onClick={() => { if (onSignUpClick) onSignUpClick(); }}
            >
              <span>Sign Up</span>
              <svg
                className="ticketing-signup-arrow"
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 1.5L5.5 5.5L1 9.5"
                  stroke="#173F63"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={`ticketing-hamburger-btn ${isDrawerOpen ? "open" : ""}`}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              aria-label={isDrawerOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isDrawerOpen}
            >
              <span className="ticketing-hamburger-bar bar-1" />
              <span className="ticketing-hamburger-bar bar-2" />
              <span className="ticketing-hamburger-bar bar-3" />
            </button>
          </div>
        </div>
      </header>

      {/* Header Spacer */}
      <div className="ticketing-header-spacer" />

      {/* Mobile Drawer Overlay */}
      <div
        className={`ticketing-drawer-overlay ${isDrawerOpen ? "visible" : ""}`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden={!isDrawerOpen}
      />

      {/* Mobile Drawer */}
      <aside
        className={`ticketing-drawer ${isDrawerOpen ? "open" : ""}`}
        aria-hidden={!isDrawerOpen}
      >
        <div className="ticketing-drawer-header">
          <div className="ticketing-drawer-logo">
            <div className="ticketing-logo-icon-wrap drawer-icon">
              <Image
                src="/assest/images/logo.png"
                alt="Ticketing Solution Logo"
                width={48}
                height={36}
                className="ticketing-logo-img"
              />
            </div>
            <div className="ticketing-brand-text">
              <span className="ticketing-brand-title drawer-title">Ticketing</span>
              <span className="ticketing-brand-subtitle drawer-subtitle">Solution</span>
            </div>
          </div>
          <button
            type="button"
            className="ticketing-drawer-close-btn"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#002A45"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="ticketing-drawer-nav" aria-label="Mobile Navigation">
          <ul className="ticketing-drawer-nav-list">
            {navLinks.map((link) => {
              const isActive = currentTab === link.name || (link.href === "/support" && pathname === "/support");
              return (
                <li key={link.name} className="ticketing-drawer-nav-item">
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className={`ticketing-drawer-nav-link ${isActive ? "active" : ""}`}
                      onClick={(e) => handleNavLinkClick(e, link)}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="drawer-active-badge" />}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`ticketing-drawer-nav-link ${isActive ? "active" : ""}`}
                      onClick={() => handleNavClick(link.name)}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="drawer-active-badge" />}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ticketing-drawer-footer">
          <button
            type="button"
            className="ticketing-signup-btn drawer-signup-btn"
            onClick={() => { setIsDrawerOpen(false); if (onSignUpClick) onSignUpClick(); }}
          >
            <span>Sign Up</span>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 1.5L5.5 5.5L1 9.5"
                stroke="#173F63"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </aside>

      {/* Pure Component CSS guaranteed to render in all Next.js environments */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .ticketing-header-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 74px;
          background: #FEFEFE;
          box-shadow: 0px 4px 20.4px -6px rgba(0, 0, 0, 0.25);
          z-index: 1000;
          display: flex;
          align-items: center;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .ticketing-header-spacer {
          height: 74px;
          width: 100%;
          display: block;
          flex-shrink: 0;
        }

        .ticketing-header-container {
          width: 100%;
          max-width: 1440px;
          height: 100%;
          margin: 0 auto;
          padding: 0 45px 0 31px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          position: relative;
        }

        /* Brand Logo Link: Horizontal Flex */
        .ticketing-logo-link {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          text-decoration: none;
          gap: 14px;
          user-select: none;
          cursor: pointer;
        }

        .ticketing-logo-icon-wrap {
          width: 58px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ticketing-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        /* Brand Text */
        .ticketing-brand-text {
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          line-height: 1;
        }

        .ticketing-brand-title {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 28px;
          color: #002A45;
          letter-spacing: -0.01em;
          display: block;
        }

        .ticketing-brand-subtitle {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;
          letter-spacing: 0.24em;
          color: #002A45;
          margin-top: 2px;
          display: block;
        }

        /* Desktop Navigation Menu */
        .ticketing-desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .ticketing-nav-list {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 36px;
        }

        .ticketing-nav-item {
          position: relative;
          display: flex;
          align-items: center;
        }

        .ticketing-nav-link {
          font-family: var(--font-plus-jakarta-sans), var(--font-inter), 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          color: #206997ff;
          text-decoration: none;
          position: relative;
          padding: 6px 2px;
          cursor: pointer;
          transition: color 0.2s ease;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
        }

        .ticketing-nav-link:hover {
          color: #173F63;
        }

        .ticketing-nav-link.active {
          font-weight: 700;
           color: #206997ff;
        }

        .ticketing-nav-indicator {
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 2.2px;
          background: #D99A26;
          border-radius: 4px;
        }

        /* Right Action */
        .ticketing-header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .ticketing-signup-btn {
          width: 112px;
          height: 37px;
          background: #F4BC43;
          border-radius: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-decoration: none;
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.04em;
          color: #173F63;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(244, 188, 67, 0.25);
          transition: all 0.2s ease;
        }

        .ticketing-signup-btn:hover {
          background: #F5C456;
          box-shadow: 0 4px 12px rgba(244, 188, 67, 0.35);
          transform: translateY(-1px);
        }

        .ticketing-signup-arrow {
          display: inline-block;
          transition: transform 0.2s ease;
        }

        .ticketing-signup-btn:hover .ticketing-signup-arrow {
          transform: translateX(2px);
        }

        /* Mobile Hamburger */
        .ticketing-hamburger-btn {
          display: none;
          width: 44px;
          height: 44px;
          background: transparent;
          border: none;
          cursor: pointer;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 8px;
          border-radius: 8px;
          z-index: 1001;
        }

        .ticketing-hamburger-bar {
          display: block;
          width: 24px;
          height: 2.5px;
          background: #002A45;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .ticketing-hamburger-btn.open .bar-1 {
          transform: translateY(7.5px) rotate(45deg);
        }
        .ticketing-hamburger-btn.open .bar-2 {
          opacity: 0;
        }
        .ticketing-hamburger-btn.open .bar-3 {
          transform: translateY(-7.5px) rotate(-45deg);
        }

        /* Mobile Drawer Overlay */
        .ticketing-drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 18, 32, 0.45);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 1050;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .ticketing-drawer-overlay.visible {
          opacity: 1;
          pointer-events: auto;
        }

        /* Mobile Drawer */
        .ticketing-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: min(320px, 85vw);
          height: 100%;
          background: #FFFFFF;
          box-shadow: -6px 0 28px rgba(0, 0, 0, 0.16);
          z-index: 1100;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
          padding: 24px 20px;
        }

        .ticketing-drawer.open {
          transform: translateX(0);
        }

        .ticketing-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid #EDF2F7;
        }

        .ticketing-drawer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .drawer-icon {
          width: 44px;
          height: 34px;
        }

        .drawer-title {
          font-size: 19px;
          line-height: 23px;
        }

        .drawer-subtitle {
          font-size: 11px;
          line-height: 14px;
          letter-spacing: 0.38em;
        }

        .ticketing-drawer-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #F1F5F9;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .ticketing-drawer-nav {
          flex: 1;
          padding: 24px 0;
          overflow-y: auto;
        }

        .ticketing-drawer-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ticketing-drawer-nav-item {
          width: 100%;
        }

        .ticketing-drawer-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-radius: 12px;
          font-family: var(--font-plus-jakarta-sans), var(--font-inter), sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #002A45;
          text-decoration: none;
        }

        .ticketing-drawer-nav-link.active {
          background: #FFF8EB;
          color: #002A45;
          font-weight: 600;
        }

        .drawer-active-badge {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #F4BC43;
        }

        .ticketing-drawer-footer {
          padding-top: 16px;
          border-top: 1px solid #EDF2F7;
        }

        .drawer-signup-btn {
          width: 100%;
          height: 44px;
          font-size: 16px;
        }

        @media (max-width: 1200px) {
          .ticketing-header-container {
            padding: 0 32px 0 24px;
          }
          .ticketing-nav-list {
            gap: 28px;
          }
        }

        @media (max-width: 960px) {
          .ticketing-desktop-nav {
            display: none;
          }
          .ticketing-hamburger-btn {
            display: flex;
          }
          .ticketing-signup-btn:not(.drawer-signup-btn) {
            display: none;
          }
        }

        @media (max-width: 540px) {
          .ticketing-header-root,
          .ticketing-header-spacer {
            height: 72px;
          }
          .ticketing-header-container {
            padding: 0 16px;
          }
          .ticketing-logo-icon-wrap {
            width: 48px;
            height: 36px;
          }
          .ticketing-brand-title {
            font-size: 19px;
            line-height: 23px;
          }
          .ticketing-brand-subtitle {
            font-size: 11px;
            letter-spacing: 0.36em;
          }
        }
      ` }} />
    </>
  );
}
