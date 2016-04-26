angular.module('app.pmp.safety.information', []);

angular.module('app.pmp.safety.information')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('security-info', {
                url: '/security-info',
                templateUrl: 'templates/pmp/safety/information/security-info.html'
            })
            .state('security-info-certificate', {
                url: '/security-info-certificate',
                templateUrl: 'templates/pmp/safety/information/security-info-certificate.html',
                // controller: "certificateCtrl"
            })
            .state('security-info-management-instructions', {
                url: '/security-info-management-instructions',
                templateUrl: 'templates/pmp/safety/information/security-info-management-instructions.html',
                // controller: "instructionsCtrl"
            })
            .state('security-info-picture-preview', {
                url: '/security-info-picture-preview',
                templateUrl: 'templates/pmp/safety/information/security-info-picture-preview.html'
            });
    });
