function fetchData() {
    fetch("data.json")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(`Error Fetching data : ${error}`)
        })
}

fetchData()


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




