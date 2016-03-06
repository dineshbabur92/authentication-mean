(function(){
    
    angular.module("meanApp", ["ngRoute"]);
    
    function config($routeProvider, $locationProvider){
        
        $routeProvider
        
        .when("/", {
              
              templateUrl: "home/home.view.html",
              controller: "homeCtrl",
              controlerAs: "vm"
              
              })
        
        .when('/register', {
            
            templateUrl: '/auth/register/register.view.html',
            controller: 'registerCtrl',
            controllerAs: 'vm'
            
        })
        
        .when('/login', {
            
            templateUrl: '/auth/login/login.view.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'
            
        })
        
        .when('/profile', {
            
            templateUrl: '/profile/profile.view.html',
            controller: 'profileCtrl',
            controllerAs: 'vm'
        })
        
        .otherwise({redirectTo: "/"});
        
        $locationProvider.html5Mode(true);
        
    }
    
}());