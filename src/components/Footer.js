import React from "react";

/**
 * Footer component
 * Used in dashboard card
 */
export function Footer() {
  return (
    <footer className="card-footer">
      <a
        className="card-link card-footer-cta"
        href="https://github.com/genminias/EEG-Playback-Tool"
        target="_blank"
        rel="noopener noreferrer"
      >
        View source code
      </a>
      <div className="card-footer-credits">
        Built by CS495 Team 4
      </div>
    </footer>
  );
}
