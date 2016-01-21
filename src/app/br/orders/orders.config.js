(function() {
    'use strict';

    angular
        .module('app.br.orders')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, dashboardMenuProvider) {

        $stateProvider
        .state('orders', {
            abstract: true,
            templateUrl: 'app/br/orders/layouts/order.tmpl.html'
          })
        .state('dashboard.admin-default.orders', {
          url: '/br/orders',
          templateUrl: 'app/br/orders/orders.tmpl.html',
          controller: 'OrdersController',
          controllerAs: 'vm'
        });
        dashboardMenuProvider.addMenu({
            name: 'Orders',
            icon: 'fa fa-tasks',
            state: 'dashboard.admin-default.orders',
            type: 'link',
            priority: 1.1
        });
    }
})();
