import { constants } from "./constants";

export function initIntersectObservers(opts) {
    const options = {
        root: document.querySelector(".js-intersect-root"),
        threshold: [.05, .5, .75, .95]
    }

    const observer = new IntersectionObserver(callback, options);

    function callback(entries) {
        entries.forEach((entry) => {
            const { intersectionRatio, isVisible, target } = entry;

            console.log(intersectionRatio);
        })
    }

    const targets = document.querySelectorAll(".js-intersect-item");
    targets.forEach((target) => {
        observer.observe(target);
        target.dataset.intersectState = "ready";
    });
}
