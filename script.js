const spotlight = document.getElementById('spotlight');
const spotlightSize = 600;

function updateSpotlight(x, y) {
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;
  spotlight.style.background = `radial-gradient(${spotlightSize}px circle at ${x + scrollX}px ${y + scrollY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
}

document.addEventListener('mousemove', (e) => {
  updateSpotlight(e.clientX, e.clientY);
});

document.addEventListener('scroll', () => {
  // fuerza una actualización en la última posición del mouse
  if (window._lastMouseEvent) {
    updateSpotlight(window._lastMouseEvent.clientX, window._lastMouseEvent.clientY);
  }
});

document.addEventListener('mousemove', (e) => {
  window._lastMouseEvent = e;
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav[aria-label='Secciones'] a");

function activateLink() {
  let found = false;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const link = document.querySelector(`nav[aria-label='Secciones'] a[href="#${section.id}"]`);

    if (!found && rect.top >= 0 && rect.bottom <= window.innerHeight) {
      link?.classList.add("active");
      found = true;
    } else {
      link?.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", activateLink);
window.addEventListener("load", activateLink);