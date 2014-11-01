'use strict';

angular.module('uploadApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/fileupload', {
        templateUrl: 'app/fileupload/fileupload.html',
        controller: 'FileuploadCtrl'
      });
  });
