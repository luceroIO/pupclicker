var pup= {
	"count": 0,
	"image":"images/pup1.jpg",
}

var HTMLclickCount = '<span id="clickCount"></span>';
var HTMLpupPic ='<img class="img-responsive" src="%data%"  alt="Picture of puppy">';


pup.display = function(){

	var pupImage = HTMLpupPic.replace("%data%", pup.image);
	$(".pupPic").append(pupImage);

	$(".clickCount").append(HTMLclickCount);

};


pup.display();

$(document).ready(function(){
    $("img").click(function(){
        pup.count +=1;
        document.getElementById("clickCount").innerHTML = pup.count;
    });
});