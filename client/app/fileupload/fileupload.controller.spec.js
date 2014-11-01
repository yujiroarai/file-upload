'use strict';

describe('Controller: FileuploadCtrl', function () {

  // load the controller's module
  beforeEach(module('uploadApp'));

  var FileuploadCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FileuploadCtrl = $controller('FileuploadCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
