angular.module('app.frame.home', []);

angular.module('app.frame.home')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          $stateProvider
          .state('frame/home', {
            url: '/frame/home',
            templateUrl: 'templates/frame/home/home.html',
            controller: 'HomeController'
        })
           .state('frame/home-informationCentre', {
            url: '/frame/home-informationCentre',
            templateUrl: 'templates/frame/home/home-informationCentre.html'
        })
            .state('frame/home-mine', {
            url: '/frame/home-mine',
            templateUrl: 'templates/frame/home/home-mine.html',
        });

        
    });