"use strict";

(function($, undefined) {
    $(function() {
        var prefix = $('select.fontawesome-select').data('fontawesome-prefix');

        function format(state) {
            if(!state.id) {
                return state.text;
            }
            var icon = $(state.element).data('icon');
            return '<i class="' + prefix + ' ' + prefix + '-' + icon + ' ' + prefix + '-fw' + '"></i> ' + state.text;
        }

        $('select.fontawesome-select').select2({
            formatResult: format,
            formatSelection: format,
            escapeMarkup: false
        });
    });
})(jQuery || django.jQuery);
