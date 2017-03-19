function TagCtrl($scope, $routeParams, $location, wpApi) {
    $scope.getPostTag = function(page) {
        $scope.fetchingPost = true;
        wpApi.getPostTag($scope.slug, page).then(
            function(res) {
                $scope.numberPost   = res.tag.post_count;
                $scope.posts        = res.posts;
                $scope.fetchingPost = false;
            },
            function(err) {
                $location.url('/');
            }
        );
    };

    if ($routeParams.slug) {
        $scope.slug = $routeParams.slug;
        $scope.getPostTag($scope.slug, 1);
    } else {
        $location.url('/');
    }
}

angular
    .module('inipik')
    .controller('TagCtrl', TagCtrl)
