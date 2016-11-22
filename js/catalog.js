
; /* Start:"a:4:{s:4:"full";s:92:"/local/templates/MAIN_NEW/components/bitrix/catalog.section/.default/script.js?1455007177964";s:6:"source";s:78:"/local/templates/MAIN_NEW/components/bitrix/catalog.section/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
    if($('#elements-list .panel-view').length) {
        $('#elements-list .panel-view li').on('click', function(event) {
            if(!$(this).hasClass('selected')) {
                $oldLi = $(this).parent('ul').find('li.selected');
                $('#' + $oldLi.attr('id') + '-c').hide();
                $oldLi.removeClass('selected');
                $('#' + $(this).attr('id') + '-c').show();
                $(this).addClass('selected');

                if($(this).hasClass('list'))
                    view = 'LIST';
                else
                    view = 'ICON';

                $.post('/ajax/view-catalog.php', {'VIEW_CATALOG': view});
            }

            event.preventDefault();
        });
    }

    if($('#elements-list .sort-lnk').length) {
        $('#elements-list .sort-lnk').change(function() {
            window.location.href = $(this).val();
        });
    }
});
/* End */
;; /* /local/templates/MAIN_NEW/components/bitrix/catalog.section/.default/script.js?1455007177964*/