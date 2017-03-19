function ArticleCtrl($scope, $routeParams, $location, wpApi, _) {
    $scope.getPost = function(slug) {
        $scope.fetchingPost = true;
        wpApi.getPost(slug).then(function(res) {
            if (res.error) {
                $location.url('/');
            } else {
                var quote = _.find(res.post.categories, function(c) { return c.slug == 'quote'; });
                if (quote) {
                    $location.url('/');
                } else {
                    $scope.post     = res.post;
                    $scope.nextPost = res.next_url;
                    $scope.prevPost = res.previous_url;
                    $scope.fetchingPost = false;
                }
            }
        }, function(err) {
            $location.url('/');
        });
    }

    if ($routeParams.slug) {
        $scope.slug = $routeParams.slug;
        $scope.getPost($scope.slug);
    } else {
        $location.url('/');
    }
}

angular
    .module('inipik')
    .controller('ArticleCtrl', ArticleCtrl)
