"use strict";
var $bulmaDropdowns;

export function initBulmaDropdowns() {
    // Dropdowns
    console.log(`[initBulmaDropdowns]start`);

    $bulmaDropdowns = getAll(".dropdown:not(.is-hoverable)");

    if ($bulmaDropdowns.length > 0) {
        $bulmaDropdowns.forEach(function ($el) {
            console.log(`[initBulmaDropdowns]install handler`);
            $el.addEventListener("click", function (event) {
                event.stopPropagation();
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
