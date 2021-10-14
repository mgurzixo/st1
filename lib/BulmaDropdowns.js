"use strict";
// cf. https://siongui.github.io/2018/01/19/bulma-dropdown-with-javascript/

let $bulmaDropdowns;

export function initBulmaDropdowns(id) {
    // Dropdowns

    $bulmaDropdowns = getAll(`#${id} .dropdown:not(.is-hoverable)`);
    console.log(`[initBulmaDropdowns] '${id}': ${$bulmaDropdowns.length} dropdowns`);

    if ($bulmaDropdowns.length > 0) {
        // let a = getAll(".myDiv");
        // a.forEach(function ($el) {
        //     console.log(`[initBulmaDropdowns]install handler trigger '${$el.id}'`);
        //     $el.addEventListener("click", function (event) {
        //         console.log(`[initBulmaDropdowns] trigger click '${$el.id}'`);
        //         return false;
        //     });
        // });

        $bulmaDropdowns.forEach(function ($el) {
            console.log(`[initBulmaDropdowns]install handler`);
            $el.addEventListener("click", function (event) {
                console.log(`[initBulmaDropdowns] click dropdowns`);
                event.stopPropagation();
                if (!$el.classList.contains("is-active")) closeBulmaDropdowns();
                $el.classList.toggle("is-active");
            });
            ["scroll", "wheel", "touchmove"].forEach((typeEvent) => {
                $el.addEventListener(
                    typeEvent,
                    function (event) {
                        console.log(`[initBulmaDropdowns]got scroll event`);
                        event.stopPropagation();
                        event.preventDefault();
                    },
                    { passive: false }
                );
            });
        });

        document.addEventListener("click", function (event) {
            console.log(`[initBulmaDropdowns]click event: closing`);
            closeBulmaDropdowns();
        });
    }

    // Close dropdowns if ESC pressed
    document.addEventListener("keydown", function (event) {
        var e = event || window.event;
        if (e.keyCode === 27) {
            closeBulmaDropdowns();
        }
    });
}

// Functions
export function closeBulmaDropdowns() {
    $bulmaDropdowns.forEach(function ($el) {
        $el.classList.remove("is-active");
    });
}

export function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}
