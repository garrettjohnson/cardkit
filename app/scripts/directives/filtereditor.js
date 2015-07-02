'use strict';

/**
 * @ngdoc directive
 * @name cardkitApp.directive:filterEditor
 * @description
 * # filterEditor
 */
angular.module('cardkitApp')
  .directive('filterEditor', function () {
    return {
      priority: 5,
      template: '<div>' +
            '<label>Filter</label>' +
            '<select ng-model="element.defaultFilter" ng-options="filter for filter in filters" class="form-control">' +
              '<option value="">No filter</option>' +
            '</select>' +
          '</div>',
      replace: true,
      restrict: 'E',
  	  scope: {
  	    element: '=',
  	    filters: '='
  	  },
    };
  });
