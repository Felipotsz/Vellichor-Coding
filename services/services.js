const coreServices = [
  {
    icon: 'fa-globe',
    title: 'Desenvolvimento de Sites',
    description: 'Sites profissionais que contam sua história com elegância. Design responsivo, SEO otimizado e performance excepcional.',
    features: ['Responsivo', 'SEO Otimizado', 'Alta Performance']
  },
  {
    icon: 'fa-server',
    title: 'Sistemas Web',
    description: 'Aplicações robustas como enciclopédias digitais, escaláveis e seguras para resolver problemas complexos.',
    features: ['Escalável', 'Seguro', 'Manutenível']
  },
  {
    icon: 'fa-laptop-code',
    title: 'Softwares Personalizados',
    description: 'Sob medida como um manuscrito original. Arquitetura de precisão para seu negócio.',
    features: ['Sob Medida', 'Robusto', 'Integrável']
  }
];

const specializedServices = [
  {
    icon: 'fa-cloud-upload-alt',
    title: 'Plataformas Digitais',
    description: 'SaaS completos com infraestrutura moderna, prontos para o mercado e suporte contínuo.',
    features: ['SaaS Ready', 'Cloud Native', 'Suporte 24/7']
  },
  {
    icon: 'fa-robot',
    title: 'Automação de Processos',
    description: 'Otimize operações com automação inteligente. Eficiência e precisão em cada página.',
    features: ['Eficiente', 'Economia', 'Precisão']
  },
  {
    icon: 'fa-chart-line',
    title: 'Consultoria Tech',
    description: 'Estratégia e arquitetura de software para transformação digital do seu negócio.',
    features: ['Estratégico', 'Inovador', 'Resultados']
  }
];

function renderCoreServices() {
  const container = document.getElementById('coreServices');
  if (!container) return;
  
  container.innerHTML = coreServices.map((service, index) => `
    <div class="service-card" data-aos="fade-up" data-aos-delay="${index * 100}">
      <div class="service-inner">
        <div class="service-icon">
          <i class="fas ${service.icon}"></i>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <div class="service-divider"></div>
        <p class="service-description">${service.description}</p>
        <div class="service-features">
          ${service.features.map(feature => `<span class="service-feature">${feature}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderSpecializedServices() {
  const container = document.getElementById('specializedServices');
  if (!container) return;
  
  container.innerHTML = specializedServices.map((service, index) => `
    <div class="service-card" data-aos="fade-up" data-aos-delay="${index * 100}">
      <div class="service-inner">
        <div class="service-icon">
          <i class="fas ${service.icon}"></i>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <div class="service-divider"></div>
        <p class="service-description">${service.description}</p>
        <div class="service-features">
          ${service.features.map(feature => `<span class="service-feature">${feature}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderCoreServices();
  renderSpecializedServices();
});