var movie = prompt("What movie do you want to watch");
var url = "https://www.omdbapi.com/?t=" + movie.replace(/ /g, "+") + "&apikey=trilogy";
$.ajax({
    url: url,
    method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.Poster);
    console.log(response.Title);
})