angular.module('app.pmp.safety.check.company', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
       .state('security-check-projects-view', {
        url: '/security-check-projects-view',
        templateUrl: 'templates/pmp/safety/check/company/security-check-projects-view.html'
      })
        .state('security-check-projects-timeline', {
          url: '/security-check-projects-timeline',
          templateUrl: 'templates/pmp/safety/check/company/security-check-timeline.html'
        })
        .state('security-check-project-view', {
          url: '/security-check-project-view',
          templateUrl: 'templates/pmp/safety/check/company/security-check-project-view.html'
        })
        .state('check-random-info', {
          url: '/check-random-info',
          templateUrl: 'templates/pmp/safety/check/company/check-random-info.html'
        })
        .state('security-check-project-edit', {
          url: '/security-check-project-edit',
          templateUrl: 'templates/pmp/safety/check/company/security-check-project-edit.html',
          controller:'SecurityCheckProjectEditController'
        })
        .state('project-personnel', {
          url: '/project-personnel',
          templateUrl: 'templates/pmp/safety/check/company/project-personnel.html'
        })
        .state('project-overview', {
          url: '/project-overview',
          templateUrl: 'templates/pmp/safety/check/company/project-overview.html'
        })
        .state('check-random-info-edit', {
          url: '/check-random-info-edit',
          templateUrl: 'templates/pmp/safety/check/company/check-random-info-edit.html',
          controller:'CheckRandomInfoEditController'
        })
        .state('related-issue', {
          url: '/related-issue',
          templateUrl: 'templates/pmp/safety/check/company/related-issue.html'
        });
    //$urlRouterProvider.otherwise("/security-check-projects-view");
  });
