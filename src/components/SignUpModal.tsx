"use client";

import React, { useState, useEffect, useRef } from "react";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  message?: string;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setSubmitted(false);
        setAttemptedSubmit(false);
        setFormData({ name: "", mobile: "", email: "", message: "" });
        setErrors({});
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name.trim()) {
      errs.name = "Name is required";
    } else if (data.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters";
    } else if (!/^[A-Za-z\s.'-]+$/.test(data.name.trim())) {
      errs.name = "Name should only contain letters";
    }

    if (!data.mobile.trim()) {
      errs.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(data.mobile.trim())) {
      errs.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!data.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Enter a valid email address";
    }

    if (!data.message.trim()) {
      errs.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let cleanVal = value;

    if (name === "name") {
      // Disallow numbers in name input
      cleanVal = value.replace(/[0-9]/g, "");
    } else if (name === "mobile") {
      // Allow only numbers and cap at exactly 10 digits
      cleanVal = value.replace(/[^0-9]/g, "").slice(0, 10);
    }

    const updated = { ...formData, [name]: cleanVal };
    setFormData(updated);
    if (attemptedSubmit) {
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FormErrors] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={overlayRef}
        className="su-overlay"
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-label={submitted ? "Thank You" : "Sign Up Form"}
      >
        <div className={`su-card${submitted ? " su-card--ty" : ""}`}>
          {/* Close */}
          <button type="button" className="su-close" onClick={onClose} aria-label="Close modal">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#002A45" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {!submitted ? (
            <form className="su-form" onSubmit={handleSubmit} noValidate>
              <h2 className="su-title">Sign Up</h2>

              <div className="su-field">
                <label className="su-label" htmlFor="su-name">Name<span className="su-req">*</span></label>
                <input
                  id="su-name" name="name" type="text"
                  className={`su-input${attemptedSubmit && errors.name ? " su-input--err" : ""}`}
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                {attemptedSubmit && errors.name && <p className="su-err-msg">{errors.name}</p>}
              </div>

              <div className="su-field">
                <label className="su-label" htmlFor="su-mobile">Mobile Number<span className="su-req">*</span></label>
                <input
                  id="su-mobile" name="mobile" type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]*"
                  className={`su-input${attemptedSubmit && errors.mobile ? " su-input--err" : ""}`}
                  placeholder="Enter 10-digit Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  autoComplete="tel"
                />
                {attemptedSubmit && errors.mobile && <p className="su-err-msg">{errors.mobile}</p>}
              </div>

              <div className="su-field">
                <label className="su-label" htmlFor="su-email">Email<span className="su-req">*</span></label>
                <input
                  id="su-email" name="email" type="email"
                  className={`su-input${attemptedSubmit && errors.email ? " su-input--err" : ""}`}
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                {attemptedSubmit && errors.email && <p className="su-err-msg">{errors.email}</p>}
              </div>

              <div className="su-field">
                <label className="su-label" htmlFor="su-message">Message<span className="su-req">*</span></label>
                <textarea
                  id="su-message" name="message"
                  className={`su-textarea${attemptedSubmit && errors.message ? " su-input--err" : ""}`}
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
                {attemptedSubmit && errors.message && <p className="su-err-msg">{errors.message}</p>}
              </div>

              <button type="submit" className="su-submit" id="signup-submit-btn">Submit</button>
            </form>
          ) : (
            <div className="su-ty-wrap">
              <div className="su-envelope" aria-hidden="true">
                <svg width="160" height="115" viewBox="0 0 160 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="80" y1="8" x2="80" y2="0" stroke="#F4BC43" strokeWidth="3" strokeLinecap="round" />
                  <line x1="108" y1="16" x2="115" y2="9" stroke="#F4BC43" strokeWidth="3" strokeLinecap="round" />
                  <line x1="52" y1="16" x2="45" y2="9" stroke="#F4BC43" strokeWidth="3" strokeLinecap="round" />
                  <line x1="128" y1="44" x2="137" y2="40" stroke="#F4BC43" strokeWidth="3" strokeLinecap="round" />
                  <line x1="32" y1="44" x2="23" y2="40" stroke="#F4BC43" strokeWidth="3" strokeLinecap="round" />
                  <rect x="18" y="36" width="124" height="76" rx="7" fill="#F4BC43" />
                  <path d="M18 36 L80 16 L142 36" fill="#D4A030" />
                  <rect x="50" y="52" width="60" height="7" rx="3.5" fill="white" opacity="0.9" />
                  <rect x="60" y="66" width="40" height="7" rx="3.5" fill="white" opacity="0.65" />
                </svg>
              </div>
              <h2 className="su-ty-title">Thank You!</h2>
              <p className="su-ty-sub">Our team will contact you soon</p>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .su-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: suFadeIn 0.22s ease;
        }
        @keyframes suFadeIn { from{opacity:0} to{opacity:1} }

        .su-card {
          position: relative;
          width: 100%;
          max-width: 494px;
          background: #FFFFFF;
          border-radius: 25px;
          padding: 35px 30px 32px 30px;
          animation: suSlideUp 0.26s cubic-bezier(0.34,1.56,0.64,1);
          max-height: 92vh;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #c8d0d8 transparent;
        }
        .su-card--ty {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 350px;
          max-height: 350px;
          overflow: hidden;
          padding: 0 30px;
        }
        @keyframes suSlideUp {
          from { opacity:0; transform: translateY(30px) scale(0.97); }
          to   { opacity:1; transform: translateY(0) scale(1); }
        }

        .su-close {
          position: absolute;
          top: 16px;
          right: 18px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
          z-index: 2;
        }
        .su-close:hover { background: rgba(0,0,0,0.06); }

        .su-form {
          display: flex;
          flex-direction: column;
        }

        .su-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 32px;
          line-height: 15px;
          text-align: center;
          letter-spacing: 0.04em;
          color: #173F63;
          margin: 0 0 20px 0;
        }

        .su-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 15px;
        }

        .su-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          line-height: 18px;
          color: #011B2F;
        }
        .su-req { color: #e53935; margin-left: 2px; }

        .su-input {
          width: 100%;
          height: 38px;
          padding: 0 12px;
          background: #FFFFFF;
          border: 1.5px solid rgba(179,175,175,0.51);
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 12px;
          color: #011B2F;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s;
        }
        .su-input::placeholder { color: #6B7280; font-weight: 600; }
        .su-input:focus {
          border-color: #F4BC43;
          box-shadow: 0 0 0 3px rgba(244,188,67,0.15);
        }

        .su-textarea {
          width: 100%;
          height: 136px;
          padding: 10px 12px;
          background: #FFFFFF;
          border: 1.5px solid rgba(179,175,175,0.51);
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 12px;
          color: #011B2F;
          outline: none;
          resize: none;
          transition: border-color 0.18s, box-shadow 0.18s;
          line-height: 1.55;
        }
        .su-textarea::placeholder { color: #6B7280; font-weight: 600; }
        .su-textarea:focus {
          border-color: #F4BC43;
          box-shadow: 0 0 0 3px rgba(244,188,67,0.15);
        }

        .su-input--err {
          border-color: #e53935 !important;
          box-shadow: 0 0 0 3px rgba(229,57,53,0.1) !important;
        }

        .su-err-msg {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: #e53935;
          margin: 0;
          padding-left: 2px;
        }

        .su-submit {
          width: 100%;
          height: 48px;
          margin-top: 22px;
          background: #F4BC43;
          border: none;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 20px;
          line-height: 25px;
          color: #011B2F;
          cursor: pointer;
          transition: background 0.18s, transform 0.15s;
          letter-spacing: 0.01em;
        }
        .su-submit:hover { background: #e6ad35; transform: translateY(-1px); }
        .su-submit:active { transform: translateY(0); }

        /* Thank You */
        .su-ty-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }
        .su-envelope {
          margin-bottom: 18px;
          animation: suEnvPop 0.45s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes suEnvPop {
          from { opacity:0; transform: scale(0.55) translateY(20px); }
          to   { opacity:1; transform: scale(1) translateY(0); }
        }
        .su-ty-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 36px;
          line-height: 45px;
          text-align: center;
          letter-spacing: 0.04em;
          color: #173F63;
          margin: 0 0 10px 0;
          animation: suFadeUp 0.38s 0.1s both;
        }
        .su-ty-sub {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 400;
          font-size: 22px;
          line-height: 28px;
          text-align: center;
          letter-spacing: 0.04em;
          color: rgba(23,63,99,0.7);
          margin: 0;
          animation: suFadeUp 0.38s 0.18s both;
        }
        @keyframes suFadeUp {
          from { opacity:0; transform: translateY(10px); }
          to   { opacity:1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 540px) {
          .su-card {
            padding: 28px 18px 24px 18px;
            border-radius: 18px;
          }
          .su-card--ty { height: auto; padding: 32px 18px; max-height: none; }
          .su-title { font-size: 28px; line-height: 36px; }
          .su-submit { font-size: 17px; height: 44px; }
          .su-ty-title { font-size: 28px; }
          .su-ty-sub { font-size: 17px; }
        }
        @media (max-width: 360px) {
          .su-title { font-size: 22px; }
          .su-label { font-size: 13px; }
          .su-input, .su-textarea { font-size: 11px; }
        }
      ` }} />
    </>
  );
}
