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

// 로컬 스토리지에 다크 모드 설정 저장
function saveDarkModePreference(isDarkMode) {
    localStorage.setItem("darkMode", isDarkMode);
}

let objJson;
async function load() {
        // 파일 읽어 오기
const data = await fetch('./images.json');
        // JSON으로 해석
objJson = await data.json();
        // 텍스트 출력
        
let splits=objJson[0]["src"].split("/")
console.log(splits)
let file_name=splits[4];
let file_goods_type=splits[3];
 
let fileLocation = "./img/"+file_goods_type+"/"+file_name
let nameGoods=objJson[0]['goodsName']
let gametype=objJson[0]['game']
let prices = objJson[0]['price']+"원"
$("#pic1").attr("src",fileLocation)
$("#nameGoods").text(nameGoods)
$(".won").text(prices)
$("#gametypes").text(gametype)
$("#price").val(prices)

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
        document.getElementById('toggle').textContent = "라이트 모드로 이용하기";
    } else {
        document.body.classList.remove("dark-mode");
        document.getElementById('toggle').textContent = "다크 모드로 이용하기";
    }
});