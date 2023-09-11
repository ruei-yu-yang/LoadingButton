$(function () {
    $(document).on("click", "[loading-btn]", function(e){
        $(this).addClass("btn-loading");
        e.preventDefault();
    });
});
