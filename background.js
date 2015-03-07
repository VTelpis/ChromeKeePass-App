chrome.app.runtime.onLaunched.addListener(function(launchData) {
	//https://developer.chrome.com/apps/app_runtime#event-onLaunched

  chrome.app.window.create('app/window.html', {
  	id: 'ChromeKeePass',
  	innerBounds: {width: 400, height: 600}
/*    'bounds': {
      'width': 400,
      'height': 500
    }
*/
  });
});
