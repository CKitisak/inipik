function searchForm($rootScope, $timeout, $location, wpApi) {
    return {
        restrict: 'E',
        replace: true,
        template:   '<div class="input-group">'+
                        '<input type="text" class="form-control" placeholder="ค้นหา..." ng-model="searchText">'+
                        '<span class="input-group-btn">'+
                            '<button class="btn btn-default" id="filter-btn"><i class="fa fa-search"></i></button>'+
                        '</span>'+
                    '</div>',
        link: function(scope, element, attrs) {
            var timer;
            scope.$watch('searchText', function(text) {
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    if (text != null && text != undefined && text != '') {
                        $location.url('/search/'+scope.searchText);
                    }
                }, 1000);
            });

            element.find('#filter-btn').bind('click', function() {
                if (scope.searchText != null && scope.searchText != undefined && scope.searchText != '') {
                    $location.url('/search/'+scope.searchText);
                } else {
                    $location.url('/');
                }
            });
        }
    };
}

function inipikQuote(wpApi) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="m-t-md">'+
                    '<h2>คำคมนักลงทุน</h2>'+
                    '<a ng-href="quote/all" class="">'+
                        '<img class="img-responsive" ng-src="{{quotes.posts[0].thumbnail_images.full.url}}" />'+
                        '<p>{{quotes.posts[0].title_plain}}</p>'+
                    '</a>'+
                    '</div>',
        link: function(scope, element, attrs) {
            wpApi.getPostCategory('quote').then(
                function(res) {
                    scope.quotes = res;
                },
                function(err) {
                    console.log(err);
                }
            );
        }
    };
}

function inipikSidebar(wpApi) {
    return {
        restrict: 'E',
        replace: true,
        template:   '<div class="m-t-lg">'+
                        '<div ng-repeat="w in widgets">'+
                            '<div compile-html="w.widget"></div>'+
                        '</div>'+
                    '</div>',
        link: function(scope, element, attrs) {
            wpApi.getSidebar('inipik_sidebar').then(
                function(res) {
                    scope.widgets = res.widgets;
                },
                function(err) {
                    console.log(err);
                }
            );
        }
    };
}

function compileHtml($compile) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.compileHtml, function(html) {
                element.html(html);
                $compile(element.contents())(scope);
            });
        }
    }
}

function goToTop($anchorScroll, $window) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="m-r-md"><button class="btn bg-medium-blue pull-right"><i class="fa fa-chevron-up"></i></button></div>',
        link: function(scope, element, attrs) {
            element.hide();
            element.css('position', 'fixed').css('bottom', '52px').css('right', '30px');
            element.bind('click', function() {
                $anchorScroll();
            });
            
            angular.element($window).bind('scroll', function() {
                if (this.pageYOffset >= 100) {
                    element.show();
                } else {
                    element.hide();
                }
                scope.$apply();
            });
        }
    }
}

function inipikCategories(wpApi, _) {
    return {
        restrict: 'E',
        replace: true,
        // template:   '<div class="m-t-md">'+
        //                 '<h2>หมวดหมู่</h2>'+
        //                 '<div ng-repeat="c in categories">'+
        //                     '<a ng-if="c.title != \'Quote\'" ng-href="category/{{c.slug}}" class="btn bg-blue pull-left m-r-xs m-t-xs">'+
        //                         '<i class="fa fa-folder"></i> <span ng-bind-html="c.title"></span>'+
        //                     '</a>'+
        //                 '</div>'+
        //                 '<div class="clearfix"></div>'+
        //             '</div>',
        template:   '<div class="m-t-md">'+
                        // '<h2>หมวดหมู่</h2>'+
                        '<h2>Articles</h2>'+
                        '<ul style="padding:0 15px;">'+
                            '<li ng-repeat="c in categories" style="list-style: none;">'+
                                '<a ng-href="category/{{c.slug}}" style="font-size:2em;text-decoration:none;">'+
                                    '<i class="fa" ng-class="categoryIcon(c.title)"></i> '+
                                    '<span ng-bind-html="c.title"></span>'+
                                '</a>'+
                            '</li>'+
                        '</ul>'+
                    '</div>',
        link: function(scope, element, attrs) {
            scope.categoryIcon = function(category) {
                if (category == 'บทความหุ้น') {
                    return 'fa-line-chart';
                } else if (category == 'ข่าวหุ้น') {
                    return 'fa-newspaper-o';
                } else {
                    return '';
                }
            };
            wpApi.getCategory().then(
                function(res) {
                    scope.categories = _.sortBy(res.categories, 'post_count').reverse();
                },
                function(err) {
                    console.log(err);
                }
            );
        }
    };
}

function inipikTags(wpApi, _) {
    return {
        restrict: 'E',
        replace: true,
        template:   '<div class="m-t-md">'+
                        '<h2>แท็คยอดนิยม</h2>'+
                        '<div ng-repeat="t in tags | limitTo:30">'+
                            '<a ng-href="tag/{{t.slug}}" class="inipik-tag">'+
                                '<i class="fa fa-tag"></i> <span ng-bind-html="t.title"></span>'+
                            '</a>'+
                        '</div>'+
                        '<div class="clearfix"></div>'+
                    '</div>',
        link: function(scope, element, attrs) {
            wpApi.getTag().then(
                function(res) {
                    scope.tags = _.sortBy(res.tags, 'post_count').reverse();
                },
                function(err) {
                    console.log(err);
                }
            );
        }
    };
}

function adsbumq() {
    return {
        restrict: 'C',
        link: function(scope, element, attrs) {
            var table = element.find('table');
            table.css('width', '100%');
            var iframe = element.find('iframe');
            iframe.css('width', '100%');
        }
    };
}

angular
    .module('inipik')
    .directive('searchForm', searchForm)
    .directive('inipikCategories', inipikCategories)
    .directive('inipikTags', inipikTags)
    .directive('inipikQuote', inipikQuote)
    .directive('inipikSidebar', inipikSidebar)
    .directive('compileHtml', compileHtml)
    .directive('goToTop', goToTop)
    .directive('adsbumq', adsbumq)
