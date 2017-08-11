$(document).ready(function() {
     $(".button-collapse").sideNav();
  var actorElegido = localStorage.getItem("actor");

  $.ajax({
    url: 'https://netflixroulette.net/api/api.php?actor=' + actorElegido ,
    type: 'GET',
    dataType: 'json',
  })
  .done(function(e) {
    console.log(e);

    e.forEach(function(el){
      var contenido = '<div><h6>' + el.show_title + '</h6></div><div><p>'+ 'Categoria: ' + el.category + '</p></div><hr>';
      var act = $(".pelisActor").append(contenido);
    })

    $("#nomActor").append(actorElegido);

  })
  .fail(function() {
   console.log("error");
 })


});
