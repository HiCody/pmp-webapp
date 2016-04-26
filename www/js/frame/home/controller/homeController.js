angular.module('app.frame.home')
    .controller('HomeController', function($scope, $ionicBackdrop) {

        $scope.hidePopover = function() {
            return $scope.homePopover = !$scope.homePopover;
        };

        $scope.showPopover = function (){
            return $scope.homePopover = !$scope.homePopover;
        }

    })
