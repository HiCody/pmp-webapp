angular.module('app.pmp.safety.check.project')
    .controller('SecurityCheckManagerController', function($ionicHistory,$state, $scope, $ionicPopup, SolveUserInfoService) {


        SolveUserInfoService.loadListData().success(function(data) {

            $scope.solveUserInfoList = data.items;

        }).finally(function() {

        });


        $scope.segureToCheckAddView = function(item) {
            $scope.$emit('solveUser', item);
            $ionicHistory.goBack();
        };



    })
