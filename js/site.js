
/**
 * Created by Steinburch on 11/11/15.
 */
$(document).ready(function domready() {

    var scene = $('#scene')[0];
    var parallax = new Parallax(scene, {
        relativeInput: true
    });
    var scene2 = $('#scene2')[0];
    var parallax = new Parallax(scene2, {
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
    var ps = new ParticleSlider();
    var $ec1Splat = $('#section2').find('.splat');
    var $ec3Splat = $('#section3').find('.splat');
    var $ec6Splat = $('#section6outer').find('.splat');
    var $ec1line1 = $('#slide1line1');
    var $ec1copy1 = $('#slide1copy1');
    var $ec2line1 = $('#line1');
    var $ec2line2 = $('#line2');
    var $ec2copy1 = $('#copy1');
    var $ec2copy2 = $('#copy2');
    var $ec3line1 = $('#slide3line1');
    var $ec3line2 = $('#slide3line2');
    var $ec3copy1 = $('#slide3copy1');
    var $ec3copy2 = $('#slide3copy2');
    var $ec4line1 = $('#slide4line1');
    var $ec4copy1 = $('#slide4copy1');
    var $ec6line1 = $('#slide6line1');
    var $ec6line2 = $('#slide6line2');
    var $ec6copy1 = $('#slide6copy1');
    var $ec6copy2 = $('#slide6copy2');
    var container = $('#progressline-white')[0];
    var $myCursor = $('#mycursor');
    var path;
    var svgPathClasslist;
    var captionLength = 0;
    var caption = '';

    $card.lazylinepainter({
        'svgData': svgDataCard,
        'strokeWidth': 1,
        'strokeColor': '#ffffff',
        'drawSequential': false,
        'ease': 'easeInOutQuad'
    });

    captionEl = $('#caption');



    function type() {
        captionEl.html(caption.substr(0, captionLength++));
        if(captionLength < caption.length+1) {
            setTimeout(type, 50);

        } else {
            cursorAnimation();
            captionLength = 0;
            caption = '';
        }
    }

    function TypingEffect() {
        caption = "WE CREATE ";
        type();
    }

    function cursorAnimation() {
        $myCursor.animate({
            opacity: 0
        }, 'fast', 'swing').animate({
            opacity: 1
        }, 'fast', 'swing');
        setTimeout(cursorAnimation, 800);
    }

    function initParticle(){


        var isSmall = $(window).innerWidth < 1000;

        ps = new ParticleSlider({
            ptlGap: isSmall ? 3 : 0,
            ptlSize: isSmall ? 3 : 1,
            width: 1e9,
            height: 1e9
        });

        (window.addEventListener
            ? window.addEventListener('click', function(){ps.init(true)}, false)
            : window.onclick = function(){ps.init(true)});
    };
    function initApp(){
        container.innerHTML = '<object id="white-scene" type="image/svg+xml" data="assets/line_white.svg"></object>';
        var scene = document.getElementById('white-scene');
        scene.addEventListener('load', function() {
            path = new ProgressBar.Path(scene.contentDocument.querySelector('#white-path'), {
                duration: 5000
            });
            path.animate(0.1);
        });

        $('#fullpage').fullpage({
            verticalCentered: false,
            afterRender: function(){
                //playing the video
                $('video').get(0).play();
            },
            scrollingSpeed: 1000,
            onLeave: function(index, nextIndex, direction){
                var leavingSection = $(this);

                if(nextIndex == 1 ){
                    console.log("slide1");

                }
                if(nextIndex == 2){
                    console.log("slide2");
                    setInterval (path.animate(0.2), 500);
                    svgPathClasslist =  document.getElementById('white-scene').contentDocument.querySelector('#white-path').classList;
                    svgPathClasslist.remove("white");
                    svgPathClasslist.add("black");

                    setTimeout(function(){
                        $ec1line1.addClass("showline");
                        $ec1copy1.addClass("showcopy");
                    }, 200);
                }
                if(nextIndex == 4){
                    console.log("slide3");
                    setInterval (path.animate(0.6), 500);
                    svgPathClasslist.remove("black");
                    svgPathClasslist.add("white");
                    if(direction =='down'){

                        setTimeout(function(){
                            $ec2line1.addClass("showline");
                            $ec2line2.addClass("showline");
                            $ec2copy1.addClass("showcopy");
                            $ec2copy2.addClass("showcopy");
                            setTimeout(function(){
                                $ec1Splat.addClass('grow');
                            }, 500);
                        }, 100);


                    }
                }
                if(nextIndex == 5){
                    console.log("slide4");
                    setInterval ( path.animate(0.8), 500);
                    svgPathClasslist.remove("white");
                    svgPathClasslist.add("black");
                    if(direction =='down'){
                        setTimeout(function(){
                            $ec3line1.addClass("showline");
                            $ec3line2.addClass("showline");
                            $ec3copy1.addClass("showcopy");
                            $ec3copy2.addClass("showcopy");
                            setTimeout(function(){
                                $ec3Splat.addClass('grow');
                            }, 500);
                        }, 100);
                    }
                }
                if(nextIndex == 6){
                    console.log("slide5");
                    setInterval (path.animate(1), 500);
                    if(direction =='down'){
                        setTimeout(function(){
                            $ec4line1.addClass("showline");
                            $ec4copy1.addClass("showcopy");
                        }, 100);
                    }
                }
                if(nextIndex == 7){
                    console.log("slide6");
                    setInterval (path.animate(1), 500);
                    svgPathClasslist.remove("black");
                    svgPathClasslist.add("white");
                    setTimeout(function(){
                        $ec6line1.addClass("showline");
                        $ec6line2.addClass("showline");
                        $ec6copy1.addClass("showcopy");
                        $ec6copy2.addClass("showcopy");
                        setTimeout(function(){
                            $ec6Splat.addClass('grow');
                        }, 500);
                    }, 100);
                }


            }


        });

        setTimeout(function(){
            $card.animate({opacity:'1'},4500);
            setTimeout(function(){
                $card.lazylinepainter('paint');
                setTimeout(function(){
                    document.getElementById("mycursor").style.display = "inline-block";
                    setTimeout(function(){
                        TypingEffect();
                    }, 1000);
                    setTimeout(function(){
                        $('[data-typer-targets]').typer({
                            highlightSpeed    : 20,
                            typeSpeed         : 100,
                            clearDelay        : 500,
                            typeDelay         : 200,
                            clearOnHighlight  : true,
                            typerDataAttr     : 'data-typer-targets',
                            typerInterval     : 2000
                        });
                    }, 2000);
                    setTimeout(function(){
                        $("#particle-slider").animate({opacity:'1'},4000);
                    }, 4500);
                }, 3500);
            }, 1000);
        }, 2000);
        setInterval (cursorAnimation(), 600);
    };
    initApp();
    $(window).trigger('resize');
});