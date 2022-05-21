// Initialize Default Properties of Toast Builder
var toast_builder_init_props = Object();

function ToastBuilderInit(properties) {
    toast_builder_init_props = properties;
    console.log("toast builder props: ", toast_builder_init_props);
}

// Setting up the toast
$(document).ready(function () {
    //handle history and page refresh issues
    // window.onunload = function () { };
    var toastElement = `
    <div class="position-fixed ` + toast_builder_init_props["defaultPosition"]["vpos"] + ` ` + toast_builder_init_props["defaultPosition"]["hpos"] + ` bottom-0 end-0 p-3" style="z-index: ` + toast_builder_init_props["defaultPosition"]["zindex"] + `">
        <div id="liveToast" class="toast hide ` + toast_builder_init_props["defaultToastBg"] + ` ` + toast_builder_init_props["defaultTextColor"] + `" role="alert" aria-live="assertive"
            aria-atomic="true">
            <div id="liveToastHeaderDiv" class="toast-header ` + toast_builder_init_props["defaultToastBg"] +  ` ` + toast_builder_init_props["defaultTextColor"] + `">
                <img id="liveToastIcon" src="` + toast_builder_init_props["defaultToastIcon"] + `" class="rounded me-2" alt="..." width="25px"> <strong
                    class="me-auto" id="liveToastHeading">` + toast_builder_init_props["defaultToastHeading"] + `</strong> <small id="liveToastTime">Just
                    Now</small>
                <button type="button" class="btn-close ` + ` ` + toast_builder_init_props["defaultCloseBtnColor"] + `" data-bs-dismiss="toast"
                    aria-label="Close"></button>
            </div>
            <div class="toast-body" id="liveToastBody">` + toast_builder_init_props["defaultToastBody"] + `</div>
        </div>
    </div>`
    
    if (toast_builder_init_props["disableToasts"] === false) {
        document.body.innerHTML += toastElement;
        console.log("toasts added!");
    }

    //set toast delay
    setToastDelay(5000);
    // $('.toast').toast('show'); // TODO REMOVE
});

//GENERIC METHOD TO BUILDING DIFFERENT STYLES OF TOASTS
//STYLES ARE PASSED AS PARAMS
function buildToast(bg, heading, body, time, icon, txt_color) {
    var date = new Date();
    time = date.getHours() + ":" + ("00" + date.getMinutes()).slice(-2);

    if (bg === "") {
        bg = toast_builder_init_props["defaultToastBg"];
    }
    if (txt_color === "") {
        txt_color = toast_builder_init_props["defaultTextColor"];
    }
    icon = toast_builder_init_props["defaultToastIcon"];

    $("#liveToast").removeClass();
    $("#liveToast").addClass("toast hide " + txt_color + " " + bg);
    $("#liveToastHeaderDiv").removeClass();
    $("#liveToastHeaderDiv").addClass("toast-header " + txt_color + " " + bg);
    $("#liveToastIcon").attr("src", icon);
    $("#liveToastTime").text(time);
    $("#liveToastHeading").text(heading);
    $("#liveToastBody").text(body);
}

function setToastDelay(delay) {
    //set toast delay
    $('.toast').toast({
        delay: delay
    });
}
