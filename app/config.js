function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: inipik_paths.controllers + '/main/main.html',
            controller: 'MainCtrl',
            resolve: {
                loadPlugin: function($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        [
                            {
                                serie: true,
                                files: [inipik_paths.asset+'/js/paging.min.js']
                            }
                        ]
                    );
                }
            }
        })
        .when('/:slug', {
            templateUrl: inipik_paths.controllers + '/article/article.html',
            controller: 'ArticleCtrl',
            resolve: {
                loadPlugin: function($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        [
                            {
                                serie: true,
                                name: '720kb.socialshare',
                                files: [inipik_paths.asset+'/js/angular-socialshare.min.js']
                            }
                        ]
                    );
                }
            }
        })
        .when('/category/:slug', {
            templateUrl: inipik_paths.controllers + '/category/category.html',
            controller: 'CategoryCtrl',
            resolve: {
                loadPlugin: function($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        [
                            {
                                serie: true,
                                files: [inipik_paths.asset+'/js/paging.min.js']
                            }
                        ]
                    );
                }
            }
        })
        .when('/tag/:slug', {
            templateUrl: inipik_paths.controllers + '/tag/tag.html',
            controller: 'TagCtrl',
            resolve: {
                loadPlugin: function($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        [
                            {
                                serie: true,
                                files: [inipik_paths.asset+'/js/paging.min.js']
                            }
                        ]
                    );
                }
            }
        })
        .when('/quote/:slug', {
            templateUrl: inipik_paths.controllers + '/quote/quote.html',
            controller: 'QuoteCtrl'
        })
        .when('/search/:keyword', {
            templateUrl: inipik_paths.controllers + '/search/search.html',
            controller: 'SearchCtrl',
            resolve: {
                loadPlugin: function($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        [
                            {
                                serie: true,
                                files: [inipik_paths.asset+'/js/paging.min.js']
                            }
                        ]
                    );
                }
            }
        })
        .otherwise('/')
    ;

    $locationProvider.html5Mode(true);
}

function run($rootScope, $location, $anchorScroll, $window) {
    $rootScope.inipikPaths  = {
        home: inipik_paths.home,
        controllers: inipik_paths.controllers,
        services: inipik_paths.services,
        directives: inipik_paths.directives,
        asset: inipik_paths.asset
    };
    
    $rootScope.socialMedia = {
        facebook: 'https://www.facebook.com/inipik',
        google_plus: 'https://plus.google.com/110023463140355886010/posts',
        twitter: 'https://twitter.com/inipik',
        instagram: 'https://www.instagram.com/inipik',
        youtube: 'https://www.youtube.com/channel/UC4FaLNFmptpQZLN7ydD1M7A'
    };

    $rootScope.$on('$routeChangeSuccess', function(angularEvent, current, previous) {
        $anchorScroll();
    });

    $rootScope.$on('$routeChangeError', function(angularEvent, current, previous, rejection) {
        $location.url('/');
    });

    // $rootScope.facebookAppId = '983634505010971';

    // FACEBOOK INIT
    $window.fbAsyncInit = function() {
        FB.init({ 
            appId: '983634505010971',
            status: true, 
            cookie: true, 
            xfbml: true,
            version: 'v2.5'
        });
    };

    // LOAD THE FACEBOOK JAVASCRIPT SDK
    (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) return;
         js          = d.createElement(s);
         js.id       = id;
         js.src      = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // // // LOAD THE TWITTER JAVASCRIPT SDK
    // !function(d, s, id) {
    //     var js, fjs = d.getElementsByTagName(s)[0],
    //         p       = /^http:/.test(d.location) ? 'http' : 'https';
    //     if (!d.getElementById(id)) {
    //         js      = d.createElement(s);
    //         js.id   = id;
    //         js.src  = p + '://platform.twitter.com/widgets.js';
    //         fjs.parentNode.insertBefore(js, fjs);
    //     }
    // }(document, 'script', 'twitter-wjs');
}

angular
    .module('inipik')
    .config(config)
    .run(run)
