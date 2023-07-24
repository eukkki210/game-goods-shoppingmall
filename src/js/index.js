// 페이지 상단으로 올라가는 함수
function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 다크 모드 토글 함수
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const toggleButton = document.getElementById('toggle');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = "라이트 모드로 이용하기";
    } else {
        toggleButton.textContent = "다크 모드로 이용하기";
    }
}

// 고정 플로팅 버튼 클릭 이벤트 리스너
document.getElementById('goTopBtn').addEventListener("click", goToTop);

// 다크 모드 토글 버튼 클릭 이벤트 리스너
document.getElementById('toggle').addEventListener("click", toggleDarkMode);
