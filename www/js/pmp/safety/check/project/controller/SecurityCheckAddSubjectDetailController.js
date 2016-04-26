angular.module('app.pmp.safety.check.project')
    .controller('SecurityCheckAddSubjectDetailController', function($scope, $stateParams, SafetyContentsService, SafetyContentService, $ionicHistory) {
        $scope.checkContent = SafetyContentService.data();
        $scope.safetyContent = angular.copy(SafetyContentsService.get($scope.checkContent.checkContentId));
        $scope.checkItems = $scope.safetyContent.checkItems;

        var index = $stateParams.idx;
        var numArr = [];
        if ($scope.checkContent.checkItems.length > 0) {
            for (var i = 0; i < $scope.checkItems.length; i++) {
                for (var j = 0; j < $scope.checkContent.checkItems.length; j++) {

                    if ($scope.checkItems[i].checkItemId == $scope.checkContent.checkItems[j].checkItemId) {
                        $scope.checkItems[i].selected = true;
                        $scope.checkItems[i].disabled = true;
                        numArr.push(i);
                        console.log('1111');
                        break;

                    } else {
                        if (numArr.indexOf(i) == -1) {
                            $scope.checkItems[i].selected = false;
                            $scope.checkItems[i].disabled = false;
                        }

                    }


                }


            }
            // console.log($scope.checkContent.checkItems);
        }
        console.log($scope.checkItems);

        $scope.showSelected = function(item) {


            $scope.tempCheckItem = {};
            $scope.tempCheckItem.checkItemId = item.checkItemId;
            $scope.tempCheckItem.checkItemName = item.checkItemName;


            var realSafetyContent = SafetyContentsService.get($scope.checkContent.checkContentId);
            for (var i = 0; i < realSafetyContent.checkItems.length; i++) {
                if (item.checkItemId == realSafetyContent.checkItems[i].checkItemId) {
                    var realCheckItem = realSafetyContent.checkItems[i];
                    for (var j = 0; j < realCheckItem.checkProblems.length; j++) {
                        var checkProblem = realCheckItem.checkProblems[j];
                        if (checkProblem.selected) {
                            checkProblem.selected = null;
                        }
                    }
                }
            }


            if (index === null) {

                $scope.checkContent.checkItems.push($scope.tempCheckItem);

            } else {

                $scope.checkContent.checkItems.splice(index, 1, $scope.tempCheckItem);

                console.log($scope.checkContent.checkItems);
            }


            $ionicHistory.goBack();

        };


    })
