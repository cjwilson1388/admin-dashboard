(function() {
    'use strict';

    angular
        .module('dashboard.components')
        .filter('tableImage', tableImage);

    function tableImage($sce) {
        return filterFilter;

        ////////////////

        function filterFilter(value) {
            return $sce.trustAsHtml('<div style=\"background-image: url(\'' + value + '\')\"/>');
        }
    }

})();
