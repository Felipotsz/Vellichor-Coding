// projeto.js - Página individual do projeto

const projectsData = [
  {
    id: 6,
    title: "Marketplace Vendere",
    category: "saas",
    categoryName: "Plataforma SaaS",
    shortDescription: "Plataforma de marketplace para pequenos negócios.",
    fullDescription: "O Marketplace Vendere é uma plataforma SaaS que permite a criação de marketplaces personalizados para pequenos negócios. O projeto inclui gestão de vendedores, processamento de pagamentos e sistema de avaliações. A plataforma atende mais de 500 vendedores e processa mais de 10.000 transações mensais.",
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
      "SEO integrado",
      "Chat integrado"
    ]
  },
  {
    id: 5,
    title: "ERP Sanctum",
    category: "web",
    categoryName: "Sistema Web",
    shortDescription: "Sistema ERP completo para gestão empresarial.",
    fullDescription: "O ERP Sanctum é uma solução completa de gestão empresarial desenvolvida para a Corporação Sanctum. O sistema integra módulos de financeiro, RH, estoque, vendas e CRM em uma única plataforma, permitindo uma visão 360° do negócio.",
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
      "Dashboards executivos",
      "Relatórios customizáveis"
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
      "Modo offline",
      "Suporte multilíngue"
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
      "API headless",
      "Integração com redes sociais"
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
      "Exportação de relatórios",
      "Integração com múltiplas fontes"
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
      "API para integrações",
      "Suporte a múltiplas instituições"
    ]
  }
];

function getCategoryIcon(category) {
  const icons = {
    web: 'fa-server',
    saas: 'fa-cloud-upload-alt',
    site: 'fa-globe',
    mobile: 'fa-mobile-alt'
  };
  return icons[category] || 'fa-code';
}

function getProjectId() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('id'));
}

function loadProject() {
  const projectId = getProjectId();
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    window.location.href = '../portfolio/portfolio.html';
    return;
  }
  
  // Preencher dados do cabeçalho
  const categoryElement = document.getElementById('projectCategory');
  if (categoryElement) {
    categoryElement.innerHTML = `<i class="fas ${getCategoryIcon(project.category)}"></i> ${project.categoryName}`;
  }
  
  const titleElement = document.getElementById('projectTitle');
  if (titleElement) {
    titleElement.innerText = project.title;
  }
  
  const subtitleElement = document.getElementById('projectSubtitle');
  if (subtitleElement) {
    subtitleElement.innerText = project.shortDescription;
  }
  
  // Descrição completa
  const descriptionElement = document.getElementById('projectFullDescription');
  if (descriptionElement) {
    descriptionElement.innerText = project.fullDescription;
  }
  
  // Sidebar
  const clientElement = document.getElementById('projectClient');
  if (clientElement) {
    clientElement.innerText = project.client;
  }
  
  const yearElement = document.getElementById('projectYear');
  if (yearElement) {
    yearElement.innerText = project.year;
  }
  
  const durationElement = document.getElementById('projectDuration');
  if (durationElement) {
    durationElement.innerText = project.duration;
  }
  
  const categorySidebarElement = document.getElementById('projectCategorySidebar');
  if (categorySidebarElement) {
    categorySidebarElement.innerText = project.categoryName;
  }
  
  // Características
  const featuresContainer = document.getElementById('projectFeatures');
  if (featuresContainer) {
    featuresContainer.innerHTML = project.features.map(feature => `
      <div class="feature-item">
        <i class="fas fa-check-circle"></i>
        <span>${feature}</span>
      </div>
    `).join('');
  }
  
  // Tecnologias
  const techContainer = document.getElementById('projectTech');
  if (techContainer) {
    techContainer.innerHTML = project.tech.map(tech => `
      <div class="tech-item">
        <i class="fas fa-code"></i>
        <span>${tech}</span>
      </div>
    `).join('');
  }
  
  // Galeria de imagens
  if (project.images && project.images.length > 0) {
    const gallerySection = document.getElementById('gallerySection');
    const galleryContainer = document.getElementById('projectGallery');
    if (gallerySection && galleryContainer) {
      gallerySection.style.display = 'block';
      galleryContainer.innerHTML = project.images.map((img, idx) => `
        <div class="gallery-item" data-src="${img}">
          <img src="${img}" alt="${project.title} - Imagem ${idx + 1}">
          <div class="gallery-overlay">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>
      `).join('');
    }
  }
  
  // Vídeo
  if (project.video) {
    const videoSection = document.getElementById('videoSection');
    const videoContainer = document.getElementById('projectVideo');
    if (videoSection && videoContainer) {
      videoSection.style.display = 'block';
      videoContainer.innerHTML = `
        <iframe src="${project.video}" frameborder="0" allowfullscreen title="Demonstração do projeto ${project.title}"></iframe>
      `;
    }
  }
  
  // Navegação entre projetos
  const currentIndex = projectsData.findIndex(p => p.id === projectId);
  const prevProject = projectsData[currentIndex + 1];
  const nextProject = projectsData[currentIndex - 1];
  
  const navContainer = document.getElementById('projectNav');
  if (navContainer) {
    let navHtml = '';
    
    if (prevProject) {
      navHtml += `<a href="projeto.html?id=${prevProject.id}" class="nav-prev"><i class="fas fa-arrow-left"></i> ${prevProject.title}</a>`;
    } else {
      navHtml += `<span></span>`;
    }
    
    if (nextProject) {
      navHtml += `<a href="projeto.html?id=${nextProject.id}" class="nav-next">${nextProject.title} <i class="fas fa-arrow-right"></i></a>`;
    }
    
    navContainer.innerHTML = navHtml;
  }
  
  // Atualizar título da página
  document.title = `${project.title} | Vellichor Coding`;
}

// Inicializar lightbox
function initLightbox() {
  setTimeout(() => {
    const galleryElement = document.getElementById('projectGallery');
    if (galleryElement && typeof lightGallery !== 'undefined') {
      lightGallery(galleryElement, {
        selector: '.gallery-item',
        speed: 500,
        download: false,
        zoom: true,
        actualSize: false
      });
    }
  }, 500);
}

// Aguardar o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM carregado, iniciando projeto.js');
  loadProject();
  initLightbox();
});