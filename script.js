document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageDiv = document.getElementById('message');

    if (!name || !email || !password || !confirmPassword) {
        messageDiv.textContent = 'Por favor, preencha todos os campos.';
        messageDiv.className = 'message error';
        return;
    }

    if (password !== confirmPassword) {
        messageDiv.textContent = 'As senhas não coincidem.';
        messageDiv.className = 'message error';
        return;
    }

    messageDiv.textContent = 'Cadastro realizado com sucesso!';
    messageDiv.className = 'message success';
    
    document.getElementById('registration-form').reset();
});
