(function(){
    $(document).ready(function(){
        $(".btn-menu").click(function(e){
            e.preventDefault();
            var filtro = $(this).attr("data-filter");

            if (filtro == "all") {
                $(".box-img").show(500);
            } else {
                $(".box-img").not("." + filtro).hide(500);
                $(".box-img").filter("." + filtro).show(500);
            }
        });

        $("section ul li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });
        /* $("header ul li").click(function(){
            $(this).addClass("active-2").siblings().removeClass("active-2");
        }); */
    });
}())