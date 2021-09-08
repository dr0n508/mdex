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

});