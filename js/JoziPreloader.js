/**
 * Created by Steinburch on 12/3/15.
 */
function JoziPreloader(preloadTheseUrls) {

    this.circle = new ProgressBar.Circle('#progress', {
        color: '#ffffff',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 30
    });
    this.cirCount = 0;
    this.imgArray = preloadTheseUrls;
    this.$maskInner = $('#mask-inner');
    this.$loaderFill1 = $('#loader-fill');
    this.$loaderFill2 = $('#loader-fill2');
    this.$preloaderScreen =  $(".preloaderScreen");
    this.$preloaderWrapper = $('#preloaderwrapper');
    var ME = this;

    ME.$maskInner.hide();
    ME.$loaderFill2[0].style.display = "none";
    ME.$loaderFill1[0].style.display = "none";

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
        ME.circle.animate(1, function() {
            setTimeout(function(){
               ME.hidePreloader();
            }, 1000);
        });
    }
}