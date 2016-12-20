window.onload = function () {
    var inner = document.querySelectorAll(".item div");
    var i;
    for (i = 0; i < inner.length; i++) {
        inner[i].onclick = function () {
            this.style.backgroundColor = "red";
        };
    }
};