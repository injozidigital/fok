/**
 * Created by Steinburch on 12/2/15.
 */
$(document).ready(function() {
    var $windowHeight = window.innerHeight;
    var $section = $windowHeight/3;
    var preloadCursor = new JoziPreloaderCursor(['http://injozi.biz/wip/injozi/assets/1.png'],$section,$section);

    $(window).resize(function () {
        $windowHeight = window.innerHeight;
        $section = $windowHeight/3;
        $(".my-row").css('height', $section + 'px');
    });

    preloadCursor.preload();

    $(window).load(function() {
        preloadCursor.doneLoading();
    });

    $(window).trigger('resize');
});
