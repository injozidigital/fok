    /**
     * Created by Steinburch on 12/3/15.
     */
    function JoziPreloaderCursor(preloadThisUrlArray,menuHitZone,downHitZone,aJoziMenu) {

        this.$html =  $('html');
        /*
        * PRELOADER VARIABLES
        * */
        this.circle = new ProgressBar.Circle('#progress', {
            color: '#ffffff',
            duration: 3000,
            easing: 'easeInOut',
            strokeWidth: 30
        });
        this.cirCount = 0;
        this.imgArray = preloadThisUrlArray;
        this.$maskInner = $('#mask-inner');
        this.$loaderFill1 = $('#loader-fill');
        this.$loaderFill2 = $('#loader-fill2');
        this.$preloaderScreen =  $(".preloaderScreen");
        this.$preloaderWrapper = $('#preloaderwrapper');

        /*
        * CURSOR VARIABLES
        */
        this.currentMouseEvent; //TRACK CURRENT MOUSE EVENT
        this.menuHitZone = menuHitZone;
        this.downHitZone = downHitZone;

        //STATES
        this.hasPreLoaded = false;
        this.isUp = false;
        this.isDown = false;
        this.isMenuButton = false;
        this.isNavOpen = false;
        this.isAnimating = false;
        this.hasClicked = false;
        this.comingFromX = false;
        this.beenMenu = false;
        this.normCursor = false;

        this.CX;
        this.CY;
        this.cursorZone = $('#cursorZone');
        this.cursorZoneX;
        this.cursorZoneY;


        var ME = this;

       //INITIALS FOR PRELOADER/CURSOR
        ME.$maskInner.hide();
        ME.$loaderFill2[0].style.display = "none";
        ME.$loaderFill1[0].style.display = "none";

        CursorDomElements.cube.lazylinepainter({
            'svgData': CursorDrawingInfo.svgDatacube,
            'strokeWidth': 2,
            'strokeColor': 'grey',
            'drawSequential': false,
            'ease': 'easeInOutQuad'
        });
        CursorDomElements.up.lazylinepainter({
            'svgData': CursorDrawingInfo.svgDataUp,
            'strokeWidth': 2,
            'strokeColor': '#2de9a1',
            'drawSequential': false,
            'ease': 'easeInOutQuad',
            'onStrokeStart': function () {
                ME.isUp = true;
                ME.isAnimating = true
            },
            'onStrokeComplete': function () {
                ME.isAnimating = false;
            }
        });
        CursorDomElements.backup.lazylinepainter({
            'svgData': CursorDrawingInfo.svgDataBackUp,
            'strokeWidth': 2,
            'strokeColor': 'grey',
            'drawSequential': false,
            'ease': 'easeInOutQuad',
            'onStrokeStart': function () {
                ME.isAnimating = true
            },
            'onStrokeComplete': function () {
                ME.isUp = false;
                ME.isAnimating = false;
            }
        });
        CursorDomElements.down.lazylinepainter({
            'svgData': CursorDrawingInfo.svgDataDown,
            'strokeWidth': 2,
            'strokeColor': '#2de9a1',
            'drawSequential': false,
            'ease': 'easeInOutQuad',
            'onStrokeStart': function () {
                ME.isDown = true;
                ME.isAnimating = true
            },
            'onStrokeComplete': function () {
                ME.isAnimating = false;
            }
        });
        CursorDomElements.backdown.lazylinepainter({
            'svgData': CursorDrawingInfo.svgDataBackDown,
            'strokeWidth': 2,
            'strokeColor': 'grey',
            'drawSequential': false,
            'ease': 'easeInOutQuad',
            'onStrokeStart': function () {
                ME.isAnimating = true
            },
            'onStrokeComplete': function () {
                ME.isDown = false;
                ME.isAnimating = false;
            }
        });
        CursorDomElements.menu.lazylinepainter({
            'svgData': CursorDrawingInfo.svgDataMenu,
            'strokeWidth': 2,
            'strokeColor': '#2de9a1',
            'drawSequential': false,
            'ease': 'easeInOutQuad',
            'onStrokeStart': function () {
                ME.isAnimating = true
            },
            'onStrokeComplete': function () {
                ME.isAnimating = false;
            }
        });
        CursorDomElements.ex.lazylinepainter({
            'svgData': CursorDrawingInfo.svgDataEx,
            'strokeWidth': 2,
            'strokeColor': '#2de9a1',
            'drawSequential': false,
            'ease': 'easeInOutQuad',
            'onStrokeStart': function () {
                ME.isAnimating = true;
                CursorDomElements.ex.show();
            },
            'onStrokeComplete': function () {
                ME.isAnimating = false;
            }
        });
        CursorDomElements.backex.lazylinepainter({
            'svgData': CursorDrawingInfo.svgDataBackEx,
            'strokeWidth': 2,
            'strokeColor': 'grey',
            'drawSequential': false,
            'ease': 'easeInOutQuad',
            'onStrokeStart': function () {
                ME.isAnimating = true;
            },
            'onStrokeComplete': function () {
                document.getElementById("backex").style.visibility = "hidden";
                CursorDomElements.ex.hide();
                ME.isAnimating = false;
                CursorDomElements.cursor[0].style.opacity = "0";
                showCube();
            }
        });

        //PRELOADER FUNCTIONS
        this.hidePreloader = function () {
            ME.$loaderFill2[0].style.display = "block";
            ME.$loaderFill1[0].style.display = "block";
            ME.$maskInner.show();
            ME.$loaderFill1.removeClass('some');
            ME.$loaderFill1.addClass('none');

            setTimeout(function () {
                ME.$preloaderWrapper.animate({opacity: '0'}, 800);
                setTimeout(function () {
                    ME.$preloaderScreen.animate({opacity: '0'}, 800);
                    setTimeout(function () {
                        ME.$preloaderScreen[0].style.display = "none";
                    }, 800);
                }, 500);
            }, 1000);
        }
        this.preload = function () {
            var increment = Math.floor(100 / ME.imgArray.length);
            $(ME.imgArray).each(function () {
                $('<img>').attr("src", this).load(function () {
                    if ((ME.cirCount + increment) > ME.cirCount) {
                        ME.cirCount += increment;
                        ME.circle.animate(ME.cirCount / 100);
                    }
                });
            });
        }
        this.doneLoading = function(){
            ME.cursorZoneX = ME.cursorZone.offset().left;
            ME.cursorZoneY = ME.cursorZone.offset().top;
            ME.circle.animate(1, function() {
                setTimeout(function(){
                    ME.hasPreLoaded = true;
                    ME.hidePreloader();
                    startCursor();
                }, 1000);
            });
        }

        //CURSOR FUNCTIONS
        function startCursor(){
            CursorDomElements.cube.lazylinepainter('paint');
            CursorDomElements.cursor.css({
                top: '50%',
                left: '50%',
                marginTop: '-25px',
                marginLeft: '-12px'
            });
            setTimeout(function(){
                ME.$html.css({cursor: 'none'});
            }, 1000);
        }
        function checkCursor(e){
            if(e.pageY == undefined){e = ME.currentMouseEvent;}else{
                ME.currentMouseEvent = e;
            }

            //check that the preloader is finished and that the cursor is currently animating
            if(!ME.isAnimating){
                //if in the top(menu) section
                if((ME.CY < ME.menuHitZone)) {
                    //if the cursor is not already a menu button and the menu(nav) is not open
                    if(!ME.isMenuButton && !ME.isNavOpen){
                        showMenu();
                    }
                    if(ME.comingFromX) {
                        hideUpandDown();
                    }
                }else{
                    if(ME.isMenuButton && !ME.isNavOpen){
                        hideMenu();
                    }
                }
                //middle section
                if((ME.CY > ME.menuHitZone)&&(ME.CY < ME.downHitZone)&& !ME.isUp && !ME.isMenuButton){
                    if(ME.isMenuButton) {
                        ME.isMenuButton = false;
                    }
                    showUp();
                    hideMenu();
                }
                //bottom
                if((ME.CY > (ME.downHitZone))&& !ME.isDown && !ME.isMenuButton){
                    if(ME.isMenuButton) {
                        ME.isMenuButton = false;
                    }
                    showDown();
                    hideMenu()
                }
            }
            comingFromX = false;
        }
        function hideAll(except){
            except = (typeof except === 'undefined') ? 'none' : except;

            CursorDomElements.cube[0].style.visibility = "hidden";
            CursorDomElements.up[0].style.visibility = "hidden";
            CursorDomElements.backup[0].style.visibility = "hidden";
            CursorDomElements.down[0].style.visibility = "hidden";
            CursorDomElements.backdown[0].style.visibility = "hidden";
            CursorDomElements.menu[0].style.visibility = "hidden";
            CursorDomElements.ex[0].style.visibility = "hidden";
            CursorDomElements.backex[0].style.visibility = "hidden";

            switch (except) {
                case "cube":
                    CursorDomElements.cube[0].style.visibility = "visible";
                    break;
                case "up":
                    CursorDomElements.up[0].style.visibility = "visible";
                    CursorDomElements.backup[0].style.visibility = "visible";
                    break;
                case "down":
                    CursorDomElements.down[0].style.visibility = "visible";
                    CursorDomElements.backdown[0].style.visibility = "visible";
                    break;
                case "menu":
                    CursorDomElements.menu[0].style.visibility = "visible";
                    break;
                case "ex":
                    CursorDomElements.ex[0].style.visibility = "visible";
                    CursorDomElements.backex[0].style.visibility = "visible";
                    break;
            }
        }
        function showCube(){
            CursorDomElements.cube[0].style.visibility = "visible";
            CursorDomElements.menu[0].style.visibility = "visible";
        }
        function hideUpandDown() {
            CursorDomElements.up[0].style.visibility = "hidden";
            CursorDomElements.down[0].style.visibility = "hidden";
            CursorDomElements.backup[0].style.visibility = "hidden";
            CursorDomElements.backdown[0].style.visibility = "hidden";
        };
        function showUpandDown() {
            CursorDomElements.up[0].style.visibility = "visible";
            CursorDomElements.down[0].style.visibility = "visible";
            CursorDomElements.backup[0].style.visibility = "visible";
            CursorDomElements.backdown[0].style.visibility = "visible";
        };
        function showUp(){
            if(ME.isDown) {
                hideDown();
            }
            CursorDomElements.backup.hide();
            CursorDomElements.up.lazylinepainter('paint');
        };
        function hideUp(){
            CursorDomElements.backup.show();
            CursorDomElements.backup.lazylinepainter('paint');
            ME.isUp = false;
        };
        function showDown(){
            if(ME.isUp) {
                hideUp();
            }
            CursorDomElements.backdown.hide();
            CursorDomElements.down.lazylinepainter('paint');
        };
        function hideDown(){
            CursorDomElements.backdown.show();
            CursorDomElements.backdown.lazylinepainter('paint');
            ME.isDown = false;
        };
        function showMenu(){
            if(ME.isUp) {
                hideUp();
            }else if(ME.isDown){
                hideDown();
            }
            CursorDomElements.menu.show();
            CursorDomElements.menu.lazylinepainter('paint');
            CursorDomElements.cube.addClass('menu');
            hideUpandDown();
            ME.isMenuButton = true;
        };
        function hideMenu(setbool){
            setbool = (typeof setbool === 'undefined') ? false : setbool;
            CursorDomElements.menu.hide();
            showUpandDown();

            CursorDomElements.cube.removeClass('menu');
            CursorDomElements.cube.addClass('nomenu');

            ME.isMenuButton = setbool;
        };
        function showEx(){
            CursorDomElements.backex[0].style.visibility = "hidden";
            CursorDomElements.ex.lazylinepainter('paint');
            if(!ME.beenMenu) {
                ME.beenMenu = true;
                CursorDomElements.menu.removeClass('margin-top-ghost');
            }
        };
        function hideEx(){
            CursorDomElements.backex[0].style.visibility = "visible";
            CursorDomElements.backex.lazylinepainter('paint');

        };
        function insideMenu(){
            return ((ME.CX > ME.cursorZoneX)&&(ME.CY > ME.cursorZoneY));
        }

        $(document).on('click', function(e){
            if(ME.hasPreLoaded) {
                if (!ME.hasClicked) {
                    ME.hasClicked = true;
                    setTimeout(function () {
                        ME.hasClicked = false;
                    }, 500);
                    if (ME.isMenuButton) {
                        if (!ME.isNavOpen) {
                            $.fn.fullpage.setAllowScrolling(false);
                            $.fn.fullpage.setKeyboardScrolling(false);
                            CursorDomElements.cursor.addClass('open');
                            aJoziMenu.openMenu()
                            ME.isNavOpen = true;
                            hideAll('ex');
                            showEx();
                        } else if(!insideMenu()){
                            //CLOSE MENU
                            $.fn.fullpage.setAllowScrolling(true);
                            $.fn.fullpage.setKeyboardScrolling(true);
                            aJoziMenu.closeMenu();
                            CursorDomElements.cursor.removeClass('open');
                            ME.isNavOpen = false;
                            ME.comingFromX = true;
                            hideEx();
                            setTimeout(function () {
                                CursorDomElements.cursor.animate({
                                    opacity: 1,
                                }, 600);
                            }, 500);
                        }
                    }
                    if (ME.isUp) {
                        $.fn.fullpage.moveSectionUp();
                    }
                    if (ME.isDown) {
                        $.fn.fullpage.moveSectionDown();
                    }
                }
            }

        });
//$(document).mousemove(function(event){}):
        $(document).on('mousemove', function(e){
            if(ME.hasPreLoaded) {
                ME.CX = e.pageX;
                ME.CY = e.pageY;

                if(ME.isNavOpen && insideMenu()){
                    ME.$html.css({cursor: 'url(../assets/plus_cursor.png) 28 20, auto'});
                    ME.normCursor = true;
                    CursorDomElements.cursor.addClass("hide");
                }else {
                    if(ME.normCursor){
                        ME.$html.css({cursor: 'none'});
                        CursorDomElements.cursor.removeClass("hide");
                        ME.normCursor = false;
                    }
                    CursorDomElements.cursor.css({
                        left: ME.CX,
                        top: ME.CY
                    });
                    checkCursor(e);
                }
            }
        });


    }