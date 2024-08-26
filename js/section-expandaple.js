


$(document).on('click', '.section-expandaple .heading', function (e) {

    e.preventDefault();
    var closed = $(this).parent('.section-expandaple').hasClass('closed');
    if (closed){
        $(this).parent('.section-expandaple').removeClass('closed')
    } else {
        $(this).parent('.section-expandaple').addClass('closed')
    }



});


$(document).on('click', '.section-expandaple .heading-sm', function (e) {

    e.preventDefault();
    var closed = $(this).parent('.section-expandaple').hasClass('closed');
    if (closed){
        $(this).parent('.section-expandaple').removeClass('closed')
    } else {
        $(this).parent('.section-expandaple').addClass('closed')
    }



});