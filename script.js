window.onload = function () {
    var div1 = document.body.children[0];
    // div1.onclick = function (e) {
    //     console.log(e);
    //     div1.style.fontSize = "30px";
    // };
    // div1.onmouseenter = function () {
    //     div1.style.color = "red";
    // };
    // div1.onmouseleave = function () {
    //     div1.style.color = "black";
    // };
    var divs = div1.children;
    for (var i = 0; i < divs.length; i++) {
        divs[i].onclick = function () {
            this.style.backgroundColor = "red";
        };
    }
};