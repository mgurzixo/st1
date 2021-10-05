"use strict";

import { getAll } from "./BulmaDropdowns";
import imgPineapple from "../assets/pineapple.jpg";

export default function initImages() {
    let pineapples = getAll(".pineapple");
    pineapples.forEach(function ($el) {
        console.log(`[pineapples]install image '${$el.classList}'`);
        $el.src = imgPineapple;
    });
}
