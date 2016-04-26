angular.module('app.pmp.safety.check.project')
    .controller('SecurityCheckSubjectChangeController', function($scope, $ionicPopup, $state, SafetyContentsService, SafetyContentService, $ionicHistory) {

        $scope.safetyContents = SafetyContentsService.getAllContents();
        if (!$scope.safetyContents.length) {

            SafetyContentsService.requestCheckIssue(function() {
                $scope.safetyContents = SafetyContentsService.getAllContents();

            });
        }

        console.log($scope.safetyContents);

        var tempSafetyContent = SafetyContentService.data();
        for (var i = 0; i < $scope.safetyContents.length; i++) {

            if ($scope.safetyContents[i].checkContentId == tempSafetyContent.checkContentId) {
                $scope.safetyContents[i].selected = true;
                $scope.safetyContents[i].disabled = true;

            } else {
                $scope.safetyContents[i].selected = false;
                $scope.safetyContents[i].disabled = false;
            }

        }

        // A confirm dialog
        $scope.showConfirm = function(item) {

            var confirmPopup = $ionicPopup.confirm({
                title: '提示',
                template: '<p class="center">确认变更检查内容？</p>',
                cancelText: '取消',
                okText: '确定'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    var tempSafetyContent = SafetyContentService.data();
                    tempSafetyContent.checkContentId = item.checkContentId;
                    tempSafetyContent.checkContentName = item.checkContentName;
                    tempSafetyContent.checkItems = [];
                    // $state.go('security-check-add-subject');
                    $ionicHistory.goBack();
                } else {
                    $scope.selected = false;
                    for (var i = 0; i < $scope.safetyContents.length; i++) {

                        if ($scope.safetyContents[i].checkContentId == item.checkContentId) {
                            $scope.safetyContents[i].selected = false;

                        }

                    }
                }
            });
        };

    })
