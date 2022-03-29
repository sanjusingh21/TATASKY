$(document).ready(function () {
    $('#example').DataTable();

    $("#menu").on("click", () => {
        $(".main_menu").toggleClass("show");
    })
});
$.extend($.fn.dataTable.defaults, {
    searching: false,
    // ordering: false,
    lengthChange: false
});