// equipe.js - Dados da equipe

const teamMembers = {
  founders: [
    {
      initials: 'MA',
      name: 'Marcus Aurelius',
      role: 'Arquimestre do Scriptorium',
      bio: 'Fundador e Guardião do Conhecimento. Com mais de 15 anos de experiência, lidera a visão arquitetural do scriptorium.',
      specialties: ['Arquitetura', 'Liderança', 'Visão Estratégica']
    },
    {
      initials: 'LC',
      name: 'Lucius Cassius',
      role: 'Mestre dos Códices',
      bio: 'Co-fundador e Iluminador Sênior. Especialista em transformar requisitos complexos em código elegante e eficiente.',
      specialties: ['Backend', 'Sistemas Distribuídos', 'Otimização']
    }
  ],
  seniors: [
    {
      initials: 'CV',
      name: 'Cassia Valerius',
      role: 'Escriba Sênior',
      bio: 'Mestra na arte do Frontend. Cria interfaces que encantam como iluminuras medievais.',
      specialties: ['React', 'Vue.js', 'UI/UX']
    },
    {
      initials: 'TM',
      name: 'Titus Marcellus',
      role: 'Guardião dos Dados',
      bio: 'Especialista em bancos de dados e infraestrutura. Garante que os dados sejam tão preciosos quanto pergaminhos antigos.',
      specialties: ['PostgreSQL', 'MongoDB', 'DevOps']
    },
    {
      initials: 'SF',
      name: 'Sophia Flavia',
      role: 'Iluminadora Sênior',
      bio: 'Mestra em automação e qualidade. Cada linha de código passa por seu crivo antes de ser publicada.',
      specialties: ['Testes', 'CI/CD', 'Python']
    }
  ],
  juniors: [
    {
      initials: 'AL',
      name: 'Aurelius Lucius',
      role: 'Aprendiz de Escriba',
      bio: 'Talentoso desenvolvedor em formação. Traz entusiasmo e novas perspectivas ao scriptorium.',
      specialties: ['JavaScript', 'HTML/CSS', 'Comunicação']
    },
    {
      initials: 'JM',
      name: 'Julia Marcella',
      role: 'Aprendiz de Iluminadora',
      bio: 'Apaixonada por design e experiência do usuário. Estuda as técnicas dos mestres iluminadores.',
      specialties: ['Figma', 'UI Design', 'Acessibilidade']
    }
  ]
};

function renderTeam() {
  // Render founders
  const foundersContainer = document.getElementById('foundersTeam');
  if (foundersContainer) {
    foundersContainer.innerHTML = teamMembers.founders.map(member => `
      <div class="member-card" data-aos="fade-up">
        <div class="member-avatar">
          <div class="avatar-frame">
            <div class="avatar-initials">${member.initials}</div>
          </div>
          <div class="member-seal">
            <i class="fas fa-crown"></i>
          </div>
        </div>
        <h3 class="member-name">${member.name}</h3>
        <span class="member-role">${member.role}</span>
        <div class="member-divider"></div>
        <p class="member-bio">${member.bio}</p>
        <div class="member-specialties">
          ${member.specialties.map(spec => `<span class="specialty-tag">${spec}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
  
  // Render seniors
  const seniorsContainer = document.getElementById('seniorTeam');
  if (seniorsContainer) {
    seniorsContainer.innerHTML = teamMembers.seniors.map(member => `
      <div class="member-card" data-aos="fade-up" data-aos-delay="100">
        <div class="member-avatar">
          <div class="avatar-frame">
            <div class="avatar-initials">${member.initials}</div>
          </div>
          <div class="member-seal">
            <i class="fas fa-gem"></i>
          </div>
        </div>
        <h3 class="member-name">${member.name}</h3>
        <span class="member-role">${member.role}</span>
        <div class="member-divider"></div>
        <p class="member-bio">${member.bio}</p>
        <div class="member-specialties">
          ${member.specialties.map(spec => `<span class="specialty-tag">${spec}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
  
  // Render juniors
  const juniorsContainer = document.getElementById('juniorTeam');
  if (juniorsContainer) {
    juniorsContainer.innerHTML = teamMembers.juniors.map(member => `
      <div class="member-card" data-aos="fade-up" data-aos-delay="200">
        <div class="member-avatar">
          <div class="avatar-frame">
            <div class="avatar-initials">${member.initials}</div>
          </div>
          <div class="member-seal">
            <i class="fas fa-seedling"></i>
          </div>
        </div>
        <h3 class="member-name">${member.name}</h3>
        <span class="member-role">${member.role}</span>
        <div class="member-divider"></div>
        <p class="member-bio">${member.bio}</p>
        <div class="member-specialties">
          ${member.specialties.map(spec => `<span class="specialty-tag">${spec}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderTeam();
});