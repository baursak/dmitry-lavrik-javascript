window.onload = function () {
    var items = document.querySelectorAll(".item");
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            var answer = this.querySelector(".answer");
            if (answer.style.display == "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        };
    }
};