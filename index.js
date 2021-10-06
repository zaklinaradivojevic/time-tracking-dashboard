//profilr-ifo-desc
// Add active class to the current  (highlight it)
var header = document.getElementById("myDIV");
var desc = header.getElementsByClassName("desc");
for (var i = 0; i < desc.length; i++) {
    desc[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

//fetch   data
fetch("data.json")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        document.getElementById("daily").addEventListener('click', () => {
            document.getElementById("work-info").innerHTML = `<h1>${data[0].timeframes.daily.current}hrs</h1> <p>Last day- ${data[0].timeframes.daily.previous}hrs</p>`
            document.getElementById("play-info").innerHTML = `<h1>${data[1].timeframes.daily.current}hrs</h1> <p>Last day- ${data[1].timeframes.daily.previous}hrs</p>`
            document.getElementById("study-info").innerHTML = `<h1>${data[2].timeframes.daily.current}hrs</h1> <p>Last day- ${data[2].timeframes.daily.previous}hrs</p>`
            document.getElementById("exercise-info").innerHTML = `<h1>${data[3].timeframes.daily.current}hrs</h1> <p>Last day- ${data[3].timeframes.daily.previous}hrs</p>`
            document.getElementById("social-info").innerHTML = `<h1>${data[4].timeframes.daily.current}hrs</h1> <p>Last day- ${data[4].timeframes.daily.previous}hrs</p>`
            document.getElementById("self-care-info").innerHTML = `<h1>${data[5].timeframes.daily.current}hrs</h1> <p>Last day- ${data[5].timeframes.daily.previous}hrs</p>`

        })
        document.getElementById("weekly").addEventListener('click', () => {
            document.getElementById("work-info").innerHTML = `<h1>${data[0].timeframes.weekly.current}hrs</h1> <p>Last week- ${data[0].timeframes.weekly.previous}hrs</p>`
            document.getElementById("play-info").innerHTML = `<h1>${data[1].timeframes.weekly.current}hrs</h1> <p>Last week- ${data[1].timeframes.weekly.previous}hrs</p>`
            document.getElementById("study-info").innerHTML = `<h1>${data[2].timeframes.weekly.current}hrs</h1> <p>Last week- ${data[2].timeframes.weekly.previous}hrs</p>`
            document.getElementById("exercise-info").innerHTML = `<h1>${data[3].timeframes.weekly.current}hrs</h1> <p>Last week- ${data[3].timeframes.weekly.previous}hrs</p>`
            document.getElementById("social-info").innerHTML = `<h1>${data[4].timeframes.weekly.current}hrs</h1> <p>Last week- ${data[4].timeframes.weekly.previous}hrs</p>`
            document.getElementById("self-care-info").innerHTML = `<h1>${data[5].timeframes.weekly.current}hrs</h1> <p>Last week- ${data[5].timeframes.weekly.previous}hrs</p>`

        })
        document.getElementById("monthly").addEventListener('click', () => {
            document.getElementById("work-info").innerHTML = `<h1>${data[0].timeframes.monthly.current}hrs</h1> <p>Last month- ${data[0].timeframes.weekly.previous}hrs</p>`
            document.getElementById("play-info").innerHTML = `<h1>${data[1].timeframes.monthly.current}hrs</h1> <p>Last month- ${data[1].timeframes.weekly.previous}hrs</p>`
            document.getElementById("study-info").innerHTML = `<h1>${data[2].timeframes.monthly.current}hrs</h1> <p>Last month- ${data[2].timeframes.weekly.previous}hrs</p>`
            document.getElementById("exercise-info").innerHTML = `<h1>${data[3].timeframes.monthly.current}hrs</h1> <p>Last month- ${data[3].timeframes.weekly.previous}hrs</p>`
            document.getElementById("study-info").innerHTML = `<h1>${data[4].timeframes.monthly.current}hrs</h1> <p>Last month- ${data[4].timeframes.weekly.previous}hrs</p>`
            document.getElementById("self-care-info").innerHTML = `<h1>${data[5].timeframes.monthly.current}hrs</h1> <p>Last month- ${data[5].timeframes.weekly.previous}hrs</p>`

        })


    })
    .catch((error) => console.error("FETCH ERROR:", error));





