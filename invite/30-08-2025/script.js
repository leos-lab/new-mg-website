
// Dynamically update manifest background_color and theme_color
fetch('manifest.json')
  .then(res => res.json())
  .then(manifest => {
    const config = window.COUNTDOWN_CONFIG;
    manifest.background_color = config.backgroundColor;
    manifest.theme_color = config.backgroundColor;


// Dynamically update OG description with event date
const ogMeta = document.querySelector('meta[property="og:description"]');
if (ogMeta && window.COUNTDOWN_CONFIG) {
  const eventDate = new Date(window.COUNTDOWN_CONFIG.eventDate);
  const formatted = eventDate.toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  }).toUpperCase().replace(/\./g, '');
  ogMeta.setAttribute('content', `💌 Our next event is on ${formatted}`);
}


    const blob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    let manifestLink = document.querySelector('link[rel="manifest"]');
    if (manifestLink) {
      manifestLink.setAttribute('href', url);
    }
  });


function updateCSSVars(config) {
  document.documentElement.style.setProperty('--bg-color', config.backgroundColor);
  document.documentElement.style.setProperty('--text-color', config.textColor);
  document.documentElement.style.setProperty('--logo-color', config.logoColor);
}

function insertLogo(svgContent) {
  const container = document.getElementById("logo-container");
  container.innerHTML = svgContent;
  container.querySelector("svg").style.color = "var(--logo-color)";
}

function formatEventDate(isoString) {
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-GB', { month: 'short' }).toUpperCase();
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}

function startCountdown(config) {
  const eventTime = new Date(new Date(config.eventDate).toLocaleString("en-US", { timeZone: config.timeZone })).getTime();
  document.getElementById("event-date").textContent = formatEventDate(config.eventDate);

  function update() {
    const now = new Date().getTime();
    const distance = eventTime - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  const config = window.COUNTDOWN_CONFIG;
  updateCSSVars(config);
  startCountdown(config);
});
