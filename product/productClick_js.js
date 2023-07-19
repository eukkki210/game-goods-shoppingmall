
//버튼 명암 생기는 function
$(".box").hover(function(){
   $(this).css("border", "3px solid");
},
function(){
    $(this).css("border", "1px solid");
})
//
$(".box").on("click", function(){
    $(this).css("border", "3px solid red")
},)


//input 금액 value값 받아오기
let price = $(".won").text();
$("#price").attr('value', price);

//숫자만 선택하는 정규식
price = price.replace(/[^0-9]/g, ""); //price 특수문자랑 문자열 지움


//플러스 누르면 금액 값 바뀌는거
$("#button_plus").on("click", function(){
    let count_val = $("#counting").val();
    count_val++;
    $("#counting").attr('value',count_val);
    // 
    price_2 = price * count_val;
    // tolocalstring -> 0 3개마다 콤마 넣는애
    let comma = Number(price_2).toLocaleString() + "원";
    //금액(id:price) 값 바뀌게 하는애
    $("#price").attr('value',comma);
    console.log($("#price").val());
    
})

//마이너스 누르면 금액이랑 수량 바뀌기
$("#button_negative").on("click", function(){
    let count_val_2 = $("#counting").val();
    if(count_val_2>0){
        count_val_2--;
        //counting(수량에서 숫자) value값 변경
        $("#counting").attr('value',count_val_2);
        price_2 = price* count_val_2;
        //0 3개 마다 ,콤마 넣기
        let comma = Number(price_2).toLocaleString() + "원";
        //금액(id:price) 값 바뀌게 하는애
        $("#price").attr('value',comma);
        console.log($("#price").val());
    }
})


