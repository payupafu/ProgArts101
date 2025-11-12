$(".nice-block span").click(function () {

    $(this).parent().toggleClass("more");

    if ($(this).html() == "meow") {
        $(this).html("less");
    } else {
        $(this).html("meow");
    }

});