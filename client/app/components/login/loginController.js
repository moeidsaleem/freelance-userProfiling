app.controller('loginCtrl',  function ($scope,$http) {
	 
	 $http.post('/signin').success(function(response){
         console.log('data sent');
	 });
  

});