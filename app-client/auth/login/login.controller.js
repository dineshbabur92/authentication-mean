(function(){
    angular.module("meanApp").controller(["$location", "authentication", loginCtrl]);
    function loginCtrl($location, authentication){

        var vm = this;
        vm.credentials = {

            name: "",
            email: ""

        };

        vm.onSubmit = function(){

            authentication.login(vm.credentials).error(function(err){

                alert(err);

            }).then(function(){

                $location.path("profile");

            });

        };

    }
}());