// portfolio.js - Versão corrigida com ordem decrescente

const projectsData = [
  {
    id: 6,
    title: "Marketplace Vendere",
    category: "saas",
    categoryName: "Plataforma SaaS",
    shortDescription: "Plataforma de marketplace para pequenos negócios.",
    fullDescription: "O Marketplace Vendere é uma plataforma SaaS que permite a criação de marketplaces personalizados para pequenos negócios. O projeto inclui gestão de vendedores, processamento de pagamentos e sistema de avaliações.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
    image: "../assets/projects/vendere.jpg",
    images: [
      "../assets/projects/vendere-1.jpg",
      "../assets/projects/vendere-2.jpg",
      "../assets/projects/vendere-3.jpg"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    client: "Vendere Inc.",
    year: "2024",
    duration: "7 meses",
    features: [
      "Multi-vendedores",
      "Gateway de pagamentos",
      "Sistema de avaliações",
      "Dashboard do vendedor",
      "SEO integrado"
    ]
  },
  {
    id: 5,
    title: "ERP Sanctum",
    category: "web",
    categoryName: "Sistema Web",
    shortDescription: "Sistema ERP completo para gestão empresarial.",
    fullDescription: "O ERP Sanctum é uma solução completa de gestão empresarial desenvolvida para a Corporação Sanctum. O sistema integra módulos de financeiro, RH, estoque, vendas e CRM em uma única plataforma.",
    tech: ["Laravel", "Vue.js", "MySQL", "Docker"],
    image: "../assets/projects/sanctum.jpg",
    images: [
      "../assets/projects/sanctum-1.jpg",
      "../assets/projects/sanctum-2.jpg",
      "../assets/projects/sanctum-3.jpg"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    client: "Corporação Sanctum",
    year: "2023",
    duration: "8 meses",
    features: [
      "Módulo financeiro",
      "Gestão de RH",
      "Controle de estoque",
      "CRM integrado",
      "Dashboards executivos"
    ]
  },
  {
    id: 4,
    title: "App Lumen",
    category: "mobile",
    categoryName: "Aplicativo Mobile",
    shortDescription: "Aplicativo de realidade aumentada para museus e exposições.",
    fullDescription: "O App Lumen é uma aplicação mobile que utiliza realidade aumentada para enriquecer experiências em museus e exposições. O projeto inclui reconhecimento de obras, informações interativas e navegação indoor.",
    tech: ["React Native", "ARCore", "Firebase", "Node.js"],
    image: "../assets/projects/lumen.jpg",
    images: [
      "../assets/projects/lumen-1.jpg",
      "../assets/projects/lumen-2.jpg",
      "../assets/projects/lumen-3.jpg"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    client: "Museu de Arte Moderna",
    year: "2024",
    duration: "5 meses",
    features: [
      "Realidade aumentada",
      "Reconhecimento de obras",
      "Navegação indoor",
      "Conteúdo interativo",
      "Modo offline"
    ]
  },
  {
    id: 3,
    title: "CMS Scriptorium",
    category: "site",
    categoryName: "Website",
    shortDescription: "Sistema de gestão de conteúdo editorial para editora.",
    fullDescription: "O CMS Scriptorium é um sistema de gestão de conteúdo desenvolvido para a Editora Clássica. O projeto inclui fluxo de aprovação editorial, versionamento de conteúdo, SEO otimizado e integração com redes sociais.",
    tech: ["Next.js", "GraphQL", "Prisma", "TailwindCSS"],
    image: "../assets/projects/scriptorium.jpg",
    images: [
      "../assets/projects/scriptorium-1.jpg",
      "../assets/projects/scriptorium-2.jpg",
      "../assets/projects/scriptorium-3.jpg"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    client: "Editora Clássica",
    year: "2023",
    duration: "3 meses",
    features: [
      "Editor WYSIWYG",
      "Fluxo de aprovação",
      "Versionamento",
      "SEO otimizado",
      "API headless"
    ]
  },
  {
    id: 2,
    title: "Dashboard Codex",
    category: "saas",
    categoryName: "Plataforma SaaS",
    shortDescription: "Dashboard de analytics em tempo real para e-commerce.",
    fullDescription: "O Dashboard Codex é uma plataforma SaaS de analytics em tempo real desenvolvida para a CommerceFlow. O sistema oferece métricas avançadas, relatórios personalizáveis, alertas inteligentes e previsões baseadas em IA.",
    tech: ["Vue.js", "Python", "MongoDB", "TensorFlow"],
    image: "../assets/projects/codex.jpg",
    images: [
      "../assets/projects/codex-1.jpg",
      "../assets/projects/codex-2.jpg",
      "../assets/projects/codex-3.jpg"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    client: "CommerceFlow",
    year: "2024",
    duration: "4 meses",
    features: [
      "Métricas em tempo real",
      "Dashboards personalizáveis",
      "Alertas automáticos",
      "Previsões com IA",
      "Exportação de relatórios"
    ]
  },
  {
    id: 1,
    title: "Plataforma Athenaeum",
    category: "web",
    categoryName: "Sistema Web",
    shortDescription: "Sistema completo de gestão educacional para uma universidade digital.",
    fullDescription: "A Plataforma Athenaeum é um sistema robusto de gestão educacional desenvolvido para a Universitas Digitalis. O projeto inclui módulos de avaliação, gestão financeira, biblioteca digital integrada, portal do aluno e professor, além de um sistema de analytics educacional.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    image: "../assets/projects/athenaeum.jpg",
    images: [
      "../assets/projects/athenaeum-1.jpg",
      "../assets/projects/athenaeum-2.jpg",
      "../assets/projects/athenaeum-3.jpg"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    client: "Universitas Digitalis",
    year: "2023",
    duration: "6 meses",
    features: [
      "Gestão acadêmica completa",
      "Biblioteca digital integrada",
      "Portal do aluno personalizável",
      "Relatórios avançados",
      "API para integrações"
    ]
  }
];

// Função para obter ícone da categoria
function getCategoryIcon(category) {
  const icons = {
    web: 'fa-server',
    saas: 'fa-cloud-upload-alt',
    site: 'fa-globe',
    mobile: 'fa-mobile-alt'
  };
  return icons[category] || 'fa-code';
}

// Função para renderizar os projetos (já em ordem decrescente)
function renderProjects() {
  const container = document.getElementById('portfolioGrid');
  if (!container) {
    console.warn('Elemento portfolioGrid não encontrado');
    return;
  }
  
  container.innerHTML = projectsData.map(project => `
    <a href="/portfolio/projects/projects.html?id=${project.id}" class="project-card" data-category="${project.category}">
      <div class="project-image">
        <div class="project-image-placeholder">
          <i class="fas ${getCategoryIcon(project.category)}"></i>
        </div>
        <div class="project-overlay">
          <i class="fas fa-book-open"></i>
          <span>Folhear Manuscrito</span>
        </div>
      </div>
      <div class="project-info">
        <span class="project-category">
          <i class="fas ${getCategoryIcon(project.category)}"></i> ${project.categoryName}
        </span>
        <h3 class="project-title">${project.title}</h3>
        <div class="project-divider"></div>
        <p class="project-description">${project.shortDescription}</p>
        <div class="project-tech">
          ${project.tech.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          ${project.tech.length > 3 ? `<span class="tech-tag">+${project.tech.length - 3}</span>` : ''}
        </div>
      </div>
    </a>
  `).join('');
}

// Função para inicializar os filtros
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');
  
  if (filterBtns.length === 0) {
    console.warn('Nenhum botão de filtro encontrado');
    return;
  }
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Atualizar botão ativo
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filtrar projetos com animação
      projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        
        if (filter === 'all' || projectCategory === filter) {
          project.style.display = 'block';
          setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
          }, 10);
        } else {
          project.style.opacity = '0';
          project.style.transform = 'translateY(10px)';
          setTimeout(() => {
            project.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Aguardar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM carregado, iniciando portfolio.js');
  
  // Renderizar projetos
  renderProjects();
  
  // Inicializar filtros
  setTimeout(() => {
    initFilters();
  }, 100);
  
  // Re-aplicar AOS para novos elementos
  if (typeof AOS !== 'undefined' && AOS.refresh) {
    setTimeout(() => {
      AOS.refresh();
    }, 200);
  }
});

// Exportar funções para uso global
window.renderProjects = renderProjects;
window.initFilters = initFilters;