angular.module('app.pmp.safety.check.project')
    .controller('SecurityCheckController', function($scope, $ionicActionSheet, $ionicModal, CheckInfoService, $filter, $ionicPopup) {

        var pageIndex = 1,
            rowCount = 5;

        var condition = CheckInfoService.getCondition();
        console.log(condition)

        $scope.filterInfo = { checkUser: '', checkType: '全部', hasProblem: '全部', beginDate: '', endDate: '', solveUserName: '' };

        $scope.stateList = [{ lable: '全部', state: -1 },
            { lable: '未发现问题', state: 1 },
            { lable: '待处理', state: 2 },
            { lable: '待复查', state: 3 },
            { lable: '复查未通过', state: 4 },
            { lable: '复查通过', state: 5 }
        ];

        $scope.ret = { choice: "全部" };

        $scope.loadCompleted = true;

        $scope.checkInfolist = [];

        $scope.leftSelected = "全部";

        $scope.refreshListData = function() {
            pageIndex = 1;
            CheckInfoService.loadListData(pageIndex, rowCount).success(function(data) {

                loadListDataCallback(data);

            }).finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
        }

        //分页加载列表数据
        $scope.loadListData = function() {
            pageIndex++;
            CheckInfoService.loadListData(pageIndex, rowCount).success(function(data) {

                loadListDataCallback(data);

            }).finally(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });;
        };

        //异步加载数据回调函数
        function loadListDataCallback(data) {
            if (pageIndex == 1) {
                $scope.checkInfolist = [];
            }
            var items = data.items.rows;

            for (var i = 0; i < items.length; i++) {
                var checkInfoDetail = items[i];
                console.log(checkInfoDetail);
                var checkInfoProblemClassList = checkInfoDetail.checkInfoProblemClassList;

                var tempCheckProblemNamelist = [];
                for (var j = 0; j < checkInfoProblemClassList.length; j++) {
                    var checkInfoDetailList = checkInfoProblemClassList[j].checkInfoDetailList;
                    for (var k = 0; k < checkInfoDetailList.length; k++) {

                        tempCheckProblemNamelist.push(checkInfoDetailList[k].checkProblemName);
                    }

                }
                var checkProblemName = tempCheckProblemNamelist.join(',');
                var checkInfo = {};
                checkInfo.checkProblemName = checkProblemName;
                checkInfo.checkDate = checkInfoDetail.checkDate;
                checkInfo.state = checkInfoDetail.state;
                if (checkInfoDetail.checkTypeId == 1) {
                    checkInfo.checkType = '日常检查';
                } else if (checkInfoDetail.checkTypeId == 2) {
                    checkInfo.checkType = '专项检查';
                }
                $scope.checkInfolist.push(checkInfo);

            }
            var total = data.items.total;
            console.log(total);
            if (pageIndex >= total) {
                $scope.loadCompleted = false;
            } else {
                $scope.loadCompleted = true;
            }

        }

        //控制删选弹框显示或隐藏
        $scope.filterType = false;
        $scope.filterDetail = false;

        $scope.showFilter = function(obj) {
            if (obj == 'filterType') {
                $scope.filterType = !$scope.filterType;
                $scope.filterDetail = false;

            } else if (obj == 'filterDetail') {
                $scope.filterType = false;
                $scope.filterDetail = !$scope.filterDetail;
            }

        };

        $scope.hideFilter = function(item) {
            $scope.filterType = false;
            $scope.filterDetail = false;
            if (item) {
                $scope.leftSelected = item.lable;

                for (var i = 0; i < $scope.stateList.length; i++) {

                    if (angular.equals($scope.stateList[i].lable, item.lable)) {
                        if (i == 0) {
                            condition.state = -1;
                        } else {
                            condition.state = i;
                        }
                        console.log('condition.state=' + condition.state);
                        break;
                    }

                }
            }

        }

        $scope.filter1PopoverHide = function() {
            //angular.element('home-title-popover').hide();

            return $scope.securityCheckPopover1 = !$scope.securityCheckPopover1;
        };
        $scope.filter2PopoverHide = function() {
            //angular.element('home-title-popover').hide();

            return $scope.securityCheckPopover2 = !$scope.securityCheckPopover2;

        };
        $scope.showCheckTypeSheet = function() {
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: '全部' },
                    { text: '日常检查' },
                    { text: '专项检查' }
                ],
                cancelText: '取消',
                buttonClicked: function(index) {

                    if (index == 0) {
                        condition.checkTypeId = -1;
                        $scope.filterInfo.checkType = '全部';
                    } else if (index == 1) {
                        condition.checkTypeId = 1;
                        $scope.filterInfo.checkType = '日常检查';
                    } else {
                        condition.checkTypeId = 2;
                        $scope.filterInfo.checkType = '专项检查';

                    }

                    return true;
                }
            });
        };
        $scope.showCheckIsTroubleSheet = function() {
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: '全部' },
                    { text: '未发现问题' },
                    { text: '存在问题' }
                ],
                cancelText: '取消',
                buttonClicked: function(index) {
                    if (index == 0) {
                        condition.hasProblem = -1;
                        $scope.filterInfo.hasProblem = '全部';
                    } else if (index == 1) {
                        condition.hasProblem = 0;
                        $scope.filterInfo.hasProblem = '未发现问题';
                    } else {
                        condition.hasProblem = 1;
                        $scope.filterInfo.hasProblem = '存在问题';

                    }
                    return true;
                }
            });
        };

        $ionicModal.fromTemplateUrl('start-time.html', {
            scope: $scope,
            //animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal1Time = modal;

        });

        $ionicModal.fromTemplateUrl('end-time.html', {
            scope: $scope,
            //animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal2Time = modal;
        });

        var currentDate = new Date();
        var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        $scope.date = date;

        function showAlert() {
            $ionicPopup.alert({
                title: '提示',
                template: "<p class='center'>请选择正确的时间</p>"
            })
        }

        $scope.startTime = {
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
            callback: function(date1) {
                var d = $filter('date')(date1, 'yyyy-MM-dd');

                if (d > $scope.filterInfo.endDate && $scope.filterInfo.endDate) {
                    showAlert();

                } else {

                    $scope.filterInfo.beginDate = d;
                }


                $scope.startTimerPopup.close();
            }

        };


        $scope.endTime = {
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
            callback: function(date1) {
                var d = $filter('date')(date1, 'yyyy-MM-dd');
                if (d < $scope.filterInfo.beginDate && $scope.filterInfo.beginDate) {
                    showAlert();
                } else {
                    $scope.filterInfo.endDate = d;
                }

                $scope.endTimerPopup.close();
            }
        };

        $scope.showStartTime = function() {

            $scope.startTimerPopup = $ionicPopup.show({
                templateUrl: "start-time.html",
                scope: $scope,
                cssClass: 'customTimerPopover'
            });
            $scope.startTimerPopup.then(function(res) {
                console.log('Tapped!', res);
            });

        };
        $scope.showEndTime = function() {

            $scope.endTimerPopup = $ionicPopup.show({
                templateUrl: "end-time.html",
                scope: $scope,
                cssClass: 'customTimerPopover'
            });
            $scope.endTimerPopup.then(function(res) {
                console.log('Tapped!', res);
            });
        };


        //重置选项
        $scope.resetFilterInfo = function() {
            $scope.filterInfo = {
                checkUser: '',
                checkType: '全部',
                hasProblem: '全部',
                beginDate: '',
                endDate: '',
                solveUserName: ''
            };
            condition = CheckInfoService.resetCondition();
        }

        //确认筛选条件
        $scope.ensureFilter = function() {
            condition.solveUserName = $scope.filterInfo.solveUserName;
            condition.checkUserName = $scope.filterInfo.checkUserName;

            //TODO 刷新

            $scope.filterType = false;
            $scope.filterDetail = false;

        }




    })
