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
    context[id].id = id;
    let html = template(context[id]);
    document.querySelector("#app").innerHTML = html;
    makeRandomPage(id);
    // let navbar = document.querySelector("#myNavbar");
    initAutoHide("#myNavbar");
    initBulmaDropdowns(id);
}

function stLink(id, options) {
    stGoto(() => {
        instanciatePage(id);
        return context[id].url;
    }, options);
    console.log(`[stLink] res='${context[id].url}'`);
}

window.stLink = stLink;
stSetDefaults({ durationMs: 500, waitMs: 50 });
let startId = "summary";
for (let id of Object.keys(context)) {
    if (context[id].url == window.location.pathname) {
        startId = id;
        break;
    }
}
instanciatePage(startId);
