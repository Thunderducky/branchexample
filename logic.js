var movie = prompt("What movie do you want to watch");

function handleMovieInfo(response){
    console.log(response);
    console.log(response.Poster);
    console.log(response.Title);
}
function getMovieInfo(movie){
    var url = "https://www.omdbapi.com/?t=" + movie.replace(/ /g, "+") + "&apikey=trilogy";
    $.ajax({
        url: url,
        method: "GET"
    }).then(handleMovieInfo);
}

getMovieInfo(movie);