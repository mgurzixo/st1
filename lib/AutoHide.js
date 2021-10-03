"use strict";
import later from "./Later";
import { closeBulmaDropdowns } from "./BulmaDropdowns";

export default function initAutoHide() {
    const hysteresis = 10; // px
    const transitionDuration = "0.1s";
    const ELEMENT_NODE = 1;
    let navbars = document.querySelectorAll(".st-navbar");
    let lowWM = 0;

    console.log(`[autoHide] ${navbars.length} navbars`);
    navbars.forEach((navbar) => {
        let divScroll;
        for (
            divScroll = navbar.nextSibling;
            divScroll.nodeType != ELEMENT_NODE;
            divScroll = divScroll.nextSibling
        );
        let navbarHeight = parseFloat(navbar.offsetHeight);
        navbar.style.position = "fixed";
        navbar.style.top = "0px"; // Initially visible
        navbar.style.transform = ``;
        if (divScroll) {
            divScroll.style.transform = `translateY(${1 * navbarHeight}px)`;
        }

        later(0).then(() => {
            navbar.style.transition = `all, ease-in-out ${transitionDuration}`;
            divScroll.style.transition = `all ease-in-out ${transitionDuration}`;
        });
    });

    window.addEventListener("scroll", function () {
        navbars.forEach((navbar) => {
            let divScroll;
            for (
                divScroll = navbar.nextSibling;
                divScroll.nodeType != ELEMENT_NODE;
                divScroll = divScroll.nextSibling
            );
            if (divScroll) {
                let navbarHeight = parseFloat(navbar.offsetHeight);
                let scrollY = window.scrollY;
                let wasVisible = navbar.style.transform == "";
                if (scrollY < lowWM) {
                    // Show navbar
                    lowWM = scrollY;
                    if (!wasVisible) {
                        navbar.style.transform = ``;
                        divScroll.style.transform = `translateY(${navbarHeight}px)`;
                    }
                } else if (scrollY > lowWM + hysteresis) {
                    // Hide navbar
                    lowWM = scrollY;
                    if (wasVisible) {
                        navbar.style.transform = `translateY(${-navbarHeight}px)`;
                        divScroll.style.transform = `translateY(0px);`;
                        closeBulmaDropdowns();
                    }
                }
            }
        });
    });
}
