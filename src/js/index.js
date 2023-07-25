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
        toggleButton.textContent = "라이트 모드";
    } else {
        toggleButton.textContent = "다크 모드";
    }
}

// 로컬 스토리지에 다크 모드 설정 저장
function saveDarkModePreference(isDarkMode) {
    localStorage.setItem("darkMode", isDarkMode);
}

// 고정 플로팅 버튼 클릭 이벤트 리스너
document.getElementById('goTopBtn').addEventListener("click", goToTop);

// 다크 모드 토글 버튼 클릭 이벤트 리스너
document.getElementById('toggle').addEventListener("click", toggleDarkMode);

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", function() {
    // 로컬 스토리지에서 다크 모드 설정 값을 읽어서 적용
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        document.getElementById('toggle').textContent = "라이트 모드";
    } else {
        document.body.classList.remove("dark-mode");
        document.getElementById('toggle').textContent = "다크 모드";
    }
});