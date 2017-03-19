function QuoteCtrl($scope, $routeParams, $location, wpApi) {
    // $scope.getPostCategory = function(slug) {
    //     wpApi.getPostCategory('quote').then(
    //         function(res) {
    //             $scope.quotes = res;
    //         },
    //         function(err) {
    //             $location.url('/');
    //         }
    //     );
    // };

    // if ($routeParams.slug) {
    //     $scope.slug = $routeParams.slug;
    //     $scope.getPostCategory($scope.slug);
    // } else {
    //     $location.url('/');
    // }
}

angular
    .module('inipik')
    .controller('QuoteCtrl', QuoteCtrl)
