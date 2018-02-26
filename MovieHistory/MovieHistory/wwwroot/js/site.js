$("#movieSearch__button").click(evt => {
    const userSearchString = $("#movieSearch").val()
    $.ajax({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?api_key=ddc4c61df858b6419a822a97f67ece52&language=en-US&query=${userSearchString}&page=1&include_adult=false`,
        success: (Response => console.log(Response))
    })
});