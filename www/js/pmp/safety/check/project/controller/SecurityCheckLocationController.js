angular.module('app.pmp.safety.check.project')
    .controller('SecurityCheckLocationController', function($ionicHistory, $state, $scope, $ionicPopup, CheckPositionInfoService, locals, localStorageService) {
        var pageIndex = 1,
            rowCount = 100;

        CheckPositionInfoService.loadListData(pageIndex, rowCount).success(function(data) {

            $scope.checkPositionList = data.items.rows;
            console.log($scope.checkPositionList);

        }).finally(function() {

        });

        $scope.positionlist = [];

        var savedposition = localStorageService.get('position');
        if (savedposition) {
            $scope.positionlist = savedposition;
        }

        //TODO 检查是否和已有的重复


        $scope.showPrompt = function() {
            $ionicPopup.prompt({
                title: '新增位置',
                cancelText: '取消',
                okText: '确定'
            }).then(function(res) {
                if (res) {
                    var idx = -1;
                    angular.forEach($scope.positionlist, function(data, index, array) {
                        if (res == data) {
                            idx = index;
                        }
                    });
                    if (idx == -1) {
                        var position = {};
                        position.positionName = res;
                        position.checkPosId = -1;
                        $scope.positionlist.push(position);
                    }
                }

            });
        };

        $scope.passValue = function(item) {

            $scope.$emit('position', item);
            $ionicHistory.goBack();

        }


        $scope.$on('$ionicView.beforeLeave', function() {
            if ($scope.positionlist.length > 0) {
                localStorageService.update("position", $scope.positionlist);
            }
        });

    })
