(function() {
    'use strict';

    angular
        .module('app.br.authentication')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, dashboardMenuProvider) {

        $stateProvider
        .state('authentication', {
            abstract: true,
            templateUrl: 'app/br/authentication/layouts/authentication.tmpl.html'
        })
        .state('authentication.login', {
          url: '/login',
          templateUrl: 'app/br/authentication/login/login.tmpl.html',
          controller: 'LoginController',
          controllerAs: 'auth'
        })
        .state('dashboard.admin-default.adduser', {
          url: '/br/adduser',
          templateUrl: 'app/br/authentication/user/add-user.tmpl.html',
          controller: 'AddUserController',
          controllerAs: 'vm'
        });

        dashboardMenuProvider.addMenu({
            name: 'Authentication',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Add User',
                icon: 'fa fa-users',
                state: 'dashboard.admin-default.adduser',
                type: 'link'
            }]
        });
   }
})();
