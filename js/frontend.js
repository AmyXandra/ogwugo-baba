(function ($) {
    var KUTETHEMES_FRAMEWORK = {
        init: function () {
            this.smarket_innit_carousel();
            this.smarket_hover_product_item();
            this.update_back_to_top();
            this.smarket_back_top_top();
            this.smarket_slider_range_price();
            this.smarket_slick_single_product();
            this.smarket_countdown();
            this.smarket_quantily();
            this.smarket_better_equal_elems();
            this.smarket_remove_class_review();
            this.smarket_toggle_animation();
            this.smarket_tab_effect();
            this.smarket_resizeMegamenu();
            this.smarket_clone_menu();
            this.smarket_sticky_menu();
            // this.smarket_auto_tab_slide();
        },
        onReady: function(){
            this.smarket_remove_class_review();
            this.smarket_tab_effect();
            this.smarket_get_scrollbar_width();
            this.smarket_category_vertical();
            this.smarket_auto_tab();
            this.smarket_popup_newsletter();
        },
        onResize: function () {
            this.smarket_hover_product_item();
            this.smarket_better_equal_elems();
            this.smarket_remove_class_review();
            this.smarket_category_vertical();
            this.smarket_resizeMegamenu();
            this.smarket_sticky_menu();
            this.smarket_auto_tab();
            // this.smarket_auto_tab_slide();
        },
        onScroll: function(){
            this.update_back_to_top();
            this.smarket_sticky_menu();
        },
        onChange: function(){

        },
        smarket_innit_carousel: function(){
            $(".owl-carousel").each(function(index, el) {
                var config = $(this).data();
                config.navText = ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'];
                var animateOut = $(this).data('animateout');
                var animateIn  = $(this).data('animatein');
                var slidespeed = $(this).data('slidespeed');
                if(typeof animateOut != 'undefined' ){
                    config.animateOut = animateOut;
                }
                if(typeof animateIn != 'undefined' ){
                    config.animateIn = animateIn;
                }
                if(typeof (slidespeed) != 'undefined' ){
                    config.smartSpeed = slidespeed;
                }


                if ( $('body').hasClass('rtl') ) {
                    config.rtl = true;
                }

                var owl = $(this);
                owl.on('initialized.owl.carousel',function(event){
                    var total_active = owl.find('.owl-item.active').length;
                    var i            = 0;
                    owl.find('.owl-item').removeClass('item-first item-last');
                    setTimeout(function(){
                        owl.find('.owl-item.active').each(function () {
                            i++;
                            if (i == 1) {
                                $(this).addClass('item-first');
                            }
                            if (i == total_active) {
                                $(this).addClass('item-last');
                            }
                        });

                    }, 100);
                })
                owl.on('refreshed.owl.carousel',function(event){
                    var total_active = owl.find('.owl-item.active').length;
                    var i            = 0;
                    owl.find('.owl-item').removeClass('item-first item-last');
                    setTimeout(function(){
                        owl.find('.owl-item.active').each(function () {
                            i++;
                            if (i == 1) {
                                $(this).addClass('item-first');
                            }
                            if (i == total_active) {
                                $(this).addClass('item-last');
                            }
                        });

                    }, 100);
                })
                owl.on('change.owl.carousel',function(event){
                    var total_active = owl.find('.owl-item.active').length;
                    var i            = 0;
                    owl.find('.owl-item').removeClass('item-first item-last');
                    setTimeout(function(){
                        owl.find('.owl-item.active').each(function () {
                            i++;
                            if (i == 1) {
                                $(this).addClass('item-first');
                            }
                            if (i == total_active) {
                                $(this).addClass('item-last');
                            }
                        });

                    }, 100);
                    owl.addClass('owl-changed');
                    setTimeout(function () {
                        owl.removeClass('owl-changed');
                    },config.smartSpeed)
                })
                owl.on('drag.owl.carousel',function(event){
                    owl.addClass('owl-changed');
                    setTimeout(function () {
                        owl.removeClass('owl-changed');
                    },config.smartSpeed)
                })

                owl.owlCarousel(config);

            });

        },
        // PRODUCT ITEM HOVER
        smarket_auto_tab_slide: function () {
            var _winw = $(window).innerWidth();
            if ( _winw < 768 ) {
                $(function() {
                  var boxes = $(".tab-auto"),
                    tabs = $(".tab-panel");

                  function showTabContent() {
                    return boxes.queue("box-tab", $.map(boxes, function(el, curr) {
                      return function(next) {
                        boxes.hide() // hide `.box` elements
                          .add(tabs) // add `.tabs` to current selector
                          .removeClass("active") // remove `.current` class
                          .filter(el) // current `.box` element
                          .fadeIn(150) // fade in current `.box` element
                          .add(tabs.eq(curr)) // add `.tabs` at index `curr` to selector
                          .addClass("active") // add `current` `className` to selector
                          .end() // end current selection at `.boxes` selector
                          .delay(5000, "content") // set, delay `"content"` queue 5000ms
                          .dequeue("content") // dequeue `"content"` queue
                          .promise("content") // at completed promise of `"content"` queue
                          .then(next) // call next function in `"tabs"` queue
                      }
                    }))
                    .dequeue("box-tab") // dequeue `"tabs"` queue
                    .promise("box-tab") // at completed promise of `"tabs"` queue
                    .then(showTabContent); // call `showTabContent` recursively
                  }
                  showTabContent();
                });  
            }
        },
        // PRODUCT ITEM HOVER
        smarket_hover_product_item: function () {
            var _winw = $(window).innerWidth();
            if ( _winw > 1024 ) {
                $('.product-item').hover(
                    function () {
                        $(this).closest('.owl-stage-outer').css({
                            'padding': '0px 3px 100px 3px',
                            'margin': '0px -3px -100px -3px',
                        });
                    }, function () {
                        $(this).closest('.owl-stage-outer').css({
                            'padding': '0',
                            'margin': '0',
                        });
                    }
                );
                $('.product-item.style4').hover(
                    function () {
                        $(this).closest('.owl-stage-outer').css({
                            'padding': '0',
                            'margin': '0',
                        });
                    }, function () {
                        $(this).closest('.owl-stage-outer').css({
                            'padding': '0',
                            'margin': '0',
                        });
                    }
                );
            }
        },
        // BACK TO TOP
        smarket_back_top_top: function () {
            $('.backtotop').click(function(){
                $('html,body').animate({scrollTop : 0},800);
                return false;
            })
        },
        update_back_to_top:function () {
            if($(window).scrollTop() > 180) {
                $('.backtotop').show(300);
            } else {
                $('.backtotop').hide(300);
            }
        },
        smarket_slider_range_price:function () {
            $('.slider-range-price').each(function(){
                var min             = parseInt($(this).data('min'));
                var max             = parseInt($(this).data('max'));
                var unit            = $(this).data('unit');
                var value_min       = parseInt($(this).data('value-min'));
                var value_max       = parseInt($(this).data('value-max'));
                var label_reasult   = $(this).data('label-reasult');
                var t               = $(this);
                $( this ).slider({
                    range: true,
                    min: min,
                    max: max,
                    values: [ value_min, value_max ],
                    slide: function( event, ui ) {
                        var result = label_reasult +" <span>"+ unit + ui.values[ 0 ] +' </span> - <span> '+ unit +ui.values[ 1 ]+'</span>';
                        t.closest('.price-slider-wrapper').find('.price-slider-amount').html(result);
                    }
                });
            });
        },
        smarket_slick_single_product:function () {
            if ( $('body').hasClass('rtl') ) {
                // $('.slider-for').slick({
                //     rtl: true
                // });
                // $('.slider-nav').slick({
                //     rtl: true,
                //     slidesToShow: 3,
                // });
                if ($('.product-single-media.thumb-vertical').length > 0) {
                    $('.slider-for').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: true,
                        rtl: false,
                        asNavFor: '.slider-nav'
                    });
                    $('.slider-nav').slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for',
                        dots: true,
                        focusOnSelect: true,
                        vertical: true,
                        rtl: false,
                        responsive: [
                            {
                                breakpoint: 1200,
                                settings: {
                                    vertical: false,
                                    rtl: true
                                }
                            }
                        ]
                    });
                }
                if ($('.product-single-media.thumb-horizontal').length > 0) {
                    $('.slider-for').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: true,
                        rtl: true,
                        asNavFor: '.slider-nav'
                    });
                    $('.slider-nav').slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for',
                        dots: true,
                        rtl: true,
                        focusOnSelect: true
                    });
                }
            } else{
                if ($('.product-single-media.thumb-vertical').length > 0){
                    $('.slider-for').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: true,
                        asNavFor: '.slider-nav'
                    });
                    $('.slider-nav').slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for',
                        dots: true,
                        focusOnSelect: true,
                        vertical:true,
                        responsive: [
                            {
                                breakpoint: 1200,
                                settings: {
                                    vertical: false
                                }
                            }
                        ]
                    });
                }
                if ($('.product-single-media.thumb-horizontal').length > 0){
                    $('.slider-for').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: true,
                        asNavFor: '.slider-nav'
                    });
                    $('.slider-nav').slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for',
                        dots: true,
                        focusOnSelect: true
                    });
                }
            }
        },
        // COUNTDOWN
        smarket_countdown:function() {
            if ($('.kt-countdown').length > 0) {
                var labels = ['Years', 'Months', 'Weeks', 'Days', 'Hrs', 'Mins', 'Secs'];
                var layout = '<span class="box-count day"><span class="number">{dnn}</span> <span class="text">Days</span></span><span class="dot">:</span><span class="box-count hrs"><span class="number">{hnn}</span> <span class="text">Hours</span></span><span class="dot">:</span><span class="box-count min"><span class="number">{mnn}</span> <span class="text">Mins</span></span><span class="dot">:</span><span class="box-count secs"><span class="number">{snn}</span> <span class="text">Secs</span></span>';
                $('.kt-countdown').each(function() {
                    var austDay = new Date($(this).data('y'), $(this).data('m') - 1, $(this).data('d'), $(this).data('h'), $(this).data('i'), $(this).data('s'));
                    $(this).countdown({
                        until: austDay,
                        labels: labels,
                        layout: layout
                    });
                });
            }
        },
        smarket_quantily:function () {
            $(document).on('click', '.quantity .plus, .quantity .minus', function (e) {

                // Get values
                var $qty = $(this).closest('.quantity').find('.qty'),
                    currentVal = parseFloat($qty.val()),
                    max = parseFloat($qty.attr('max')),
                    min = parseFloat($qty.attr('min')),
                    step = $qty.attr('step');

                // Format values
                if (!currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 0;
                if (max === '' || max === 'NaN') max = '';
                if (min === '' || min === 'NaN') min = 0;
                if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = 1;

                // Change the value
                if ($(this).is('.plus')) {

                    if (max && ( max == currentVal || currentVal > max )) {
                        $qty.val(max);
                    } else {
                        $qty.val(currentVal + parseFloat(step));
                    }

                } else {

                    if (min && ( min == currentVal || currentVal < min )) {
                        $qty.val(min);
                    } else if (currentVal > 0) {
                        $qty.val(currentVal - parseFloat(step));
                    }

                }

                // Trigger change event
                $qty.trigger('change');

                e.preventDefault();

            });
        },
        smarket_better_equal_elems: function () {
            setTimeout(function () {
                $('.equal-container').each(function () {
                    var $this = $(this);
                    if ( $this.find('.equal-elem').length ) {
                        $this.find('.equal-elem').css({
                            'height': 'auto'
                        });
                        var elem_height = 0;
                        $this.find('.equal-elem').each(function () {
                            var this_elem_h = $(this).height();
                            if ( elem_height < this_elem_h ) {
                                elem_height = this_elem_h;
                            }
                        });
                        $this.find('.equal-elem').height(elem_height);
                    }
                });
            }, 600);
        },
        smarket_remove_class_review: function () {
            var _winw = $(window).innerWidth();
            if ( _winw < 991 ) {
                $('.product-content-review .box-content').removeClass('equal-container').find('.equal-elem').removeAttr('style');
            }
            else {
                $('.product-content-review .box-content').addClass('equal-container');
            }
        },
        smarket_toggle_animation: function () {
            $(".box-content").each(function() {
                var main = $(this);
                main.children('.items-parent').each(function() {
                    var curent = $(this).find('.children');
                    $(this).children('.arrow-items').on('click', function() {
                        $(this).parent().toggleClass('show-sub');
                        $(this).parent().children('.children').slideToggle(400);
                        main.find('.children').not(curent).slideUp(400);
                        main.find('.items-parent').not($(this).parent()).removeClass('show-sub');
                    });
                    var next_curent = $(this).find('.children');
                    next_curent.children('.items-parent').each(function() {
                        var child_curent = $(this).find('.children');
                        $(this).children('.arrow-items').on('click', function() {
                            $(this).parent().toggleClass('show-sub');
                            $(this).parent().parent().find('.cat-parent').not($(this).parent()).removeClass('show-sub');
                            $(this).parent().parent().find('.children').not(child_curent).slideUp(400);
                            $(this).parent().children('.children').slideToggle(400);
                        })
                    });
                });
            });
        },
        smarket_category_vertical: function () {
            var window_size = jQuery('body').innerWidth();
            window_size += KUTETHEMES_FRAMEWORK.smarket_get_scrollbar_width();
            $(".vertical-menu .block-title").on( 'click', function() {
                $( this ).toggleClass('active');
                $( this ).parent().toggleClass('has-open');
                return false;
            });
            if (window_size < 1621) {
                $(".vertical-menu").addClass('has-close');
                $(".vertical-menu").removeClass('has-open');
            }else {
                $(".vertical-menu").removeClass('has-close');
            }
            $('.show-categories').chosen();
        },
        smarket_tab_effect: function () {
            // effect click
            $(document).on('click','.kt-tab a[data-toggle="pill"]',function(){
                var item = '.product-item';
                var tab_id = $(this).attr('href');
                var tab_animated = $(this).data('animated');
                tab_animated = ( tab_animated == undefined ) ? 'fadeInUp' : tab_animated;

                if( $(tab_id).find('.owl-carousel').length > 0 ){
                    item = '.owl-item.active';
                }
                $(tab_id).find(item).each(function(i){
                    var t = $(this);
                    var style = $(this).attr("style");
                    style = ( style == undefined ) ? '' : style;
                    var delay  = i * 200;
                    t.attr("style", style +
                        ";-webkit-animation-delay:" + delay + "ms;"
                        + "-moz-animation-delay:" + delay + "ms;"
                        + "-o-animation-delay:" + delay + "ms;"
                        + "animation-delay:" + delay + "ms;"
                    ).addClass(tab_animated+' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        t.removeClass(tab_animated+' animated');
                        t.attr("style", style);
                    });
                })
            })
        },
        smarket_auto_tab:function() {
            // var tabs = $('#tab-slider a');
            // var counter = 0;
            // window.setInterval(activateTab, 5000);
            // function activateTab(){
            //     // remove active class from all the tabs
            //     tabs.removeClass('active');
            //     var currentLink = tabs[counter];
            //
            //     $('.tab-panel').removeClass('.active').hide();
            //     currentLink.addClass('active');
            //     $(currentLink.attr('href')).addClass('active').show();
            //     if(counter  < tabs.length)
            //         counter= counter + 1;
            //     else
            //         counter = 0;
            // }
            // var _winw = $(window).innerWidth();
            // if ( _winw < 640 ) {
            //     $('.box-slider .tab-panel').removeClass('equal-container').find('.equal-elem').removeAttr('style');
            // }
            // else {
            //     $('.product-content-review .box-content').addClass('equal-container');
            // }
        },
        // Resize mega menu
        smarket_resizeMegamenu:function() {
            var window_size = jQuery('body').innerWidth();
            window_size += KUTETHEMES_FRAMEWORK.smarket_get_scrollbar_width();
            if (window_size > 1024) {
                if ($('.main-menu-wapper').length > 0) {
                    var container = $('.main-menu-wapper');
                    if (container != 'undefined') {
                        var container_width = 0;
                        container_width = container.innerWidth();
                        var container_offset = container.offset();
                        setTimeout(function() {
                            $('.box-header-nav .menu-item-has-children').each(function(index, element) {
                                $(element).children('.megamenu').css({
                                    'width': container_width + 'px'
                                });
                                var sub_menu_width = $(element).children('.megamenu').outerWidth();
                                var item_width = $(element).outerWidth();
                                $(element).children('.megamenu').css({
                                    'left': '-' + (sub_menu_width / 2 - item_width / 2) + 'px'
                                });
                                var container_left = container_offset.left;
                                var container_right = (container_left + container_width);
                                var item_left = $(element).offset().left;
                                var overflow_left = (sub_menu_width / 2 > (item_left - container_left));
                                var overflow_right = ((sub_menu_width / 2 + item_left) > container_right);
                                if (overflow_left) {
                                    var left = (item_left - container_left);
                                    $(element).children('.megamenu').css({
                                        'left': -left + 'px'
                                    });
                                }
                                if (overflow_right && !overflow_left) {
                                    var left = (item_left - container_left);
                                    left = left - (container_width - sub_menu_width);
                                    $(element).children('.megamenu').css({
                                        'left': -left + 'px'
                                    });
                                }
                            })
                        }, 100);
                    }
                }
            }
        },
        smarket_get_scrollbar_width:function() {
            var $inner = jQuery('<div style="width: 100%; height:200px;">test</div>'),
                $outer = jQuery('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append($inner),
                inner = $inner[0],
                outer = $outer[0];
            jQuery('body').append(outer);
            var width1 = inner.offsetWidth;
            $outer.css('overflow', 'scroll');
            var width2 = outer.clientWidth;
            $outer.remove();
            return (width1 - width2);
        },
        smarket_clone_menu: function() {
            var window_size = jQuery('body').innerWidth();
            window_size += KUTETHEMES_FRAMEWORK.smarket_get_scrollbar_width();
            if ( window_size > 1024 ) {
                if (!$('.header .sticky').length) {
                    $('.header').prepend('<div class="sticky"><div class="container-wapper"><div class="row"><div class="col-md-3 col-lg-2"><div class="logo-prepend"></div></div><div class="col-md-7 col-lg-7"><div class="main-menu-prepend"></div></div><div class="col-md-2 col-lg-3"><div class="header-control-prepend"></div></div></div></div></div>');
                }
                $('.header').find('.logo').clone().appendTo('.header .logo-prepend');
                $('.header').find('.box-header-nav').clone().appendTo('.header .main-menu-prepend');
                $('.header').find('.header-control').clone().appendTo('.header .header-control-prepend');
            }
        },
        smarket_sticky_menu: function(){
            var window_size = jQuery('body').innerWidth();
            window_size += KUTETHEMES_FRAMEWORK.smarket_get_scrollbar_width();
            if ( window_size > 1024 ) {
                var offset = $('.main-header').offset();
                if ($(window).scrollTop() > ( offset.top + 150 )) {
                    $('.header .sticky').addClass('is-sticky');
                }
                else {
                    $('.header .sticky').removeClass('is-sticky');
                }
            }
        },
        smarket_popup_newsletter: function () {
            if($('#popup-newsletter').length >0){
                setTimeout(function() {
                    $('#popup-newsletter').modal({
                        keyboard: false
                    })
                }, 7000);
            }
        }
    }
    /* ---------------------------------------------
     Scripts change
     --------------------------------------------- */
    $(window).on("change", function () {
        KUTETHEMES_FRAMEWORK.onChange();
    });
    /* ---------------------------------------------
     Scripts resize
     --------------------------------------------- */
    $(window).on("resize", function () {
        KUTETHEMES_FRAMEWORK.onResize();
    });
    /* ---------------------------------------------
     Scripts scroll
     --------------------------------------------- */
    $(window).scroll(function () {
        KUTETHEMES_FRAMEWORK.onScroll();
    });
    window.onload = function () {
        KUTETHEMES_FRAMEWORK.init();
    }
    $(document).ready(function () {
        KUTETHEMES_FRAMEWORK.onReady();
    });
})(window.jQuery);
