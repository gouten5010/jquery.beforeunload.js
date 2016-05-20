/*************************************************
 *
 * [ jquery.beforeunload.js ]
 * Required: jQuery(https://jquery.com/)
 * License: MIT
 * Update: 2016/05/30
 * Version: 0.0.1
 * Author: Takenori Okashita
 * URL: http://cookbiz.co.jp/
 *
 **************************************************
 *
 * [ How to use ]
 * $(window).beforeunload({
 *   //default options
 *   text: 'フォームはまだ送信されていません',
 *   clickElement: 'a',
 *   formElement: 'form'
 * });
 *
 *************************************************/
(function ($) {
    $.fn.beforeunload = function (config) {
        var options = {
            text: 'フォームはまだ送信されていません',
            clickElement: 'a',
            formElement: 'form'
        };
        var setting = $.extend(options, config);
        return this.each(function () {
            var loc = false;
            if (!loc) {
                $(this).on('beforeunload', function () {
                    return (setting.text);
                });
            }
            $(setting.clickElement).on('click', function () {
                loc = true;
            });
            $(setting.formElement).on('submit', function () {
                loc = true;
            });
        });
    };
})(jQuery);
