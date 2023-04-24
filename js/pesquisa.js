$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        var count = 0;
        $(".blocos").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            count += $(this).text().toLowerCase().indexOf(value) > -1 ? 1 : 0;
        });
        $("span").toggle(count == 0);
        $('.linhas').remove();
    });
});