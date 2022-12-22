
var whichImages = document.getElementById("i1").onclick;

function getBase64Image(img){
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/jpg");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/,"");
}

var imgData = getBase64Image(whichImages);
sessionStorage.setItem("whichImages", whichImages);

//in one way you want to store a (string) variable

//tell your computer without having anything to store, i selectrd this image
// second page: thats the pne got it