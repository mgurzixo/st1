"use strict";
import later from "./Later";
import { closeBulmaDropdowns } from "./BulmaDropdowns";

let count = 0;
export default function initAutoHide(navbars) {
    const hysteresis = 10; // px
    const transitionDuration = "0.2s";
    const ELEMENT_NODE = 1;
    let lowWM = 0;
    console.log(`[autoHide]navbars0=${navbars} ${navbars.length} navbars`);

    if (navbars === undefined) navbars = ".st-navbar";
    if (typeof navbars == "string") {
        console.log(`[autoHide]Doing QS`);
        navbars = document.querySelectorAll(navbars);
    }

    console.log(`[autoHide]navbars=${navbars} ${navbars.length} navbars`);
    navbars.forEach((navbar) => {
        let divScroll = null;
        console.log(`[autohide] count=${count}  nsi=${navbar.nextElementSibling}`);
        for (
            divScroll = navbar.nextElementSibling;
            divScroll && divScroll.nodeType != ELEMENT_NODE;
            divScroll = divScroll.nextSibling
        );
        let navbarHeight = parseFloat(navbar.offsetHeight);
        navbar.style.position = "fixed";
        navbar.style.top = "0px"; // Initially visible
        navbar.style.transform = ``;
        navbar.style.opacity = "1";
        if (divScroll) {
            divScroll.style.transform = `translateY(${1 * navbarHeight}px)`;
        }

        later(0).then(() => {
            navbar.style.transition = `all, ease-in-out ${transitionDuration}`;
            divScroll.style.transition = `all ease-in-out ${transitionDuration}`;
        });
    });

    window.addEventListener("scroll", function () {
        let myCount = count;
        navbars.forEach((navbar) => {
            let divScroll;
            console.log(`[autohide.scroll] count=${myCount}`);
            for (
                divScroll = navbar.nextElementSibling;
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
                        navbar.style.opacity = "1";
                        divScroll.style.transform = `translateY(${navbarHeight}px)`;
                    }
                } else if (scrollY > lowWM + hysteresis) {
                    // Hide navbar
                    lowWM = scrollY;
                    if (wasVisible) {
                        navbar.style.transform = `translateY(${-navbarHeight}px)`;
                        navbar.style.opacity = "0";
                        divScroll.style.transform = `translateY(0px);`;
                        closeBulmaDropdowns();
                    }
                }
            }
        });
    });
    count++;
}
