
$(".pay").on("click",function(){
    if($(".pay").hasClass("addColor")){
        $(this).siblings().removeClass("addColor");
        $(this).addClass("addColor");
    } else{
        console.log("안됨");
    }
})
let all = false;
let ct2 = $("#check2").is(":checked");
let ct3 = $("#check3").is(":checked");
let ct4 = $("#check4").is(":checked");
let ct5 = $("#check5").is(":checked");
$(".txt_addr over").on("click", function(){
    console.log("입력주소" + $(this).text());
    // console.log($("#address").val());
    // $("#address").val($(this).text())
    // console.log()
})

// 체크박스 전체 체크
$("#check1").change(function(){  

    if($("#check1").is(":checked") == false){
        $("#check2").prop("checked", false);
        $("#check3").prop("checked", false);
        $("#check4").prop("checked", false);
        $("#check5").prop("checked", false);

    } else if($("#check1").is(":checked") == true){
        $("#check2").prop("checked", true);
        $("#check3").prop("checked", true);
        $("#check4").prop("checked", true);
        $("#check5").prop("checked", true);
        
    }
// console.log("#check1", $("#check1").is(":checked"));
// console.log("#check2", $("#check2").is(":checked"));
// console.log("#check3", $("#check3").is(":checked"));
// console.log("#check4", $("#check4").is(":checked"));
// console.log("#check5", $("#check5").is(":checked"));
})

//배송정보
let hap;
let hap2;
let delHouse4;
let orderName = $("#orderName").val();  //  주문한사람이름
let orderNumber = $("#orderNumber").val();   //연락처
let orderEmail = $("#orderEmail").val();    // 이메일
let delReceiver = $("#delReceiver").val();   //수령인
let delAddress1 = $("#delAddress1").val();    // 연락처1
let delAddress2 = $("#delAddress2").val();    //연락처2

let sample4_postcode = $("#sample4_postcode").val();  //우편번호
let sample4_roadAddress = $("#sample4_roadAddress").val();  // 도로명주소
let sample4_jibunAddress = $("#sample4_jibunAddress").val();  //지번주소
let sample4_detailAddress = $("#sample4_detailAddress").val();  //상세주소
let sample4_extraAddress = $("#sample4_extraAddress").val();  //참고항목

let delMemo = $("#delMemo").val();  //배송 메모

$("input").change(function(){
    orderNumber = $("#orderNumber").val();
    orderName = $("#orderName").val();
    orderEmail = $("#orderEmail").val();
    delReceiver = $("#delReceiver").val();
    delAddress1 = $("#delAddress1").val();
    delAddress2 = $("#delAddress2").val();

    sample4_postcode = $("#sample4_postcode").val();
    sample4_roadAddress = $("#sample4_roadAddress").val();
    sample4_jibunAddress = $("#sample4_jibunAddress").val();
    sample4_detailAddress = $("#sample4_detailAddress").val();
    sample4_extraAddress = $("#sample4_extraAddress").val();
    delMemo = $("#delMemo").val();
    // delHouse4 = delHouse + " " + delHouse2;
    // console.log('orderNumber : ', orderNumber);
    hap = sample4_jibunAddress + " " +sample4_detailAddress + sample4_extraAddress;
    hap2 = sample4_roadAddress + sample4_detailAddress + sample4_extraAddress;
    console.log(hap);
})


// $("#checkBtn").on("click",function(){
//     console.log(orderNumber);
//     console.log(typeof(orderNumber));
// })

// $("input[id=mo1]").attr("value", orderNumber.val);

$("#buyBtn").on("click",function(){
    $(".1").text("이름 : "+ orderName);     
    $(".2").text("연락처 : " + orderNumber);
    $(".3").text("이메일 : " + orderEmail);
    $(".4").text("수령인 : " + delReceiver);
    $(".5").text("연락처1 : " + delAddress1);
    $(".6").text("연락처2 : " + delAddress2);
    $(".7").text("우편번호 : " + sample4_postcode);
    $(".8").text("주소 : " + hap);
    $(".9").text("배송메모 : " + delMemo);
    $(".10").text("도로명주소 : " + hap2);
    console.log(hap);
    // console.log(delHouse4);
})

// 체크박스 모두 체크 됐을 때 결제하기 눌러지는거
$("input[type=checkbox]").change(function(){
    if($("#check2").is(":checked") && $("#check3").is(":checked") && $("#check4").is(":checked") && $("#check5").is(":checked")){
        console.log("체크됨");
        $("#buyBtn").prop("disabled", false);
    } else{
        $("#buyBtn").prop("disabled", true);
    }
    
})
// 결제방법 선택
let payment = "신용카드";
$(".paycheck").text("결제방법 : " + payment);
// 결제방법
$(".pay").on("click", function(){
    payment = $(this).text();
    $(".paycheck").text("결제방법 : " + payment);
})

//모달창 확인버튼 눌렀을 때
$("#btnCheck").on("click", function(){
    location.href = "index.html";
})

//우편번호 검색 api

    //본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
    function sample4_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var roadAddr = data.roadAddress; // 도로명 주소 변수
                var extraRoadAddr = ''; // 참고 항목 변수

                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraRoadAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                   extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraRoadAddr !== ''){
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('sample4_postcode').value = data.zonecode;
                document.getElementById("sample4_roadAddress").value = roadAddr;
                document.getElementById("sample4_jibunAddress").value = data.jibunAddress;
                
                // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
                if(roadAddr !== ''){
                    document.getElementById("sample4_extraAddress").value = extraRoadAddr;
                } else {
                    document.getElementById("sample4_extraAddress").value = '';
                }

                var guideTextBox = document.getElementById("guide");
                // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
                if(data.autoRoadAddress) {
                    var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                    guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
                    guideTextBox.style.display = 'block';

                } else if(data.autoJibunAddress) {
                    var expJibunAddr = data.autoJibunAddress;
                    guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
                    guideTextBox.style.display = 'block';
                } else {
                    guideTextBox.innerHTML = '';
                    guideTextBox.style.display = 'none';
                }
            }
        }).open();
    }