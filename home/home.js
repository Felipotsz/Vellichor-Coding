// ───── DADOS ESTÁTICOS ─────

const homeServices = [
  { icon: 'fa-globe', title: 'Desenvolvimento de Sites', description: 'Sites profissionais, responsivos e otimizados para conversão. Performance e design excepcionais que encantam usuários.', features: ['Responsivo', 'SEO Otimizado', 'Alta Performance'] },
  { icon: 'fa-server', title: 'Sistemas Web', description: 'Aplicações web personalizadas para resolver problemas complexos com eficiência, segurança e escalabilidade.', features: ['Escalável', 'Seguro', 'Manutenível'] },
  { icon: 'fa-laptop-code', title: 'Softwares Personalizados', description: 'Software robusto e escalável com arquitetura de precisão, feito sob medida para seu negócio.', features: ['Sob Medida', 'Robusto', 'Integrável'] },
  { icon: 'fa-cloud-upload-alt', title: 'Plataformas Digitais', description: 'Plataformas SaaS completas, do conceito ao mercado, com infraestrutura moderna e suporte contínuo.', features: ['SaaS Ready', 'Cloud Native', 'Suporte 24/7'] },
  { icon: 'fa-robot', title: 'Automação de Processos', description: 'Otimize operações com automação inteligente de processos, reduza custos e aumente a eficiência.', features: ['Eficiente', 'Economia', 'Precisão'] },
  { icon: 'fa-chart-line', title: 'Consultoria Tech', description: 'Estratégia e arquitetura de software para transformação digital do seu negócio com as melhores práticas.', features: ['Estratégico', 'Inovador', 'Resultados'] }
];

const homeProjects = [
  { category: 'Sistema Web', catIcon: 'fa-building', title: 'Plataforma Athenaeum', description: 'Sistema completo de gestão educacional para uma universidade digital, com módulos de avaliação, financeiro e biblioteca digital.', tech: ['React', 'Node.js', 'PostgreSQL'] },
  { category: 'Plataforma SaaS', catIcon: 'fa-chart-pie', title: 'Dashboard Codex', description: 'Dashboard de analytics em tempo real para e-commerce, com métricas avançadas, relatórios personalizáveis e alertas inteligentes.', tech: ['Vue.js', 'Python', 'MongoDB'] },
  { category: 'Website', catIcon: 'fa-book', title: 'CMS Scriptorium', description: 'Sistema de gestão de conteúdo editorial para editora, com fluxo de aprovação, versionamento e SEO otimizado.', tech: ['Next.js', 'GraphQL', 'Prisma'] }
];

const homeFaq = [
  { question: 'Qual é o prazo médio para desenvolvimento de um projeto?', answer: 'O prazo varia conforme a complexidade do projeto. Sites institucionais levam em média 4-6 semanas, enquanto sistemas mais complexos podem levar 3-6 meses. Oferecemos um cronograma detalhado na fase de planejamento.' },
  { question: 'Como funciona o processo de manutenção e suporte?', answer: 'Oferecemos diferentes níveis de suporte e manutenção, desde pacotes básicos com correções de bugs até planos premium com atualizações constantes, monitoramento 24/7 e suporte prioritário.' },
  { question: 'Vocês oferecem garantia nos projetos?', answer: 'Sim, todos os nossos projetos incluem 90 dias de garantia contra defeitos de implementação. Também oferecemos planos de manutenção estendida para clientes que desejam suporte contínuo.' },
  { question: 'Como é feita a comunicação durante o projeto?', answer: 'Utilizamos metodologias ágeis com reuniões semanais de acompanhamento, relatórios de progresso e comunicação via Slack/WhatsApp para dúvidas rápidas. Você terá um gerente de projeto dedicado.' },
  { question: 'Vocês trabalham com integração de sistemas existentes?', answer: 'Sim, temos vasta experiência em integração com APIs de terceiros, ERPs, CRMs e outros sistemas legados. Fazemos uma análise detalhada para garantir a melhor estratégia de integração.' }
];

// Dados de Tecnologias por categoria
const techByCategory = {
  frontend: [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Next.js', icon: 'fab fa-react' },
    { name: 'Vue.js', icon: 'fab fa-vuejs' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'Tailwind', icon: 'fas fa-wind' },
    { name: 'TypeScript', icon: 'fas fa-code' }
  ],
  backend: [
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'Go', icon: 'fas fa-code-branch' },
    { name: 'Rust', icon: 'fas fa-shield-alt' }
  ],
  databases: [
    { name: 'PostgreSQL', icon: 'fas fa-database' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'MongoDB', icon: 'fas fa-leaf' },
    { name: 'Redis', icon: 'fas fa-bolt' },
    { name: 'Firebase', icon: 'fas fa-fire' },
    { name: 'Prisma', icon: 'fas fa-cube' }
  ],
  devops: [
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Kubernetes', icon: 'fas fa-ship' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'GitHub Actions', icon: 'fab fa-github' },
    { name: 'Vercel', icon: 'fas fa-cloud' }
  ]
};

// ───── FUNÇÕES DE RENDERIZAÇÃO ─────

function renderHomeServices() {
  const container = document.getElementById('homeServices');
  if (!container) return;
  
  container.innerHTML = homeServices.map((service, index) => `
    <div class="service-card" data-aos="fade-up" data-aos-delay="${index * 100}">
      <div class="service-icon">
        <i class="fas ${service.icon}"></i>
      </div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <div class="service-features">
        ${service.features.map(feature => `<span class="service-feature">${feature}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderHomeTechnologies() {
  const frontendContainer = document.getElementById('frontendTech');
  if (frontendContainer) {
    frontendContainer.innerHTML = techByCategory.frontend.map(tech => `
      <div class="tech-artifact" data-aos="fade-up" data-aos-duration="600">
        <i class="${tech.icon}"></i>
        <span>${tech.name}</span>
      </div>
    `).join('');
  }

  const backendContainer = document.getElementById('backendTech');
  if (backendContainer) {
    backendContainer.innerHTML = techByCategory.backend.map(tech => `
      <div class="tech-artifact" data-aos="fade-up" data-aos-duration="600">
        <i class="${tech.icon}"></i>
        <span>${tech.name}</span>
      </div>
    `).join('');
  }

  const databaseContainer = document.getElementById('databaseTech');
  if (databaseContainer) {
    databaseContainer.innerHTML = techByCategory.databases.map(tech => `
      <div class="tech-artifact" data-aos="fade-up" data-aos-duration="600">
        <i class="${tech.icon}"></i>
        <span>${tech.name}</span>
      </div>
    `).join('');
  }

  const devopsContainer = document.getElementById('devopsTech');
  if (devopsContainer) {
    devopsContainer.innerHTML = techByCategory.devops.map(tech => `
      <div class="tech-artifact" data-aos="fade-up" data-aos-duration="600">
        <i class="${tech.icon}"></i>
        <span>${tech.name}</span>
      </div>
    `).join('');
  }
}

function renderHomeProjects() {
  const container = document.getElementById('homeProjects');
  if (!container) return;
  
  container.innerHTML = homeProjects.map((project, index) => `
    <div class="portfolio-codex" data-aos="fade-up" data-aos-delay="${index * 100}">
      <div class="portfolio-inner">
        <div class="portfolio-category">
          <i class="fas ${project.catIcon}"></i> ${project.category}
        </div>
        <h3 class="portfolio-title">${project.title}</h3>
        <div class="portfolio-divider">
          <span></span>
          <i class="fas fa-feather-alt"></i>
          <span></span>
        </div>
        <p class="portfolio-description">${project.description}</p>
        <div class="portfolio-pigments">
          ${project.tech.map(tech => `<span class="portfolio-pigment">${tech}</span>`).join('')}
        </div>
        <a href="#" class="portfolio-folio">
          <i class="fas fa-book-open"></i> Folhear Manuscrito
          <i class="fas fa-arrow-right"></i>
        </a>
        <div class="portfolio-page"></div>
        <div class="portfolio-seal">
          <i class="fas fa-stamp"></i>
        </div>
      </div>
    </div>
  `).join('');
}

function renderHomeFaq() {
  const container = document.getElementById('homeFaq');
  if (!container) return;
  
  container.innerHTML = homeFaq.map((faq, index) => `
    <div class="faq-folio" data-aos="fade-up" data-aos-delay="${index * 50}">
      <button class="faq-quaeritur" onclick="toggleFaq(this)">
        <span class="faq-number">Q.${String(index + 1).padStart(2, '0')}</span>
        <span>${faq.question}</span>
        <i class="fas fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-divider">
        <span></span>
        <i class="fas fa-feather-alt"></i>
        <span></span>
      </div>
      <div class="faq-responsio">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');
}

// ───── FUNÇÕES DE INTERAÇÃO ─────

function toggleFaq(button) {
  const faqFolio = button.closest('.faq-folio');
  const isActive = faqFolio.classList.contains('active');
  
  // Fecha todas as outras FAQs (comportamento de acordeão)
  const allFaqs = document.querySelectorAll('.faq-folio');
  allFaqs.forEach(faq => {
    if (faq !== faqFolio && faq.classList.contains('active')) {
      faq.classList.remove('active');
    }
  });
  
  // Alterna o estado atual
  faqFolio.classList.toggle('active');
}

function initTechDrawers() {
  const drawers = document.querySelectorAll('.tech-drawer');
  drawers.forEach(drawer => {
    const handle = drawer.querySelector('.drawer-handle');
    const content = drawer.querySelector('.drawer-content');
    
    // Todas as gavetas abertas por padrão
    if (content) content.style.display = 'flex';
    
    if (handle) {
      handle.addEventListener('click', () => {
        const isOpen = content && content.style.display !== 'none';
        if (content) content.style.display = isOpen ? 'none' : 'flex';
        if (drawer) drawer.classList.toggle('closed', isOpen);
      });
    }
  });
}

function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  let hasAnimated = false;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        stats.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          const suffix = stat.innerText.includes('%') ? '%' : '';
          const is247 = stat.innerText.includes('24/7');
          
          if (is247) {
            stat.innerText = '24/7';
            return;
          }
          
          if (isNaN(target)) return;
          
          let current = 0;
          const increment = target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              stat.innerText = target + suffix;
              clearInterval(timer);
            } else {
              stat.innerText = Math.floor(current) + suffix;
            }
          }, 20);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(document.querySelector('.about-section') || document.body);
}

function initHeroScroll() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (scrolled <= window.innerHeight) {
      heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
  });
}

// ───── INICIALIZAÇÃO ─────

document.addEventListener('DOMContentLoaded', () => {
  // Renderiza os componentes
  renderHomeServices();
  renderHomeTechnologies();
  renderHomeProjects();
  renderHomeFaq();
  
  // Inicializa as interações
  initTechDrawers();
  initHeroScroll();
  animateStats();
});

// ───── EXPORTAÇÃO PARA USO GLOBAL ─────

window.renderHomeServices = renderHomeServices;
window.renderHomeTechnologies = renderHomeTechnologies;
window.renderHomeProjects = renderHomeProjects;
window.renderHomeFaq = renderHomeFaq;
window.toggleFaq = toggleFaq;
window.initTechDrawers = initTechDrawers;