var myNodelist = document.getElementsByTagName("LI");
var i;
for(i=0;i<myNodelist.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u0007");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for(i=0; i< close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElements;
        div.style.display = "home";
    };
}