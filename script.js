window.onload = function () {
    var images = [
        'Chrysanthemum.jpg',
        'Desert.jpg',
        'Jellyfish.jpg',
        'Penguins.jpg',
        'Tulips.jpg'
    ];
    var i = 0;
    var img = document.querySelector("#slider img");
    img.src = "img/" + images[i];
    document.querySelector("#btnPrev").onclick = function () {
        (i > 1) ? i-- : (i = images.length - 1);
        img.src = "img/" + images[i];
    };
    document.querySelector("#btnNext").onclick = function () {
        (i < (images.length - 1)) ? i++ : i = 0;
        img.src = "img/" + images[i];
    };
};