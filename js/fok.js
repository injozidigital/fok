/**
 * Created by Steinburch on 11/11/15.
 */
$(document).ready(function() {
    var $windowHeight = window.innerHeight;
    var $section = $windowHeight/3;
    var isUp = false;
    var isDown = false;
    var isMenuButton = false;
    var isNavOpen = false;
    var $navigation = $('nav');
    var $cube = $('#cube');
    var $up = $('#up');
    var $backup = $('#backup');
    var $down = $('#down');
    var $backdown = $('#backdown');
    var $menu = $('#menu');
    var $ex = $('#ex');
    var $backex = $('#backex');
    var $cursor = $('#cursor');
    var svgDatacube= {
        "cube": {
            "strokepath": [
                //2
                {
                    "path": "M 50.4 59.8 L 50.4 1.8",
                    "duration": 600
                },
                //10
                {
                    "path": "M 50.4 59.8 L 99.2 88.4",
                    "duration": 600
                },
                //8
                {
                    "path": "M 50.4 59.8 L 1.6 88.4",
                    "duration": 600
                },
                //5
                {
                    "path": "M 50.4 59.8 L 1.6 30.4",
                    "duration": 600
                },
                //6
                {
                    "path": "M 50.4 59 L 99.2 30.4",
                    "duration": 600
                },
                //9
                {
                    "path": "M 50.4 59.8 L 50.4 116.8",
                    "duration": 600
                },





                //7
                {
                    "path": "M 99.2 30.4 L 99.2 88.4",
                    "duration": 600,
                    "delay":600

                },
                //4
                {
                    "path": "M 1.6 30.4 L 1.6 88.4",
                    "duration": 600,
                    "delay":600
                },


                //3
                {
                    "path": "M 50.4 1.8 L 99.2 30.4",
                    "duration": 600,
                    "delay":1200
                },

                //1
                {
                    "path": "M 50.4 1.8 L 1.6 30.4",
                    "duration": 600,
                    "delay":1200
                },
                //11
                {
                    "path": "M 50.4 117 L 1.6 88.4",
                    "duration": 600,
                    "delay":1200
                },
                //12
                {
                    "path": "M 50.4 117 L 99.2 88.4",
                    "duration": 600,
                    "delay":1200
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
                    "duration": 600
                },
                //3
                {
                    "path": "M 50.4 1.8 L 99.2 30.4",
                    "duration": 600,
                    "delay":600
                },
                //1
                {
                    "path": "M 50.4 1.8 L 1.6 30.4",
                    "duration": 600,
                    "delay":600
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
                    "duration": 600,
                    "delay":600
                },
                //3
                {
                    "path": "M 99.2 30.4 L 50.4 1.8",
                    "duration": 600
                },
                //1
                {
                    "path": "M 1.6 30.4 L 50.4 1.8",
                    "duration": 600
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
                    "duration": 600
                },
                //11
                {
                    "path": "M 50.4 117 L 1.6 88.4",
                    "duration": 600,
                    "delay":600
                },
                //12
                {
                    "path": "M 50.4 117 L 99.2 88.4",
                    "duration": 600,
                    "delay":600
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
                    "duration": 600
                },
                //12
                {
                    "path": "M 99.2 88.4 L 50.4 117",
                    "duration": 600
                },
                //9
                {
                    "path": "M 50.4 116.8 L 50.4 59.8",
                    "duration": 600,
                    "delay":600
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
                    "duration": 600
                },
                //1
                {
                    "path": "M 50.4 1.8 L 1.6 30.4",
                    "duration": 600
                },
                //11
                {
                    "path": "M 50.4 117 L 1.6 88.4",
                    "duration": 600
                },
                //12
                {
                    "path": "M 50.4 117 L 99.2 88.4",
                    "duration": 600
                },
                //5
                {
                    "path": "M 50.4 59.8 L 1.6 30.4",
                    "duration": 600,
                    "delay":450
                },
                //10
                {
                    "path": "M 50.4 59.8 L 99.2 88.4",
                    "duration": 600,
                    "delay":450
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
                    "duration": 600
                },
                //8
                {
                    "path": "M 50.4 59.8 L 1.6 88.4",
                    "duration": 600
                },
                //5
                {
                    "path": "M 50.4 59.8 L 1.6 30.4",
                    "duration": 600
                },
                //6
                {
                    "path": "M 50.4 59 L 99.2 30.4",
                    "duration": 600
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
                    "duration": 600
                },
                //8
                {
                    "path": "M 1.6 88.4 L 50.4 59.8",
                    "duration": 600
                },
                //5
                {
                    "path": "M 1.6 30.4 L 50.4 59.8",
                    "duration": 600
                },
                //6
                {
                    "path": "M 99.2 30.4 L 50.4 59",
                    "duration": 600
                },
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene, {
        relativeInput: true
    });
    var $card = $('#card');
    var svgDataCard= {
        "card": {
            "strokepath": [
                {
                    "path": "M461.1,11.6l-56.3,56.1L461.1,11.6c-7.7-5.8-17.5-9.3-27.9-9.3c-25.3,0-45.8,20.5-45.8,45.7    s20.5,45.7,45.8,45.7c25.3,0,45.5-20.5,45.8-45.7c0.2-10.7-2.9-19.7-9.3-27.9l-56.2,56.1l56.3-56.1",
                    "duration": 3000
                },
                {
                    "path": "M453,19.4c-5.4-3.9-12.4-6.2-19.7-6.2c-19.1,0-34.7,15.7-34.7,34.7c0,19.1,15.7,34.7,34.7,34.7    S468,66.9,468,47.9c0-7.5-2.3-14-6.2-19.7",
                    "duration": 3000
                },{
                    "path": "M 732.8 6 L 732.8 99.2",
                    "duration": 3000
                },
                {
                    "path": "M 722.2 99.2 L 722.2 58.8",
                    "duration": 3000
                },
                {
                    "path": "M 732.8 58.8 L 722.2 58.8",
                    "duration": 3000
                },
                {
                    "path": "M 722.2 6 L 722.2 46.4",
                    "duration": 3000
                },
                {
                    "path": "M 732.8 46.4 L 722.2 46.4",
                    "duration": 3000
                },
                {
                    "path": "M 546.9 5.4 L 608.6 5.4",
                    "duration": 3000
                },
                {
                    "path": "M 547.8 17.9 L 600.4 17.9",
                    "duration": 3000
                },
                {
                    "path": "M 608.6 5.4 L 554 88.6",
                    "duration": 3000
                },
                {
                    "path": "M 622.9 5.6 L 568.2 88.4",
                    "duration": 3000
                },
                {
                    "path": "M 554 88.6 L 622.7 88.6",
                    "duration": 3000
                },
                {
                    "path": "M 622.7 99.8 L 545.5 99.8",
                    "duration": 3000
                },
                {
                    "path": "M 300.8 6 L 300.8 46.4",
                    "duration": 3000
                },
                {
                    "path": "M 313.6 46.4 L 300.8 46.4",
                    "duration": 3000
                },
                {
                    "path": "M 120.2 6 L 120.2 99.2",
                    "duration": 3000
                },
                {
                    "path": "M 132.4 99.2 L 132.4 17.4",
                    "duration": 3000
                },
                {
                    "path": "M 196.6 81.1 L 196.6 6",
                    "duration": 3000
                },
                {
                    "path": "M 184.5 6 L 184.5 69.3",
                    "duration": 3000
                },
                {
                    "path": "M 196.6 81.1 L 132.4 17.4",
                    "duration": 3000
                },
                {
                    "path": "M 132.2 35 L 196.2 98.7",
                    "duration": 3000
                },
                {
                    "path": "M 9.2 6 L 9.2 46.4",
                    "duration": 3000
                },
                {
                    "path": "M 20.4 6 L 20.4 99.2",
                    "duration": 3000
                },
                {
                    "path": "M 9.2 99.2 L 9.2 58.8",
                    "duration": 3000
                },
                {
                    "path": "M 9.2 46.4 L 19.8 46.4",
                    "duration": 3000
                },
                {
                    "path": "M 19.8 58.8 L 9.2 58.8",
                    "duration": 3000
                },
                {
                    "path": "M 313.6 6 L 313.6 71.6",
                    "duration": 3000
                },
                {
                    "path": "M313.6,71.6c0,2.3-0.3,10.9-6.8,18.4c-8.2,9.4-19.7,9.6-21.4,9.6",
                    "duration": 3000
                },
                {
                    "path": "M 313.7 57.6 L 302.1 57.6",
                    "duration": 3000
                },
                {
                    "path": "M 302.1 57.6 L 302.1 71.1",
                    "duration": 3000
                },
                {
                    "path": "M285.4,87.8c1.1,0,8.1-0.4,12.9-6.3c3.4-4.2,3.7-8.9,3.8-10.4",
                    "duration": 3000
                },
                {
                    "path": "M 622.7 99.8 L 545.5 99.8",
                    "duration": 3000
                }
            ],
            "dimensions": {
                "width": 776,
                "height": 126
            }
        }
    };
    var init = function(){
        var isMobile = navigator.userAgent &&
            navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
        var isSmall = window.innerWidth < 1000;

        var ps = new ParticleSlider({
            ptlGap: isMobile || isSmall ? 3 : 0,
            ptlSize: isMobile || isSmall ? 3 : 1,
            width: 1e9,
            height: 1e9
        });

        (window.addEventListener
            ? window.addEventListener('click', function(){ps.init(true)}, false)
            : window.onclick = function(){ps.init(true)});
    }
    var initParticleSlider = function(){
        var psScript = document.createElement('script');
        (psScript.addEventListener
            ? psScript.addEventListener('load', init, false)
            : psScript.onload = init);
        psScript.src = 'http://fok.local/js/partslide.js';
        psScript.setAttribute('type', 'text/javascript');
        document.body.appendChild(psScript);
    }

    $(".my-row").css('height', window.innerHeight/3 + 'px');

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
        'onStrokeStart': function(){isUp = true}
    });
    $backup.lazylinepainter({
        'svgData': svgDataBackUp,
        'strokeWidth': 2,
        'strokeColor': 'grey',
        'drawSequential': false,
        'ease': 'easeInOutQuad'
    });
    $down.lazylinepainter({
        'svgData': svgDataDown,
        'strokeWidth': 2,
        'strokeColor': '#2de9a1',
        'drawSequential': false,
        'ease': 'easeInOutQuad',
        'onStrokeStart': function(){isDown = true}
    });
    $backdown.lazylinepainter({
        'svgData': svgDataBackDown,
        'strokeWidth': 2,
        'strokeColor': 'grey',
        'drawSequential': false,
        'ease': 'easeInOutQuad'
    });
    $menu.lazylinepainter({
        'svgData': svgDataMenu,
        'strokeWidth': 2,
        'strokeColor': '#2de9a1',
        'drawSequential': false,
        'ease': 'easeInOutQuad'
    });
    $ex.lazylinepainter({
        'svgData': svgDataEx,
        'strokeWidth': 2,
        'strokeColor': '#2de9a1',
        'drawSequential': false,
        'ease': 'easeInOutQuad',
        'onStrokeStart': function(){$ex.show()}
    });
    $backex.lazylinepainter({
        'svgData': svgDataBackEx,
        'strokeWidth': 2,
        'strokeColor': 'grey',
        'drawSequential': false,
        'ease': 'easeInOutQuad',
        'onStrokeStart': function(){console.log("Stroke started")},
        'onStrokeComplete': function(){$backex.hide();$ex.hide()},

    });

    $card.lazylinepainter({
        'svgData': svgDataCard,
        'strokeWidth': 1,
        'strokeColor': '#ffffff',
        'drawSequential': false,
        'ease': 'easeInOutQuad'
    });

    function initFok(){
        setTimeout(function(){
            $card.animate({opacity:'1'},4500);
            $(".typer").animate({opacity:'1'},4000);
            $(".svgHolder").animate({marginTop:'0'},2000);
        }, 2000);
        setTimeout(function(){
            $card.lazylinepainter('paint');
        }, 3000);
//		setTimeout(function(){
//			$('body').mouseover(function(){
//				$(this).css({cursor: 'none'});
//			});
//			$cube.lazylinepainter('paint');
//		}, 10);

        $('#fullpage').fullpage({
            verticalCentered: false,
            afterRender: function(){
                //playing the video
                $('video').get(0).play();
            }
        });

        (window.addEventListener
            ? window.addEventListener('load', initParticleSlider, false)
            : window.onload = initParticleSlider);

        $(function(){
            $(".element").typed({
                strings: ["Websites","Apps","Ideas","Attack Dragons","Strategy","Illustrations","Branding","OK Sh^800","Great Shit","Your Mom","Installations","Games","Concepts","Drink Names","Crafted Work","enage Mutant Ninja Turtles"],
                typeSpeed: 80,
                backSpeed: 50,
                // time before backspacing
                backDelay: 500,
                showCursor: true,
                // character for cursor
                cursorChar: "|",
                loop:true
            });
        });
    };


    //MENU FUNCTIONS
    function hideAll(except){
        except = (typeof except === 'undefined') ? 'none' : except;

        $cube.hide();
        $up.hide();
        $backup.hide();
        $down.hide();
        $backdown.hide();
        $menu.hide();
        $ex.hide();
        $backex.hide();

        switch (except) {
            case "cube":
                $cube.show();
                break;
            case "up":
                $up.show();
                $backup.show();
                break;
            case "down":
                $down.show();
                $backdown.show();
                break;
            case "menu":
                $menu.show();
                break;
            case "ex":
                $ex.show();
                $backex.show();
                break;
        }

        $cube.hide();
        $up.hide();
        $backup.hide();
        $down.hide();
        $backdown.hide();
        $menu.hide();
        $ex.hide();
        $backex.hide();


    }
    function showAll(){

        $cube.show();
        $up.show();
        $backup.show();
        $down.show();
        $backdown.show();
        $menu.show();
        $ex.show();
        $backex.show();


    }
    function showUp(){
        $backup.hide();
        $up.lazylinepainter('paint');
    };
    function hideUp(){
        $backup.show();
        $backup.lazylinepainter('paint');
        isUp = false;
    };
    function showDown(){
        $backdown.hide();
        $down.lazylinepainter('paint');
    };
    function hideDown(){
        $backdown.show();
        $backdown.lazylinepainter('paint');
        isDown = false;
    };
    function showMenu(){
        $menu.show();
        $menu.lazylinepainter('paint');
        $cube.addClass('menu');

        document.getElementById("up").style.visibility = "hidden";
        document.getElementById("backup").style.visibility = "hidden";
        document.getElementById("down").style.visibility = "hidden";
        document.getElementById("backdown").style.visibility = "hidden";

        isMenuButton = true;
    };
    function hideMenu(setbool){
        setbool = (typeof setbool === 'undefined') ? false : setbool;
        $menu.hide();
        document.getElementById("up").style.visibility = "visible";
        document.getElementById("backup").style.visibility = "visible";
        document.getElementById("down").style.visibility = "visible";
        document.getElementById("backdown").style.visibility = "visible";

        $('#cube').removeClass('menu');
        $('#cube').addClass('nomenu');

        isMenuButton = setbool;
    };
    function showEx(){
        $backex.hide();
        $ex.lazylinepainter('paint');
    };
    function hideEx(){
        $backex.show();
        $backex.lazylinepainter('paint');
    };


    $(window).resize(function () {
        $windowHeight = window.innerHeight;
        $section = $windowHeight/3;
        $(".my-row").css('height', $section + 'px');
    });

//		$(document).on('mousemove', function(e){
//			$('#cursor').css({
//				left:  e.pageX,
//				top:   e.pageY
//			});
//
//			if((e.pageY < $section)) {
//				if(isUp) {
//					hideUp();
//				}else if(isDown){
//					hideDown();
//				}
//
//				if(!isMenuButton && !isNavOpen){
//					showMenu();
//				}
//			}else{
//				if(isMenuButton && !isNavOpen){
//					hideMenu();
//				}
//			}
//
//			if((e.pageY > $section)&&(e.pageY < $section*2)&& !isUp && !isMenuButton){
//				if(isDown) {
//					hideDown();
//				}
//				if(isMenuButton) {
//					isMenuButton = false;
//				}
//				showUp();
//				hideMenu()
//			}
//
//			if((e.pageY > $section*2)&& !isDown && !isMenuButton){
//				if(isUp) {
//					hideUp();
//				}
//				if(isMenuButton) {
//					isMenuButton = false;
//				}
//				showDown();
//				hideMenu()
//			}
//
//			if(isMenuButton && !isNavOpen){
//				$navigation.css({
//					display:'block',
//					left:  (e.pageX-14),
//					top:   (e.pageY-8)
//				});
//			} else if(!isNavOpen){
//				$navigation.css({
//					display:'none'
//				});
//			}
//		});

    $(document).on('click', function(e){
        if(isMenuButton){
            if(!isNavOpen) {
                $cursor.addClass('open');
                $navigation.addClass('open');
                isNavOpen = true;
                setTimeout(function(){
                    hideAll('ex');
                    showEx();
                }, 2000);

            }else{
                $cursor.removeClass('open');
                $navigation.removeClass('open');
                isNavOpen = false;

                showAll();
                hideEx();

            }
        }
        if(isUp){
            $.fn.fullpage.moveSectionUp();
        }
        if(isDown){
            $.fn.fullpage.moveSectionDown();
        }
    });

    initFok();
});

