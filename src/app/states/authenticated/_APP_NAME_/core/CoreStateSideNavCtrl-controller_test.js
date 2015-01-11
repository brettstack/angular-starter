'use strict';

/*var assert = chai.assert,
  expect = chai.expect,
  should = chai.should();*/

describe('CoreStateSideNavCtrl', function () {
  var scope, ctrl;

  beforeEach(angular.mock.module('csnetApp.states.authenticated.csnet.core'));
  beforeEach(angular.mock.inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('CoreStateSideNavCtrl', {
      $scope: scope
    });
  }));

  it('exists', function () {
    expect(ctrl).to.not.be.undefined;
  });
});