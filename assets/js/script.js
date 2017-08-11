$(document).ready(function() {
  var valorLink = localStorage.getItem("actor");
  //var actorElegido = $("").val();
    $.ajax({
      url: 'https://netflixroulette.net/api/api.php?actor=' + valorLink,
     type: 'GET',
     dataType: 'json',
   })
    .done(function(e) {
    console.log(e);

      e.forEach(function(el){
        var contenido = '<div><h6>' + el.show_title + '</h6></div><hr>';
         var act = $(".pelisActor").append(contenido);
       })

    })
    .fail(function() {
     console.log("error");
   })

});