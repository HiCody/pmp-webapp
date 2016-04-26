angular.module('app.pmp.safety.check.project')
    .controller('SecurityCheckAddController', function($window, $rootScope, $scope, $ionicModal, $ionicActionSheet, $stateParams, $filter, $ionicPopup) {
        $scope.checkType = { typeName: '日常检查', typeId: 1 };
        $scope.checkInfoProblemList = [];

        $scope.checkTypeList = [{ typeName: '日常检查', typeId: 1 }, { typeName: '专项检查', typeId: 2 }];

        $scope.hasProblem = {};
        $scope.hasProblem.selected = true;


        var currentDate = new Date();
        var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        $scope.date = date;
        $scope.checkTime = {
            date: date,
            mondayFirst: false,
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            daysOfTheWeek: ["日", "一", "二", "三", "四", "五", "六"],
            startDate: new Date(1989, 1, 26),
            endDate: new Date(2024, 1, 26),
            disablePastDays: false,
            disableSwipe: false,
            disableWeekend: false,
            disableDates: '',
            showDatepicker: false,
            showTodayButton: false,
            calendarMode: false,
            hideCancelButton: true,
            hideSetButton: true,
            callback: function() {
                $scope.checkDate = $filter('date')($scope.checkTime.date, 'yyyy-MM-dd');
                $scope.timerPopup.close();
            }
        };
        $scope.showCheckTime = function() {


            $scope.timerPopup = $ionicPopup.show({
                templateUrl: "check-time.html",
                scope: $scope,
                cssClass: 'customTimerPopover'
            });
            $scope.timerPopup.then(function(res) {
                console.log('Tapped!', res);
            });
        };

        $scope.$on("position", function(event, msg) {

            $scope.postionInfo = msg;
        });

        $rootScope.$on("solveUser", function(event, msg) {

            $scope.solverInfo = msg;
        });

        $rootScope.$on('checkInfoProblem', function(event, msg) {
            $scope.checkInfoProblemList.push(angular.fromJson(msg));
            console.log(angular.fromJson(msg));
        });

        $scope.deleteCheckConConfirm = function(index) {

            var confirmPopup = $ionicPopup.confirm({
                title: '提示',
                template: '<p class="center">确认删除？</p>',
                cancelText: '取消',
                okText: '确定'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    $scope.checkInfoProblemList.splice(index, 1);
                }

            });
        }

        $scope.showSheet = function() {
            $scope.myPopup = $ionicPopup.show({
                templateUrl: "checkType.html",
                scope: $scope,
                cssClass: 'customPopover'
            });
            $scope.myPopup.then(function(res) {
                console.log('Tapped!', res);
            });
        }

        $scope.ensureSelectedValue = function(item) {
            $scope.checkType = item;
            $scope.myPopup.close();
        }


        //图片添加
        $scope.image_list = [];

        $scope.addAttachment = function() {
            if ($scope.image_list.length < 5) {
                $ionicActionSheet.show({
                    buttons: [
                        { text: '相机' },
                        { text: '图库' }
                    ],
                    cancelText: '关闭',
                    cancel: function() {
                        return true;
                    },
                    buttonClicked: function(index) {
                        switch (index) {
                            case 0:
                                takePhoto();
                                break;
                            case 1:
                                pickImage();

                                break;
                            default:
                                break;
                        }
                        return true;
                    }
                });
            } else {
                $ionicPopup.alert({
                    title: '提示',
                    template: "<p class='center'>最多选5张！</p>"
                });
            }


        };

        var pickImage = function() {

            var count = 5 - $scope.image_list.length;
            window.imagePicker.getPictures(
                function(results) {
                    for (var i = 0; i < results.length; i++) {
                        $scope.image_list.push(results[i]);
                    }
                },
                function(error) {
                    console.log('Error: ' + error);
                }, {

                    maximumImagesCount: count,

                    quality: 50
                }
            );

        };

        var takePhoto = function() {

            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI
            });

            function onSuccess(imageURI) {
                // var image = document.getElementById('myImage');
                // image.src = imageURI;
                $scope.image_list.push(imageData);
            }

            function onFail(message) {

            }

        };

        //预览或删除
        $scope.previewOrDelete = function(index) {
            $ionicActionSheet.show({
                buttons: [
                    { text: '预览' }
                ],
                destructiveText: '删除',
                cancelText: '关闭',
                cancel: function() {
                    return true;
                },
                buttonClicked: function() {

                    PhotoViewer.show($scope.image_list[index]);
                    return true;
                },
                destructiveButtonClicked: function() {
                    $scope.image_list.splice(index, 1);

                    return true;
                }
            });

        }


        $scope.submmitOrSavedTolocal = function() {
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: '提交' },
                    { text: '保存本地' }
                ],
                cancelText: '取消',
                buttonClicked: function(index) {
                    if (index == 0) {

                    } else {

                    }
                    return true;
                }
            });

        }

    });
