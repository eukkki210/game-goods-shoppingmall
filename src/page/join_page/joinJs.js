$("input").on("focus", function(){
    $(this).css("border-bottom","2px solid black");
})
$("input").on("blur", function(){
    $(this).css("border-bottom", "");
})

// 패스워드 확인
// let pwValue2 = $(".password_button").val();
// console.log(pwValue2);

let pwValue;    //비밀번호
let pwCheckValue;   //비밀번호 확인

$(".password_button").on("blur", function(){
    pwValue = $(".password_button").val();
    console.log(pwValue);
})
$(".password_button_check").on("blur", function(){
    pwCheckValue = $(".password_button_check").val();
    console.log(pwValue);
    console.log(pwCheckValue);
    if(pwValue == pwCheckValue){
        console.log("같습니다.");
    } else{
        console.log("틀립니다.");
    }
})


// 스크롤을 내렸을 때 button 활성화
$("#modalBodyId1").on("scroll", function(){
    var height = $("#modalBodyId1").scrollTop();
    var max =  $("#modalBodyId1").css("max-height")
    var maxValue = max.split('px')      //max-height 값(400px)을 px로 쪼갠다. max-height[0] = 400, max-height[1] = 공백
    var height3= $("#modalBodyId1")[0].scrollHeight - Number(maxValue[0]);

    if(height >= height3){
        $("#modalBodyId1Btn").attr("disabled", false);  //버튼 비활성화 -> 활성화
        $("#agreeCheck1").attr("disabled", false);  // 체크박스 비활성화 -> 활성화로 바꿈
        $("#agreeCheck1").attr("checked", true);    // 체크박스 체크 활성화

    }
})
//2번 확인버튼
$("#modalBodyId2").on("scroll", function(){
    var height = $("#modalBodyId2").scrollTop();
    var max =  $("#modalBodyId2").css("max-height")
    var maxValue = max.split('px')      //max-height 값(400px)을 px로 쪼갠다. max-height[0] = 400, max-height[1] = 공백
    var height3= $("#modalBodyId2")[0].scrollHeight - Number(maxValue[0]);

    if(height >= height3){
        $("#modalBodyId2Btn").attr("disabled", false);
        $("#agreeCheck2").attr("disabled", false);
        $("#agreeCheck2").attr("checked", true);
    }
})
$("#modalBodyId3Btn").on("click", function(){
    $("#agreeCheck3").attr("disabled", false);
    $("#agreeCheck3").attr("checked", true);
})

//이메일 작성시 이상한 이메일 입력하면 빨간줄 뜨면서 안됨

//비밀번호 확인방법


