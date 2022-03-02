(function($){
  $(function(){

    $('.sidenav').sidenav();
    //$('.parallax').parallax();
    $('.tabs').tabs({"swipeable": true});
    

  }); // end of document ready
})(jQuery); // end of jQuery name space
document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
    $("#update").click(function(){
      alert("Si que va");
      $("#llistaPrincipal").empty();
      $.ajax({
        method: "GET",
        url: "https://api.spaceflightnewsapi.net/v3/articles?_limit=5",
        dataType: "json",
      }).done(function (msg) {
        for(let item in msg) {
          console.log(msg[item]);
        };
      }).fail(function () {
        alert("ERROR");
      });
      });
}
