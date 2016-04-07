(function($) {
    // Occurs when document is fully loaded
    $(window).load(function() {
        // Remove the "On Read the Docs" node of the injected panel
        // which links to the project page (we don't want that)
        var onReadTheDocsNode = $(".injected").find("dt").filter(function() {
            return $(this).text() === "On Read the Docs";
        }).parent();
        if (onReadTheDocsNode && onReadTheDocsNode.length > 0) {
            onReadTheDocsNode.remove();
        }
    });
})(jQuery)