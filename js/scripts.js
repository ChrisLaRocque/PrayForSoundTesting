//Tab click to open
  $( "li" ).click(function() {
    var buttonClass = $(this).attr("class");
    var moduleID = $( ".module:visible" ).attr("id");

    //If another module is visible that doesn't match the clicked class, hide it
    if ( $( ".module:visible" ).length > 0 && moduleID != buttonClass){
      $( "#" + moduleID ).toggle("slide");
    }

    //Toggle clicked module
    $( "#" + buttonClass).toggle("slide");

    //If module is unselected, show home module
    if ( $( ".module:visible" ).length < 2){
      $( "#home" ).toggle("slide");
      $( "#chevron" ).toggle("slide");
    }
  });

//Chevron Scripts
//Chevron show behavior
  $( "li" ).click(function() {
    if ($("#chevron:visible").length < 1){
      $("#chevron").toggle("slide");
    }
  });

//Chevron home button behavior
  //If the chevron is clicked, bring the user to home + hide chevron
  $( "#chevron" ).click(function() {
    $( ".module:visible" ).toggle("slide");
    $( "#home" ).toggle("slide");
    $("#chevron").toggle("slide");
  });

//Music Scripts
//Music player show/hide
  $( ".artwork img" ).click(function() {
    var imgID = $(this).attr("id"); /*ID of clicked image*/
    var playerID = imgID + "-player"; /*Player ID to be changed*/
    var currentPlayerID = $(".player:visible").attr("id"); /*ID of currenly visible player*/
    /*If another player is visible than the clicked player, hide it*/
    if ( $( ".player:visible" ).length > 0 && currentPlayerID != playerID){
      $( "#" + currentPlayerID ).toggle("slide");
    }
    /*Show clicked player*/
    $( "#" + playerID ).toggle("slide");
      var imgID = $(this).attr("id"); /*ID of clicked image*/
  });

//Music player loader
  $( ".artwork img" ).click(function() {
    var imgID = $(this).attr("id"); /*ID of clicked image*/
    var playerID = imgID + "-player"; /*Player ID to be changed*/
    var album_id_num = $("#" + playerID).find("iframe").attr("id");
    var iframe_url = "https://open.spotify.com/embed/album/" + album_id_num;

    $("#" + playerID).find("iframe").attr("src", iframe_url);
  });

//Music image loader
  $("li.music").click(function(){
    var modLength = $(".artwork img").length;

    if ($("#music:visible").length > 0){
      for (var x = 0; modLength > x; x++){
        $(".artwork img").each(function(){
          var idNum = $(this).attr("id");
          var idSRC = "./img/artwork/" + idNum + "_artwork.jpg";
          $(this).attr("src", idSRC);
        });
      }
    }
  });

//Tour Scripts
//Tour Widget Loader
  $("li.tour").click(function(){
    $("#tour").find("script").attr("src", "https://widget.bandsintown.com/main.min.js");

  });

//Shop Scripts
//Shop image loader
  $("li.shop").click(function(){
    var modLength = $(".shop-images img").length;

    if ($("#shop:visible").length > 0){
      for (var x = 0; modLength > x; x++){
        $(".shop-images img").each(function(){
          var idNum = $(this).attr("id");
          var idSRC = "./img/merch/" + idNum + ".png";
          $(this).attr("src", idSRC);
        });
      }
    }
  });

//Video Scripts
//Video image loader
  $("li.video").click(function(){
    var modLength = $(".video-mod").length;
    if ($("#video:visible").length > 0){
      for (var x = 0; modLength > x; x++){
        $(".video-mod").each(function(){
          var idNum = $(this).attr("id");
          var idSRC = "./img/covers/" + idNum + ".png";
          $(this).find("img").attr("src", idSRC);
        });
      }
    }
  });

//Video collection loader
  $(".collection-mod").click(function(){
    var mods = document.getElementsByClassName("collection-mod");
    var collectionID = $(this).attr("id");

    $(mods).find("#toggle img").addClass("open");
    $(this).find("#toggle img").toggle();

    if ($(".collection:visible").length > 1){
      $(".collection:visible").hide();
    }
    $("#" + collectionID + "_collection").toggle();
  });

//Featured video loader
  $(".video-mod").click(function() {
    var youtube_video_id = $(this).attr("id");
    var video_url = "https://youtube.com/watch?v=" + youtube_video_id;
    var iframe_url = "https://www.youtube.com/embed/" + youtube_video_id + "?autoplay=1";
    var api_url = "https://www.googleapis.com/youtube/v3/videos?id=" + youtube_video_id + "&key=AIzaSyC44mhCdDUXxu8_C8wwzSr5QjEHWjOsvW0&part=snippet,contentDetails,statistics,status";

    // Switch to the iframe when the image is clicked.
    // Get video information and set the title.
    $.getJSON(api_url, function(data) {
      $(".featured-video-title").html("<a href='" + video_url + "' target='_blank'><h3>" + data.items[0].snippet.title + "</h3></a>");
      $(".featured-video-description").html("<p>" + data.items[0].snippet.description + "</p>");
    });
    $(".featured-video-button").html("<a href='" + video_url + "' target='_blank'><div class='button'>WATCH ON YOUTUBE</div></a>");
    $(".featured-video").show();
    $(".video-player").html("<iframe src='" + iframe_url + "' frameborder='0' allowfullscreen></iframe>");

    window.scrollTo(0, 0);

  });
