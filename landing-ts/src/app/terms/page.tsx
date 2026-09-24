import type { Metadata } from "next";
import Link from "next/link";
import TermsTableOfContents from "./terms-toc";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ticketing Solution",
  description:
    "Read the Terms & Conditions governing your use of Ticketing Solution – the trusted platform for seamless ticket booking and travel management.",
};

export default function TermsPage() {
  const companyName = "Ticketing Solution";
  const contactEmail = "support@ticketingsolution.com";

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: [
        `By accessing or using the ${companyName} platform (the "Platform"), website, or any associated services, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, please do not use our Platform.`,
        `These Terms apply to all visitors, registered users, event organizers, and any other person who accesses or uses the Platform. ${companyName} reserves the right to modify these Terms at any time. Continued use of the Platform after any modification constitutes your acceptance of the updated Terms.`,
      ],
    },
    {
      id: "platform-description",
      title: "2. Platform Description",
      content: [
        `${companyName} is an online ticketing and travel management platform that allows users to browse and book tickets for events, travel, and experiences; manage bookings and reservations; access digital tickets and travel documents; communicate with event organizers and service providers; and receive promotional offers and updates.`,
        `The Platform acts as an intermediary between users and service providers (event organizers, transport companies, experience providers). ${companyName} is not responsible for the quality, safety, or accuracy of third-party services listed on the Platform.`,
      ],
    },
    {
      id: "account-registration",
      title: "3. Account Registration & Security",
      content: [
        `To access certain features of the Platform, you must create an account. By registering, you agree to provide accurate, current, and complete registration information; maintain and promptly update your account information; keep your password secure and confidential; immediately notify us of any unauthorized use of your account; and accept responsibility for all activities that occur under your account.`,
        `${companyName} reserves the right to suspend or terminate accounts that violate these Terms, contain false information, or are used for fraudulent purposes. You must be at least 18 years of age to create an account independently. Users between 13 and 17 years of age may use the Platform only with verifiable parental or guardian consent.`,
      ],
    },
    {
      id: "booking-payments",
      title: "4. Booking, Payments & Pricing",
      content: [
        `Booking Process: All bookings made through ${companyName} are subject to availability and confirmation by the respective service provider. A booking is confirmed only upon receipt of a confirmation email or notification from us.`,
        `Pricing: All prices displayed on the Platform are inclusive of applicable taxes unless stated otherwise. Prices are subject to change without notice prior to booking confirmation. Once a booking is confirmed, the price is locked.`,
        `Payment Methods: We accept major payment methods including credit/debit cards, UPI, net banking, and digital wallets. All payments are processed through secure, PCI-DSS compliant payment gateways. ${companyName} does not store complete payment card details.`,
        `Convenience Fees: ${companyName} may charge a convenience fee for facilitating bookings. This fee is non-refundable unless the event or service is cancelled by the provider.`,
        `Failed Transactions: In case of a payment failure where your account has been debited but no booking confirmation is received, please contact us within 7 working days. We will investigate and refund any erroneous deductions within 5–7 business days.`,
      ],
    },
    {
      id: "prohibited-conduct",
      title: "5. Prohibited Conduct",
      content: [
        `You agree NOT to use the Platform to engage in ticket scalping, reselling, or unauthorized commercial use of tickets; create fake or multiple accounts for fraudulent purposes; use bots, scripts, or automated tools to access the Platform or purchase tickets; share, transfer, or sell your account credentials; or post false, misleading, or defamatory content.`,
        `Additionally, you must not violate any applicable local, national, or international law; infringe upon intellectual property rights of ${companyName} or any third party; attempt to gain unauthorized access to any part of the Platform or its systems; interfere with or disrupt the integrity or performance of the Platform; or collect or harvest user data without explicit consent.`,
        `Violation of any prohibited conduct may result in immediate account suspension, cancellation of bookings without refund, and/or legal action.`,
      ],
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual Property",
      content: [
        `All content on the Platform – including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software – is the property of ${companyName} or its content suppliers and is protected by Indian and international intellectual property laws.`,
        `You are granted a limited, non-exclusive, non-transferable license to access and use the Platform for personal, non-commercial purposes only. You may not reproduce, distribute, or publicly display any content from the Platform; use automated data collection techniques; modify or create derivative works from any Platform content; or use our trademarks, logos, or brand identifiers without prior written consent.`,
      ],
    },
    {
      id: "privacy",
      title: "7. Privacy",
      content: [
        `Your use of the Platform is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.`,
        `By using the Platform, you consent to the collection and use of your data as described in our Privacy Policy.`,
      ],
    },
    {
      id: "disclaimers",
      title: "8. Disclaimers & Limitation of Liability",
      content: [
        `Platform Provided "As-Is": The Platform and all content are provided on an "as-is" and "as-available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.`,
        `Third-Party Services: ${companyName} is not liable for the acts, omissions, errors, or representations of any third-party service providers, event organizers, or venues listed on the Platform.`,
        `Limitation of Liability: To the maximum extent permitted by applicable law, ${companyName}, its affiliates, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform. Our maximum aggregate liability shall not exceed the amount you paid for the specific booking giving rise to the claim.`,
      ],
    },
    {
      id: "governing-law",
      title: "9. Governing Law & Dispute Resolution",
      content: [
        `These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of law principles.`,
        `In case of any dispute arising out of or relating to these Terms or your use of the Platform, you agree to first attempt to resolve the dispute informally by contacting us at ${contactEmail}. If the dispute cannot be resolved informally within 30 days, it shall be submitted to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be Bengaluru, Karnataka, India.`,
        `You waive any right to bring claims as a plaintiff or class member in a class action, collective action, or representative proceeding.`,
      ],
    },
    {
      id: "termination",
      title: "10. Termination",
      content: [
        `${companyName} may terminate or suspend your account and access to the Platform at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, third parties, or for any other reason.`,
        `You may terminate your account at any time by contacting us. Upon termination, your right to use the Platform immediately ceases. Provisions that by their nature should survive termination shall survive, including intellectual property provisions, disclaimers, and dispute resolution provisions.`,
      ],
    },
    {
      id: "changes",
      title: "11. Changes to These Terms",
      content: [
        `We reserve the right to modify these Terms at any time. We will notify you of significant changes by posting a notice on the Platform or sending an email to your registered address. The date of the most recent revision will appear at the top of this page.`,
        `Your continued use of the Platform after any changes to these Terms constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the Platform.`,
      ],
    },
    {
      id: "contact",
      title: "12. Contact Us",
      content: [
        `If you have any questions, concerns, or feedback about these Terms & Conditions, please reach out to us.`,
        `Email: ${contactEmail} | Phone: +91 ********** | Support Hours: Monday to Saturday, 9:00 AM – 6:00 PM IST. We aim to respond to all inquiries within 2 business days.`,
      ],
    },
  ];

  return (
    <>
      <main className="legal-page-root">
        <div className="legal-hero">
          {/* Top-Left Corner: Back to Home Button */}
          <Link href="/" className="legal-back-top-left" id="terms-back-home-btn" aria-label="Back to Home">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <div className="legal-hero-inner">
            <h1 className="legal-hero-title">Terms &amp; Conditions</h1>
            <p className="legal-hero-subtitle">
              Please read these terms carefully before using our platform. They govern your rights and responsibilities as a user of {companyName}.
            </p>
          </div>
        </div>

        <div className="legal-body">
          <TermsTableOfContents sections={sections.map((s) => ({ id: s.id, title: s.title }))} />

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
        .legal-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 20% 50%, rgba(244,188,67,0.12) 0%, transparent 60%),
                      radial-gradient(ellipse at 80% 20%, rgba(23,63,99,0.3) 0%, transparent 50%);
          pointer-events: none;
        }
        .legal-hero-inner {
          position: relative;
          max-width: 760px;
          margin: 0 auto;
        }
        .legal-hero-badge {
          display: inline-block;
          background: rgba(244,188,67,0.18);
          border: 1px solid rgba(244,188,67,0.35);
          color: #F4BC43;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 20px;
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

