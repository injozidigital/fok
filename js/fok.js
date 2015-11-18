/**
 * Created by Steinburch on 11/11/15.
 */
$(document).ready(function() {
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
    var ps = new ParticleSlider();
    var $ec1Splat = $('#section2').find('.splat');
    var $ec3Splat = $('#section3').find('.splat');
    var $ec4Splat = $('#section4outer').find('.splat');
    var $ec6Splat = $('#section6outer').find('.splat');


    $card.lazylinepainter({
        'svgData': svgDataCard,
        'strokeWidth': 1,
        'strokeColor': '#ffffff',
        'drawSequential': false,
        'ease': 'easeInOutQuad'
    });
    function initFok(){
        $('#fullpage').fullpage({
            verticalCentered: false,
            afterRender: function(){
                //playing the video
                $('video').get(0).play();
            },
            onLeave: function(index, nextIndex, direction){
                var leavingSection = $(this);

                if(index == 2 && direction =='down'){
                    setTimeout(function(){
                        $ec1Splat.addClass('grow');
                    }, 3500);
                }

                if(index == 3 && direction =='down'){
                    setTimeout(function(){
                        $ec3Splat.addClass('grow');
                    }, 3500);
                }
                if(index == 4 && direction =='down'){
                    setTimeout(function(){
                        $ec4Splat.addClass('grow');
                    }, 3500);
                }
                if(index == 5 && direction =='down'){
                    setTimeout(function(){
                        $ec6Splat.addClass('grow');
                    }, 3500);
                }

            }
        });

        setTimeout(function(){
            $card.animate({opacity:'1'},4500);
            setTimeout(function(){
                $card.lazylinepainter('paint');
                setTimeout(function(){
                    $(".typer").animate({opacity:'1'},100);
                    setTimeout(function(){
                        $("#particle-slider").animate({opacity:'1'},4000);
                    }, 4500);
                }, 3500);
            }, 1000);
        }, 2000);



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

    initFok();
});

