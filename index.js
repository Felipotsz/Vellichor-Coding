// index.js - atualizado com dark mode como padrão

// ───── TEMA (DARK/LIGHT MODE) ─────
// AGORA: dark é o padrão, light é alternativo

function getTheme() { 
  const stored = localStorage.getItem('vc-theme');
  // Se não houver tema salvo, retorna 'dark' (padrão)
  return stored || 'dark'; 
}

function applyTheme(theme) {
  // Remove ambas as classes primeiro para garantir estado limpo
  document.documentElement.classList.remove('light', 'dark');
  
  if (theme === 'light') {
    document.documentElement.classList.add('light');
  } else {
    // dark é o padrão, então não precisamos de classe .dark (ou podemos manter para consistência)
    // Para compatibilidade, adicionamos classe dark também
    document.documentElement.classList.add('dark');
  }
  
  localStorage.setItem('vc-theme', theme);
  
  const themeBtn = document.querySelector('.theme-btn');
  if (themeBtn) {
    // Em dark mode (padrão), mostrar ícone de sol (para mudar para light)
    // Em light mode, mostrar ícone de lua (para mudar para dark)
    themeBtn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    themeBtn.classList.add('theme-btn-transition');
    setTimeout(() => {
      themeBtn.classList.remove('theme-btn-transition');
    }, 400);
  }
  
  // Atualizar tooltip
  const tooltip = document.querySelector('.theme-tooltip');
  if (tooltip) {
    tooltip.textContent = theme === 'dark' ? 'Modo Claro' : 'Modo Escuro';
  }
}

function toggleTheme() {
  const currentTheme = getTheme();
  // Se atual é dark (padrão), muda para light
  // Se atual é light, muda para dark
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  const themeBtn = document.querySelector('.theme-btn');
  if (themeBtn) {
    createRippleEffect(themeBtn);
  }
  
  applyTheme(newTheme);
}

function createRippleEffect(element) {
  const ripple = document.createElement('span');
  ripple.classList.add('theme-btn-ripple');
  
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${rect.width / 2 - size / 2}px`;
  ripple.style.top = `${rect.height / 2 - size / 2}px`;
  
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  
  element.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

(function initTheme() {
  // Carrega o tema salvo ou usa 'dark' como padrão
  applyTheme(getTheme());
})();

// ───── DADOS DE NAVEGAÇÃO ───── (mantido igual)

const NAV_LINKS = [
  { label: 'Início',    href: '../index.html', icon: 'fas fa-home' },
  { label: 'Serviços',  href: '../services/services.html', icon: 'fas fa-cogs' },
  { label: 'Portfólio', href: '../portfolio/portfolio.html', icon: 'fas fa-briefcase' },
  { 
    label: 'Sobre', 
    icon: 'fas fa-info-circle',
    dropdown: [
      { label: 'Sobre Nós', href: '../about-us/about-us.html', icon: 'fas fa-book-open' },
      { label: 'Nossa Equipe',    href: '../team/team.html', icon: 'fas fa-users' }
    ]
  },
  { label: 'Contato',   href: '../contact/contact.html', icon: 'fas fa-envelope' },
];

const FOOTER_LINKS = [
  { label: 'Serviços',  href: '../services/services.html' },
  { label: 'Soluções',  href: '../solucoes/solucoes.html' },
  { label: 'Portfólio', href: '../portfolio/portfolio.html' },
  { label: 'Sobre',     href: '../about-us/about-us.html' },
  { label: 'Equipe',    href: '../team/team.html' },
  { label: 'Contato',   href: '../contact/contact.html' },
];

const LEGAL_LINKS = [
  { label: 'Política de Privacidade', href: '../privacidade/privacidade.html' },
  { label: 'Termos de Uso',           href: '../termos/termos.html' },
  { label: 'Missão e Valores',        href: '../missao/missao.html' },
];

// ───── RENDERIZAÇÃO DA NAVBAR ─────

function renderNavbar() {
  const currentPage = window.location.pathname.split('/').pop() || 'inicio.html';
  const currentTheme = getTheme();
  
  const desktopLinks = NAV_LINKS.map(link => {
    if (link.dropdown) {
      return `
        <div class="navbar-dropdown">
          <button class="navbar-dropdown-btn">
            ${link.label}
            <i class="fas fa-chevron-down"></i>
          </button>
          <div class="navbar-dropdown-menu">
            ${link.dropdown.map(dropItem => `
              <a href="${dropItem.href}" class="navbar-dropdown-link">
                <i class="${dropItem.icon}"></i>
                ${dropItem.label}
              </a>
            `).join('')}
          </div>
        </div>
      `;
    }
    return `
      <a href="${link.href}" class="navbar-link ${currentPage === link.href.split('/').pop() ? 'active' : ''}">
        ${link.label}
      </a>
    `;
  }).join('');
  
  const mobileLinks = NAV_LINKS.map(link => {
    if (link.dropdown) {
      return link.dropdown.map(dropItem => `
        <a href="${dropItem.href}" class="mobile-menu-link">
          <i class="${dropItem.icon}" style="width: 1.25rem; margin-right: 0.5rem;"></i>
          ${dropItem.label}
        </a>
      `).join('');
    }
    return `
      <a href="${link.href}" class="mobile-menu-link">
        <i class="${link.icon}" style="width: 1.25rem; margin-right: 0.5rem;"></i>
        ${link.label}
      </a>
    `;
  }).join('');
  
  // Ícone do botão: dark mode (padrão) mostra SOL (para mudar para light)
  const themeIcon = currentTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  const tooltipText = currentTheme === 'dark' ? 'Modo Claro' : 'Modo Escuro';
  
  return `
    <header class="navbar">
      <div class="navbar-container">
        <a href="../index.html" class="navbar-brand">
          <img src="/src/vellichor-coding-logo.png" alt="Vellichor Coding" class="navbar-logo">
          <span class="navbar-brand-text">Vellichor Coding</span>
        </a>
        <nav class="navbar-nav">${desktopLinks}</nav>
        <div class="navbar-actions">
          <a href="../contact/contact.html" class="btn-nav-contact">
            <i class="fas fa-comment"></i>
            <span>Entre em Contato</span>
          </a>
          <div class="theme-btn-wrapper">
            <button class="theme-btn" onclick="toggleTheme()" aria-label="Alternar tema">
              ${themeIcon}
            </button>
            <span class="theme-tooltip">${tooltipText}</span>
          </div>
          <button class="hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        <div class="container">
          ${mobileLinks}
          <div class="mobile-menu-contact">
            <a href="../contato/contato.html" class="btn-nav-contact">
              <i class="fas fa-comment"></i>
              <span>Entre em Contato</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  `;
}

// ───── RENDERIZAÇÃO DO FOOTER ───── (mantido igual)

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Coluna 1 - Marca -->
          <div class="footer-brand">
            <div class="footer-title">
              <img src="/src/vellichor-coding-logo.png" alt="Vellichor Coding" class="footer-logo">
              <span>Vellichor Coding</span>
            </div>
            <div class="footer-divider"></div>
            <p class="footer-description">
              Software construído com conhecimento e precisão. Tecnologia com a elegância de um livro clássico.
            </p>
            <div class="footer-contact">
              <i class="fas fa-envelope"></i>
              <span>contato@vellichor.dev</span>
            </div>
            <div class="footer-contact">
              <i class="fas fa-map-marker-alt"></i>
              <span>São Paulo, Brasil</span>
            </div>
            <div class="footer-contact">
              <i class="fab fa-whatsapp"></i>
              <span>(11) 99999-9999</span>
            </div>
          </div>

          <!-- Coluna 2 - Links Rápidos -->
          <div class="footer-section">
            <h4 class="footer-section-label">Navegação</h4>
            ${FOOTER_LINKS.map(link => `
              <a href="${link.href}" class="footer-link">
                <i class="fas fa-chevron-right"></i>
                ${link.label}
              </a>
            `).join('')}
          </div>

          <!-- Coluna 3 - Legal -->
          <div class="footer-section">
            <h4 class="footer-section-label">Documentos</h4>
            ${LEGAL_LINKS.map(link => `
              <a href="${link.href}" class="footer-link">
                <i class="fas fa-chevron-right"></i>
                ${link.label}
              </a>
            `).join('')}
          </div>

          <!-- Coluna 4 - Newsletter -->
          <div class="footer-newsletter">
            <h4 class="footer-section-label">Correspondência</h4>
            <p class="newsletter-text">
              Receba novidades e insights sobre tecnologia em sua caixa postal.
            </p>
            <div class="footer-newsletter-form">
              <input type="email" id="newsletterEmail" placeholder="seu@email.com" class="form-input">
              <button class="btn-newsletter" onclick="subscribeNewsletter()">
                <i class="fas fa-paper-plane"></i>
                <span>Assinar</span>
              </button>
            </div>
            <div id="newsletterMsg" style="margin-top:0.5rem;font-size:0.75rem;display:none"></div>
            <div class="footer-social">
              <a href="#" class="social-link" aria-label="GitHub"><i class="fab fa-github"></i></a>
              <a href="#" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" class="social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-link" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        <!-- Selo decorativo -->
        <div class="footer-seal">
          <div class="seal-wax">
            <i class="fas fa-stamp"></i>
            <span>Codex MMXXIV</span>
            <i class="fas fa-circle"></i>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <div class="footer-copyright">
              <i class="fas fa-copyright"></i> ${new Date().getFullYear()} Vellichor Coding
              <i class="fas fa-feather-alt"></i>
              Software construído com conhecimento e precisão
            </div>
            <div class="footer-legal">
              <a href="../privacidade/privacidade.html">Privacidade</a>
              <a href="../termos/termos.html">Termos</a>
              <a href="../acessibilidade/acessibilidade.html">Acessibilidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ───── INTERAÇÕES DA UI ─────

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail')?.value?.trim();
  const msg = document.getElementById('newsletterMsg');
  
  if (!email || !email.includes('@')) {
    if (msg) {
      msg.style.color = 'var(--accent)';
      msg.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Por favor, insira um e-mail válido.';
      msg.style.display = 'block';
      setTimeout(() => { msg.style.display = 'none'; }, 3000);
    }
    return;
  }
  
  if (msg) {
    msg.style.color = '#28a745';
    msg.innerHTML = '<i class="fas fa-check-circle"></i> Inscrito com sucesso!';
    msg.style.display = 'block';
    setTimeout(() => { msg.style.display = 'none'; }, 3000);
  }
  
  document.getElementById('newsletterEmail').value = '';
}

function showNotification(message, isError = false) {
  let toast = document.getElementById('globalToast');
  
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `<i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${message}`;
  toast.className = `toast ${isError ? 'error' : ''}`;
  
  setTimeout(() => { toast.classList.add('show'); }, 10);
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ───── ANIMAÇÕES DE SCROLL ─────

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('fade-up') || entry.target.classList.contains('fade-in')) {
          observer.unobserve(entry.target);
        }
      }
    });
  }, { 
    threshold: 0.1, 
    rootMargin: '-30px 0px' 
  });
  
  document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));
}

// ───── INICIALIZAÇÃO GLOBAL ─────

document.addEventListener('DOMContentLoaded', () => {
  // Renderizar navbar e footer
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  if (navbarPlaceholder) {
    navbarPlaceholder.outerHTML = renderNavbar();
  }
  
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = renderFooter();
  }
  
  // Inicializar animações
  initScrollAnimations();
  
  // Fechar menu mobile ao clicar em um link
  document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      if (!mobileMenu.contains(e.target) && !hamburger?.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    }
  });
});

// ───── EXPORTAÇÃO PARA USO GLOBAL ─────

window.toggleTheme = toggleTheme;
window.getTheme = getTheme;
window.applyTheme = applyTheme;
window.toggleMobileMenu = toggleMobileMenu;
window.showNotification = showNotification;
window.subscribeNewsletter = subscribeNewsletter;