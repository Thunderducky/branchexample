var searchBtn = $("#search-btn");
var movieInput = $("#search-name");
var movieInfoEl = $("#movie-info");

function handleMovieInfo(response){
    console.log(response);
    console.log(response.Poster);
    console.log(response.Title);
    movieInfoEl.empty();
    movieInfoEl.append("<h1>" + response.Title + "</h1>");
    movieInfoEl.append("<img src=\"" + response.Poster + "\">");
}
function getMovieInfo(movie){
    var url = "https://www.omdbapi.com/?t=" + movie.replace(/ /g, "+") + "&apikey=trilogy";
    $.ajax({
        url: url,
        method: "GET"
    }).then(handleMovieInfo);
}

searchBtn.on('click', function(){
    var title = movieInput.val();
    getMovieInfo(title);
})