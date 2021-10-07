import "./style.scss";
import model from "./assets/model.hbs?raw";
import context from "./context";
import Handlebars from "handlebars";
import initAutoHide from "./lib/AutoHide";
import makeRandomPage from "./lib/MakeRandomPage";
import { initBulmaDropdowns } from "./lib/BulmaDropdowns";
import { stSetDefaults, stGoto } from "./lib/SmoothTransitions";
import later from "./lib/Later";

let template = Handlebars.compile(model);

async function instanciatePage(id) {
    let html = template(context[id]);
    document.querySelector("#app").innerHTML = html;
    makeRandomPage();
    console.log(2);
    let navbar = document.querySelector("#myNavbar");
    initAutoHide([navbar]);
    console.log(3);
    initBulmaDropdowns();
    console.log(4);
}

function stLink(id, options) {
    stGoto(() => instanciatePage(id), options);
}

window.stLink = stLink;
stSetDefaults({ durationMs: 2000, waitMs: 200 });
document.addEventListener("DOMContentLoaded", function () {
    console.log(`[instanciatePage] DOMContentLoaded`);
});
document.addEventListener("readystatechange", function () {
    console.log(`[instanciatePage] readystatechange readyState=${document.readyState}`);
});
window.onload = function () {
    console.log(`[main.onload] onload:loaded`);
};

instanciatePage("summary");
