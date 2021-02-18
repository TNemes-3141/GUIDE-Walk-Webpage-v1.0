function scroll() {
    var element = document.getElementById("a1");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}