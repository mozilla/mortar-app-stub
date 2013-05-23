var installBtn = document.getElementById('install-btn');

if(installBtn) {
    
    installBtn.style.display = 'none';
    
    // If you want an installation button, add this to your HTML:
    //
    // <button id="install-btn">Install</button>
    //
    // This code shows the button if the apps platform is available
    // and this app isn't already installed.
    if(navigator.mozApps) {

        installBtn.addEventListener('click', function() {
            navigator.mozApps.install(location.href + 'manifest.webapp');
        }, false);

        var req = navigator.mozApps.getSelf();
        req.onsuccess = function() {
            if(!req.result) {
                installBtn.style.display = 'block';
            }
        };

    }
}
