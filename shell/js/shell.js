/* ==========================================================================
   somehow.work Application Shell Components
   Modular Web Components: <app-header>, <status-label>, <app-notice>, <app-footer>
   ========================================================================== */

(function () {
  const config = window.SITE_CONFIG || {
    name: "App",
    namePlain: "App",
    nameAccent: "",
    subtitle: "",
    networkUrl: "https://somehow.work",
    networkLabel: "somehow.work",
    repoUrl: "",
    issuesUrl: "",
    notice: null
  };

  /**
   * <app-header>
   * Universal header with split-accent brand wordmark, subtitle, and network link.
   */
  class AppHeader extends HTMLElement {
    connectedCallback() {
      if (this.children.length > 0) return;

      const plain = config.namePlain || config.name || "App";
      const accent = config.nameAccent ? `<span class="brand-accent">${config.nameAccent}</span>` : "";

      this.innerHTML = `
        <header class="app-header">
          <div class="app-header-inner">
            <div class="app-header-left">
              <a href="/" class="app-wordmark">${plain}${accent}</a>
              ${config.subtitle ? `<div class="app-subtitle">${config.subtitle}</div>` : ""}
            </div>
            <div class="app-header-right">
              <status-label id="app-status"></status-label>
              <a href="${config.networkUrl || 'https://somehow.work'}" class="network-link" target="_blank" rel="noopener">
                ${config.networkLabel || 'somehow.work'}
              </a>
            </div>
          </div>
        </header>
      `;
    }
  }

  /**
   * <status-label>
   * Unobtrusive service/connectivity status indicator.
   * Renders nothing when 'ready'; displays status on 'connecting' or 'error'.
   */
  class StatusLabel extends HTMLElement {
    constructor() {
      super();
      this.state = "ready"; // 'ready' | 'connecting' | 'error'
      this.message = "";
    }

    connectedCallback() {
      this.render();
    }

    setState(state, message = "") {
      this.state = state;
      this.message = message;
      this.render();
    }

    render() {
      if (this.state === "ready") {
        this.innerHTML = "";
        this.style.display = "none";
        return;
      }

      this.style.display = "inline-flex";
      if (this.state === "connecting") {
        this.innerHTML = `<span class="status-label connecting">Connecting...</span>`;
      } else if (this.state === "error") {
        const retryHtml = typeof window.checkAppHealth === "function"
          ? `<button class="retry-btn" onclick="window.checkAppHealth()">Retry</button>`
          : "";
        this.innerHTML = `
          <span class="status-label error">
            ${this.message || "Offline"}
            ${retryHtml}
          </span>
        `;
      }
    }
  }

  /**
   * <app-notice>
   * Contextual alert box.
   * Variants:
   *  - 'disclaimer': Medical or financial notices (muted amber)
   *  - 'demo': Demonstration mode or periodic data reset notices (muted slate)
   */
  class AppNotice extends HTMLElement {
    connectedCallback() {
      if (this.children.length > 0) return;

      const notice = config.notice;
      if (!notice || !notice.lead) {
        this.style.display = "none";
        return;
      }

      const variant = notice.variant || "disclaimer";
      const bodyText = notice.body ? ` ${notice.body}` : "";

      this.innerHTML = `
        <div class="app-notice ${variant}" role="note">
          <strong class="notice-lead">${notice.lead}</strong>${bodyText}
        </div>
      `;
    }
  }

  /**
   * <app-footer>
   * Pinned application footer with dynamic year and optional links.
   * Renders GitHub and Issues links only when configured.
   */
  class AppFooter extends HTMLElement {
    connectedCallback() {
      if (this.children.length > 0) return;

      const year = new Date().getFullYear();
      const links = [];

      if (config.repoUrl) {
        links.push(`<a href="${config.repoUrl}" target="_blank" rel="noopener">GitHub</a>`);
      }
      if (config.issuesUrl) {
        links.push(`<a href="${config.issuesUrl}" target="_blank" rel="noopener">Report an Issue</a>`);
      }

      const linksHtml = links.length > 0
        ? `<div class="app-footer-right">${links.join(' <span class="footer-dot">&middot;</span> ')}</div>`
        : "";

      this.innerHTML = `
        <footer class="app-footer">
          <div class="app-footer-inner">
            <div class="app-footer-left">
              &copy; ${year} ${config.networkLabel || 'somehow.work'}. All rights reserved.
            </div>
            ${linksHtml}
          </div>
        </footer>
      `;
    }
  }

  // Register Web Components
  if (!customElements.get("app-header")) customElements.define("app-header", AppHeader);
  if (!customElements.get("status-label")) customElements.define("status-label", StatusLabel);
  if (!customElements.get("app-notice")) customElements.define("app-notice", AppNotice);
  if (!customElements.get("app-footer")) customElements.define("app-footer", AppFooter);
})();
