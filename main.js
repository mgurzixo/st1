import "./style.scss";
import model from "./assets/model.hbs?raw";
import context from "./context";
import Handlebars from "handlebars";
import initAutoHide from "./lib/AutoHide";
import initImages from "./lib/InitImages";
import { initBulmaDropdowns } from "./lib/BulmaDropdowns";

let template = Handlebars.compile(model);

function displayPage(id) {
    let html = template(context[id]);
    console.log(`[displayPage] html[${id}]=${html}`);
    document.querySelector("#app").innerHTML = html;
    initImages();
    initAutoHide();
    initBulmaDropdowns();
}

displayPage("summary");
