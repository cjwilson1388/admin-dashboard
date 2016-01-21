(function() {
  'use strict';

  angular
    .module('app.br.orders')
    .factory('Orders', OrdersService);

    function OrdersService($http, $Firebase) {
      var ref = new Firebase('https://bandr.firebaseio.com');
      return $firebaseAuth(ref);
    }
})();
