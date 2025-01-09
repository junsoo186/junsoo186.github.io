function checkPassword() {
    const password = document.getElementById('password').value.trim(); 
    const correctPassword = '아인즈울고운에영광을';
    
    if (password === correctPassword) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('blog-content').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}