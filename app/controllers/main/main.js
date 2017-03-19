function MainCtrl($rootScope, $scope, $timeout, _, wpApi) {
    $scope.getPosts = function(page) {
        $scope.fetchingPost = true;
        wpApi.getPosts(page).then(
            function(res) {
                $scope.numberPost   = res.count_total;
                $scope.pages        = res.pages;
                $scope.posts        = res.posts;
                $scope.fetchingPost = false;
            },
            function(err) {

            }
        );
    };
    $scope.getPosts(1);
}

angular
    .module('inipik')
    .controller('MainCtrl', MainCtrl)