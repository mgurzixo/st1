import "./style.scss";
import main from "./assets/index.html?raw";
import model from "./assets/model.hbs?raw";
import context from "./context";
import Handlebars from "handlebars";
import initAutoHide from "./lib/AutoHide";
import { initBulmaDropdowns } from "./lib/BulmaDropdowns";

// function toggleDropdown(el, event) {
//     console.log(`[toggleDropdown] got event ${event}`);
//     console.log(`[toggleDropdown] got event from ${el.id}`);
//     event = event || window.event;
//     event.stopPropagation();
//     el.classList.toggle("is-active");
// }
// // Expose handler
// window.toggleDropdown = toggleDropdown;

let template = Handlebars.compile(model);
let html = template(context);
document.querySelector("#app").innerHTML = `${html}`;
initAutoHide();
initBulmaDropdowns();
