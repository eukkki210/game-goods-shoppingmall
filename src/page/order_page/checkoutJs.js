
$(".pay").on("click",function(){
    if($(".pay").hasClass("addColor")){
        $(this).siblings().removeClass("addColor");
        $(this).addClass("addColor");
    } else{
        console.log("안됨");
    }
})


$(".txt_addr over").on("click", function(){
    console.log("입력주소" + $(this).text());
    // console.log($("#address").val());
    // $("#address").val($(this).text())
    // console.log()
})