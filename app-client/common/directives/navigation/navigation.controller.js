function navigationCtrl($location, authentication){
    
    var vm = this;
    
    vm.isLoggedIn = authentication.isLoggedIn();
    v.currentUser = authentication.currentUser();
    
}