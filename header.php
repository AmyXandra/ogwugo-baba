
<header class="header header-full-width opt-1">
    
    <div id="d-header" class="container-wapper">
        <div class="main-header main-menu-wapper">
            <div class="logo"><a href="index.html"><img src="images/ogwugo-logo.png" alt="img" style="width:145px;margin-left: 15px;"></a></div>
            <div class="box-header-nav">
                <ul class="main-menu clone-main-menu">
                        <li class="menu-item menu-item-has-children"><a href="index.html" class="kt-item-title" title="Home">Solutions</a>
                            <!-- <ul class="submenu">
                                <li class="menu-item"><a href="index.html">Homepage Multi Market</a></li>
                                <li class="menu-item"><a href="index2.html">Homepage Tech Full</a></li>
                                <li class="menu-item"><a href="index3.html">Homepage Tech Style 01</a></li>
                                <li class="menu-item"><a href="index4.html">Homepage Tech Style 02</a></li>
                                <li class="menu-item"><a href="index5.html">Homepage Shop</a></li>
                                <li class="menu-item"><a href="index6.html">Homepage Watch Black</a></li>
                            </ul> -->
                        </li>
                        <li class="menu-item menu-item-has-children"><a href="shop-categories.html" class="kt-item-title" title="Shop">Membership</a>
                            <!-- <div class="submenu megamenu">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="custommenu">
                                            <ul class="menu">
                                                <li class="menu-item"><a href="shop-categories.html">Shop Categories</a></li>
                                                <li class="menu-item"><a href="shop-grid-fullwidth.html">Shop Grid Fullwidth</a></li>
                                                <li class="menu-item"><a href="shop-list-fullwidth.html">Shop List Fullwidth</a></li>
                                                <li class="menu-item"><a href="shop-grid-3column.html">Shop Grid</a></li>
                                                <li class="menu-item"><a href="shop-list-3column.html">Shop List</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="custommenu">
                                            <ul class="menu">
                                                <li class="menu-item"><a href="shop-detail-fullwidth-specifications.html">Product Fullwidth Specificatiton</a></li>
                                                <li class="menu-item"><a href="shop-detail-fullwidth-customerreview.html">Product Fullwidth Review</a></li>
                                                <li class="menu-item"><a href="shop-detail-accessories.html">Product Detail Accessories</a></li>
                                                <li class="menu-item"><a href="shop-detail-fullwidth-accessories.html">Product Fullwidth Detail</a></li>
                                                <li class="menu-item"><a href="shop-detail-fullwidth-customerreview.html">Shop Review</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="custommenu">
                                            <ul class="menu">
                                                <li class="menu-item"><a href="wishlist.html">My WishList</a></li>
                                                <li class="menu-item"><a href="compare.html">Compare</a></li>
                                                <li class="menu-item"><a href="shopping-cart.html">Shopping Cart</a></li>
                                                <li class="menu-item"><a href="checkout.html">CheckOut</a></li>
                                                <li class="menu-item"><a href="order.html">Order Completed</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </li>
                        <li class="menu-item menu-item-has-children"><a href="index.html" class="kt-item-title" title="PAGES">Help</a>
                            <!-- <ul class="submenu">
                                <li class="menu-item"><a href="about-us.html">About Us</a></li>
                                <li class="menu-item"><a href="contact.html">Contact us</a></li>
                                <li class="menu-item"><a href="faq.html">FAQ</a></li>
                                <li class="menu-item"><a href="404.html">Error 404</a></li>
                                <li class="menu-item"><a href="comming-soon.html">Coming Soon</a></li>
                            </ul> -->
                        </li>
                        <li class="menu-item menu-item-has-children"><a href="index.html" class="kt-item-title" title="Blog">Community</a>
                            <!-- <ul class="submenu">
                                <li class="menu-item"><a href="blog-list.html">Blog List</a></li>
                                <li class="menu-item"><a href="blog-grid.html">Blog Grid</a></li>
                                <li class="menu-item"><a href="blog-full-width.html">Blog Full</a></li>
                                <li class="menu-item"><a href="blogpost.html">Blog Detail Siderbar</a></li>
                            </ul> -->
                        </li>
                        <!-- <li class="menu-item menu-item-has-children"><a href="index.html" class="kt-item-title" title="SPECIAL OFFER">SPECIAL OFFER</a>
                            <div class="submenu megamenu megamenu2">
                                <div class="banner-link"><a href="#"><img src="images/banner-menu1.jpg" alt="img"></a></div>
                                <div class="mega-product">
                                    <div class="banner-link margin-bottom-10"><a href="#"><img src="images/banner-menu2.jpg" alt="img"></a></div>
                                    <div class="banner-link margin-bottom-10"><a href="#"><img src="images/banner-menu4.jpg" alt="img"></a></div>
                                    <div class="banner-link"><a href="#"><img src="images/banner-menu3.jpg" alt="img"></a></div>
                                    <div class="banner-link"><a href="#"><img src="images/banner-menu5.jpg" alt="img"></a></div>
                                </div>
                            </div>
                        </li> -->
                    </ul>
            </div>
            <div class="register">Register / Sign in</div>
        </div>
        <div class="header-nav" style="padding: 0 35px;">
            <div class="vertical-menu">
                <div class="block-title" style="background-image: url('images/afro4.jpg'); padding:2px;">
                    <div style="background: linear-gradient(#fffffff7, #fffffff7);padding: 1px 12px;">
                        <i class="fa fa-bars" style=" color: #e23e1d;"></i>
                        <span class="text">all Categories</span>
                    </div>
                </div>
                <div class="vertical-menu-content">
                    
                    <ul class="vertical-menu-items">
                    <?php
                     $ch = curl_init();
                    $url = 'http://i.ogwugo.net/api/v2/app/categories/parent';
                    curl_setopt($ch, CURLOPT_URL, $url);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($ch,CURLOPT_HEADER,'Content-Type:application/json');
                    curl_setopt($ch,CURLOPT_HTTPHEADER, ['Authorization:Basic b2d3dWdvX3NlcnZpY2U6ZzU3ODI3NmRzZmZkYmE=']);
                    $res =  curl_exec($ch);
                     $new = json_decode($res,true);
                    //  print_r($new['data']);
                     foreach ($new['data'] as $key => $value) {
                       print_r("<li class='menu-item'><a href='#'><img src={$value['image']} />{$value['name']}</a></li>");
                     }
                    if(curl_errno($ch))
                    {
                        print curl_error($ch);
                    }
                    curl_close($ch);
                    ?>
                    </ul>
                </div>
            </div>
            <div class="header-search">
            <div style="background-image: url('images/afro4.jpg'); padding:2px;">
                <form class="form-search-header" style="background: linear-gradient(#fffffff7, #fffffff7);">
                    
                    <div class="categori-search">
                        <select class="show-categories">
                            <option value="products">Products</option>
                            <option value="sellers">Sellers</option>
                        </select>
                    </div>
                    <input type="text" placeholder="What do you need?">
                    
                    <button class="button-search">SEARCH</button>
                </form>
            </div>

            </div>
            <div class="header-control">
                <!-- <div class="transport"><span class="ti-truck"></span>Track Your Order</div> -->
                <div class="header-cart">
                    
                    
                    <div class="header-mini-cart">
                        <a href="#">
                            <span class="icon icon_profile"></span>
                            <span class="count">2</span>
                        </a>
                        <div class="mini-cart-content">
                            <ul class="items">
                                <li class="item">
                                    Hi Amy 
                                    <span class="link"><a href="login.php">Sign In</a></span>
                                </li>
                                <li class="item header-title">
                                    My Ogwugo
                                </li>
                                <li class="item">
                                    My Orders<span class="count-inner">2</span>
                                </li>
                                <li class="item">
                                    My Messages
                                </li>
                                <li class="item">
                                    My Account
                                </li>
                                <hr style="margin:5px 0">
                                <li class="item">
                                    Submit enquiry <span style="display:block;font-size:11px;color:grey;line-height: 1.2em;">Get replied within 24 hours</span>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    <div class="header-mini-cart">
                        <a href="wishlist.php">
                            <span class="icon icon_heart_alt"></span>
                            <span class="count">1</span>
                        </a>
                        <div class="mini-cart-content">
                            <ul class="items">
                                <li class="item">
                                    <button style="    width: 100%;
    background: #e23e1d;
    padding: 2px 20px;
    border-radius: 3px;
    font-size: 12px;">View all items</button>
                                </li>
                                
                                <hr style="margin:12px 0">
                                <li class="item">
                                    Sign in to manage and view all items
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <a class="menu-bar mobile-navigation" href="#">
                    <span class="icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
            </div>
        </div>
    </div>
    <div class="m-header">
        <div style="box-shadow: 2px 1px 8px;">
            <!-- <nav class="navbar navbar-inverse"style="padding: 10px;">
                <div class="container-fluid">
                    <ul class="nav navbar-nav" style="padding: 10px 0;">
                        <li>
                            <a class="menu-bar mobile-navigation" href="#">
                            <span class="icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            </a> 
                        </li>
                        <li><a href="index.html"><img src="images/ogwugo-logo.png" alt="img" style="width:145px;margin-left: 15px;"></a></li>
                        <li><span class="icon icon_profile"></span></li>
                        <li><span class="icon icon_cart"></span></li>
                    </ul>
                    <div style="background-image: url('images/afro4.jpg'); padding:4px;">
                        <form class="form-search-header" style="background: linear-gradient(#fffffff7, #fffffff7);">
                            
                            <div class="categori-search">
                                <select class="show-categories">
                                    <option value="products">Products</option>
                                    <option value="sellers">Sellers</option>
                                </select>
                            </div>
                            <input type="text" placeholder="What do you need?">
                            
                            <button class="button-search">SEARCH</button>
                        </form>
                    </div>
                </div>
            </nav> -->
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <!-- <div class="navbar-header">
                    <a class="navbar-brand" href="#">WebSiteName</a>
                    </div> -->
                    <ul class="nav navbar-nav" style="padding: 0px; padding-top: 8px; list-style:none;">
                        <li class="active" style="float: left;">
                            <a class="menu-bar mobile-navigation" href="#">
                                <span class="icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </a> 
                        </li>
                    <li style="float: left;"><a href="index.html"><img src="images/ogwugo-logo.png" alt="img" style="width: 112px;margin-left: 55px;padding-top: 6px;"></a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right" style="list-style:none;">
                        <li style="float: right;"><span class="icon icon_cart" style="font-size: 20px; margin-right: 16px;"></span></li>
                        <li style="float: right;"><span class="icon icon_profile" style="font-size: 22px; margin-right: 10px;"></span></li>
                    </ul>
                </div>
            </nav>
            <div style="padding-bottom:10px; margin:0 10px">
                <div style="background-image: url('images/afro4.jpg'); padding:4px; ">
                    <form class="form-search-header" style="background: linear-gradient(#fffffff7, #fffffff7);">
                        
                        <div class="categori-search">
                            <select class="show-categories">
                                <option value="products">Products</option>
                                <option value="sellers">Sellers</option>
                            </select>
                        </div>
                        <input type="text" placeholder="What do you need?">
                        
                        <button class="button-search">SEARCH</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</header>
