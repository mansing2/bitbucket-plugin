console.log("Start of javascript");

AJS.$("#dialog-show-button").click(function(e) {
    e.preventDefault();
    AJS.dialog2("#demo-dialog").show();
});

// Hides the dialog
AJS.$("#dialog-submit-button").click(function (e) {
    e.preventDefault();
    AJS.dialog2("#demo-dialog").hide();
});

console.log("End of javascript")