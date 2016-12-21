window.onload = function () {
    var items = document.querySelectorAll(".item");
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            var answer = this.querySelector(".answer");
            if (answer.style.display == "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
                var op = 0;
                var step = 0.005;
                var steps = 1 / step;
                var timer = setInterval(function () {
                    op += step;
                    steps--;
                    answer.style.opacity = op;
                    if (steps == 0) clearInterval(timer);
                }, 20);
            }
        };
    }
};