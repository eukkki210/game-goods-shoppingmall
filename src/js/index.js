$(document).ready(function() {
    $(".goods-items").children().clone().appendTo(".goods-items");

    var totalWidth = 0;
    $(".goods-items").children().each(function() {
        totalWidth += $(this).outerWidth(true);
    });

    $(".goods-items").width(totalWidth);

    function resetAnimation() {
        $(".goods-items").css("animation", "none");
        $(".goods-items").width();
        $(".goods-items").css("animation", "leftMoveLoop 30s linear infinite");
    }

    $(".goods-items").on("animationiteration", resetAnimation);
});