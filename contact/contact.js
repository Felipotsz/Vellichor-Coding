document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validação simples
      const nome = document.getElementById('nome')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const assunto = document.getElementById('assunto')?.value;
      const mensagem = document.getElementById('mensagem')?.value.trim();
      const consentimento = document.getElementById('consentimento')?.checked;
      
      if (!nome) {
        showNotification('Por favor, informe vosso nome.', true);
        return;
      }
      
      if (!email || !email.includes('@')) {
        showNotification('Por favor, informe um e-mail válido para correspondência.', true);
        return;
      }
      
      if (!assunto) {
        showNotification('Por favor, selecione o assunto da mensagem.', true);
        return;
      }
      
      if (!mensagem || mensagem.length < 10) {
        showNotification('Por favor, escreva vossa mensagem (mínimo 10 caracteres).', true);
        return;
      }
      
      if (!consentimento) {
        showNotification('É necessário aceitar a Política de Privacidade para enviar a mensagem.', true);
        return;
      }
      
      // Simular envio (aqui devemos integrar com backend)
      const submitBtn = form.querySelector('.btn-submit');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Enviando...';
      submitBtn.disabled = true;
      
      // Simular delay de envio
      setTimeout(() => {
        showNotification('Mensagem enviada com sucesso! Em breve receberá nossa resposta.');
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
  
  // Máscara para telefone
  const telefoneInput = document.getElementById('telefone');
  if (telefoneInput) {
    telefoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);
      
      if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      }
      if (value.length > 10) {
        value = `${value.slice(0, 10)}-${value.slice(10)}`;
      }
      e.target.value = value;
    });
  }
});