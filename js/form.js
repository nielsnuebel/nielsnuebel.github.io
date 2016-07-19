(function($){
    var submitted = false;
    var userinput = false;

    $(document).ready(function() {
        $("form").submit(function() {
            submitted = true;
        });

        $(".userinputs").change(function() {
            userinput = true;
        });

        window.onbeforeunload = function () {
            if (userinput && !submitted) {
                return 'Sie haben das Formular noch nicht abgesendet.\
          Möchten Sie die Seite wirklich verlassen?';
            }
        }
    });
})(this.jQuery);