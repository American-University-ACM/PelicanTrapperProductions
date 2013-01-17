$(window).load(function() {
	
	var slicecount = 8;

    for (var i=1; i<=slicecount; i++)
    $('.va-wrapper').append(
        '<div class="va-slice va-slice-'+i+'">
            <h3 class="va-title">News-Post-'+i+'-Title [Date: Blah]</h3>
            <div class="va-content">
                <div id="postWrapper'+i+'"><p id="post'+i+'">This is a test post of epic proportions!</p><div>
                <div class="postbutton" id="button'+i+'">Edit Post</div>
                <ul>
                    <li class="button" ><a href="about.html">About</a></li>
                    <li class="button" ><a href="http://www.facebook.com/magicoftaylorlewis" target="_blank">Facebook</a></li>
                </ul>
            </div>
        </div>'
    );

    $('#va-accordion').vaccordion({
        accordionH      : 770,
        accordionW      : 840,
        expandedHeight  : 630,
        visibleSlices   : 4,
        animOpacity		: .2
    });

    $('.postbutton').click(function(){ 
        var buttonid = this.id;
        var idnum = buttonid.charAt(6);
        var oldtext = $('#post'+ idnum).text();
        var newtext = prompt("Edit Post:", oldtext);
        console.log('Post Editing Log: oldtext: '+ oldtext + "////////newtext: " + newtext);

        if (newtext.length == 0){
            var test = confirm("Post will be blank! Proceed anyway?");
            if (test ==true){
                $('#post'+ idnum).remove();
                $('#postWrapper'+ idnum).append('<p id="post'+idnum+'">'+newtext+'</p>');
            }
        }
        else if (newtext != null){
            $('#post'+ idnum).remove();
            $('#postWrapper'+ idnum).append('<p id="post'+idnum+'">'+newtext+'</p>');
        }

    });
});