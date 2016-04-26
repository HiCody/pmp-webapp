angular.module('app.pmp.safety.check.project')
    .controller('SecurityCheckAddNewIssueController', function($scope, $state, $stateParams, $ionicHistory) {
        $scope.customerPro = { text: "" };
        $scope.checkText = function() {

            if ($scope.customerPro.text.length > 20) {
                $scope.customerPro.text = $scope.customerPro.text.substr(0, 20);
            }
        };

        $scope.segureToIssure = function() {

            $scope.$emit('newIssure', { customerPro: $scope.customerPro.text });
            $ionicHistory.goBack();
           
        }


    })
