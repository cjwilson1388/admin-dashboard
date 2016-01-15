(function() {
    'use strict';

    angular
        .module('app')
        .config(mainConfig);

    /* @ngInject */
    function mainConfig(dashboardSettingsProvider, dashboardRouteProvider) {
        var now = new Date();
        // set app name & logo (used in loader, sidemenu, footer, login pages, etc)
        dashboardSettingsProvider.setName('dashboard');
        dashboardSettingsProvider.setCopyright('&copy;' + now.getFullYear() + ' calebjwilson.com');
        dashboardSettingsProvider.setLogo('assets/images/logo.png');
        // set current version of app (shown in footer)
        dashboardSettingsProvider.setVersion('0.0.2');
        // set the document title that appears on the browser tab
        dashboardRouteProvider.setTitle('Admin Dash');
        dashboardRouteProvider.setSeparator('|');
    }
})();