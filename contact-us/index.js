// Global Theme Persistence Engine
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';

// Set baseline state on compilation load
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? '🌙' : '☀️';
});

// Asynchronous Ingestion Loop for info.json Matrix
async function IngestTelemetryMatrix() {
  const container = document.getElementById('telemetryData');
  try {
    const response = await fetch('info.json');
    if (!response.ok) throw new Error(`HTTP network trace error: Status ${response.status}`);
    
    const data = await response.json();
    const details = data["developper-details"];

    container.innerHTML = `
      <p style="margin: 4px 0;"><strong>Developer:</strong> ${details.name || '-'}</p>
      <p style="margin: 4px 0;"><strong>Mail ID:</strong> <a href="mailto:${details.email}" style="color: var(--primary); text-decoration: none;">${details.email || '-'}</a></p>
      <p style="margin: 4px 0;"><strong>Contact Number:</strong> ${details.phone || '-'}</p>
      <p style="margin: 4px 0;"><strong>Portfolio:</strong> <a href="https://${details.portfolio}" target="_blank" style="color: var(--primary); text-decoration: none;">${details.portfolio || '-'}</a></p>
      <p style="margin: 4px 0;"><strong>GitHub:</strong> <a href="${details.github}" target="_blank" style="color: var(--primary); text-decoration: none;">${details.github || '-'}</a></p>
      <p style="margin: 4px 0; border-top: 1px dashed var(--border); padding-top: 8px; margin-top: 8px; font-size: 0.8rem; color: var(--text-muted);">Environment Status: Production / Online</p>
    `;
  } catch (error) {
    container.innerHTML = `<p style="margin: 4px 0; color: var(--danger);"><strong>Pipeline Read Fault:</strong> Failed to resolve local 'info.json' dataset map.</p>`;
  }
}

// Bind initialization to content load boundary
window.addEventListener('DOMContentLoaded', IngestTelemetryMatrix);