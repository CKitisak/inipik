function SearchCtrl($scope, $routeParams, $location, wpApi, _) {
    $scope.getPostFilter = function(page) {
        // if ($scope.keyword != null && $scope.keyword != undefined && $scope.keyword != '') {
            $scope.fetchingPost = true;
            wpApi.getPostFilter($scope.keyword, page).then(
                function(res) {
                    $scope.numberPost   = res.count_total;
                    // $scope.pages        = res.pages;
                    $scope.posts        = res.posts;
                    $scope.fetchingPost = false;
                },
                function(err) {
                    $location.url('/');
                }
            );
        // }
    };

    if ($routeParams.keyword) {
        $scope.keyword = $routeParams.keyword;
        $scope.getPostFilter(1);
    } else {
        $location.url('/');
    }
}

angular
    .module('inipik')
    .controller('SearchCtrl', SearchCtrl)
