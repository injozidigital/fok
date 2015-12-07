/**
 * Created by Steinburch on 12/7/15.
 */

function JoziMenu() {
    /*
     * MENU VARIABLES
     * */
    var $window = $(window);
    var $wrapperID = $("#wrapper");
    this.menu = $wrapperID.find(".main-menu");
    this.aboutLink = $("#aboutLink");
    this.whatWeDoLink = $("#whatwedoLink");
    this.theWorkLink = $("#theworkLink");
    this.contactLink = $("#contactLink");
    this.contactInfo = $wrapperID.find(".contact-info");
    this.gevaar = $wrapperID.find(".gevaar");
    this.backmenu = $wrapperID.find(".backmenu");
    this.contactInfo = $("#contactDetails");
    this.menuContainer = $("#menuContainer");
    this.menuLinkClass = $(".menu-links");
    this.contentClass = $('.content');
    this.fittext1 = $(".fittext1");
    this.fittext2 = $(".fittext2");
    this.fittext3 = $(".fittext3");

    var ME = this;


    this.openMenu = function(){
        ME.contentClass.addClass("contentPush");
        ME.menu.addClass("opened");
        ME.menuLinkClass.addClass("menuSlideanimation");
    };
    this.closeMenu = function(){
        ME.contentClass.removeClass("contentPush");
        ME.menu.removeClass("opened");
        ME.menuLinkClass.removeClass("menuSlideanimation");
    };


    /*
     * other text fades
     * contact slides up
     * contact info shows*/
    ME.contactLink.click(function contactClickHandler() {
        ME.contactLink.addClass('show');
        ME.contactLink.addClass('white');
        ME.aboutLink.addClass('hideLink');
        ME.whatWeDoLink.addClass('hideLink');
        ME.theWorkLink.addClass('hideLink');
        ME.contactInfo.animate({opacity: '1'}, 1000).css("z-index", "999");
        ME.menuContainer.css({
            'width' : 'auto'
        });
        ME.gevaar.animate({opacity: '0'});
        ME.backmenu.animate({opacity: '1'});
    });

    ME.backmenu.click(function backMenuClickHandler() {
        ME.gevaar.animate({opacity: '1'});
        ME.backmenu.animate({opacity: '0'});

        ME.contactInfo.animate({opacity: '0'}).css("z-index", "0");

        ME.contactLink.removeClass('show');
        ME.aboutLink.removeClass('show');
        ME.whatWeDoLink.removeClass('show');
        ME.theWorkLink.removeClass('show');
        ME.contactLink.removeClass('hideLink');
        ME.aboutLink.removeClass('hideLink');
        ME.whatWeDoLink.removeClass('hideLink');
        ME.theWorkLink.removeClass('hideLink');

        ME.contactLink.removeClass('white');

    });

   this.resizeMenu = function(){
        ME.menuWidth = $window.innerWidth();
        ME.menuContainer.css("width", ME.menuWidth);
        ME.fittext1.fitText();
        ME.fittext2.fitText(1.2);
        ME.fittext3.fitText(1.1, { minFontSize: '111px', maxFontSize: '75px' });
    };


}