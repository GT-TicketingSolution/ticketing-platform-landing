import type { Metadata } from "next";
import Link from "next/link";
import LegalTableOfContents from "@/components/legal-toc";

export const metadata: Metadata = {
  title: "Privacy Policy | Ticketing Solution",
  description:
    "Learn how Ticketing Solution collects, uses, and protects your personal information. Your privacy is our priority.",
};

export default function PrivacyPolicyPage() {
  const companyName = "Ticketing Solution";
  const contactEmail = "support@ticketingsolution.com";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        `${companyName} ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our platform, website, and related services (collectively, the "Platform").`,
        `This Privacy Policy is governed by the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and other applicable Indian data protection laws.`,
        `By using our Platform, you consent to the practices described in this Privacy Policy. If you do not agree with any part of this policy, please discontinue use of the Platform.`,
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      content: [
        `2.1 Information You Provide Directly: When you register, book tickets, or contact us, we collect: full name, email address, mobile number, date of birth (for age verification), billing and shipping address, payment information (processed securely via our payment partners), government-issued ID details (where required for certain bookings), and preferences and communication settings.`,
        `2.2 Information Collected Automatically: When you use our Platform, we automatically collect: IP address and device identifiers, browser type and version, operating system, pages visited and time spent on the Platform, clickstream data and interaction patterns, and referral URLs.`,
        `2.3 Information from Third Parties: We may receive information from third-party sources such as social login providers (Google, Facebook), payment processors and fraud prevention services, and event organizers or service providers when you book through their platforms.`,
      ],
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      content: [
        `We use the information we collect for the following purposes:`,
        `Account & Service Delivery: To create and manage your account, process bookings, issue digital tickets and travel documents, send booking confirmations and updates, and provide customer support.`,
        `Platform Improvement: To analyze usage patterns and improve platform features, personalize your experience and content, conduct research, testing, and analytics, and develop new products and services.`,
        `Marketing & Communications: To send you promotional offers, event recommendations, and newsletters (with your consent); to notify you about platform updates, policy changes, and important notices.`,
        `Legal & Safety: To detect, prevent, and address fraud, security breaches, and illegal activities; to comply with legal obligations and enforce our Terms & Conditions; and to protect the rights, property, and safety of ${companyName}, our users, and the public.`,
      ],
    },
    {
      id: "information-sharing",
      title: "4. How We Share Your Information",
      content: [
        `We do not sell your personal information to third parties. We share your information only in the following circumstances:`,
        `Service Providers & Partners: We share necessary information with event organizers, transport companies, and venue operators to fulfill your booking; with payment processors to complete transactions securely; and with technology service providers who help us operate the Platform (e.g., cloud hosting, analytics, email services). These providers are bound by contractual obligations to keep your data confidential.`,
        `Legal Requirements: We may disclose your information when required by law, court order, or governmental authority; to protect the rights and safety of ${companyName} or others; or in connection with legal proceedings.`,
        `Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the successor entity. We will notify you before such a transfer occurs.`,
        `Aggregated Data: We may share aggregated, anonymized data that cannot be used to identify individuals with partners, advertisers, and the public for research and analytical purposes.`,
      ],
    },
    {
      id: "cookies",
      title: "5. Cookies & Tracking Technologies",
      content: [
        `We use cookies, web beacons, pixels, and similar tracking technologies to enhance your experience on our Platform.`,
        `Essential Cookies: Required for the Platform to function correctly (e.g., session management, authentication, shopping cart persistence). These cannot be disabled.`,
        `Analytics Cookies: Help us understand how users interact with the Platform. We use tools like Google Analytics to measure traffic and usage patterns. These cookies collect anonymized data.`,
        `Preference Cookies: Remember your settings and preferences (e.g., language, location) to personalize your experience.`,
        `Marketing Cookies: Used to deliver relevant advertisements and measure the effectiveness of campaigns. You can opt out of marketing cookies through your browser settings or our cookie consent manager.`,
        `You can manage cookies through your browser settings. Note that disabling certain cookies may affect the functionality of the Platform.`,
      ],
    },
    {
      id: "data-security",
      title: "6. Data Security",
      content: [
        `We implement robust technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:`,
        `SSL/TLS encryption for all data transmitted between your browser and our servers; industry-standard encryption for stored sensitive data; regular security audits and vulnerability assessments; strict access controls – only authorized personnel can access personal data on a need-to-know basis; and PCI-DSS compliance for all payment processing operations.`,
        `Despite our best efforts, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security. In the event of a data breach affecting your rights, we will notify you as required by applicable law.`,
      ],
    },
    {
      id: "data-retention",
      title: "7. Data Retention",
      content: [
        `We retain your personal information for as long as your account is active or as needed to provide services to you. Specifically:`,
        `Account data is retained for the duration of your account and for 3 years after account closure for legal and audit purposes. Transaction and booking data is retained for 7 years as required under Indian financial regulations. Marketing preferences and communication data are retained until you withdraw consent or for 2 years of inactivity, whichever is earlier.`,
        `When data is no longer needed, we securely delete or anonymize it. You may request deletion of your account data at any time, subject to our legal obligations to retain certain records.`,
      ],
    },
    {
      id: "your-rights",
      title: "8. Your Rights & Choices",
      content: [
        `You have the following rights regarding your personal information:`,
        `Access & Portability: You may request a copy of the personal data we hold about you. We will provide this in a structured, machine-readable format within 30 days of your request.`,
        `Correction: You can update or correct inaccurate information directly from your account settings or by contacting us.`,
        `Deletion: You may request deletion of your personal data, subject to our legal retention obligations. We will process valid deletion requests within 30 days.`,
        `Opt-Out of Marketing: You may unsubscribe from marketing emails at any time by clicking the "Unsubscribe" link in any email or updating your notification preferences in your account settings.`,
        `Withdraw Consent: Where we process data based on your consent, you may withdraw it at any time. Withdrawal does not affect the lawfulness of prior processing.`,
        `To exercise any of these rights, contact us at ${contactEmail}. We may require identity verification before processing your request.`,
      ],
    },
    {
      id: "children-privacy",
      title: "9. Children's Privacy",
      content: [
        `Our Platform is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us immediately at ${contactEmail} and we will delete such information promptly.`,
        `Users between 13 and 17 years of age may use the Platform only with verifiable parental consent. Parents or guardians are responsible for monitoring their children's use of the Platform.`,
      ],
    },
    {
      id: "third-party-links",
      title: "10. Third-Party Links & Services",
      content: [
        `Our Platform may contain links to third-party websites, event pages, or services. This Privacy Policy does not apply to those external platforms. We encourage you to review the privacy policies of any third-party sites you visit.`,
        `${companyName} is not responsible for the privacy practices or content of third-party websites. Linking to or from the Platform does not imply our endorsement of those external sites.`,
      ],
    },
    {
      id: "policy-updates",
      title: "11. Updates to This Policy",
      content: [
        `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. We will notify you of significant changes by posting a prominent notice on the Platform or sending an email to your registered address.`,
        `The "Last Updated" date at the top of this page indicates when the policy was last revised. Your continued use of the Platform after any changes constitutes your acceptance of the updated Privacy Policy.`,
      ],
    },
    {
      id: "contact",
      title: "12. Contact Us",
      content: [
        `If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, please contact our Privacy Team:`,
        `Email: ${contactEmail} | Phone: +91 ********** | Support Hours: Monday to Saturday, 9:00 AM – 6:00 PM IST. We aim to respond to all privacy inquiries within 5 business days.`,
      ],
    },
  ];

  return (
    <>
      <main className="legal-page-root">
        <div className="legal-hero legal-hero--privacy">
          {/* Top-Left Corner: Back to Home Button */}
          <Link href="/" className="legal-back-top-left" id="privacy-back-home-btn" aria-label="Back to Home">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <div className="legal-hero-inner">
            <h1 className="legal-hero-title">Privacy Policy</h1>
            <p className="legal-hero-subtitle">
              Your privacy matters to us. Learn how {companyName} collects, uses, and safeguards your personal information.
            </p>
          </div>
        </div>

        <div className="legal-body">
          <LegalTableOfContents sections={sections.map((s) => ({ id: s.id, title: s.title }))} />

          <article className="legal-content">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="legal-section">
                <h2 className="legal-section-title">{section.title}</h2>
                <div className="legal-section-body">
                  {section.content.map((para, i) => (
                    <p key={i} className="legal-para">{para}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        .legal-page-root {
          min-height: 100vh;
          background: #F7FAFC;
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), sans-serif;
        }
        .legal-back-top-left {
          position: absolute;
          top: 28px;
          left: clamp(20px, 4vw, 56px);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #FFFFFF;
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 24px;
          padding: 8px 18px 8px 14px;
          transition: all 0.2s ease;
          z-index: 10;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
        }
        .legal-back-top-left:hover {
          background: rgba(255, 255, 255, 0.22);
          color: #F4BC43;
          border-color: rgba(244, 188, 67, 0.5);
          transform: translateX(-3px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        }
        .legal-minimal-footer {
          width: 100%;
          border-top: 1px solid #E6EFF5;
          background: #FFFFFF;
          padding: 24px 20px;
          text-align: center;
        }
        .legal-minimal-footer p {
          margin: 0;
          font-size: 13.5px;
          color: #6B8294;
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), sans-serif;
        }
        .legal-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.75);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 20px;
          padding: 6px 14px 6px 10px;
          margin-bottom: 20px;
          transition: all 0.2s ease;
          font-family: 'Plus Jakarta Sans', var(--font-plus-jakarta-sans), sans-serif;
        }
        .legal-back-btn:hover {
          background: rgba(255,255,255,0.20);
          color: #FFFFFF;
          transform: translateX(-2px);
        }
        .legal-hero {
          background: linear-gradient(135deg, #002A45 0%, #004170 60%, #173F63 100%);
          padding: 80px 24px 64px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .legal-hero--privacy {
          background: linear-gradient(135deg, #011B2F 0%, #0A3550 55%, #173F63 100%);
        }
        .legal-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 60%, rgba(244,188,67,0.10) 0%, transparent 55%),
                      radial-gradient(ellipse at 70% 20%, rgba(23,63,99,0.3) 0%, transparent 50%);
          pointer-events: none;
        }
        .legal-hero-inner {
          position: relative;
          max-width: 760px;
          margin: 0 auto;
        }

        .legal-hero-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 16px 0;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .legal-hero-subtitle {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.72);
          margin: 0 auto 28px;
          max-width: 600px;
        }
        .legal-hero-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .legal-meta-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.8);
          font-size: 13px;
          padding: 6px 14px;
          border-radius: 20px;
        }
        .legal-body {
          max-width: 1180px;
          margin: 0 auto;
          padding: 56px 24px 80px;
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        .legal-toc {
          width: 260px;
          flex-shrink: 0;
          position: sticky;
          top: 96px;
        }
        .legal-toc-card {
          background: #FFFFFF;
          border: 1px solid #E2EAF0;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 12px rgba(0,42,69,0.06);
        }
        .legal-toc-title {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #002A45;
          margin: 0 0 16px 0;
        }
        .legal-toc-list {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .legal-toc-item { list-style: none; }
        .legal-toc-link {
          font-size: 13px;
          line-height: 1.45;
          color: #556B7D;
          text-decoration: none;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 10px;
          border-radius: 8px;
          border-left: 3px solid transparent;
          cursor: pointer;
        }
        .legal-toc-link:hover {
          color: #002A45;
          background: #F4F8FB;
        }
        .legal-toc-link--active {
          color: #002A45;
          font-weight: 700;
          background: #EDF4F9;
          border-left: 3px solid #F4BC43;
        }
        .legal-toc-pointer {
          flex-shrink: 0;
          color: #F4BC43;
          display: inline-flex;
          align-items: center;
          margin-left: 6px;
          animation: tocPointerMove 1.4s ease-in-out infinite;
        }
        @keyframes tocPointerMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        .legal-content { flex: 1; min-width: 0; }
        .legal-intro-box {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          background: #EBF5FF;
          border: 1px solid #BDD9F0;
          border-radius: 12px;
          padding: 20px 24px;
          margin-bottom: 32px;
        }
        .legal-intro-box--privacy {
          background: #EEF8F1;
          border-color: #B2DAC0;
        }
        .legal-intro-box p {
          margin: 0;
          font-size: 15px;
          line-height: 1.65;
          color: #2D4A5E;
        }
        .legal-section {
          background: #FFFFFF;
          border: 1px solid #E2EAF0;
          border-radius: 16px;
          padding: 32px 36px;
          margin-bottom: 18px;
          transition: box-shadow 0.2s;
          scroll-margin-top: 100px;
        }
        .legal-section:hover { box-shadow: 0 4px 20px rgba(0,42,69,0.08); }
        .legal-section-title {
          font-size: 20px;
          font-weight: 700;
          color: #002A45;
          margin: 0 0 16px 0;
          padding-bottom: 14px;
          border-bottom: 2px solid #F0F6FA;
          line-height: 1.3;
        }
        .legal-section-body { display: flex; flex-direction: column; gap: 10px; }
        .legal-para {
          margin: 0;
          font-size: 15px;
          line-height: 1.75;
          color: #374F62;
        }
        .legal-footer-note {
          background: #F0F5F9;
          border-radius: 12px;
          padding: 20px 24px;
          margin-top: 8px;
          text-align: center;
        }
        .legal-footer-note p {
          margin: 0;
          font-size: 14px;
          color: #556B7D;
          line-height: 1.6;
        }
        .legal-email-link { color: #173F63; text-decoration: underline; text-underline-offset: 2px; }
        .legal-email-link:hover { color: #002A45; }
        @media (max-width: 900px) {
          .legal-body { flex-direction: column; gap: 28px; }
          .legal-toc { width: 100%; position: static; }
        }
        @media (max-width: 600px) {
          .legal-hero { padding: 76px 20px 48px; }
          .legal-back-top-left {
            top: 18px;
            left: 16px;
            font-size: 13px;
            padding: 6px 14px 6px 10px;
          }
          .legal-body { padding: 36px 16px 60px; }
          .legal-section { padding: 24px 20px; }
        }
      ` }} />
    </>
  );
}

