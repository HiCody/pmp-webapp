angular.module('app.pmp.safety.check.project')
    .directive('addSafetycontent', function($state) {
        return {

            restrict: 'E',
            replace: true,
            template: "<div class='list'></div>",
            link: function(scope, element, attrs) {
                var safetyContent = scope.$eval(attrs.data);

                element.append("<ion-item class='item positive center' id='safetyContent'><i class='icon ion-plus'></i> 添加安全检查内容</ion-item >")

                scope.$watch(attrs.data, function(nv, ov) {

                    if (nv) {
                        element.empty()
                        element.append("<ion-item class='item item-icon-right' id='safetyContent'>" + nv.checkContentName + "<i class = 'icon ion-ios-arrow-right'> </i></ion-item>")
                            .append("<ion-item class='item positive center' ui-sref='security-check-add-subject-detail' id='safetyItem'><i class = 'icon ion-plus'></i> 添加安全检查项目</ion-item> ")

                        var e = document.querySelector("#safetyContent");
                        angular.element(e).on('click', function() {
                            $state.go('security-check-add-subject-change')
                        });

                        var e2 = document.querySelector("#safetyItem");
                        angular.element(e2).on('click', function() {
                            $state.go('security-check-add-subject-detail')
                        });
                    }

                }, true);



                var e = document.querySelector("#safetyContent");
                angular.element(e).on('click', function() {
                    $state.go('security-check-add-subject-change')
                });

                var e2 = document.querySelector("#safetyItem");
                angular.element(e2).on('click', function() {
                    $state.go('security-check-add-subject-detail')
                });

            }
        }

    })
    .directive('uploadImg', function($window) {
        return {
            restrict: 'EA',
            link: function(scope, element, attrs) {

                var height = ($window.screen.width-17)/ 4;
     
                var c =height+'px';
         
                element.css({width:c,height:c});
            }
        }
    })
