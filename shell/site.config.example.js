/* ==========================================================================
   site.config.js (Example Template)
   Copy this file into your application as site.config.js and customize.
   ========================================================================== */

window.SITE_CONFIG = {
  // Brand Identity: wordmark rendered as "{namePlain}<span class='brand-accent'>{nameAccent}</span>"
  name: "Pixelchemy",
  namePlain: "Pixel",
  nameAccent: "chemy",
  subtitle: "Your private photo and document toolbox",

  // Network Navigation
  networkUrl: "https://somehow.work",
  networkLabel: "somehow.work",

  // Open Source & Repository Configuration:
  // Set openSource to true to display GitHub and Issue tracker links.
  // If false (or repoUrl is omitted), GitHub is omitted and "Report an Issue"
  // automatically falls back to mailto:report-<appname>@somehow.work.
  openSource: true,
  repoUrl: "https://github.com/antimatt3r/pixelchemy",
  issuesUrl: "https://github.com/antimatt3r/pixelchemy/issues",

  // Optional Notice / Banner:
  // Set to null to disable notices completely, or use one of the two standard variants:
  //
  // 1. "disclaimer" variant (Medical / Financial / Legal advisories - muted amber):
  // notice: {
  //   variant: "disclaimer",
  //   lead: "Consult a qualified medical practitioner before substituting or altering any medication.",
  //   body: "Aushadh is an informational tool, not medical advice."
  // }
  //
  // 2. "demo" variant (Demonstration mode / Preview deployments - muted slate):
  notice: {
    variant: "demo",
    lead: "Demonstration mode.",
    body: "This preview instance redeploys periodically; state and uploads are temporary."
  }
};
