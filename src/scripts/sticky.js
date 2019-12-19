import { constants } from "./constants";

export function initStickyObservers(opts) {
    const options = {
        root: document.querySelector(".js-intersect-root"),
        threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .8, 1]
    }

    const observer = new IntersectionObserver(callback, options);

    function callback(entries, observer) {
        console.log("callback fired");

        entries.forEach((entry) => {
            console.log(entry);
        })
    }

    const targets = document.querySelectorAll(".js-intersect-item");
    targets.forEach((target) => {
        observer.observe(target);
    });
    // observer.observe(target);
}
