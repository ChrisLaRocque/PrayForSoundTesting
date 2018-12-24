/* Updates Featured Video */
$('.video-cover').click(function(){
    var id =  $(this).attr('id');
    var title = $(this).find('h4').text()
    console.log(title);

    $('.featured-video').show();    
    $('.featured-video').html('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1"></iframe></div><div class="row"><h2 class="p-2 light header title">' + title + '</h2></div>');
}); 