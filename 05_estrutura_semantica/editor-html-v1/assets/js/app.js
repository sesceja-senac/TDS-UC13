$(function () {

    init("#app");
    try {
        var isFileSaverSupported = !!new Blob;
    } catch (e) {}

    if (isFileSaverSupported != true) $(".bto.bto-download").hide();
});

function init(id) {
    var code = document.location.search.replace("?c=", "");
    if (code != "" && code != undefined) {
        $(".editor-html").val(unescape(code));
        $(id + " .output").html(unescape(code));
    }else{
        $(id + " .output").html($(id + " .editor-html").val());
    }
    
    
}