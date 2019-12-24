import { initIntersectObservers } from "./intersect";

// pulled from https://stackoverflow.com/a/9899701
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(init);

function init() {
    const windowDims = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    initIntersectObservers(windowDims);
}
