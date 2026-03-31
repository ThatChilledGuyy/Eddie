document.addEventListener('DOMContentLoaded', () => {

  // Render Experience
  const expGrid = document.getElementById('experience-grid');
  experienceData.forEach(exp => {
    const card = document.createElement('div');
    card.className = `exp-card ${exp.isBlue ? 'blue' : ''}`;
    card.innerHTML = `
      <div class="stripe"></div>
      <div class="exp-top">
        <div>
          <div class="exp-co">${exp.company}</div>
          <div class="exp-role">${exp.role}</div>
        </div>
        <span class="exp-date-badge">${exp.date}</span>
      </div>
      <ul class="exp-bullets">
        ${exp.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
      </ul>
    `;
    expGrid.appendChild(card);
  });

  // Render Proof of Work
  const powGrid = document.getElementById('pow-grid');
  powData.forEach(pow => {
    const card = document.createElement('div');
    card.className = 'pow-card';
    card.innerHTML = `
      <div class="pow-icon">${pow.icon}</div>
      <h3>${pow.title}</h3>
      <p>${pow.desc}</p>
      <span class="pow-tag ${pow.tagColor}">${pow.tag}</span>
    `;
    powGrid.appendChild(card);
  });

  // Render Skills
  const skillsGrid = document.getElementById('skills-grid');
  skillsData.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <h4>${skill.title}</h4>
      <ul>
        ${skill.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
    skillsGrid.appendChild(card);
  });

  // Scroll Animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.exp-card, .pow-card, .skill-card, .stat-chip').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
