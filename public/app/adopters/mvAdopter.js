/**
 * Created by Susan on 8/19/2014.
 */
angular.module('app').factory('mvAdopter', function($resource) {
    var AdopterResource = $resource('/api/adopters/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });

    return AdopterResource;
});