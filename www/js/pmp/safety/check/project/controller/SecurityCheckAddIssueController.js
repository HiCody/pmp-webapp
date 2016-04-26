angular.module('app.pmp.safety.check.project')
    .controller('SecurityCheckAddIssueController', function($rootScope,$scope, $state, SafetyContentsService, SafetyContentService, $ionicHistory, $stateParams) {
  

        var index = $stateParams.idx;

        var checkContent = SafetyContentService.data();
        var safetyContent = SafetyContentsService.get(checkContent.checkContentId);

        console.log(index);
        for (var i = 0; i < safetyContent.checkItems.length; i++) {

            if (checkContent.checkItems[index].checkItemId == safetyContent.checkItems[i].checkItemId) {
                $scope.checkItem = safetyContent.checkItems[i];
                break;
            }
        }


        $scope.checkProblems = $scope.checkItem.checkProblems;


        $rootScope.$on("newIssure", function(event, msg) {

            var customerPro = msg.customerPro;
            console.log(customerPro);
            if (customerPro) {
                var checkProblem = {};
                checkProblem.checkProblemId = '-1';
                checkProblem.checkProblemName = customerPro;
                $scope.checkProblems.push(checkProblem);
            }
        });


        var tempCheckItem = checkContent.checkItems[index];
        if (!tempCheckItem.checkProblems) {
            tempCheckItem.checkProblems = [];
        }

        $scope.showSelected = function(item) {

            if (item.selected) {
                tempCheckItem.checkProblems.push(item);
            } else {
                for (i = 0; i < tempCheckItem.checkProblems.length; i++) {
                    if (tempCheckItem.checkProblems[i].checkProblemId == item.checkProblemId) {
                        tempCheckItem.checkProblems.splice(i, 1);
                    }
                }
            }
        }

        $scope.segureToNewIssure = function() {

            $state.go('security-check-add-newIssue', { idx: index });
        }

    })
