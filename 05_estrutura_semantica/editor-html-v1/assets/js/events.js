$(function () {

    if (!document.documentElement.requestFullscreen && !document.exitFullscreen) {
        $(".bto-fullscreen").remove();
    }
    $("[data-action='fullscreen']").click(function () {
        if ((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
            $(".bto-fullscreen i").removeClass("fa-compress-arrows-alt ");
            $(".bto-fullscreen i").addClass("far");
            $(".bto-fullscreen i").removeClass("fas");
            $(".bto-fullscreen i").addClass("fa-window-maximize");
            document.exitFullscreen()
        } else {
            $(".bto-fullscreen i").removeClass("fa-window-maximize");
            $(".bto-fullscreen i").removeClass("far");
            $(".bto-fullscreen i").addClass("fas");
            $(".bto-fullscreen i").addClass("fa-compress-arrows-alt");
            document.documentElement.requestFullscreen()

        }

    });

    $(".editor-html").keyup(function () {
        var idTarget = "#" + $(this).parents(".app").attr("id");
        
        var code = $(idTarget + " .editor-html").val();
        $(idTarget + " .output").html(code);
    });

    $("[data-action='toggle-code']").click(function () {
        var idTarget = "#" + $(this).parents(".app").attr("id");
        
        if ($(idTarget + " .editor").hasClass("ativo")) {
            $(idTarget + " .editor").removeClass("ativo");
            $(idTarget + " .output").removeClass("ativo");
            $(idTarget + " .label").removeClass("ativo");
        } else {
            $(idTarget + " .editor").addClass("ativo");
            $(idTarget + " .output").addClass("ativo");
            $(idTarget + " .label").addClass("ativo");
        }
    });

    $("[data-action='download-code']").click(function () {
        var idTarget = "#" + $(this).parents(".app").attr("id");
        var blob = new Blob([$(idTarget + " .editor-html").val()], {
            type: "text/plain;charset=utf-8"
        });
        saveAs(blob, "codigo.html");
    });
});