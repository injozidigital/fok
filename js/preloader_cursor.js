/**
 * Created by Steinburch on 12/2/15.
 */
$(document).ready(function() {
    var $windowHeight = window.innerHeight;
    var $section = $windowHeight/3;
    var currentEvent;

    //CURSORS
    var $cursor = $('#cursor');
    var $cube = $('#cube');
    var $up = $('#up');
    var $backup = $('#backup');
    var $down = $('#down');
    var $backdown = $('#backdown');
    var $menu = $('#menu');
    var $ex = $('#ex');
    var $backex = $('#backex');

    //STATES
    var hasPreLoaded = false;
    var isUp = false;
    var isDown = false;
    var isMenuButton = false;
    var isNavOpen = false;
    var isAnimating = false;
    var hasClicked = false;
    var comingFromX = false;
    var beenMenu = false;

    //CURSOR DRAWING INFO
    var svgDatacube= {
        "cube": {
            "strokepath": [
                //2
                {
                    "path": "M 50.4 59.8 L 50.4 1.8",
                    "duration": 400
                },
                //10
                {
                    "path": "M 50.4 59.8 L 99.2 88.4",
                    "duration": 400
                },
                //8
                {
                    "path": "M 50.4 59.8 L 1.6 88.4",
                    "duration": 400
                },
                //5
                {
                    "path": "M 50.4 59.8 L 1.6 30.4",
                    "duration": 400
                },
                //6
                {
                    "path": "M 50.4 59 L 99.2 30.4",
                    "duration": 400
                },
                //9
                {
                    "path": "M 50.4 59.8 L 50.4 116.8",
                    "duration": 400
                },





                //7
                {
                    "path": "M 99.2 30.4 L 99.2 88.4",
                    "duration": 400,
                    "delay":400

                },
                //4
                {
                    "path": "M 1.6 30.4 L 1.6 88.4",
                    "duration": 400,
                    "delay":400
                },


                //3
                {
                    "path": "M 50.4 1.8 L 99.2 30.4",
                    "duration": 400,
                    "delay":800
                },

                //1
                {
                    "path": "M 50.4 1.8 L 1.6 30.4",
                    "duration": 400,
                    "delay":800
                },
                //11
                {
                    "path": "M 50.4 117 L 1.6 88.4",
                    "duration": 400,
                    "delay":800
                },
                //12
                {
                    "path": "M 50.4 117 L 99.2 88.4",
                    "duration": 400,
                    "delay":800
                },



            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    var svgDataUp= {
        "up": {
            "strokepath": [
                //2
                {
                    "path": "M 50.4 59.8 L 50.4 1.8",
                    "duration": 400
                },
                //3
                {
                    "path": "M 50.4 1.8 L 99.2 30.4",
                    "duration": 400,
                    "delay":400
                },
                //1
                {
                    "path": "M 50.4 1.8 L 1.6 30.4",
                    "duration": 400,
                    "delay":400
                },
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    var svgDataBackUp= {
        "backup": {
            "strokepath": [
                //2
                {
                    "path": "M 50.4 1.8 L 50.4  59.8",
                    "duration": 400,
                    "delay":400
                },
                //3
                {
                    "path": "M 99.2 30.4 L 50.4 1.8",
                    "duration": 400
                },
                //1
                {
                    "path": "M 1.6 30.4 L 50.4 1.8",
                    "duration": 400
                }
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    var svgDataDown= {
        "down": {
            "strokepath": [
                //9
                {
                    "path": "M 50.4 59.8 L 50.4 116.8",
                    "duration": 400
                },
                //11
                {
                    "path": "M 50.4 117 L 1.6 88.4",
                    "duration": 400,
                    "delay":400
                },
                //12
                {
                    "path": "M 50.4 117 L 99.2 88.4",
                    "duration": 400,
                    "delay":400
                },
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    var svgDataBackDown= {
        "backdown": {
            "strokepath": [
                //11
                {
                    "path": "M 1.6 88.4 L 50.4 117",
                    "duration": 400
                },
                //12
                {
                    "path": "M 99.2 88.4 L 50.4 117",
                    "duration": 400
                },
                //9
                {
                    "path": "M 50.4 116.8 L 50.4 59.8",
                    "duration": 400,
                    "delay":400
                }
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    var svgDataMenu= {
        "menu": {
            "strokepath": [
                //3
                {
                    "path": "M 50.4 1.8 L 99.2 30.4",
                    "duration": 400
                },
                //1
                {
                    "path": "M 50.4 1.8 L 1.6 30.4",
                    "duration": 400
                },
                //11
                {
                    "path": "M 50.4 117 L 1.6 88.4",
                    "duration": 400
                },
                //12
                {
                    "path": "M 50.4 117 L 99.2 88.4",
                    "duration": 400
                },
                //5
                {
                    "path": "M 50.4 59.8 L 1.6 30.4",
                    "duration": 400,

                },
                //10
                {
                    "path": "M 50.4 59.8 L 99.2 88.4",
                    "duration": 400,

                },
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    var svgDataEx= {
        "ex": {
            "strokepath": [
                //10
                {
                    "path": "M 50.4 59.8 L 99.2 88.4",
                    "duration": 400
                },
                //8
                {
                    "path": "M 50.4 59.8 L 1.6 88.4",
                    "duration": 400
                },
                //5
                {
                    "path": "M 50.4 59.8 L 1.6 30.4",
                    "duration": 400
                },
                //6
                {
                    "path": "M 50.4 59 L 99.2 30.4",
                    "duration": 400
                },
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    var svgDataBackEx= {
        "backex": {
            "strokepath": [
                //10
                {
                    "path": "M 99.2 88.4 L 50.4 59.8",
                    "duration": 400
                },
                //8
                {
                    "path": "M 1.6 88.4 L 50.4 59.8",
                    "duration": 400
                },
                //5
                {
                    "path": "M 1.6 30.4 L 50.4 59.8",
                    "duration": 400
                },
                //6
                {
                    "path": "M 99.2 30.4 L 50.4 59",
                    "duration": 400
                },
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };

    //PRELOADER
    var circle = new ProgressBar.Circle('#progress', {
        color: '#ffffff',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 30
    });
    var cirCount =0;
    var imgArray = [];
    var $maskInner =$('#mask-inner');
    var $loaderFill1 =$('#loader-fill');
    var $loaderFill2 =$('#loader-fill2');
    var $preloaderWrapper=$('#preloaderwrapper');

    imgArray = ['http://fok.local/assets/1.png'];
    $maskInner.hide();
    $loaderFill2[0].style.display = "none";
    $loaderFill1[0].style.display = "none";

    //CURSOR SETUP
    $cube.lazylinepainter({
        'svgData': svgDatacube,
        'strokeWidth': 2,
        'strokeColor': 'grey',
        'drawSequential': false,
        'ease': 'easeInOutQuad'
    });
    $up.lazylinepainter({
        'svgData': svgDataUp,
        'strokeWidth': 2,
        'strokeColor': '#2de9a1',
        'drawSequential': false,
        'ease': 'easeInOutQuad',
        'onStrokeStart': function(){isUp = true;isAnimating = true},
        'onStrokeComplete': function(){isAnimating = false;}
    });
    $backup.lazylinepainter({
        'svgData': svgDataBackUp,
        'strokeWidth': 2,
        'strokeColor': 'grey',
        'drawSequential': false,
        'ease': 'easeInOutQuad',
        'onStrokeStart': function(){isAnimating = true},
        'onStrokeComplete': function(){isUp = false;isAnimating = false;}
    });
    $down.lazylinepainter({
        'svgData': svgDataDown,
        'strokeWidth': 2,
        'strokeColor': '#2de9a1',
        'drawSequential': false,
        'ease': 'easeInOutQuad',
        'onStrokeStart': function(){isDown = true;isAnimating = true},
        'onStrokeComplete': function(){isAnimating = false;}
    });
    $backdown.lazylinepainter({
        'svgData': svgDataBackDown,
        'strokeWidth': 2,
        'strokeColor': 'grey',
        'drawSequential': false,
        'ease': 'easeInOutQuad',
        'onStrokeStart': function(){isAnimating = true},
        'onStrokeComplete': function(){isDown = false;isAnimating = false;}
    });
    $menu.lazylinepainter({
        'svgData': svgDataMenu,
        'strokeWidth': 2,
        'strokeColor': '#2de9a1',
        'drawSequential': false,
        'ease': 'easeInOutQuad',
        'onStrokeStart': function(){isAnimating = true},
        'onStrokeComplete':function(){isAnimating = false;}
    });
    $ex.lazylinepainter({
        'svgData': svgDataEx,
        'strokeWidth': 2,
        'strokeColor': '#2de9a1',
        'drawSequential': false,
        'ease': 'easeInOutQuad',
        'onStrokeStart': function(){isAnimating = true;$ex.show();},
        'onStrokeComplete':function(){isAnimating = false;}
    });
    $backex.lazylinepainter({
        'svgData': svgDataBackEx,
        'strokeWidth': 2,
        'strokeColor': 'grey',
        'drawSequential': false,
        'ease': 'easeInOutQuad',
        'onStrokeStart': function(){isAnimating = true;},
        'onStrokeComplete': function(){document.getElementById("backex").style.visibility = "hidden";$ex.hide();isAnimating = false; $cursor[0].style.opacity="0";
            showCube();}
    });

    //CURSOR FUNCTIONS
    function checkCursor(e){
        if(e.pageY == undefined){e = currentEvent;}else{
            currentEvent = e;
        }

        //check that the preloader is finished and that the cursor is currently animating
        if(hasPreLoaded && !isAnimating){
            //if in the top(menu) section
            if((e.pageY < $section)) {
                //if the cursor is not already a menu button and the menu(nav) is not open
                if(!isMenuButton && !isNavOpen){
                    showMenu();
                }
                if(comingFromX) {
                    hideUpandDown();
                }
            }else{
                if(isMenuButton && !isNavOpen){
                    hideMenu();
                }
            }
            //middle section
            if((e.pageY > $section)&&(e.pageY < $section*2)&& !isUp && !isMenuButton){
                if(isMenuButton) {
                    isMenuButton = false;
                }
                showUp();
                hideMenu();
            }
            //bottom
            if((e.pageY > ($section*2))&& !isDown && !isMenuButton){
                if(isMenuButton) {
                    isMenuButton = false;
                }
                showDown();
                hideMenu()
            }
        }
        comingFromX = false;
    }


    function hideAll(except){
        except = (typeof except === 'undefined') ? 'none' : except;

        $cube[0].style.visibility = "hidden";
        $up[0].style.visibility = "hidden";
        $backup[0].style.visibility = "hidden";
        $down[0].style.visibility = "hidden";
        $backdown[0].style.visibility = "hidden";
        $menu[0].style.visibility = "hidden";
        $ex[0].style.visibility = "hidden";
        $backex[0].style.visibility = "hidden";

        switch (except) {
            case "cube":
                $cube[0].style.visibility = "visible";
                break;
            case "up":
                $up[0].style.visibility = "visible";
                $backup[0].style.visibility = "visible";
                break;
            case "down":
                $down[0].style.visibility = "visible";
                $backdown[0].style.visibility = "visible";
                break;
            case "menu":
                $menu[0].style.visibility = "visible";
                break;
            case "ex":
                $ex[0].style.visibility = "visible";
                $backex[0].style.visibility = "visible";
                break;
        }
    }

    function showCube(){
        $cube[0].style.visibility = "visible";
        $menu[0].style.visibility = "visible";
    }
    function hideUpandDown() {
        $up[0].style.visibility = "hidden";
        $down[0].style.visibility = "hidden";
        $backup[0].style.visibility = "hidden";
        $backdown[0].style.visibility = "hidden";
    };

    function showUpandDown() {
        $up[0].style.visibility = "visible";
        $down[0].style.visibility = "visible";
        $backup[0].style.visibility = "visible";
        $backdown[0].style.visibility = "visible";
    };
    function showUp(){
        if(isDown) {
            hideDown();
        }
        $backup.hide();
        $up.lazylinepainter('paint');
    };
    function hideUp(){
        $backup.show();
        $backup.lazylinepainter('paint');
        isUp = false;
    };
    function showDown(){
        if(isUp) {
            hideUp();
        }
        $backdown.hide();
        $down.lazylinepainter('paint');
    };
    function hideDown(){
        $backdown.show();
        $backdown.lazylinepainter('paint');
        isDown = false;
    };
    function showMenu(){
        if(isUp) {
            hideUp();
        }else if(isDown){
            hideDown();
        }
        $menu.show();
        $menu.lazylinepainter('paint');
        $cube.addClass('menu');
        hideUpandDown();
        isMenuButton = true;
    };
    function hideMenu(setbool){
        setbool = (typeof setbool === 'undefined') ? false : setbool;
        $menu.hide();
        showUpandDown();

        $cube.removeClass('menu');
        $cube.addClass('nomenu');

        isMenuButton = setbool;
    };
    function showEx(){
        $backex[0].style.visibility = "hidden";
        $ex.lazylinepainter('paint');
        if(!beenMenu) {
            beenMenu = true;
            $menu.removeClass('margin-top-ghost');
        }
    };
    function hideEx(){
        $backex[0].style.visibility = "visible";
        $backex.lazylinepainter('paint');

    };


    $(window).resize(function () {
        $windowHeight = window.innerHeight;
        $section = $windowHeight/3;
        $(".my-row").css('height', $section + 'px');
    });

    $(document).on('mousemove', function(e){
        $cursor.css({
            left:  e.pageX,
            top:   e.pageY
        });
        checkCursor(e);
    });

    $(document).on('click', function(e){
        if(!hasClicked){
            hasClicked = true;
            setTimeout(function(){
                hasClicked = false;
            }, 500);
            if(isMenuButton){
                if(!isNavOpen) {
                    $cursor.addClass('open');
                    //OPEN MENU
                    isNavOpen = true;
                    hideAll('ex');
                    showEx();
                }else{
                    //CLOSE MENU
                    $cursor.removeClass('open');
                    isNavOpen = false;
                    comingFromX=true;
                    hideEx();
                    setTimeout(function(){
                        $cursor.animate({
                            opacity: 1,
                        },600);
                    }, 500);
                }
            }
            if(isUp){
                $.fn.fullpage.moveSectionUp();
            }
            if(isDown){
                $.fn.fullpage.moveSectionDown();
            }
        }
    });

//    /*
//     *   preloader
//     *
//     */
    function hidePreloader() {
        $loaderFill2[0].style.display = "block";
        $loaderFill1[0].style.display = "block";
        $maskInner.show();
        $loaderFill1.removeClass('some');
        $loaderFill1.addClass('none');

        setTimeout(function(){
            $preloaderWrapper.animate({opacity:'0'},800);
        }, 1000);
    }

    function doneLoading() {
        hidePreloader();
        $cube.lazylinepainter('paint');
        $cursor.css({
            top: '50%',
            left: '50%',
            marginTop: '-25px',
            marginLeft: '-12px'
        });

        setTimeout(function(){
            $('html').css({cursor: 'none'});
            hasPreLoaded=true;
        }, 1000);

    }
    function preload(imgArray) {
        var increment = Math.floor(100 / imgArray.length);
        $(imgArray).each(function () {
            $('<img>').attr("src", this).load(function () {
                if ((cirCount + increment) > cirCount) {
                    cirCount += increment;
                    circle.animate(cirCount / 100);
                }
            });

        });
    }
    preload(imgArray);
    $(window).load(function() {
        loaded = true;
        circle.animate(1, function() {
            setTimeout(function(){
                doneLoading();
            }, 1000);
        });
    });
    $(window).trigger('resize');
});
