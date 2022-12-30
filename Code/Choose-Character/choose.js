
function getBase64Image(img){
    var canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/jpg");

    return dataURL;
}

var anchors = document.querySelectorAll('.cards a');
anchors.forEach(function(anchor){
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        var img = anchor.querySelector('img');
        var imgData = getBase64Image(img);
        sessionStorage.setItem("whichImages", imgData);
        location.href = anchor.href;
    });
});
