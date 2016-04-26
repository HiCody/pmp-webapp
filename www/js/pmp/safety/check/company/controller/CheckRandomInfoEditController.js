angular.module('app.pmp.safety.check.company')
    .controller('CheckRandomInfoEditController', function ($scope,$ionicActionSheet) {
        $scope.addSpotCheckSheet = function(){
            var hideSheet = $ionicActionSheet.show({
                buttons:[
                    {text:'有'},
                    {text:'无'},
                    {text:'齐全'},
                    {text:'不齐全'}
                ],
                titleText: '抽查情况',
                cancelText:'取消',
                buttonClicked:function(index){
                    return true;
                }
            });
        };
    })