//GLOBAL VARIABLES

let userInput = ["cat", "dog", "bird"];


function alertGiphy() {
    let data = $(this).attr("data-name");
    // let giphyOutput = document.getElementById("gifs-appear-here");
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        data + "&api_key=IEUobMmko0Zr1A274UgUFNT2iFYeH8sH&limit=10";

    $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function (response) {
                console.log(response);
                let results = response.data;
                let giphyImage;
                let giphyMove;
                for (var i = 0; i < results.length; i++) {
                    let giphyDiv = $("<div>");
                
                    giphyImage = $("<img>").attr("src",
                    results[i].images.fixed_height_still.url);
                    giphyMove = $("<img>").attr("src", 
                    results[i].images.fixed_height.url);
                    giphyDiv.append(giphyImage);
                    $("#gifs-appear-here").prepend(giphyDiv);
                } return giphyMove;
            }); 
            return giphyMove;
            //end of then fuction
        };

function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < userInput.length; i++) {
        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class
        a.addClass("giphy");
        // Added a data-attribute
        a.attr("data-name", userInput[i]);
        // Provided the initial button text
        a.text(userInput[i]);
        // Added the button to the HTML
        $("#buttons-view").append(a);
    }
    
    $("#add-giphy").on("click", function (event) {
    event.preventDefault();
    var giphy = $("#giphy-input")
    .val()
    .trim();

    userInput.push(giphy);
    renderButtons();
    });
    $("#gifs-appear-here").click(function () {
        div.toggleClass("gif");
    });
}
// $("#buttons-view").append(userInput);
$(document).on("click", ".giphy", alertGiphy);
renderButtons();