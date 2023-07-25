
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

$("#check1").change(function(){  
console.log("#check1", $("#check1").is(":checked"));
console.log("#check2", $("#check2").is(":checked"));
console.log("#check3", $("#check3").is(":checked"));
console.log("#check4", $("#check4").is(":checked"));
console.log("#check5", $("#check5").is(":checked"));

    if($("#check1").is(":checked") == false){
        $("#check2").attr("checked", false);
        $("#check3").attr("checked", false);
        $("#check4").attr("checked", false);
        $("#check5").attr("checked", false);

    } else if($("#check1").is(":checked") == true){
        $("#check2").attr("checked", true);
        $("#check3").attr("checked", true);
        $("#check4").attr("checked", true);
        $("#check5").attr("checked", true);
        
    }
})

//배송정보
let orderName = "박순대";  //  주문한사람이름
// let orderNumber =    //연락처
let orderEmail = $("#orderEmail").val();    // 이메일
let delReceiver = $("#delReceiver").val();   //수령인
let delAddress1 = $("#delAddress1").val();    // 연락처1
let delAddress2 = $("#delAddress2").val();    //연락처2
let delHouse = $("#delHouse").val();  //배송지
let delMemo = $("#delMemo").val();  //배송 메모
// document.getElementById("orderName").innerHTML ="Hello";
$("input").change(function(){
    orderNumber = $("#orderNumber").val();
    console.log('orderNumber : ', orderNumber);
})


$("#checkBtn").on("click",function(){
    console.log(orderNumber);
    console.log(typeof(orderNumber));
})
// $(".1").html("이름 : "+ orderName);
// $(".2").text("연락처 : " + $("#orderNumber").val());
// $(".3").text("이메일 : " + orderEmail);
// $(".4").text("수령인 : " + delReceiver);
// $(".5").text("연락처1 : " + delAddress1);
// $(".6").text("연락처2 : " + delAddress2);
// $(".7").text("배송지 : " + delHouse);
// $(".8").text("배송메모 : " + delMemo);
$("input[id=mo1]").attr("value", orderNumber.val);