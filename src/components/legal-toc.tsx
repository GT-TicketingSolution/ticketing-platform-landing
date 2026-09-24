"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

export interface TocSection {
  id: string;
  title: string;
}

interface LegalTocProps {
  sections: TocSection[];
}

export default function LegalTableOfContents({ sections }: LegalTocProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const isManualScrolling = useRef<boolean>(false);

  const checkActiveSection = useCallback(() => {
    if (isManualScrolling.current) return;

    // Detect scroll position from body / html / window
    const scrollContainer = document.body;
    const scrollTop =
      scrollContainer.scrollTop ||
      document.documentElement.scrollTop ||
      window.scrollY ||
      0;
    const scrollHeight = Math.max(
      scrollContainer.scrollHeight,
      document.documentElement.scrollHeight
    );
    const clientHeight =
      scrollContainer.clientHeight || window.innerHeight;

    // 1. If at the very top of the page, first section is always active
    if (scrollTop < 60) {
      setActiveId(sections[0]?.id || "");
      return;
    }

    // 2. If reached the bottom of the page, last section is active
    if (scrollTop + clientHeight >= scrollHeight - 60) {
      setActiveId(sections[sections.length - 1]?.id || "");
      return;
    }

    // 3. Responsive threshold: as soon as a section enters into view
    // (within upper ~58% of viewport), it automatically becomes the active section
    const triggerThreshold = window.innerHeight * 0.58;

    let currentId = sections[0]?.id || "";
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerThreshold) {
          currentId = section.id;
        }
      }
    }

    setActiveId(currentId);
  }, [sections]);

  useEffect(() => {
    // Initial check on mount
    checkActiveSection();

    // In this app, globals.css sets html { overflow: hidden } and body { overflow-y: auto }.
    // Non-bubbling scroll events on document.body require listening on capture phase
    // or directly on document.body!
    const bodyEl = document.body;

    window.addEventListener("scroll", checkActiveSection, {
      capture: true,
      passive: true,
    });
    document.addEventListener("scroll", checkActiveSection, {
      capture: true,
      passive: true,
    });
    if (bodyEl) {
      bodyEl.addEventListener("scroll", checkActiveSection, {
        passive: true,
      });
    }
    window.addEventListener("resize", checkActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", checkActiveSection, {
        capture: true,
      });
      document.removeEventListener("scroll", checkActiveSection, {
        capture: true,
      });
      if (bodyEl) {
        bodyEl.removeEventListener("scroll", checkActiveSection);
      }
      window.removeEventListener("resize", checkActiveSection);
    };
  }, [checkActiveSection]);

  const handleTocClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    isManualScrolling.current = true;
    setActiveId(id);

    // 1. Native scrollIntoView natively handles the scrollable parent (document.body)
    // and respects CSS scroll-margin-top
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // 2. Also directly scroll document.body and documentElement for full cross-browser fallback
    const bodyScrollTop =
      document.body.scrollTop ||
      document.documentElement.scrollTop ||
      window.scrollY ||
      0;
    const rect = el.getBoundingClientRect();
    const targetY = bodyScrollTop + rect.top - 86; // 74px fixed header + spacing

    if (document.body) {
      document.body.scrollTo({ top: targetY, behavior: "smooth" });
    }
    if (document.documentElement) {
      document.documentElement.scrollTo({ top: targetY, behavior: "smooth" });
    }

    window.history.pushState(null, "", `#${id}`);

    // Unlock after smooth scroll completes
    setTimeout(() => {
      isManualScrolling.current = false;
    }, 800);
  };

  return (
    <aside className="legal-toc">
      <div className="legal-toc-card">
        <h2 className="legal-toc-title">Table of Contents</h2>
        <nav aria-label="Table of contents">
          <ul className="legal-toc-list">
            {sections.map((s) => {
              const isActive = activeId === s.id;
              return (
                <li key={s.id} className="legal-toc-item">
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => handleTocClick(e, s.id)}
                    className={`legal-toc-link ${isActive ? "legal-toc-link--active" : ""}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="legal-toc-text">{s.title}</span>
                    {isActive && (
                      <span
                        className="legal-toc-pointer"
                        aria-hidden="true"
                        title="Current active section"
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

