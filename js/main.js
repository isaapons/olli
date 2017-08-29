window.onload = function() {
  // VARIABLES
  var burger = document.querySelector(".burger");
  var secretNav = document.querySelector(".secret-nav");
  var header = document.querySelector("header");
  var main = document.querySelector("main");
  var soundcloud = document.querySelector(".sc");


  //SONGS (THERE HAS TO BE A BETTER WAY TO DO THIS)
  var song1 = document.querySelector("#song1");
  var song2 = document.querySelector("#song2");
  var song3 = document.querySelector("#song3");
  var song4 = document.querySelector("#song4");
  var song5 = document.querySelector("#song5");
  var song6 = document.querySelector("#song6");
  var song7 = document.querySelector("#song7");
  var song8 = document.querySelector("#song8");

  //CHANGE SOUNDCLOUD LINKS ATTEMPT REALLY DUMB WAY TO DO THIS
  song1.addEventListener("click", function() {
    $(".sc").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/304123823&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
  });
  song2.addEventListener("click", function() {
    $(".sc").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/286897038&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
  });
  song3.addEventListener("click", function() {
    $(".sc").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/264093191&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
  });
  song4.addEventListener("click", function() {
    $(".sc").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/239648075&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
  });
  song5.addEventListener("click", function() {
    $(".sc").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/279908460&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
  });
  song6.addEventListener("click", function() {
    $(".sc").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317416811&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
  });
  song7.addEventListener("click", function() {
    $(".sc").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339584709&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
  });
  song8.addEventListener("click", function() {
    $(".sc").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/321580280&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
  });

  // SCROLL TO SECTIONS
  $('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
  // RESPONSIVE NAVIGATION
  burger.addEventListener("click", function() {
    secretNav.classList.toggle("secret-nav-visible");
    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-times");
    header.classList.toggle("header-move");
    main.classList.toggle("header-move");
  });
  // JUSTIFIED GALLERY
  $('.music-gallery').justifiedGallery({
    rowHeight : 200,
    lastRow : 'nojustify',
    margins : 0,
    cssAnimation : true,
    waitThumbnailsLoad : false
  });
};

//#7FCEFF
