<?php

function init_inipik() {
    /* CSS */
    wp_enqueue_style('wp-style', get_stylesheet_uri());

    /* NORMALIZE */
    wp_enqueue_style('normalize-style', get_template_directory_uri() . '/asset/css/normalize.css');

    /* FONT AWESOME */
    wp_enqueue_style('font-awesome', get_template_directory_uri() . '/asset/css/font-awesome.min.css');

    /* BOOTSTRAP */
    wp_enqueue_style('bootstrap-style', get_template_directory_uri() . '/asset/bootstrap/css/bootstrap.min.css');
    wp_enqueue_script('bootstrap-script', get_template_directory_uri() . '/asset/bootstrap/js/bootstrap.min.js', array('jquery'), null, true);

    /* UNDERSCORE */
    wp_enqueue_script('underscore-js', get_template_directory_uri() . '/asset/js/underscore.js', array(), null, true);

    /* MOMENT */
    wp_enqueue_script('momentjs', get_template_directory_uri() . '/asset/js/moment.js', array(), null, true);
    wp_enqueue_script('moment-twitter', get_template_directory_uri() . '/asset/js/moment-twitter.js', array('momentjs'), null, true);

    /* ANGULAR */
    wp_enqueue_script('angularjs', get_template_directory_uri() . '/asset/angular/angular.min.js', array(), null, true);
    wp_enqueue_script('angularjs-route', get_template_directory_uri() . '/asset/angular/angular-route.min.js', array(), null, true);
    wp_enqueue_script('angularjs-sanitize', get_template_directory_uri() . '/asset/angular/angular-sanitize.min.js', array(), null, true);
    wp_enqueue_script('angularjs-ocLazyLoad', get_template_directory_uri() . '/asset/js/ocLazyLoad.min.js', array(), null, true);

    /* CHARTJS */
    wp_enqueue_script('chart-js', get_template_directory_uri() . '/asset/js/Chart.min.js', array(), null, true);
    wp_enqueue_style('angularjs-chart-style', get_template_directory_uri() . '/asset/css/angular-chart.min.css');
    wp_enqueue_script('angularjs-chart-js', get_template_directory_uri() . '/asset/js/angular-chart.min.js', array(), null, true);
    
    /**********************
     *
     * APP
     *
     **********************/

    /* STYLE */
    wp_enqueue_style('app-style', get_template_directory_uri() . '/asset/css/app.css');

    /* SCRIPT */
    wp_enqueue_script('inipik-app', get_template_directory_uri() . '/app/inipik.js', array('angularjs', 'angularjs-route', 'angularjs-sanitize'), null, true);
    wp_enqueue_script('inipik-config', get_template_directory_uri() . '/app/config.js', array('inipik-app'), null, true);
    wp_enqueue_script('inipik-filters', get_template_directory_uri() . '/app/filters.js', array('inipik-config'), null, true);
    wp_enqueue_script('inipik-services', get_template_directory_uri() . '/app/services.js', array('inipik-config'), null, true);
    wp_enqueue_script('inipik-directives', get_template_directory_uri() . '/app/directives.js', array('inipik-config'), null, true);
    wp_enqueue_script('inipik-ctrl-main', get_template_directory_uri() . '/app/controllers/main/main.js', array('inipik-config'), null, true);
    wp_enqueue_script('inipik-ctrl-article', get_template_directory_uri() . '/app/controllers/article/article.js', array('inipik-config'), null, true);
    wp_enqueue_script('inipik-ctrl-quote', get_template_directory_uri() . '/app/controllers/quote/quote.js', array('inipik-config'), null, true);
    wp_enqueue_script('inipik-ctrl-category', get_template_directory_uri() . '/app/controllers/category/category.js', array('inipik-config'), null, true);
    wp_enqueue_script('inipik-ctrl-tag', get_template_directory_uri() . '/app/controllers/tag/tag.js', array('inipik-config'), null, true);
    wp_enqueue_script('inipik-ctrl-search', get_template_directory_uri() . '/app/controllers/search/search.js', array('inipik-config'), null, true);
    
    /* PARAM */
    wp_localize_script(
        'inipik-app',
        'inipik_paths',
        array(
            'home' => trailingslashit(get_home_url()),
            'controllers' => trailingslashit(get_template_directory_uri()) . 'app/controllers',
            'services' => trailingslashit(get_template_directory_uri()) . 'app/services',
            'directives' => trailingslashit(get_template_directory_uri()) . 'app/directives',
            'asset' => trailingslashit(get_template_directory_uri()) . 'asset'
        )
    );
}
add_action('wp_enqueue_scripts', 'init_inipik');

/* FEATURED IMAGE */
add_theme_support('post-thumbnails');

/* WIDGET */
function sidebar_widgets() {
    register_sidebar( array(
        'name'          => 'Sidebar',
        'id'            => 'inipik_sidebar',
        'before_widget' => '<div>',
        'after_widget'  => '</div>',
        // 'before_title'  => '<h2 class="rounded">',
        // 'after_title'   => '</h2>',
    ) );
}
add_action( 'widgets_init', 'sidebar_widgets' );


?>