window.onload = function () {
    function printObject(obj) {
        var res = "<ul>";
        for (i in obj) {
            res += "<li><b>" + i + "</b>: " + obj[i] + "</li>";
        }
        res += "</ul>";
        document.write(res);
    }

    var div1 = document.body.children[0];
    // printObject(div1);
    // printObject(div1.style);
    div1.onclick = function(){
        div1.style.backgroundColor = "red";
        div1.title = "Товар у Вас в корзине";
    };
};