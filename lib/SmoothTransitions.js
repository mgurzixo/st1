"use strict";

// cf. https://stackoverflow.com/questions/22707475/how-to-make-a-promise-from-settimeout
function later(delay) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay);
    });
}

let defaultOptions = {
    transition: "none",
    durationMs: 300,
    waitMs: 100,
    history: "push",
};

// Delta between getBoundingRect and position
let gbrExtraX = 0;
let gbrExtraY = 0;

export function stSetDefaults(options) {
    return Object.assign(defaultOptions, options);
}

function makeShadow(app, id) {
    let shadow = document.createElement("div");
    shadow.scrollTop = app.scrollTop;
    shadow.style.position = "fixed";
    let gbr = app.getBoundingClientRect();

    shadow.style.top = gbr.top - gbrExtraY + "px";
    shadow.style.height = parseFloat(window.innerHeight) - parseFloat(shadow.style.top) + "px";
    shadow.style.left = gbr.left - gbrExtraX + "px";
    shadow.style.width = window.innerWidth + "px";
    shadow.style.overflow = "auto"; // scroll
    if (id) shadow.id = id; // for debug
    app.parentElement.appendChild(shadow);
    return shadow;
}

function toShadow(shadow, el) {
    let e0 = document.createElement("div");
    e0.style.position = "absolute";
    e0.style.width = shadow.clientWidth + "px";
    e0.style.height = shadow.clientHeight + "px";
    let clone = el.cloneNode(true);
    e0.appendChild(clone);
    shadow.appendChild(e0);
    function doIt(cl) {
        switch (cl.style.position) {
            case "static":
            case "relative":
            case "absolute":
                for (let e of el.children) {
                    doIt(e);
                }
                break;
            case "fixed":
            case "sticky":
                let gbr = cl.getBoundingClientRect();
                // console.log(
                //     `[toShadow(${shadow.id})]shadow.left=${shadow.style.left} gbr=${gbr.left} scrollY=${window.scrollY} `
                // );
                cl.style.position = "absolute";
                cl.style.top = parseFloat(gbr.top) - parseFloat(shadow.style.top) + "px";
                cl.style.left = parseFloat(gbr.left) - parseFloat(shadow.style.left) + "px";
                cl.style.width = gbr.width;
                toShadow(shadow, cl);
                cl.style.visibility = "hidden";
                break;
        }
    }
    doIt(clone);
}

function makeShadowFrame(app, cs) {
    // console.log(`[makeShadowFrame] cs=${cs}`);
    // for (var i = 0; i < cs.length; i++) {
    //     console.log(`[makeShadowFrame] cs(${cs[i]})=${cs.getPropertyValue(cs[i])}`);
    // }
    let frame = document.createElement("div");
    frame.style.position = "static";
    frame.style.top = "0px";
    frame.style.left = "0px";
    frame.style.width = window.innerWidth + "px";
    frame.style.height = window.innerHeight + "px";
    frame.id = "shadowFrame"; // for debug
    frame.style.opacity = 0;

    app.parentElement.appendChild(frame);
    return frame;
}

let ilinkPromise = null;

// Called by an external target taking a long time to be ready
// It provides a promise resolved when the target is ready
export function setIlinkPromise(promise) {
    ilinkPromise = promise;
}

export async function stGoto(action, theOptions) {
    let options = {};
    Object.assign(options, defaultOptions);
    // console.log(`[stGoto] typeof=${typeof theOptions}`);
    if (typeof theOptions == "string") options.transition = theOptions;
    else if (typeof theOptions == "object") Object.assign(options, theOptions);
    else throw `[stGoto] Invalid options: ${JSON.stringify(theOptions)}`;
    let transition = options.transition ? options.transition : "none";
    let durationMs = options.durationMs ? options.durationMs : 300;
    let waitMs = options.waitMs ? options.waitMs : 100;

    if (transition == "none") {
        action();
        return;
    }

    let shadowPre;
    let shadowPost;
    let oldAppStyles = {};
    if (document.body.childElementCount != 1) {
        console.error(
            `[stGoto] Error: body MUST have a single child, got ${document.body.childElementCount}!`
        );
        action();
        return;
    }

    let app = document.body.firstElementChild;
    // Beware: csApp is live!
    let csApp = getComputedStyle(app, null);

    let bcr = document.body.getBoundingClientRect();
    // console.log(
    //     `[stGoto] bcr.top=${bcr.top} window.scrollY=${window.scrollY} ${window.scrollY - bcr.top}`
    // );
    // Don't know why, but there is a 4 px difference
    gbrExtraX = window.scrollX + bcr.left;
    gbrExtraY = window.scrollY + bcr.top;

    // Backup existing app styles
    const styleNames = [
        "position",
        "top",
        "left",
        "width",
        "height",
        "overflowX",
        "overflowY",
        "transition",
        "display",
        "visibility",
        "x",
        "y",
    ];
    styleNames.forEach((s) => (oldAppStyles[s] = csApp[s]));
    console.log(`[stGoto] oldAppStyles=${JSON.stringify(oldAppStyles)}`);

    // Make a viewable shadow
    shadowPre = makeShadow(app, "shadowPre", oldAppStyles);
    // copy actual app content to shadow
    toShadow(shadowPre, app);
    // Put app out of view
    app.style.position = "fixed";
    app.style.left = "300vw";

    ilinkPromise = null; // Clear a possibly existing promise

    if (1) {
        let resAction = action(); // perform action

        // console.log(`[stGoto] resAction:${typeof resAction}`);
        // console.log(`[stGoto] resAction=${JSON.stringify(resAction)}`);
        // New page has been built in app
        // Wait for end of previous rendering
        // https://stackoverflow.com/questions/15875128/is-there-element-rendered-event
        await later(waitMs);
        // cf. https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise
        let resPromise = await Promise.resolve(ilinkPromise);
        ilinkPromise = null; // Clear promise slot
        // console.log(`[stGoto] resPromise=${resPromise}`);
        // console.log(`[stGoto] starting transition`);

        shadowPost = makeShadow(app, "shadowPost", oldAppStyles);
        toShadow(shadowPost, app); // install clone

        makeShadowFrame(shadowPre, oldAppStyles);

        switch (transition) {
            case "down":
                shadowPost.style.top = shadowPost.style.height;
                shadowPost.style.left = "0px";
                break;
            case "up":
                shadowPost.style.top = "-" + shadowPost.style.height;
                shadowPost.style.left = "0px";
                break;
            case "right":
                shadowPost.style.left = shadowPost.style.width;
                shadowPost.style.top = "0px";
                break;
            case "left":
            default:
                shadowPost.style.left = "-" + shadowPost.style.width;
                shadowPost.style.top = "0px";
                break;
        }

        // app.style.display = "block"; // Show app in the margins

        app.style.display = "none";

        await later(0);
        if (1) {
            // Prepare transition
            let transStyle = `left ${durationMs}ms, top ${durationMs}ms, ease ease-in-out`;
            shadowPre.style.transition = transStyle;
            shadowPost.style.transition = transStyle;

            // And do it!
            shadowPost.style.left = "0px";
            shadowPost.style.top = "0px";
            switch (transition) {
                case "down":
                    shadowPre.style.top = "-" + shadowPre.style.height;
                    break;
                case "up":
                    shadowPre.style.top = shadowPre.style.height;
                    break;
                case "right":
                    shadowPre.style.left = "-" + parseFloat(shadowPre.style.width) + "px";
                    break;
                case "left":
                default:
                    shadowPre.style.left = parseFloat(shadowPre.style.width) + "px";
                    break;
            }
            if (resAction) {
                switch (options.history) {
                    case "replace":
                        window.history.replaceState(resAction, resAction.toString);
                        break;
                    case "push":
                    default:
                        console.log(`[stGoto] pushing '${resAction}'`);
                        window.history.pushState({}, resAction.toString, resAction);
                }
            }
            // Cleanup and restore original stuff
            await later(durationMs);
            app.parentElement.removeChild(shadowPre);
            app.parentElement.removeChild(shadowPost);
            app.parentElement.removeChild(shadowFrame);
            Object.keys(oldAppStyles).forEach((key) => {
                app.style[key] = oldAppStyles[key];
            });
        }
    }
}
