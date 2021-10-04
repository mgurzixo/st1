import "./style.scss";
import model from "./assets/model.hbs?raw";
import context from "./context";
import Handlebars from "handlebars";
import initAutoHide from "./lib/AutoHide";
import { initBulmaDropdowns } from "./lib/BulmaDropdowns";

let template = Handlebars.compile(model);
let html = template(context);
document.querySelector("#app").innerHTML = `${html}`;
initAutoHide();
initBulmaDropdowns();
