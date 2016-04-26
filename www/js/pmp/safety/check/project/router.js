angular.module('app.pmp.safety.check.project')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('security-check', {
                url: '/security-check',
                templateUrl: 'templates/pmp/safety/check/project/security-check.html',
                controller: "SecurityCheckController"
            })
            .state('security-check-add', {
                url: '/security-check-add',
                templateUrl: 'templates/pmp/safety/check/project/security-check-add.html',
                controller: "SecurityCheckAddController",
                params: {
                    positionInfo: null,
                    solverUserInfo: null
                },
                
            })
            .state('security-check-location', {
                url: '/security-check-location',
                templateUrl: 'templates/pmp/safety/check/project/security-check-location.html',
                controller: "SecurityCheckLocationController"
            })
            .state('security-check-manager', {
                url: '/security-check-manager',
                templateUrl: 'templates/pmp/safety/check/project/security-check-manager.html',
                controller: "SecurityCheckManagerController"
            })
            .state('security-check-add-subject', {
                url: '/security-check-add-subject',
                templateUrl: 'templates/pmp/safety/check/project/security-check-add-subject.html',
                controller: "SecurityCheckAddSubjectController"
            })
            .state('security-check-add-subject-detail', {
                url: '/security-check-add-subject-detail',
                templateUrl: 'templates/pmp/safety/check/project/security-check-add-subject-detail.html',
                controller: "SecurityCheckAddSubjectDetailController",
                params: {
                    idx: null
                }
            })
            .state('security-check-add-subject-change', {
                url: '/security-check-add-subject-change',
                templateUrl: 'templates/pmp/safety/check/project/security-check-add-subject-change.html',
                controller: "SecurityCheckSubjectChangeController"
            })
            .state('security-check-add-issue', {
                url: '/security-check-add-issue',
                templateUrl: 'templates/pmp/safety/check/project/security-check-add-issue.html',
                controller: 'SecurityCheckAddIssueController',
                params: {
                    idx: null,
                    customerPro: null
                }
            })
            .state('security-check-add-newIssue', {
                url: '/security-check-add-newIssue',
                templateUrl: 'templates/pmp/safety/check/project/security-check-add-newIssue.html',
                controller: 'SecurityCheckAddNewIssueController',
                params: {
                    idx: null
                }
            })
            // $urlRouterProvider.otherwise("/security-check");
    });
