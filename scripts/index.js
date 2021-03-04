// ============ always start load on top

$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });
