const navbarContainer = document.querySelector("#navbar-container");

if (navbarContainer) {
  navbarContainer.innerHTML = `
    <header class="site-header">
      <div class="container nav-inner">
        <a class="brand" href="index.html" aria-label="Impulso Digital, inicio">
          <span class="brand-mark">ID</span>
          <span>Impulso Digital</span>
        </a>
        <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button>
        <nav class="nav-links" id="nav-links" aria-label="Navegación principal">
          <a href="index.html">Inicio</a>
          <a href="equipo.html">Equipo</a>
          <a href="servicios.html">Servicios</a>
          <a href="contacto.html">Contacto</a>
        </nav>
      </div>
    </header>
  `;
}

const footerContainer = document.querySelector("#footer-container");

if (footerContainer) {
  footerContainer.className = "site-footer";
  footerContainer.innerHTML = `
    <div class="container footer-inner">
      <a class="brand" href="index.html">
        <span class="brand-mark">ID</span>
        <span>Impulso Digital</span>
      </a>
      <p>© <span id="current-year"></span> Impulso Digital. Ideas que avanzan.</p>
      <div class="footer-links">
        <a href="equipo.html">Equipo</a>
        <a href="servicios.html">Servicios</a>
        <a href="contacto.html">Contacto</a>
      </div>
    </div>
  `;
}
