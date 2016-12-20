window.onload = function () {
    /* получение элемента по id */
    // var div1 = document.getElementById("first");
    // div1.onclick = function(){
    //     this.style.backgroundColor = "red";
    // };
    /* выборка элементов по классу */
    // var divs = document.getElementsByClassName("item");
    // for (var i = 0; i < divs.length; i++) {
    //     divs[i].onclick = function () {
    //         this.style.backgroundColor = "red";
    //     };
    // }
    /* выборка элементов по тэгу */
    var ps = document.getElementsByTagName("p");
    for (var i = 0; i < ps.length; i++) {
        ps[i].onclick = function () {
            this.style.backgroundColor = "red";
        };
    }
};