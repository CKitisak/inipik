function CategoryCtrl($scope, $routeParams, $location, wpApi) {
    $scope.getPostCategory = function(page) {
        $scope.fetchingPost = true;
        wpApi.getPostCategory($scope.slug, page).then(
            function(res) {
                $scope.numberPost   = res.category.post_count;
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
        $scope.getPostCategory(1);
    } else {
        $location.url('/');
    }
}

angular
    .module('inipik')
    .controller('CategoryCtrl', CategoryCtrl)
