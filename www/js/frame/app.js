//bupthq所有模块的加载
angular.module('app.frame', [
    'ionic',
    'app.frame.home'
]);

angular.module('app.frame')
    //全局的样式默认UI样式修改
    .config(function ($ionicConfigProvider) {
        //配置tabs的位置和样式
        $ionicConfigProvider.tabs.position("bottom");
        $ionicConfigProvider.tabs.style("standard ");
    });


angular.module('app.frame')
//frame的路由配置
    .config(function ($stateProvider, $urlRouterProvider) {
  
        //配置意外的跳转
        $urlRouterProvider.otherwise('frame/home');
    });