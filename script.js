function checkPassword() {
    const password = document.getElementById('password').value.trim(); // 입력값 앞뒤 공백 제거
    const correctPassword = '아인즈울고운에 영광을';
    
    if (password === correctPassword) {
        window.location.href = 'nazarik.html';  // 암호가 맞으면 나자릭 화면으로 이동
    } else {
        document.getElementById('error-message').style.display = 'block';  // 암호가 틀렸을 경우 에러 메시지 표시
    }
}
