/**
 * Created by Justin on 8/22/2015.
 */
angular.module('home').controller('HomeController', ['$scope', '$stateParams', 'Authentication',
    function($scope, $stateParams, Authentication){
        $scope.authentication = Authentication;
    }
]);