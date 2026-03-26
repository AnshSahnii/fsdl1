import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: "", email: "", phone: "", linkedin: "",
    objective: "", summary: "", education: "",
    experience: "", skills: "", achievements: "",
  });
  const [errors, setErrors] = useState({});
  const [showResume, setShowResume] = useState(false);

  const set = (key) => (e) => setData({ ...data, [key]: e.target.value });

  const validate = () => {
    const err = {};
    if (!data.name) err.name = "Name is required";
    if (!data.email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(data.email)) err.email = "Enter a valid email";
    if (!data.objective) err.objective = "Objective is required";
    if (!data.education) err.education = "Education is required";
    if (!data.skills) err.skills = "Skills are required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      setShowResume(false);
    } else {
      setErrors({});
      setShowResume(true);
    }
  };

  return (
    <div className="app">
      {/* ── APP HEADER ── */}
      <header className="app-header">
        <div className="brand">
          <div className="brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <div>
            <h1 className="brand-name">ResumeForge</h1>
            <p className="brand-tagline">Build your career story</p>
          </div>
        </div>
        <div className="header-badge">Live Preview</div>
      </header>

      {/* ── MAIN LAYOUT ── */}
      <main className="layout">

        {/* ── LEFT: FORM ── */}
        <form className="form-panel" onSubmit={handleSubmit}>

          <div className="form-section-label">Personal Info</div>

          <div className="field-row">
            <div className="field">
              <input
                className={errors.name ? "input-error" : ""}
                placeholder="Full Name"
                value={data.name}
                onChange={set("name")}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="field">
              <input placeholder="Phone Number" value={data.phone} onChange={set("phone")} />
            </div>
          </div>

          <div className="field">
            <input
              className={errors.email ? "input-error" : ""}
              placeholder="Email Address"
              value={data.email}
              onChange={set("email")}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="field">
            <input
              placeholder="LinkedIn / Portfolio URL (optional)"
              value={data.linkedin}
              onChange={set("linkedin")}
            />
          </div>

          <div className="form-section-label">Profile</div>

          <div className="field">
            <textarea
              className={errors.objective ? "input-error" : ""}
              placeholder="Career Objective"
              value={data.objective}
              onChange={set("objective")}
            />
            {errors.objective && <span className="error">{errors.objective}</span>}
          </div>

          <div className="field">
            <textarea
              placeholder="Professional Summary (optional)"
              value={data.summary}
              onChange={set("summary")}
            />
          </div>

          <div className="form-section-label">Background</div>

          <div className="field">
            <textarea
              className={errors.education ? "input-error" : ""}
              placeholder="Education (e.g. B.Tech CSE, XYZ University 2023-2027)"
              value={data.education}
              onChange={set("education")}
            />
            {errors.education && <span className="error">{errors.education}</span>}
          </div>

          <div className="field">
            <textarea
              placeholder="Experience / Internships (optional)"
              value={data.experience}
              onChange={set("experience")}
            />
          </div>

          <div className="form-section-label">More Details</div>

          <div className="field">
            <input
              className={errors.skills ? "input-error" : ""}
              placeholder="Skills (comma separated: React, Python, SQL...)"
              value={data.skills}
              onChange={set("skills")}
            />
            {errors.skills && <span className="error">{errors.skills}</span>}
          </div>

          <div className="field">
            <textarea
              placeholder="Achievements (optional)"
              value={data.achievements}
              onChange={set("achievements")}
            />
          </div>

          <button type="submit" className="submit-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="16" height="16">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Generate Resume
          </button>
        </form>

        {/* ── RIGHT: PREVIEW ── */}
        <div className="preview-panel">
          <div className="preview-label">
            <span>Preview</span>
            {showResume && <span className="ready-badge">Ready</span>}
          </div>

          <div className="resume-card">
            {!showResume ? (
              <div className="empty-state">
                <div className="empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <p>Fill in your details and click<br /><strong>Generate Resume</strong></p>
              </div>
            ) : (
              <div className="resume">
                {/* NAME + CONTACT */}
                <div className="resume-top">
                  <div className="resume-avatar">
                    {data.name.trim().split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()}
                  </div>
                  <div>
                    <h2 className="resume-name">{data.name}</h2>
                    <div className="resume-contacts">
                      {data.email && (
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22 6 12 13 2 6" />
                          </svg>
                          {data.email}
                        </span>
                      )}
                      {data.phone && (
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 13.5 19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                          </svg>
                          {data.phone}
                        </span>
                      )}
                      {data.linkedin && (
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
                            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                          </svg>
                          {data.linkedin}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="resume-divider" />

                <ResumeSection icon="objective" title="Career Objective" content={data.objective} />
                <ResumeSection icon="summary" title="Professional Summary" content={data.summary} />
                <ResumeSection icon="education" title="Education" content={data.education} useYears />
                <ResumeSection icon="experience" title="Experience" content={data.experience} useYears />
                {data.skills && (
                  <div className="r-section">
                    <SectionHead icon="skills" title="Skills" />
                    <div className="skill-chips">
                      {data.skills.split(",").map((s) => s.trim()).filter(Boolean).map((skill, i) => (
                        <span className="chip" key={i}>{skill}</span>
                      ))}
                    </div>
                  </div>
                )}
                <ResumeSection icon="achievements" title="Achievements" content={data.achievements} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

/* ── Helpers ── */

function formatYears(text) {
  const parts = text.split(/(\d{4}-\d{4})/g);
  return parts.map((part, i) => {
    const match = part.match(/^(\d{4})-(\d{4})$/);
    if (match) {
      return (
        <span key={i}>
          {match[1]}<sup className="year-sup">{match[2]}</sup>
        </span>
      );
    }
    return part;
  });
}

function SectionHead({ icon, title }) {
  const paths = {
    objective: <><circle cx="12" cy="12" r="10" /><polyline points="12 8 12 12 14 14" /></>,
    summary: <><path d="M12 20h9" /><path d="M16.5 3.5l4 4L7 21H3v-4z" /></>,
    education: <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>,
    experience: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-4 0v2" /></>,
    skills: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>,
    achievements: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></>,
  };
  return (
    <div className="section-head">
      <div className="section-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2" width="11" height="11">
          {paths[icon]}
        </svg>
      </div>
      <span className="section-title">{title}</span>
    </div>
  );
}

function ResumeSection({ icon, title, content, useYears }) {
  if (!content || !content.trim()) return null;
  return (
    <div className="r-section">
      <SectionHead icon={icon} title={title} />
      <p className="section-body">
        {useYears ? formatYears(content) : content}
      </p>
    </div>
  );
}

export default App;