
; /* Start:"a:4:{s:4:"full";s:94:"/bitrix/templates/.default/components/bitrix/map.yandex.view/contacts/script.js?14550070301975";s:6:"source";s:79:"/bitrix/templates/.default/components/bitrix/map.yandex.view/contacts/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
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
			{
				balloonCloseButton: true,
				openBalloonOnClick: false,
			}
		);
		
		obPlacemark.events.add('click', function (e) {
			$('#shops-items .item').addClass('hide');
		    $('#' + arPlacemark.ID).removeClass('hide');
		    
		    map.setCenter([$('#' + arPlacemark.ID + ' input[name=LAT]').val(), $('#' + arPlacemark.ID + ' input[name=LON]').val()], 14);		   	    
		    
			$(document).scrollTop($('#shops-items').offset().top);
		    e.stopPropagation();
		});

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
;; /* /bitrix/templates/.default/components/bitrix/map.yandex.view/contacts/script.js?14550070301975*/