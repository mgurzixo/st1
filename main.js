import "./style.scss";
import model from "./assets/model.hbs?raw";
import context from "./context";
import Handlebars from "handlebars";
import initAutoHide from "./lib/AutoHide";
import makeRandomPage from "./lib/MakeRandomPage";
import { initBulmaDropdowns } from "./lib/BulmaDropdowns";

let template = Handlebars.compile(model);

function instanciatePage(id) {
    let html = template(context[id]);
    document.querySelector("#app").innerHTML = html;
    makeRandomPage();
    initAutoHide();
    initBulmaDropdowns();
    window.scroll({ top: 0, left: 0, behavior: "instant" });
}

function stLink(id) {
    instanciatePage(id);
}

window.stLink = stLink;

stLink("summary");
