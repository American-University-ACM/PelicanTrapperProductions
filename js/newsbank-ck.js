$(window).load(function(){var e=8;for(var t=1;t<=e;t++)$(".va-wrapper").append('<div class="va-slice va-slice-'+t+'">\n            <h3 class="va-title">News-Post-'+t+'-Title [Date: Blah]</h3>\n            <div class="va-content">\n                <div id="postWrapper'+t+'"><p id="post'+t+'">This is a test post of epic proportions!</p><div>\n                <div class="postbutton" id="button'+t+'">Edit Post</div>\n                <ul>\n                    <li class="button" ><a href="about.html">About</a></li>\n                    <li class="button" ><a href="http://www.facebook.com/magicoftaylorlewis" target="_blank">Facebook</a></li>\n                </ul>\n            </div>\n        </div>');$("#va-accordion").vaccordion({accordionH:770,accordionW:840,expandedHeight:630,visibleSlices:4,animOpacity:.2});$(".postbutton").click(function(){var e=this.id,t=e.charAt(6),n=$("#post"+t).text(),r=prompt("Edit Post:",n);console.log("Post Editing Log: oldtext: "+n+"////////newtext: "+r);if(r.length==0){var i=confirm("Post will be blank! Proceed anyway?");if(i==1){$("#post"+t).remove();$("#postWrapper"+t).append('<p id="post'+t+'">'+r+"</p>")}}else if(r!=null){$("#post"+t).remove();$("#postWrapper"+t).append('<p id="post'+t+'">'+r+"</p>")}})});