angular.module('app.pmp.safety.check.company')
    .controller('SecurityCheckProjectEditController',function($scope,$ionicPopup,$ionicModal){
// A confirm dialog
        $scope.deleteCheckConfirm = function () {
            var confirmPopup = $ionicPopup.confirm({
                title: '提示',
                template: '<p class="center">确定删除？</p>',
                cancelText:'取消',
                okText:'确定'
            });
            confirmPopup.then(function (res) {
                if (res) {
                    //$state.go('security-check-add-subject');
                } else {

                }
            });
        };

        // A confirm dialog
        $scope.deleteCheckConConfirm = function () {
            var confirmPopup = $ionicPopup.confirm({
                title: '提示',
                template: '<p class="center">删除当当前内容？</p>',
                cancelText:'取消',
                okText:'确定'
            });
            confirmPopup.then(function (res) {
                if (res) {
                    //$state.go('security-check-add-subject');
                } else {

                }
            });
        };

        //实际开始时间
        var currentDate = new Date();
        var date = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate());
        $scope.date = date;

        var actualStartTime;
        var actualEndTime;
        var checkTime;

        $scope.actualStartTime = {
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
            showDatepicker: true,
            showTodayButton: false,
            calendarMode: true,
            hideCancelButton: true,
            hideSetButton: true,
            callback: function(){
                $scope.modal1Time.hide();
            }
        };
        //实际结束时间
        $scope.actualEndTime = {
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
            showDatepicker: true,
            showTodayButton: false,
            calendarMode: false,
            hideCancelButton: true,
            hideSetButton: true,
            callback: function(){
                $scope.modal2Time.hide();
            }
        };

        //检查日期
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
            showDatepicker: true,
            showTodayButton: false,
            calendarMode: false,
            hideCancelButton: true,
            hideSetButton: true,
            callback: function(){
                $scope.modal3Time.hide();
            }
        };

        $scope.showActualStartTime = function(){
            $scope.modal1Time.show();
            if($scope.actualStartTime.showDatepicker == true){
                $scope.actualStartTime.showDatepicker = false;
            }
            else if($scope.actualStartTime.showDatepicker == false){
                $scope.actualStartTime.showDatepicker = true;
            }
        };
        $scope.showActualEndTime = function(){
            $scope.modal2Time.show();
            if($scope.actualEndTime.showDatepicker == true){
                $scope.actualEndTime.showDatepicker = false;
            }
            else if($scope.actualEndTime.showDatepicker == false){
                $scope.actualEndTime.showDatepicker = true;
            }
        };
        $scope.showCheckTime = function(){
            $scope.modal3Time.show();
            if($scope.checkTime.showDatepicker == true){
                $scope.checkTime.showDatepicker = false;
            }
            else if($scope.checkTime.showDatepicker == false){
                $scope.checkTime.showDatepicker = true;
            }
        };

        $ionicModal.fromTemplateUrl('actual-start-time.html', {
            scope: $scope,
            //animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal1Time = modal;
        });

        $ionicModal.fromTemplateUrl('actual-end-time.html', {
            scope: $scope,
            //animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal2Time = modal;
        });

        $ionicModal.fromTemplateUrl('check-time.html', {
            scope: $scope,
            //animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal3Time = modal;
        });

        /*      var template = '<onezone-datepicker datepicker-object="actualStartTime"></onezone-datepicker>';
         $ionicModal.templates(template,{
         scope:$scope,
         animation:'slide-in-up'
         }).then(function(modal){
         $scope.modal = modal;
         });*/
        $scope.openModal = function() {
            //$scope.modal.show();
        };
        $scope.closeModal = function() {
            //$scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            //$scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });

    })
