// let answers = require("../routing/apiRoutes");

// let responses = [];

$("#surveyResponseButton").on("click", function () {
    console.log("clicked");
    let name = $(`#name`).val().trim();
    let image = $(`#image`).val().trim();

    let response1 = $(`#response1`).val();
    let response2 = $(`#response2`).val();
    let response3 = $(`#response3`).val();
    let response4 = $(`#response4`).val();
    let response5 = $(`#response5`).val();
    let response6 = $(`#response6`).val();
    let response7 = $(`#response7`).val();
    let response8 = $(`#response8`).val();
    let response9 = $(`#response9`).val();
    let response10 = $(`#response10`).val();

    let response = {
        name: name,
        image: image,
        response1: response1,
        response2: response2,
        response3: response3,
        response4: response4,
        response5: response5,
        response6: response6,
        response7: response7,
        response8: response8,
        response9: response9,
        response10: response10,
    }

    // responses.push(response);

    $.post("/api/friends", response).then(function (data) {
        console.log(data);
    });
})

// console.log(responses);
// module.exports = responses;




// $.get("/api/all", function (data) {

//     if (data.length !== 0) {

//         for (var i = 0; i < data.length; i++) {

//             var row = $("<div>");
//             row.addClass("chirp");

//             row.append("<p>" + data[i].author + " chirped.. </p>");
//             row.append("<p>" + data[i].body + "</p>");
//             row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

//             $("#chirp-area").prepend(row);

//         }

//     }

// });

// // When user chirps (clicks addBtn)
// $("#chirp-submit").on("click", function (event) {
//     event.preventDefault();

//     // Make a newChirp object
//     var newChirp = {
//         author: $("#author").val().trim(),
//         body: $("#chirp-box").val().trim(),
//         created_at: moment().format("YYYY-MM-DD HH:mm:ss")
//     };

//     console.log(newChirp);

//     // Send an AJAX POST-request with jQuery
//     $.post("/api/chirps", newChirp)
//         // On success, run the following code
//         .then(function () {

//             var row = $("<div>");
//             row.addClass("chirp");

//             row.append("<p>" + newChirp.author + " chirped: </p>");
//             row.append("<p>" + newChirp.body + "</p>");
//             row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

//             $("#chirp-area").prepend(row);

//         });

//     // Empty each input box by replacing the value with an empty string
//     $("#author").val("");
//     $("#chirp-box").val("");
// });

