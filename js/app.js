$('.navbar-collapse').on('show.bs.collapse', function() {
    setTimeout(function(){ $('.header_wrap').addClass('with-collapsed-navbar'); }, 100);
    $('body').css('overflow', 'hidden');
});

$('.navbar-collapse').on('hide.bs.collapse', function() {
    setTimeout(function(){ $('.header_wrap').removeClass('with-collapsed-navbar'); }, 100);
    $('body').css('overflow', 'auto');
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })