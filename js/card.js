
; /* Start:"a:4:{s:4:"full";s:113:"/local/templates/MAIN_NEW/components/bitrix/catalog/MAIN/bitrix/catalog.element/.default/script.js?14550071771927";s:6:"source";s:98:"/local/templates/MAIN_NEW/components/bitrix/catalog/MAIN/bitrix/catalog.element/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
    if($('#left-sidebar .contact-phone').length) {
        var YPLMenu = $('#left-sidebar .contact-phone').offset().top - 20,
            HLMenu = $('#left-sidebar .contact-phone').height(),
            YPLSidebar = $('#left-sidebar').offset().top,
            HLSidebar = $('#catalog-element').height() + $('#catalog-element').offset().top,
            BLSidebar = HLSidebar - HLMenu - 50,
            HAdPanel = 0,
            timeFlag = true;

        if($('#panel').length)
            HAdPanel = $('#panel').height();

        $(window).scroll(function() {
            if( typeof( window.pageYOffset ) == 'number' ) {
                scrOfY = window.pageYOffset;
            }else{
                scrOfY = document.documentElement.scrollTop;
            }

            if(timeFlag) {
                HLSidebar = $('#catalog-element').height() + $('#catalog-element').offset().top;
                BLSidebar = HLSidebar - HLMenu - 50;
            }

            if(scrOfY <= YPLMenu && $('#left-sidebar .contact-phone').hasClass('fixed')) {
                $('#left-sidebar .contact-phone').removeClass('fixed');
            } else if((scrOfY > YPLMenu && scrOfY <= BLSidebar) && !$('#left-sidebar .contact-phone').hasClass('fixed')) {
                $('#left-sidebar .contact-phone').removeClass('absolute').removeAttr('style');
                $('#left-sidebar .contact-phone').addClass('fixed');
            } else if(scrOfY > BLSidebar && $('#left-sidebar .contact-phone').hasClass('fixed')) {
                $('#left-sidebar .contact-phone').removeClass('fixed');
                $('#left-sidebar .contact-phone').addClass('absolute').css('top', (BLSidebar + 17 - HAdPanel) + 'px');
            }
        });

        setTimeout(
            function() {
                timeFlag = false;
            },
            20000
        )
    }
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:87:"/local/templates/MAIN_NEW/components/bitrix/news.list/services/script.js?14550071771557";s:6:"source";s:72:"/local/templates/MAIN_NEW/components/bitrix/news.list/services/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function mycarousel2_initCallback(carousel) {
    $('#small-slider .nav li').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval($(this).attr('data-num')));
        $('#small-slider .nav li').removeClass('current');
        $(this).addClass('current');
        return false;
    });

    // Disable autoscrolling if the user clicks the prev or next button.
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto(0);
    });

    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto(0);
    });

    // Pause autoscrolling if the user moves with the cursor over the clip.
    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
};

function mycarousel_onAfterAnimation(carousel) {
    var cLi = $('#small-slider .nav li').length;
    var nLi = carousel.first - cLi * Math.floor(carousel.first / cLi);
    if(nLi == 0)
        nLi = cLi;
    $('#small-slider .nav li').removeClass('current');
    $('#small-slider .nav li[data-num=' + nLi + ']').addClass('current');
}

$(document).ready(function() {
    if($('#small-slider > ul li').length > 1) {
        $('#small-slider > ul').jcarousel({
            auto: 12,
            wrap: 'circular',
            scroll: 1,
            initCallback: mycarousel2_initCallback,
            itemVisibleInCallback : {onAfterAnimation: mycarousel_onAfterAnimation}
        });
    } else {
        $('#small-slider .nav').hide();
    }
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:85:"/bitrix/components/bitrix/map.yandex.view/templates/.default/script.js?14386872811540";s:6:"source";s:70:"/bitrix/components/bitrix/map.yandex.view/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
if (!window.BX_YMapAddPlacemark)
{
	window.BX_YMapAddPlacemark = function(map, arPlacemark)
	{
		if (null == map)
			return false;

		if(!arPlacemark.LAT || !arPlacemark.LON)
			return false;

		var props = {};
		if (null != arPlacemark.TEXT && arPlacemark.TEXT.length > 0)
		{
			var value_view = '';

			if (arPlacemark.TEXT.length > 0)
			{
				var rnpos = arPlacemark.TEXT.indexOf("\n");
				value_view = rnpos <= 0 ? arPlacemark.TEXT : arPlacemark.TEXT.substring(0, rnpos);
			}

			props.balloonContent = arPlacemark.TEXT.replace(/\n/g, '<br />');
			props.hintContent = value_view;
		}

		var obPlacemark = new ymaps.Placemark(
			[arPlacemark.LAT, arPlacemark.LON],
			props,
			{balloonCloseButton: true}
		);

		map.geoObjects.add(obPlacemark);

		return obPlacemark;
	}
}

if (!window.BX_YMapAddPolyline)
{
	window.BX_YMapAddPolyline = function(map, arPolyline)
	{
		if (null == map)
			return false;

		if (null != arPolyline.POINTS && arPolyline.POINTS.length > 1)
		{
			var arPoints = [];
			for (var i = 0, len = arPolyline.POINTS.length; i < len; i++)
			{
				arPoints.push([arPolyline.POINTS[i].LAT, arPolyline.POINTS[i].LON]);
			}
		}
		else
		{
			return false;
		}

		var obParams = {clickable: true};
		if (null != arPolyline.STYLE)
		{
			obParams.strokeColor = arPolyline.STYLE.strokeColor;
			obParams.strokeWidth = arPolyline.STYLE.strokeWidth;
		}
		var obPolyline = new ymaps.Polyline(
			arPoints, {balloonContent: arPolyline.TITLE}, obParams
		);

		map.geoObjects.add(obPolyline);

		return obPolyline;
	}
}
/* End */
;; /* /local/templates/MAIN_NEW/components/bitrix/catalog/MAIN/bitrix/catalog.element/.default/script.js?14550071771927*/
; /* /local/templates/MAIN_NEW/components/bitrix/news.list/services/script.js?14550071771557*/
; /* /bitrix/components/bitrix/map.yandex.view/templates/.default/script.js?14386872811540*/