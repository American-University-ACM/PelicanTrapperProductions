    window.fbAsyncInit = function() {
        FB.init({
            appId      : '407035209344200', // App ID
            channelUrl : 'channel.html', //Channel File
            status     : true, // check login status
            cookie     : true, // enable cookies to allow the server to access the session
            xfbml      : true  // parse XFBML
        });
            console.log('FB.init ran');
        // Additional initialization code here
        // FB.api('125893800756566/photos',  function(response){
        //     console.log(document.getElementById("logo"));
        //     // for (var i=0, l=response.data.length; i<l; i++){
        //     //     var element = response.data[i];
        //     //     console.log(element);
        //     //     //$('#fb-slide').append('<img src=' + image + 'width="600" height="400"/>');       
        //     // }
        // });
    };    

  // Load the SDK Asynchronously
    (function(d){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "http://connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));