function underscore() {
    return window._; // assumes underscore has already been loaded on the page
}

function wpApi($http, $q) {
    var getPage = function(slug) {
        var deferred = $q.defer();
        $http.get('api/get_page/?slug='+slug).then(
            function(result) {
                deferred.resolve(result.data);
            },
            function(error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    };

    var getPosts = function(page) {
        var deferred = $q.defer();
        page         = page ? page : 1;
        $http.get('api/get_posts/?page='+page+'&category__not_in=146').then(
            function(result) {
                deferred.resolve(result.data);
            },
            function(error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    };

    var getPost = function(slug) {
        var deferred = $q.defer();
        $http.get('api/get_post/?slug='+slug).then(
            function(result) {
                deferred.resolve(result.data);
            },
            function(error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    };

    var getPostFilter = function(keyword, page) {
        var deferred = $q.defer();
        page         = page ? page : 1;
        $http.get('api/get_search_results/?search='+keyword+'&page='+page).then(
            function(result) {
                deferred.resolve(result.data);
            },
            function(error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    };

    var getPostCategory = function(slug, page) {
        var deferred = $q.defer();
        $http.get('api/get_category_posts/?slug='+slug+'&page='+page).then(
            function(result) {
                deferred.resolve(result.data);
            },
            function(error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    }

    var getPostTag = function(slug, page) {
        var deferred = $q.defer();
        $http.get('api/get_tag_posts/?slug='+slug+'&page='+page).then(
            function(result) {
                deferred.resolve(result.data);
            },
            function(error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    }

    var getSidebar = function(id) {
        var deferred = $q.defer();
        $http.get('api/widgets/get_sidebar/?sidebar_id='+id).then(
            function(result) {
                deferred.resolve(result.data);
            },
            function(error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    }

    var getCategory = function() {
        var deferred = $q.defer();
        $http.get('api/get_category_index').then(
            function(result) {
                deferred.resolve(result.data);
            },
            function(error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    }

    var getTag = function() {
        var deferred = $q.defer();
        $http.get('api/get_tag_index').then(
            function(result) {
                deferred.resolve(result.data);
            },
            function(error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    }
    
    return {
        getPage: getPage,
        getPosts: getPosts,
        getPost: getPost,
        getPostFilter: getPostFilter,
        getPostCategory: getPostCategory,
        getPostTag: getPostTag,
        getSidebar: getSidebar,
        getCategory: getCategory,
        getTag: getTag
    }
}

angular
    .module('inipik')
    .factory('_', underscore)
    .factory('wpApi', wpApi)
