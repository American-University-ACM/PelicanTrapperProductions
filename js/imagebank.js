var imageBank = new Array();

function refreshBank(){
	$('.slide').remove();
	$('.bank-index').remove();
	console.log("Bank-Refresh");
	for (i=0; i<imageBank.length; i++){
		var imgdiv = '<div class="slide"><img src="' + imageBank[i] + '" width="600" height="400"/></div>';
		$('.slides_container').append(imgdiv);
		$('.image-bank').append('<div class="bank-index" id="bank-index-'+(i+1)+'"><img src="' + imageBank[i] + '" width="150" height="100"/></div>');
	}
}

function addSiteImages(){

    console.log("addSiteImages called");
    //$(".invis").load('home.html'); 
    // var justloaded = $('img').contents();
    // console.log("contents of invis: " + justloaded);

    // $('img').load('home.html img', function () {
    //     var elements = $(this).length;
    //     console.log(elements);
    // });
    
    // $('').each(function(){
    //     var imgsrc = this.src;
    //     console.log("Found an image on home.html: " + imgsrc);
    //     //imageBank.push();
    // });
    // console.log('# of images on home.html: ' + homeImages);
    // console.log('# of images on tricks.html: ' + tricksImages);
    // console.log('# of images on about.html: ' + aboutImages);
 //    imageBank.push();
	// refreshBank();
}

function addImage(src){
    imageBank.push(src);
    refreshBank();
}

$(document).ready(function(){
    addImage("./img/PeliBack1.png");
    addImage("./img/PeliBack1.png");
    addImage("./img/PeliBack1.png");
    addImage("./img/PeliBack1.png");
    addImage("./img/PeliBack1.png");
    addImage("./img/PeliBack1.png");
    addImage("./img/PeliBack1.png");
    addImage("./img/PeliBack1.png");

    addSiteImages();

    console.log("imagebank loaded");

    $('#slides').slides({
        preload: true,
        preloadImage: 'img/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });

	$('.bank-index').click(function(){ 
		var idname = this.id;
		var idnum = idname.charAt(11);
		$(".current").removeClass("current");
     	$('li:contains('+idnum+')').addClass("current");
     	console.log(idnum);
	});

});


