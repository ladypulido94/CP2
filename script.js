$(document).ready(function () {

    document.getElementById("catSubmit").addEventListener("click", function (event) {
        event.preventDefault();
        const value = document.getElementById("catInput").value;
        if (value === "")
            return;
        console.log(value);

        var catImg = {
            "async": true,
            "crossdomain": true,
            "url": "https://api.thecatapi.com/v1/images/search?breed_id=" + value + "&limit=8",
            "method": "get",
            "headers": {
                "x-api-key": "6314d1a9-cbbd-4597-986d-934c4e60c6a6"
            }
        };

        let picture = "";

        $.ajax(catImg).done(function (response) {
            console.log(response);
            for (let i = 0; i < response.length; i++) {
                picture = response[i]["url"];
                console.log(picture);

                $(`<div class="carousel-item"><img id = "catPic" src="${picture}" width="50%"> </div>`).appendTo('.carousel-inner');
                $('<li data-target="#carousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators');
            }

            $('.carousel-item').first().addClass('active');
            $('.carousel-indicators > li').first().addClass('active');


        });



    });
});
