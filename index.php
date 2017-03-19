<!DOCTYPE html>
<html lang="en" ng-app="inipik">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php bloginfo('name'); ?></title>
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Kanit:300&subset=thai' rel='stylesheet' type='text/css'>
    <base href="/">
    <?php wp_head(); ?>
    <!--81477223-->
</head>
<body>
    <div ng-include="inipikPaths.controllers+'/view/header.html'"></div>
    
    <div class="container">
        <div id="gads" class="row">
            <div class="col-sm-12">
                <!-- <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->
                <!-- main-top -->
                <!-- <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-2765587997766388"
                     data-ad-slot="9290761550"
                     data-ad-format="auto"></ins> -->
                <script>
                // (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </div>

        <div id="main" class="row">
            <!-- POSTS -->
            <div id="content" class="col-sm-12 col-md-8">
                <img ng-src="{{inipikPaths.asset}}/image/inipik_cover.png" width="100%">
                <!-- <div class="adsbumq">
                    <script type="text/javascript">
                        ad_partner="20160211801394398";
                        ad_website="20160211283421098";
                        ad_zone="20160219499432138";
                        ad_format="20080422986572890";
                        ad_type="tm";
                        ad_color_border="548E9B";
                        ad_color_bg="FFFFFF";
                        ad_background="";
                        ad_color_title="0000CC";
                        ad_color_text="000000";
                        ad_color_url="22608F";
                    </script>
                    <script type="text/javascript" src="//ads.bumq.com/ad_show2.js"></script>
                </div> -->

                <ng-view></ng-view>
            </div>

            <!-- SIDEBAR -->
            <div id="sidebar" class="col-sm-12 col-md-4">
                <div class="row">
                    <div class="col-sm-12">
                        <!-- <div class="adsbumq">
                            <script type="text/javascript">
                                ad_partner="20160211801394398";
                                ad_website="20160211283421098";
                                ad_zone="20160211844332097";
                                ad_format="200804224857336280";
                                ad_type="tm";
                                ad_color_border="548E9B";
                                ad_color_bg="FFFFFF";
                                ad_background="";
                                ad_color_title="0000CC";
                                ad_color_text="000000";
                                ad_color_url="22608F";
                            </script>
                            <script type="text/javascript" src="//ads.bumq.com/ad_show2.js"></script>
                        </div> -->
                    </div>
                </div>
                <div ng-include="inipikPaths.controllers+'/view/sidebar.html'"></div>
            </div>
        </div>
    </div>
    
    <div ng-include="inipikPaths.controllers+'/view/footer.html'"></div>
    
    <?php wp_footer(); ?>
</body>
</html>