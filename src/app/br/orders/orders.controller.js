(function() {
    'use strict';

    angular
        .module('app.br.orders')
        .controller('OrdersController', OrdersController);

    /* @ngInject */
    function OrdersController($state, dashboardSettings, $scope, OrdersService) {
        var vm = this;
        vm.testData = ['CJ', 'is an ', 'amazing developer!'];
    }


})();
