import { constants } from "./constants";

export function initIntersectObservers(opts) {
    const options = {
        root: document.querySelector(".js-intersect-root"),
        threshold: [.05, .5, .75, .95]
    }

    const observer = new IntersectionObserver(callback, options);

    function callback(entries) {
        entries.forEach((entry) => {
            const { intersectionRatio, target } = entry;

            if (target.dataset.intersectState === "ready" && intersectionRatio >= .5) {
                prereveal.call(undefined, target);
            }

            if (target.dataset.intersectState === "steady" && intersectionRatio >= .75) {
                reveal.call(undefined, target);
            }
        });
    }

    function prereveal(target) {
        target.dataset.intersectState = "steady";

        if ("bg" in target.dataset) {
            target.setAttribute("style", `background-color: ${target.dataset.bg}`);
        }
    }

    function reveal(target) {
        target.dataset.intersectState = "go";
    }

    const targets = document.querySelectorAll(".js-intersect-item");

    targets.forEach((target) => {
        const milestoneEl = target;
        observer.observe(milestoneEl);
        milestoneEl.dataset.intersectState = "ready";

        if (milestoneEl.querySelector(".js-intersect-title")) {
            milestoneEl.querySelector(".js-intersect-title").setAttribute("style", "transform: translate(50%, 10px)");
        }
    });
}
