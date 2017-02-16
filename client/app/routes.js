

app.config(function ($routeProvider,$locationProvider) {

 
   $locationProvider.hashPrefix('');
	$routeProvider.when('/', {
		templateUrl: 'app/components/login/login.html',
	    controller: 'loginCtrl'
	}).when('/login', {		
		templateUrl: 'app/component/login/login.html',
	    // controller: 'loginCtrl'
	}).when('/result', {
		templateUrl: 'app/component/result/result.html',
		// controller: 'resultCtrl'
	});
});