if( /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    alert("Hello, you are using a mobile device!");
} else {
    alert("Hello, you are not using a mobile phone!");
    var mobileContainer = document.querySelectorAll('.container');

    for( var i = 0; i < mobileContainer.length; ++i) {
        mobileContainer[i].setAttribute('width', '90%');
    }
}