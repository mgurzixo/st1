"use strict";

import { getAll } from "./BulmaDropdowns";
import { Picsum } from "picsum-photos";
import { loremIpsum } from "lorem-ipsum";

function insertImages(imgClass) {
    let images = getAll(`.${imgClass}`);
    images.forEach(function (el) {
        console.log(`[insertImages]install image '${el.classList}'`);
        el.src = Picsum.url();
    });
}

function insertLorem(loremClass) {
    let lorem = getAll(`.${loremClass}`);
    lorem.forEach(function (el) {
        console.log(`[insertLorem]install image '${el.classList}'`);
        el.innerHTML = loremIpsum({
            units: "paragraph",
            count: 2 + parseInt(Math.random() * 5),
            paragraphLowerBound: 1,
            paragraphUpperBound: 6,
            sentenceLowerBound: 3,
            sentenceUpperBound: 15,
            format: "html",
        });
    });
}

function insertBlocs(blocClass) {
    let blocs = getAll(`.${blocClass}`);
    let isRight = Math.random() > 0.5 ? 1 : 0;
    blocs.forEach(function (el) {
        console.log(`[insertBlocs]install bloc '${el.classList}'`);

        let html = "";
        for (let i = 2 + parseInt(Math.random() * 5); i; i--) {
            // for (let i = 2; i; i--) {
            let src = `
        <div class="mb-6">
        <div class="random-image" style="float:${isRight ? "right" : "left"};">
            <img
            class="random-image ${isRight ? "ml-4" : "mr-4"}
                alt="Random image"
                style="width: 170px; height: 170px;"
            />
        </div>
        <span class="lorem-ipsum"/>
        </div>

        `;
            html += src;
            isRight = 1 - isRight;
        }
        el.innerHTML = html;
    });
}

export default function makeRandomPage() {
    insertBlocs("random-bloc");
    insertLorem("lorem-ipsum");
    insertImages("random-image");
}
