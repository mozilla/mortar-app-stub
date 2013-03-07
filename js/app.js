
// Wait until the DOM is ready
$(function() {

    // Write your app here



});


if(navigator.mozApps) {
    // If you want an installation button, add this to your HTML:
    //
    // <button id="install">Install</button>
    //
    // This code shows the button if the apps platform is available
    // and this isn't already installed.

    $('#install-btn').hide().click(function() {
        navigator.mozApps.install(location.href + 'manifest.webapp');
    });

    var req = navigator.mozApps.getSelf();
    req.onsuccess = function() {
        if(!req.result) {
            $('#install-btn').show();
        }
    };
}
