import { useRef } from "react";
import { useSectionReveal } from "../hooks/useSectionReveal";

export default function Contact({ profile, socials = [] }) {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, { offset: 32 });

  return (
    <section className="section section-contact" id="contact" ref={sectionRef}>
      <div className="container contact-layout">
        <div className="contact-intro">
          <span className="section-eyebrow" data-animate>Let's collaborate</span>
          <h2 className="section-title" data-animate>Ready to scale your infrastructure?</h2>
          <p className="section-lead" data-animate>
            Whether you need a backend architect, API specialist, or database expert to optimize your platform, let's connect.
          </p>
        </div>
        <div className="contact-card" data-animate>
          <div className="contact-rows">
            <div>
              <span>Drop an email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div>
              <span>Call or WhatsApp</span>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
            <div>
              <span>Based in</span>
              <strong>{profile.city}, {profile.country}</strong>
            </div>
          </div>
          <div className="contact-actions">
            {/* <a className="btn" href={`mailto:${profile.email}`}>Start a project</a> */}
            {/* <div className="contact-links">
              <a
                className="contact-icon contact-icon--whatsapp"
                href={`https://wa.me/${profile.phone}`}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              {linkedinUrl && (
                <a
                  className="contact-icon contact-icon--linkedin"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
