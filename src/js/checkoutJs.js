
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
let orderName = $("#orderName").val();  //  주문한사람이름
let orderNumber = $("#orderNumber").val();   //연락처
let orderEmail = $("#orderEmail").val();    // 이메일
let delReceiver = $("#delReceiver").val();   //수령인
let delAddress1 = $("#delAddress1").val();    // 연락처1
let delAddress2 = $("#delAddress2").val();    //연락처2
let delHouse = $("#delHouse").val();  //우편번호
let delHouse2 = $("#delHouse").val();  // 주소
let delHouse3 = $("#delHouse").val();  //상세주소

let delMemo = $("#delMemo").val();  //배송 메모

$("input").change(function(){
    orderNumber = $("#orderNumber").val();
    orderName = $("#orderName").val();
    orderEmail = $("#orderEmail").val();
    delReceiver = $("#delReceiver").val();
    delAddress1 = $("#delAddress1").val();
    delAddress2 = $("#delAddress2").val();
    delHouse = $("#delHouse").val();
    delHouse2 = $("#delHouse2").val();
    delMemo = $("#delMemo").val();
    // console.log('orderNumber : ', orderNumber);
})
let delHouse4 = delHouse2 + " " + delHouse3

$("#checkBtn").on("click",function(){
    console.log(orderNumber);
    console.log(typeof(orderNumber));
})

$("input[id=mo1]").attr("value", orderNumber.val);

$("#buyBtn").on("click",function(){
    $(".1").text("이름 : "+ orderName);  
    $(".2").text("연락처 : " + orderNumber);
    $(".3").text("이메일 : " + orderEmail);
    $(".4").text("수령인 : " + delReceiver);
    $(".5").text("연락처1 : " + delAddress1);
    $(".6").text("연락처2 : " + delAddress2);
    $(".7").text("우편번호 : " + delHouse);
    $(".9").text("주소 : " + delHouse2);
    $(".8").text("배송메모 : " + delMemo);
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