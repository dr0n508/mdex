$(document).ready(function() {

    //dropdown
    $(".selectBox").on("click", function(e) {

        $(this).toggleClass("show");

    });

    //close modal after clicked token
    $(".filter-item").on("click", function() {

        $("#assetModal").modal('hide');

    });

    //filter
    $('#filterAsset').on('input', updateFilter);

    function updateFilter(){

        var fullTitle = $('#filterAsset').val();
        searchItem(fullTitle);
    }

    function searchItem(fullTitle) {
        $(".filter-item").each(function() {

            if ($(this).data('filter').search(new RegExp(fullTitle, "i")) < 0
                ) {
                $(this).css( "display", "none" );
            } else {
                $(this).css( "display", "flex" );
            }
        });
    }

    //tooltips

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


    //countdown
    function makeTimer() {

        //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
        var endTime = new Date("29 October 2021 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);

    }

    setInterval(function() { makeTimer(); }, 1000);




});


$(document).ready(function () {

    $('#dtBasicExample').DataTable({
        "paging": false // false to disable pagination (or any other option)
    });
    $('.dataTables_length').addClass('bs-select');
});