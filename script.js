document.getElementById("catSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("catInput").value;
    if (value === "")
        return;
    console.log(value);

    //var data = null;

    //var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    //xhr.addEventListener("readystatechange", function () {
    //    if (this.readyState === this.DONE) {
    //        console.log(this.responseText);
    //    }
    //});

    //xhr.open("GET", "https://api.thecatapi.com/v1/breeds?attach_breed=" + value);
    //xhr.setRequestHeader("x-api-key", "6314d1a9-cbbd-4597-986d-934c4e60c6a6");
    //xhr.send(data);

    var settings = {
        "async": true,
        "crossdomain": true,
        "url": "https://api.thecatapi.com/v1/breeds?attach_breed=" + value,
        "method": "get",
        "headers": {
            "x-api-key": "6314d1a9-cbbd-4597-986d-934c4e60c6a6"
        }
    }
    console.log(settings);

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});